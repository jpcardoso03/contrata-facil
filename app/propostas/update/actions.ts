'use server';

import { z } from 'zod';
import prisma from '@/app/data/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route'; 
import { revalidatePath } from 'next/cache';

const EditProposalSchema = z.object({
  id: z.number(),
  titulo: z.string().min(1),
  descricao: z.string().optional(),
  valor: z.number().positive(),
  horas_estimadas: z.number().positive(),
  dataInicio: z.string().datetime(),
  dataTermino: z.string().datetime(),
  servicesList: z.string()
});

export async function editProposalContentAction(formData: FormData) {
  const session = await getServerSession(authOptions);
  
  if (!session?.user?.id) {
    return { success: false, error: 'Usuário não autenticado.' };
  }

  const validatedFields = EditProposalSchema.safeParse({
    id: Number(formData.get('proposalId')),
    titulo: formData.get('serviceType'),
    descricao: formData.get('description'),
    valor: Number(formData.get('totalValue')),
    horas_estimadas: Number(formData.get('estimatedHours')),
    dataInicio: formData.get('dataInicio'),
    dataTermino: formData.get('dataTermino'),
    servicesList: formData.get('servicesList')
  });

  if (!validatedFields.success) {
    return { success: false, error: 'Dados inválidos.', errors: validatedFields.error.flatten() };
  }

  const data = validatedFields.data;
  const existingProposal = await prisma.proposta.findUnique({
    where: { id: data.id },
  });

  if (!existingProposal) return { success: false, error: 'Proposta não encontrada.' };
  
  if (existingProposal.id_contratante !== session.user.id) {
    return { success: false, error: 'Apenas o contratante pode editar esta proposta.' };
  }

  let parsedServices: string[] = [];
  try {
    parsedServices = JSON.parse(data.servicesList);
  } catch (e) {
    return { success: false, error: 'Erro nos serviços.' };
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.proposta.update({
        where: { id: data.id },
        data: {
          titulo: data.titulo,
          descricao: data.descricao || '',
          valor: data.valor,
          data_inicio: new Date(data.dataInicio),
          data_termino: new Date(data.dataTermino),
        }
      });

      await tx.servico.deleteMany({
        where: { id_proposta: data.id }
      });

      if (parsedServices.length > 0) {
        await tx.servico.createMany({
          data: parsedServices.map((nome, index) => ({
            id_proposta: data.id,
            id_servico: index + 1,
            nome_servico: nome,
            descricao: data.descricao || ''
          }))
        });
      }
    });

    revalidatePath('/propostas');
    return { success: true };

  } catch (error) {
    console.error(error);
    return { success: false, error: 'Erro ao salvar alterações.' };
  }
}