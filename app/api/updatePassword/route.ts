import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import bcrypt from 'bcryptjs';
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

    const { currentPassword, newPassword } = await req.json();

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { success: false, error: 'Preencha todos os campos' },
        { status: 400 }
      );
    }

    const user = await prisma.usuario.findUnique({
      where: { id: session.user.id },
    });

    if (!user || !user.hashedPassword) {
      return NextResponse.json(
        { success: false, error: 'Usuário não encontrado ou sem senha cadastrada' },
        { status: 404 }
      );
    }

    const passwordMatch = await bcrypt.compare(currentPassword, user.hashedPassword);

    if (!passwordMatch) {
      return NextResponse.json(
        { success: false, error: 'Senha atual incorreta' },
        { status: 403 }
      );
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    await prisma.usuario.update({
      where: { id: session.user.id },
      data: { hashedPassword: hashedNewPassword },
    });

    return NextResponse.json({ success: true, message: 'Senha alterada com sucesso!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: 'Erro interno ao alterar senha' },
      { status: 500 }
    );
  }
}
