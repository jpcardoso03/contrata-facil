import { NextResponse } from 'next/server';
import prisma from '@/app/data/prisma';

export async function GET() {
  try {
    const skills = await prisma.habilidade.findMany({
      select: {
        id: true,
        nome: true,
        descricao: true, // opcional
      },
      orderBy: { nome: 'asc' },
    });

    return NextResponse.json({ success: true, skills });
  } catch (err) {
    console.error('Erro ao buscar habilidades:', err);
    return NextResponse.json({ success: false, error: 'Erro interno' }, { status: 500 });
  }
}