// app/avaliar/actions.ts
'use server';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/app/data/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function getProposalForRatingAction(proposalId: number) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    return { success: false, error: 'Usuário não autenticado.' };
  }

  try {
    const proposta = await prisma.proposta.findUnique({
      where: { id: proposalId },
      include: {
        prestador: {
          select: {
            name: true,
            profissao: true,
            image: true 
          }
        },
        servicos: true 
      }
    });

    if (!proposta) {
      return { success: false, error: 'Proposta não encontrada.' };
    }

    if (proposta.id_contratante !== session.user.id) {
      return { success: false, error: 'Apenas o contratante pode realizar a avaliação.' };
    }

    if (proposta.Status !== 'CONCLUIDA') {
      return { success: false, error: 'Esta proposta ainda não foi concluída.' };
    }

    const avaliacaoExistente = await prisma.avaliacao.findUnique({
      where: { id_proposta: proposalId }
    });

    if (avaliacaoExistente) {
      return { success: false, error: 'Esta proposta já foi avaliada.', alreadyRated: true };
    }

    return { 
      success: true, 
      data: {
        id: proposta.id,
        professionalName: proposta.prestador.name || 'Prestador',
        professionalProfession: proposta.prestador.profissao || 'Profissional',
        serviceType: proposta.titulo,
        scheduledDate: proposta.data_inicio.toISOString(),
        scheduledTime: proposta.data_inicio.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        totalValue: Number(proposta.valor),
        description: proposta.descricao
      }
    };

  } catch (error) {
    console.error('Erro ao buscar proposta:', error);
    return { success: false, error: 'Erro interno ao buscar dados.' };
  }
}

export async function submitRatingAction(proposalId: number, rating: number, comment: string) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return { success: false, error: 'Não autorizado' };
  }

  if (rating < 1 || rating > 5) {
    return { success: false, error: 'Nota inválida.' };
  }

  try {
    await prisma.avaliacao.create({
      data: {
        id_proposta: proposalId,
        nota: rating,
        comentario: comment,
        data_avaliacao: new Date()
      }
    });

    revalidatePath('/propostas');
    
    return { success: true };
  } catch (error) {
    console.error('Erro ao salvar avaliação:', error);
    return { success: false, error: 'Erro ao salvar avaliação. Tente novamente.' };
  }
}