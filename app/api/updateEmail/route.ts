import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '@/app/data/prisma';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: 'Não autenticado' },
        { status: 401 }
      );
    }

    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'E-mail inválido' },
        { status: 400 }
      );
    }

    // Verifica se e-mail já está em uso
    const existing = await prisma.usuario.findUnique({ where: { email } });
    if (existing && existing.id !== session.user.id) {
      return NextResponse.json(
        { success: false, error: 'E-mail já está em uso' },
        { status: 409 }
      );
    }

    await prisma.usuario.update({
      where: { id: session.user.id },
      data: { email },
    });

    return NextResponse.json({ success: true, message: 'E-mail atualizado com sucesso!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: 'Erro interno ao atualizar e-mail' },
      { status: 500 }
    );
  }
}
