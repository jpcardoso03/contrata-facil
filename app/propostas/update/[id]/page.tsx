import prisma from '@/app/data/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { notFound, redirect } from 'next/navigation';
import UpdateProposal from '@/components/UpdateProposal';

export type ProposalEditData = {
  id: number;
  titulo: string;
  descricao: string;
  valorTotal: number;
  valorHora: number;
  dataInicio: Date;
  dataTermino: Date;
  servicos: string[];
  professionalName: string;
  professionalId: string;
};

async function getProposalForEdit(id: number, userId: string) {
  const proposta = await prisma.proposta.findUnique({
    where: { id },
    include: {
      servicos: true,
      prestador: {
        select: { id: true, name: true, valor: true }
      }
    }
  });

  if (!proposta) return null;

  if (proposta.id_contratante !== userId) {
    return 'unauthorized';
  }

  
  const start = proposta.data_inicio;
  const end = proposta.data_termino;
  const totalValue = Number(proposta.valor);

  const startDay = new Date(start); startDay.setHours(0,0,0,0);
  const endDay = new Date(end); endDay.setHours(0,0,0,0);
  const daysDiff = Math.floor((endDay.getTime() - startDay.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  const startMinutes = start.getHours() * 60 + start.getMinutes();
  const endMinutes = end.getHours() * 60 + end.getMinutes();
  const minutesPerDay = endMinutes - startMinutes;
  const hoursPerDay = minutesPerDay / 60;

  let estimatedHours = 0;
  if (daysDiff > 0 && hoursPerDay > 0) {
    estimatedHours = daysDiff * hoursPerDay;
  }

  const calculatedHourlyRate = estimatedHours > 0 
    ? totalValue / estimatedHours 
    : Number(proposta.prestador.valor);

  const editData: ProposalEditData = {
    id: proposta.id,
    titulo: proposta.titulo,
    descricao: proposta.descricao,
    valorTotal: totalValue,
    valorHora: Math.round(calculatedHourlyRate * 100) / 100,
    dataInicio: proposta.data_inicio,
    dataTermino: proposta.data_termino,
    servicos: proposta.servicos.map(s => s.nome_servico),
    professionalName: proposta.prestador.name || 'Prestador',
    professionalId: proposta.prestador.id
  };

  return editData;
}

export default async function UpdateProposalPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) redirect('/login');

  const proposalId = parseInt(params.id);
  if (isNaN(proposalId)) notFound();

  const data = await getProposalForEdit(proposalId, session.user.id);

  if (!data) notFound();
  if (data === 'unauthorized') redirect('/propostas'); // Redireciona se não for dono

  return <UpdateProposal proposal={data} />;
}