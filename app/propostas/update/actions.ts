'use server';

import { z } from 'zod';
import prisma from '@/app/data/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route'; 
import { revalidatePath } from 'next/cache';
import { EnumStatusProposta, EnumTipoNotificacao } from '@/app/generated/prisma';


const NegotiationSchema = z.object({
  propostaId: z.number(),
  actionType: z.enum(['accept', 'reject', 'counter-offer']),
  valor: z.number().positive().optional(),
  descricao: z.string().optional(),
  data_inicio: z.date().optional(),
  data_termino: z.date().optional(),
});

export async function updateProposalAction(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return { success: false, error: 'Não autenticado.' };
  }

  const validatedFields = NegotiationSchema.safeParse({
    propostaId: Number(formData.get('propostaId')),
    actionType: formData.get('actionType'),
    valor: formData.get('valor') ? Number(formData.get('valor')) : undefined,
    descricao: formData.get('descricao') as string | undefined,
  });

  if (!validatedFields.success) {
    return {
      success: false,
      error: 'Dados de negociação inválidos.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { propostaId, actionType, ...newData } = validatedFields.data;

  try {
    const proposta = await prisma.proposta.findUnique({
      where: { id: propostaId },
      include: {
         contratante: { select: { name: true } },
         prestador: { select: { name: true } },
      }
    });

    if (!proposta) {
      return { success: false, error: 'Proposta não encontrada.' };
    }

    const userId = session.user.id;
    const userRole = userId === proposta.id_contratante ? 'contratante' : 'prestador';

    let newStatus: EnumStatusProposta | null = null;
    let notificationUserId: string | null = null;
    let notificationTitle: string = '';
    let notificationMessage: string = '';

    // mudar estado
    switch (actionType) {
      case 'accept':
        if (userRole === 'prestador' && (proposta.Status === 'PENDENTE' || proposta.Status === 'AGUARDANDO_PRESTADOR')) {
          newStatus = EnumStatusProposta.AGUARDANDO_CONTRATANTE;
          notificationUserId = proposta.id_contratante;
          notificationTitle = 'Termos Aceitos';
          notificationMessage = `${proposta.prestador.name || 'O prestador'} aceitou os termos da proposta "${proposta.titulo}".`;

        } else if (userRole === 'contratante' && (proposta.Status === 'AGUARDANDO_CONTRATANTE' || proposta.Status === 'EM_ANDAMENTO')) {
          newStatus = EnumStatusProposta.EM_ANDAMENTO;
          notificationUserId = proposta.id_prestador;
          notificationTitle = 'Proposta Aprovada!';
          notificationMessage = `Sua proposta "${proposta.titulo}" foi aprovada e está em andamento.`;
        
        } else {
          return { success: false, error: 'Você não pode aceitar esta proposta neste estado.' };
        }
        break;

      case 'reject':
         if (
          (userRole === 'prestador' && (proposta.Status === 'PENDENTE' || proposta.Status === 'AGUARDANDO_PRESTADOR')) ||
          (userRole === 'contratante' && (proposta.Status === 'AGUARDANDO_CONTRATANTE' || proposta.Status === EnumStatusProposta.EM_ANDAMENTO)) // Permitir recusar/cancelar
        ) {
          newStatus = EnumStatusProposta.RECUSADA;
          notificationUserId = userRole === 'prestador' ? proposta.id_contratante : proposta.id_prestador;
          notificationTitle = 'Proposta Recusada';
          notificationMessage = `Sua proposta "${proposta.titulo}" foi recusada/cancelada.`;
        } else {
          return { success: false, error: 'Você não pode recusar esta proposta neste estado.' };
        }
        break;

      case 'counter-offer':
         if (
          (userRole === 'prestador' && (proposta.Status === 'PENDENTE' || proposta.Status === 'AGUARDANDO_PRESTADOR')) ||
          (userRole === 'contratante' && (proposta.Status === 'AGUARDANDO_CONTRATANTE' || proposta.Status === EnumStatusProposta.EM_ANDAMENTO)) // <-- ADICIONADO
        ) {

          newStatus = userRole === 'prestador' ? EnumStatusProposta.AGUARDANDO_CONTRATANTE : EnumStatusProposta.AGUARDANDO_PRESTADOR;
          notificationUserId = userRole === 'prestador' ? proposta.id_contratante : proposta.id_prestador;
          notificationTitle = 'Nova Contraproposta!';
          notificationMessage = `Você recebeu uma contraproposta para "${proposta.titulo}".`;
        } else {
          return { success: false, error: 'Você não pode fazer uma contraproposta neste estado.' };
        }
        
        await prisma.proposta.update({
          where: { id: propostaId },
          data: {
            Status: newStatus,
            valor: newData.valor ?? proposta.valor,
            descricao: newData.descricao ?? proposta.descricao,
          },
        });
        break;
        
      default:
        return { success: false, error: 'Ação desconhecida.' };
    }
    
    if (actionType === 'accept' || actionType === 'reject') {
       await prisma.proposta.update({
          where: { id: propostaId },
          data: { Status: newStatus! },
        });
    }

    if (notificationUserId) {
      await prisma.notificacao.create({
        data: {
          userId: notificationUserId,
          titulo: notificationTitle,
          mensagem: notificationMessage,
          tipo: actionType === 'accept' ? EnumTipoNotificacao.SUCESS : (actionType === 'reject' ? EnumTipoNotificacao.WARNING : EnumTipoNotificacao.INFO),
          link: `/propostas/revisar/${propostaId}`,
        },
      });
    }

    revalidatePath('/propostas');
    revalidatePath(`/propostas/revisar/${propostaId}`);
    return { success: true };

  } catch (error) {
    console.error(error);
    return { success: false, error: 'Falha ao atualizar proposta.' };
  }
}