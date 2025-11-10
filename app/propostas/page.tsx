import prisma from '@/app/data/prisma';
import PropostasList from '@/components/PropostasList';
import { getSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { EnumStatusProposta, Proposta } from '@/app/generated/prisma';
import { stat } from 'fs';

export type PropostaProcessada = {
    id: number;
    titulo: string;
    descricao: string;
    valorFormatado: string;
    prazo: string;
    status: EnumStatusProposta;
};

export type PropostaStats = {
    total: number;
    concluidas: number;
    emAndamento: number;
    pendentes: number;
};

async function getPropostasData(userId: string) {
    const propostas = await prisma.proposta.findMany({
        where: {
            id_contratante: userId,
        },
        orderBy: {
            data_envio: 'desc',
        },
    });

    const stats: PropostaStats = {
        total: propostas.length,
        concluidas: propostas.filter((p) => p.Status === 'CONCLUIDA').length,
        emAndamento: propostas.filter((p) => p.Status === 'EM_ANDAMENTO').length,
        pendentes: propostas.filter(
            (p) => p.Status === 'PENDENTE' || p.Status === 'ACEITA'
        ).length,
    };

    const propostasProcessadas: PropostaProcessada[] = propostas.map(
        (proposta) => {
            const valorFormatado = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(proposta.valor.toNumber());

            const prazo = formatDistance(
                proposta.data_termino,
                proposta.data_inicio,
                { locale: ptBR}
            );

            return {
                id: proposta.id,
                titulo: proposta.titulo,
                descricao: proposta.descricao,
                valorFormatado: valorFormatado,
                prazo: prazo,
                status: proposta.Status,
            };
        }
    );

    return { propostasProcessadas, stats};
}

export default async function PropostasPage() {
    const session = await getSession();
    if (!session?.user?.id) {
        redirect('/login');
    }

    const { propostasProcessadas, stats } = await getPropostasData(
        session.user.id
    );

    return <PropostasList initialPropostas={propostasProcessadas} stats={stats} />;
}