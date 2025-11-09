'use server';

import prisma from '@/app/data/prisma';
import { getSession } from 'next-auth/react';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function markAsRead(notificationId: string, link: string | null) {
    const session = await getSession();
    if (!session?.user?.id) return;

    await prisma.notificacao.update({
        where: {
            id: notificationId,
            userId: session.user.id,
        },
        data: {
            lida: true,
        },
    });

    revalidatePath('/notificacoes');

    if (link) {
        redirect(link);
    }
}

export async function markAllAsRead() {
    const session = await getSession();
    if (!session?.user?.id) return;

    await prisma.notificacao.updateMany({
        where: {
            userId: session.user.id,
            lida: false,
        },
        data: {
            lida: true,
        },
    });

    revalidatePath('/notificacoes');
}