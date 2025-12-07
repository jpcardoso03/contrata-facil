'use server';

import prisma from '@/app/data/prisma';
import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function toggleUserBanStatus(userId: string, shouldBan: boolean) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
        return { success: false, error: "Não autorizado" };
    }

    await prisma.usuario.update({
      where: { id: userId },
      data: { 
        active: !shouldBan
      }
    });

    revalidatePath('/banir-usuario');
    revalidatePath(`/banir-usuario/${userId}`);
    
    return { success: true };
  } catch (error) {
    console.error("Erro ao atualizar status do usuário:", error);
    return { success: false, error: "Erro ao atualizar banco de dados" };
  }
}