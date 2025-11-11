import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { EnumNivelProeficiencia, Prisma } from '@/app/generated/prisma';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/app/data/prisma';

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ success: false, error: 'Não autenticado' }, { status: 401 });
    }

    const body = await req.json();
    const { name, about, city, hourlyRate, skills } = body;
    const userId = session.user.id;

    const updatedUser = await prisma.usuario.update({
      where: { id: userId },
      data: {
        name,
        sobre: about,
        city,
        valor: hourlyRate !== undefined && hourlyRate !== null
          ? new Prisma.Decimal(hourlyRate)
          : undefined,
      },
    });

    if (Array.isArray(skills)) {
      await prisma.prestadorHabilidade.deleteMany({
        where: { id_prestador: userId },
      });

      const relations = skills.map((skillId: number) => ({
        id_prestador: userId,
        id_habilidade: Number(skillId),
        nivel_proeficiencia: EnumNivelProeficiencia.INTERMEDIARIO,
      }));

      if (relations.length > 0) {
        await prisma.prestadorHabilidade.createMany({
          data: relations,
        });
      }
    }

    return NextResponse.json({ success: true, user: updatedUser });
  } catch (err) {
    console.error('Erro ao atualizar perfil:', err);
    return NextResponse.json({ success: false, error: 'Erro interno' }, { status: 500 });
  }
}