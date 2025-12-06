import prisma from '@/app/data/prisma';
import PropostasList from '@/components/PropostasList';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { EnumStatusProposta } from '@/app/generated/prisma';

// Adicionei os novos campos necessários aqui
export type PropostaProcessada = {
    id: number;
    titulo: string;
    descricao: string;
    valorFormatado: string;
    // Datas formatadas para exibição
    dataEnvio: string;
    dataInicio: string;
    dataTermino: string;
    duracaoEstimada: string;
    
    // Dados dos usuários
    contratanteNome: string | null;
    prestadorNome: string | null;
    
    status: EnumStatusProposta;
    userRole: 'contratante' | 'prestador';
    resposta: string | null; // Caso haja recusa ou negociação
    
    // Lista de serviços
    servicos: {
        id: number;
        nome: string;
        descricao: string;
    }[];
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
        // IMPORTANTE: Incluir os relacionamentos
        include: {
            servicos: true,
            contratante: { select: { name: true } },
            prestador: { select: { name: true } }
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

            // Formatador de data e hora legível
            const formatDate = (date: Date) => {
                return new Intl.DateTimeFormat('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                }).format(date);
            };

            // Cálculo da duração (ex: "5 horas")
            const duracao = formatDistance(
                proposta.data_termino,
                proposta.data_inicio,
                { locale: ptBR }
            );

            const userRole = proposta.id_contratante === userId ? 'contratante' : 'prestador';

            return {
                id: proposta.id,
                titulo: proposta.titulo,
                descricao: proposta.descricao,
                valorFormatado: valorFormatado,
                
                // Novos campos mapeados
                dataEnvio: formatDate(proposta.data_envio),
                dataInicio: formatDate(proposta.data_inicio),
                dataTermino: formatDate(proposta.data_termino),
                duracaoEstimada: duracao,
                
                contratanteNome: proposta.contratante.name,
                prestadorNome: proposta.prestador.name,
                resposta: proposta.resposta,

                status: proposta.Status,
                userRole,
                
                // Mapeando serviços
                servicos: proposta.servicos.map(s => ({
                    id: s.id_servico,
                    nome: s.nome_servico,
                    descricao: s.descricao
                }))
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

    return <PropostasList initialPropostas={propostasProcessadas} stats={stats} userType={session.user.tipo_usuario} />;
}