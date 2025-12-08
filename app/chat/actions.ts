'use server';

import { z } from 'zod';
import prisma from '@/app/data/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { revalidatePath } from 'next/cache';

const MessageSchema = z.object({
  recipientId: z.string(),
  content: z.string().min(1),
});

export async function sendMessageAction(formData: FormData) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    return { success: false, error: 'Não autenticado' };
  }

  const validated = MessageSchema.safeParse({
    recipientId: formData.get('recipientId'),
    content: formData.get('content'),
  });

  if (!validated.success) {
    return { success: false, error: 'Dados inválidos' };
  }

  const { recipientId, content } = validated.data;

  try {
    const sender = await prisma.usuario.findUnique({
      where: { id: session.user.id },
      select: { active: true }
    });

    if (!sender || !sender.active) {
      return { success: false, error: 'Sua conta está suspensa. Você não pode enviar mensagens.' };
    }

    const recipient = await prisma.usuario.findUnique({
      where: { id: recipientId },
      select: { active: true }
    });

    if (!recipient || !recipient.active) {
      return { success: false, error: 'Este usuário está suspenso e não pode receber mensagens.' };
    }

    await prisma.mensagem.create({
      data: {
        id_remetente: session.user.id,
        id_destinatario: recipientId,
        conteudo: content,
        lida: false,
        data: new Date(),
      },
    });

    revalidatePath(`/chat/${recipientId}`);
    return { success: true };

  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
    return { success: false, error: 'Erro ao salvar mensagem' };
  }
}