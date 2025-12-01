'use server'

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/app/data/prisma"; 
import { EnumStatusProposta, EnumTipoNotificacao } from "@/app/generated/prisma";
import { revalidatePath } from "next/cache";

export async function updateProposalStatusAction(id: number, newStatus: EnumStatusProposta) {
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

    if (proposta.id_contratante !== session.user.id) {
      return { success: false, error: "Apenas o contratante pode atualizar o status desta proposta." };
    }

    await prisma.proposta.update({
      where: { id },
      data: { Status: newStatus } 
    });

    let titulo = '';
    let mensagem = '';

    if (newStatus === 'EM_ANDAMENTO') {
      titulo = 'Projeto Iniciado!';
      mensagem = `O contratante iniciou a execução do projeto "${proposta.titulo}".`;
    } else if (newStatus === 'CONCLUIDA') {
      titulo = 'Projeto Concluído!';
      mensagem = `O contratante marcou o projeto "${proposta.titulo}" como concluído.`;
    }

    if (titulo) {
      await prisma.notificacao.create({
        data: {
          userId: proposta.id_prestador,
          titulo: titulo,
          mensagem: mensagem,
          tipo: newStatus === 'CONCLUIDA' ? EnumTipoNotificacao.SUCESS : EnumTipoNotificacao.INFO,
          link: `/propostas`
        }
      });
    }

    revalidatePath('/propostas');
    
    console.log(`Sucesso: Proposta ${id} atualizada para ${newStatus}`);
    return { success: true };

  } catch (error) {
    console.error("Erro ao atualizar status:", error);
    return { success: false, error: "Erro interno ao atualizar status" };
  }
}