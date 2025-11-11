import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/app/data/prisma';
import ReviewProposal from '@/components/UpdateProposal';
import { EnumStatusProposta } from '@/app/generated/prisma';

type ProposalData = {
  id: number;
  titulo: string;
  descricao: string;
  valor: number;
  data_inicio: Date;
  data_termino: Date;
  status: EnumStatusProposta;
};

type OtherUserData = {
  id: string;
  name: string | null;
  profissao: string | null;
  photoUrl: string | null;
  valorBase: number;
  rating: number;
  reviews: number;
};

export default async function ReviewProposalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const proposalId = Number(id);

  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    redirect('/login');
  }

  const currentUserId = session.user.id;

  if (isNaN(proposalId)) {
    redirect('/propostas');
  }

  const proposta = await prisma.proposta.findUnique({
    where: { id: proposalId },
    include: {
      contratante: {
        select: {
          id: true,
          name: true,
          image: true,
          profissao: true,
          valor: true,
        },
      },
      prestador: {
        select: {
          id: true,
          name: true,
          image: true,
          profissao: true,
          valor: true,
        },
      },
    },
  });

  if (!proposta) {
    redirect('/propostas');
  }

  const isContratante = proposta.id_contratante === currentUserId;
  const isPrestador = proposta.id_prestador === currentUserId;

  if (!isContratante && !isPrestador) {
    redirect('/propostas');
  }

  const userRole = isContratante ? 'contratante' : 'prestador';
  const otherUserDataRaw = isContratante
    ? proposta.prestador
    : proposta.contratante;

  let isUsersTurn = false;
  if (
    userRole === 'contratante' &&
    proposta.Status === EnumStatusProposta.EM_ANDAMENTO || 
    proposta.Status === EnumStatusProposta.AGUARDANDO_CONTRATANTE
  ) {
    isUsersTurn = true;
  }
  if (
    userRole === 'prestador' &&
    (proposta.Status === EnumStatusProposta.PENDENTE ||
      proposta.Status === EnumStatusProposta.AGUARDANDO_PRESTADOR)
  ) {
    isUsersTurn = true;
  }

  if (!isUsersTurn) {
    console.warn(
      `Usuário ${currentUserId} tentou revisar a proposta ${proposalId}, mas não é sua vez.`
    );
    redirect('/propostas');
  }

  const proposalProps: ProposalData = {
    id: proposta.id,
    titulo: proposta.titulo,
    descricao: proposta.descricao,
    valor: proposta.valor.toNumber(),
    data_inicio: proposta.data_inicio,
    data_termino: proposta.data_termino,
    status: proposta.Status,
  };

  const otherUserProps: OtherUserData = {
    id: otherUserDataRaw.id,
    name: otherUserDataRaw.name,
    profissao: otherUserDataRaw.profissao,
    photoUrl: otherUserDataRaw.image,
    valorBase: otherUserDataRaw.valor.toNumber(),
    rating: 4.8,
    reviews: 23, 
  };


  return (
    <ReviewProposal
      proposal={proposalProps}
      otherUser={otherUserProps}
    />
  );
}
