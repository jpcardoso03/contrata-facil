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
      isPrimary: s.principal,
      category: s.principal ? 'primary' : 'other'
    }));
  } catch (error) {
    console.error("Erro ao buscar habilidades:", error);
    return [];
  }
}

export async function addGlobalSkillAction(name: string) {
  if (!await checkAdminPermission()) return { success: false, error: "Sem permissão." };
  
  if (!name.trim()) return { success: false, error: "Nome inválido." };

  try {
    await prisma.habilidade.create({
      data: {
        nome: name.trim(),
        descricao: 'Habilidade cadastrada pelo administrador', 
        principal: false,
        imagem_url: null
      }
    });
    revalidatePath('/gerenciar-habilidades');
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Erro ao criar. Verifique se já existe." };
  }
}

export async function toggleGlobalSkillPrimaryAction(id: number, currentStatus: boolean) {
  if (!await checkAdminPermission()) return { success: false, error: "Sem permissão." };

  try {
    await prisma.habilidade.update({
      where: { id },
      data: { principal: !currentStatus }
    });
    revalidatePath('/gerenciar-habilidades');
    return { success: true };
  } catch (error) {
    return { success: false, error: "Erro ao atualizar." };
  }
}

export async function removeGlobalSkillAction(id: number) {
  if (!await checkAdminPermission()) return { success: false, error: "Sem permissão." };

  try {
    
    await prisma.prestadorHabilidade.deleteMany({
      where: { id_habilidade: id }
    });

    await prisma.habilidade.delete({
      where: { id }
    });

    revalidatePath('/gerenciar-habilidades');
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Erro ao remover habilidade." };
  }
}