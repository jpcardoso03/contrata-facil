'use server';

import { z } from 'zod';
import prisma from '@/app/data/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route'; 
import { revalidatePath } from 'next/cache';
import { EnumStatusProposta, EnumTipoNotificacao } from '@/app/generated/prisma';

const ProposalSchema = z.object({
  id_prestador: z.string(),
  titulo_principal: z.string().optional(), 
  descricao: z.string().optional(),
  valor: z.number().positive('O valor deve ser positivo'),
  horas_estimadas: z.number().positive(),
  dataInicio: z.string().datetime(), 
  dataTermino: z.string().datetime(),
  servicesList: z.string() 
});

export async function createProposalAction(formData: FormData) {
  const session = await getServerSession(authOptions); 
  
  if (!session?.user?.id) {
    return { success: false, error: 'Usuário não autenticado.' };
  }
  
  const id_contratante = session.user.id;
  const professionalName = formData.get('professionalName') as string;

  const validatedFields = ProposalSchema.safeParse({
    id_prestador: formData.get('professionalId'),
    titulo_principal: formData.get('serviceType'),
    descricao: formData.get('description'),
    valor: Number(formData.get('totalValue')),
    horas_estimadas: Number(formData.get('estimatedHours')),
    dataInicio: formData.get('dataInicio'),
    dataTermino: formData.get('dataTermino'),
    servicesList: formData.get('servicesList')
  });

  if (!validatedFields.success) {
    console.error(validatedFields.error.flatten().fieldErrors);
    return {
      success: false,
      error: 'Dados inválidos.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { 
    id_prestador, 
    titulo_principal, 
    descricao, 
    valor, 
    dataInicio, 
    dataTermino, 
    servicesList 
  } = validatedFields.data;

  let parsedServices: string[] = [];
  try {
    parsedServices = JSON.parse(servicesList);
    if (!Array.isArray(parsedServices) || parsedServices.length === 0) {
      throw new Error('Lista de serviços vazia');
    }
  } catch (e) {
    return { success: false, error: 'Erro ao processar lista de serviços.' };
  }

  const proposalTitle = titulo_principal || parsedServices[0] || 'Serviço Contratado';

  try {
    const novaProposta = await prisma.proposta.create({
      data: {
        id_contratante: id_contratante,
        id_prestador: id_prestador,
        titulo: proposalTitle, 
        descricao: descricao || '',
        valor: valor,
        data_envio: new Date(),
        data_inicio: new Date(dataInicio),
        data_termino: new Date(dataTermino),
        Status: EnumStatusProposta.PENDENTE, 
        
        servicos: {
          create: parsedServices.map((nomeServico, index) => ({
            id_servico: index + 1, 
            nome_servico: nomeServico,
            descricao: descricao || '',
          }))
        }
      },
    });

    await prisma.notificacao.create({
      data: {
        userId: id_prestador,
        titulo: 'Nova proposta recebida!',
        mensagem: `Você recebeu uma nova proposta de ${
          session.user.name || 'um cliente'
        } para realizar: ${proposalTitle}.`,
        tipo: EnumTipoNotificacao.INFO, 
        link: `/propostas/${novaProposta.id}`,
      },
    });

    await prisma.notificacao.create({
      data: {
        userId: id_contratante, 
        titulo: 'Proposta enviada!',
        mensagem: `Você enviou uma proposta de "${proposalTitle}" para ${professionalName}.`,
        tipo: EnumTipoNotificacao.SUCESS,
        link: `/propostas/${novaProposta.id}`,
      },
    });

  } catch (error) {
    console.error('Erro ao criar proposta:', error);
    return { success: false, error: 'Falha ao criar proposta no banco.' };
  }

  revalidatePath('/propostas');
  return { success: true };
}