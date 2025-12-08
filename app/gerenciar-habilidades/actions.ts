'use server';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/app/data/prisma';
import { revalidatePath } from 'next/cache';
import { EnumTipoUsuario } from '@/app/generated/prisma';

async function checkAdminPermission() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.tipo_usuario !== EnumTipoUsuario.ADMINISTRADOR) {
    return false;
  }
  return true;
}

export async function getGlobalSkillsAction() {
  try {
    const skills = await prisma.habilidade.findMany({
      orderBy: { nome: 'asc' }
    });
    
    return skills.map(s => ({
      id: s.id,
      name: s.nome,
      imagemUrl: s.imagem_url
    }));
  } catch (error) {
    console.error("Erro ao buscar habilidades:", error);
    return [];
  }
}

export async function addGlobalSkillAction(name: string, imagemUrl: string) {
  if (!await checkAdminPermission()) return { success: false, error: "Sem permissão." };
  
  if (!name.trim()) return { success: false, error: "Nome inválido." };

  try {
    await prisma.habilidade.create({
      data: {
        nome: name.trim(),
        descricao: 'Habilidade cadastrada pelo administrador', 
        principal: true,
        imagem_url: imagemUrl.trim() || null
      }
    });
    revalidatePath('/gerenciar-habilidades');
    return { success: true };
  } catch (error: any) {
    if (error.code === 'P2002') {
      return { success: false, error: "Já existe uma habilidade com este nome." };
    }
    console.error(error);
    return { success: false, error: "Erro ao criar habilidade." };
  }
}

export async function updateGlobalSkillAction(id: number, name: string, imagemUrl: string) {
  if (!await checkAdminPermission()) return { success: false, error: "Sem permissão." };
  
  if (!name.trim()) return { success: false, error: "Nome inválido." };

  try {
    await prisma.habilidade.update({
      where: { id },
      data: {
        nome: name.trim(),
        imagem_url: imagemUrl.trim() || null
      }
    });
    revalidatePath('/gerenciar-habilidades');
    return { success: true };
  } catch (error: any) {
    if (error.code === 'P2002') {
      return { success: false, error: "Já existe uma habilidade com este nome." };
    }
    console.error(error);
    return { success: false, error: "Erro ao atualizar habilidade." };
  }
}

export async function removeGlobalSkillAction(id: number) {
  if (!await checkAdminPermission()) return { success: false, error: "Sem permissão." };

  try {
    const usageCount = await prisma.prestadorHabilidade.count({
      where: { id_habilidade: id }
    });

    if (usageCount > 0) {
      return { 
        success: false, 
        error: `Não é possível excluir. Esta habilidade está vinculada a ${usageCount} prestador(es).` 
      };
    }

    await prisma.habilidade.delete({
      where: { id }
    });

    revalidatePath('/gerenciar-habilidades');
    return { success: true };
  } catch (error) {
    console.error("Erro ao remover habilidade:", error);
    return { success: false, error: "Erro interno ao tentar remover a habilidade." };
  }
}