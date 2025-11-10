import prisma from '@/app/data/prisma';
import PropostasList from '@/components/PropostasList';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
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
    userRole: 'contratante' | 'prestador';
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
            OR: [
                { id_contratante: userId },
                { id_prestador: userId }
            ],
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
            (p) => 
                p.Status === 'PENDENTE' || p.Status === 'AGUARDANDO_CONTRATANTE' || p.Status === 'AGUARDANDO_PRESTADOR'
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

            const userRole = proposta.id_contratante === userId ? 'contratante' : 'prestador';

            return {
                id: proposta.id,
                titulo: proposta.titulo,
                descricao: proposta.descricao,
                valorFormatado: valorFormatado,
                prazo: prazo,
                status: proposta.Status,
                userRole
            };
        }
    );

    return { propostasProcessadas, stats};
}

export default async function PropostasPage() {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
        redirect('/login');
    }

    const { propostasProcessadas, stats } = await getPropostasData(
        session.user.id
    );

    return <PropostasList initialPropostas={propostasProcessadas} stats={stats} />;
}