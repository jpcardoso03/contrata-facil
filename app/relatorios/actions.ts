'use server';

import prisma from '@/app/data/prisma';
import { EnumStatusProposta } from '@/app/generated/prisma';

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

    let results: ReportResult[] = [];

    if (type === 'PRESTADORES') {
      const grouped = await prisma.proposta.groupBy({
        by: ['id_prestador'],
        where: {
          Status: EnumStatusProposta.CONCLUIDA,
          data_termino: {
            gte: start,
            lte: end,
          },
        },
        _count: {
          id: true,
        },
        _sum: {
          valor: true,
        },
        orderBy: {
          _count: {
            id: 'desc',
          },
        },
        take: limit,
      });

      const userIds = grouped.map((g) => g.id_prestador);
      const users = await prisma.usuario.findMany({
        where: { id: { in: userIds } },
        select: { id: true, name: true, image: true, profissao: true },
      });

      results = grouped.map((item, index) => {
        const user = users.find((u) => u.id === item.id_prestador);
        return {
          rank: index + 1,
          userId: item.id_prestador,
          userName: user?.name || 'Usuário Desconhecido',
          userImage: user?.image || null,
          userProfession: user?.profissao || 'Prestador',
          count: item._count.id,
          totalValue: Number(item._sum.valor) || 0,
        };
      });

    } else {
      const grouped = await prisma.proposta.groupBy({
        by: ['id_contratante'],
        where: {
          data_envio: {
            gte: start,
            lte: end,
          },
        },
        _count: {
          id: true,
        },
        _sum: {
          valor: true,
        },
        orderBy: {
          _count: {
            id: 'desc',
          },
        },
        take: limit,
      });

      const userIds = grouped.map((g) => g.id_contratante);
      const users = await prisma.usuario.findMany({
        where: { id: { in: userIds } },
        select: { id: true, name: true, image: true, city: true },
      });

      results = grouped.map((item, index) => {
        const user = users.find((u) => u.id === item.id_contratante);
        return {
          rank: index + 1,
          userId: item.id_contratante,
          userName: user?.name || 'Usuário Desconhecido',
          userImage: user?.image || null,
          userProfession: user?.city || 'Contratante',
          count: item._count.id,
          totalValue: Number(item._sum.valor) || 0,
        };
      });
    }

    return results;

  } catch (error) {
    console.error('Erro ao gerar relatório:', error);
    return [];
  }
}