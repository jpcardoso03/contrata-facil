'use server';

import prisma from '@/app/data/prisma';
import { EnumStatusProposta, EnumTipoUsuario } from '@/app/generated/prisma';

export type ReportResult = {
  rank: number;
  userId: string;
  userName: string | null;
  userImage: string | null;
  userProfession: string | null;
  count: number;
  totalValue: number;
};

interface ReportParams {
  type: 'PRESTADORES' | 'CONTRATANTES';
  startDate: string;
  endDate: string;
  limit: number;
}

export async function generateReportAction({ type, startDate, endDate, limit }: ReportParams): Promise<ReportResult[]> {
  try {
    const start = new Date(startDate);
    const end = new Date(endDate);
    end.setHours(23, 59, 59, 999);

    let results: (ReportResult | null)[] = [];

    if (type === 'PRESTADORES') {
      const grouped = await prisma.proposta.groupBy({
        by: ['id_prestador'],
        where: {
          Status: EnumStatusProposta.CONCLUIDA,
          data_termino: { gte: start, lte: end },
        },
        _count: { id: true },
        _sum: { valor: true },
        orderBy: { _count: { id: 'desc' } },
        take: limit,
      });

      const userIds = grouped.map((g) => g.id_prestador);
      
      const users = await prisma.usuario.findMany({
        where: { 
            id: { in: userIds },
            tipo_usuario: EnumTipoUsuario.PRESTADOR 
        },
        select: { id: true, name: true, image: true, profissao: true },
      });

      results = grouped.map((item, index) => {
        const user = users.find((u) => u.id === item.id_prestador);
        if (!user) return null; 

        return {
          rank: index + 1,
          userId: item.id_prestador,
          userName: user.name,
          userImage: user.image,
          userProfession: user.profissao || 'Prestador',
          count: item._count.id,
          totalValue: Number(item._sum.valor) || 0,
        };
      });

    } else {
      const grouped = await prisma.proposta.groupBy({
        by: ['id_contratante'],
        where: {
          data_envio: { gte: start, lte: end },
        },
        _count: { id: true },
        _sum: { valor: true },
        orderBy: { _count: { id: 'desc' } },
        take: limit,
      });

      const userIds = grouped.map((g) => g.id_contratante);
      
      const users = await prisma.usuario.findMany({
        where: { 
            id: { in: userIds },
            tipo_usuario: EnumTipoUsuario.CONTRATANTE 
        },
        select: { id: true, name: true, image: true, city: true },
      });

      results = grouped.map((item, index) => {
        const user = users.find((u) => u.id === item.id_contratante);
        if (!user) return null; 

        return {
          rank: index + 1,
          userId: item.id_contratante,
          userName: user.name,
          userImage: user.image,
          userProfession: user.city || 'Contratante',
          count: item._count.id,
          totalValue: Number(item._sum.valor) || 0,
        };
      });
    }

    const finalResults = results.filter((r): r is ReportResult => r !== null);
    return finalResults.map((r, i) => ({ ...r, rank: i + 1 }));

  } catch (error) {
    console.error('Erro ao gerar relatório:', error);
    return [];
  }
}