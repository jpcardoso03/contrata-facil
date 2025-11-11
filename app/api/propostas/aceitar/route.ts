import { NextResponse } from 'next/server';
import prisma from '@/app/data/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { EnumStatusProposta } from '@/app/generated/prisma';

export async function PUT(req: Request) {
  try {
    const { id } = await req.json();
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ success: false, error: 'Não autenticado' }, { status: 401 });
    }

    await prisma.proposta.update({
      where: { id },
      data: { Status: EnumStatusProposta.ACEITA },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao aceitar proposta:', error);
    return NextResponse.json({ success: false, error: 'Erro interno' }, { status: 500 });
  }
}