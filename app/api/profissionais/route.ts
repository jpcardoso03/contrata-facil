import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const usuarios = await prisma.usuario.findMany({
      include: {
        habilidades: {
          include: {
            habilidade: true,
          },
        },
        propostas_prestadas: {
          include: {
            avaliacao: true,
          },
        },
      },
    });

    type UsuarioDoBanco = typeof usuarios[number];

    const formattedProfessionals = usuarios.map((user: UsuarioDoBanco) => {
      
      const todasAvaliacoes = user.propostas_prestadas.flatMap(
        (p: any) => p.avaliacao
      );
      
      const totalReviews = todasAvaliacoes.length;
      
      const somaNotas = todasAvaliacoes.reduce(
        (acc: number, curr: any) => acc + curr.nota,
        0
      );
      
      const rating = totalReviews > 0 ? somaNotas / totalReviews : 0;

      const skills = user.habilidades.map((h: any) => h.habilidade.nome);

      let displayProfession = user.profissao;
      if (!displayProfession) {
        displayProfession = user.tipo_usuario.charAt(0) + user.tipo_usuario.slice(1).toLowerCase();
      }

      return {
        id: user.id,
        name: user.name || 'Usuário sem nome',
        profession: displayProfession,
        rating: Number(rating.toFixed(1)),
        reviews: totalReviews,
        hourlyRate: user.valor ? Number(user.valor) : 0,
        city: user.city || 'Localização não informada',
        photoUrl: user.image || undefined,
        skills: skills,
      };
    });

    return NextResponse.json(formattedProfessionals);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}