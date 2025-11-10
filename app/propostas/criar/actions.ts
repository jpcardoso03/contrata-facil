'use server';

import { z } from 'zod';
import prisma from '@/app/data/prisma';
import { getSession } from 'next-auth/react';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const ProposalSchema = z.object({
  id_prestador: z.string(),
  titulo: z.string().min(1, 'O tipo de serviço é obrigatório'),
  descricao: z.string().optional(),
  valor: z.number().positive('O valor deve ser positivo'),
  data_inicio_str: z.string().min(1, 'A data é obrigatória'),
  data_termino_str: z.string().min(1, 'O horário é obrigatório'),
  horas_estimadas: z.number().int().positive(),
});

export async function createProposalAction(formData: FormData) {
    const session = await getSession();
    if (!session?.user?.id) {
        return { success: false, error: 'Usuário não autenticado.'};
    }
    const id_contratante = session.user.id;

    const data_inicio = `${formData.get('selectedDate')}T${formData.get('selectedTime')}:00`;
    const horas_estimadas = Number(formData.get('estimatedHours'));

    const dataInicioObj = new Date(data_inicio);
    const dataTerminoObj = new Date(
        dataInicioObj.getTime() + horas_estimadas * 60 * 60 * 1000
    );

    const validatedFields = ProposalSchema.safeParse({
    id_prestador: formData.get('professionalId'),
    titulo: formData.get('serviceType'),
    descricao: formData.get('description'),
    valor: Number(formData.get('totalValue')),
    data_inicio_str: formData.get('selectedDate'),
    data_termino_str: formData.get('selectedTime'),
    horas_estimadas: horas_estimadas,
    });

    if (!validatedFields.success) {
        console.error(validatedFields.error.flatten().fieldErrors);
        return {
        success: false,
        error: 'Dados inválidos.',
        errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { id_prestador, titulo, descricao, valor } = validatedFields.data;

    try {
    const novaProposta = await prisma.proposta.create({
      data: {
        id_contratante: id_contratante,
        id_prestador: id_prestador,
        titulo: titulo,
        descricao: descricao || '',
        valor: valor,
        data_envio: new Date(),
        data_inicio: dataInicioObj,
        data_termino: dataTerminoObj,
        Status: 'PENDENTE',
      },
    });

    await prisma.notificacao.create({
      data: {
        userId: id_prestador,
        titulo: 'Nova proposta recebida!',
        mensagem: `Você recebeu uma nova proposta de ${session.user.name || 'um cliente'}.`,
        tipo: 'INFO',
        link: `/propostas/${novaProposta.id}`,
      },
    });

    } catch (error) {
    console.error(error);
    return { success: false, error: 'Falha ao criar proposta no banco.' };
    }

    revalidatePath('/propostas');
    redirect('/propostas');
}