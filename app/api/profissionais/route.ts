import { NextResponse } from 'next/server';
import prisma from '@/app/data/prisma';

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

    const formattedProfessionals = usuarios.map((user) => {
      
      const propostas = user.propostas_prestadas || [];
      const todasAvaliacoes = propostas.flatMap((p) => p.avaliacao);
      const totalReviews = todasAvaliacoes.length;
      
      const somaNotas = todasAvaliacoes.reduce(
        (acc, curr) => acc + curr.nota, 
        0
      );
      
      const rating = totalReviews > 0 ? somaNotas / totalReviews : 0;
      const skills = user.habilidades.map((h) => h.habilidade.nome);
      let displayProfession = user.profissao;
      
      if (!displayProfession && user.tipo_usuario) {
        const tipoStr = String(user.tipo_usuario);
        displayProfession = tipoStr.charAt(0) + tipoStr.slice(1).toLowerCase();
      }

      return {
        id: user.id,
        name: user.name || 'Usuário sem nome',
        profession: displayProfession || 'Profissional',
        rating: Number(rating.toFixed(1)),
        reviews: totalReviews,
        hourlyRate: user.valor ? Number(user.valor) : 0,
        city: user.city || 'Localização não informada',
        photoUrl: user.image || undefined,
        skills: skills,
        userType: user.tipo_usuario,
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