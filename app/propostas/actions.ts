'use server'

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/app/data/prisma"; 
import { EnumStatusProposta, EnumTipoNotificacao } from "@/app/generated/prisma";
import { revalidatePath } from "next/cache";

export async function updateProposalStatusAction(id: number, newStatus: EnumStatusProposta, resposta?: string) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return { success: false, error: "Usuário não autenticado" };
    }

    const proposta = await prisma.proposta.findUnique({
      where: { id },
    });

    if (!proposta) {
      return { success: false, error: "Proposta não encontrada" };
    }

    const isContratante = proposta.id_contratante === session.user.id;
    const isPrestador = proposta.id_prestador === session.user.id;

    if (!isContratante && !isPrestador) {
        return { success: false, error: "Sem permissão." };
    }

    await prisma.proposta.update({
      where: { id },
      data: { 
        Status: newStatus,
        resposta: resposta || undefined 
      } 
    });

    let titulo = '';
    let mensagem = '';
    let targetUserId = '';

    if (isContratante) {
        targetUserId = proposta.id_prestador;
        if (newStatus === 'EM_ANDAMENTO') {
            titulo = 'Projeto Iniciado!';
            mensagem = `O contratante iniciou a execução do projeto "${proposta.titulo}".`;
        } else if (newStatus === 'CONCLUIDA') {
            titulo = 'Projeto Concluído!';
            mensagem = `O contratante marcou o projeto "${proposta.titulo}" como concluído.`;
        }
    } 
    else if (isPrestador) {
        targetUserId = proposta.id_contratante;
        if (newStatus === 'ACEITA') { //
            titulo = 'Proposta Aceita!';
            mensagem = `O prestador aceitou sua proposta para "${proposta.titulo}".`;
        } else if (newStatus === 'RECUSADA') {
            titulo = 'Proposta Recusada';
            mensagem = `O prestador recusou sua proposta para "${proposta.titulo}".`;
        }
    }

    if (titulo && targetUserId) {
      await prisma.notificacao.create({
        data: {
          userId: targetUserId,
          titulo: titulo,
          mensagem: mensagem,
          tipo: newStatus === 'CONCLUIDA' || newStatus === 'ACEITA' ? EnumTipoNotificacao.SUCESS : EnumTipoNotificacao.INFO,
          link: `/propostas`
        }
      });
    }

    revalidatePath('/propostas');
    return { success: true };

  } catch (error) {
    console.error("Erro ao atualizar status:", error);
    return { success: false, error: "Erro interno ao atualizar status" };
  }
}