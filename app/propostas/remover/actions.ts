'use server';

import { z } from 'zod';
import prisma from '@/app/data/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route'; 
import { revalidatePath } from 'next/cache';
import { EnumStatusProposta } from '@/app/generated/prisma';


export async function deleteProposalAction(propostaId: number) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return { success: false, error: 'Não autenticado.' };
  }

  try {
    const proposta = await prisma.proposta.findUnique({
      where: { id: propostaId },
    });

    if (!proposta) {
      return { success: false, error: 'Proposta não encontrada.' };
    }

    if (proposta.id_contratante !== session.user.id) {
      return { success: false, error: 'Apenas o contratante pode excluir.' };
    }

    if (
      proposta.Status !== EnumStatusProposta.PENDENTE &&
      proposta.Status !== EnumStatusProposta.CONCLUIDA
    ) {
      return {
        success: false,
        error: 'Propostas só podem ser excluídas no estado PENDENTE ou CONCLUÍDA.',
      };
    }

    await prisma.servico.deleteMany({ where: { id_proposta: propostaId } });
    await prisma.avaliacao.deleteMany({ where: { id_proposta: propostaId } });

    await prisma.proposta.delete({
      where: { id: propostaId },
    });

    revalidatePath('/propostas');
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Falha ao excluir proposta.' };
  }
}