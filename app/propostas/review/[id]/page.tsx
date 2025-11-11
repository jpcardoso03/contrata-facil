import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/app/data/prisma';
import { EnumStatusProposta } from '@/app/generated/prisma';
import ReviewProposal from '@/components/ReviewProposal';

export default async function ReviewProposalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const proposalId = Number(resolvedParams.id);

  if (isNaN(proposalId)) {
    redirect('/propostas');
  }

  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    redirect('/login');
  }

  const currentUserId = session.user.id;

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

  const otherUser = isContratante ? proposta.prestador : proposta.contratante;

  const proposalProps = {
    id: proposta.id,
    titulo: proposta.titulo,
    descricao: proposta.descricao,
    valor: proposta.valor.toNumber(),
    data_inicio: proposta.data_inicio,
    data_termino: proposta.data_termino,
  };

  const otherUserProps = {
    id: otherUser.id,
    name: otherUser.name,
    profissao: otherUser.profissao,
    photoUrl: otherUser.image,
    valorBase: otherUser.valor.toNumber(),
    rating: 4.8,
    reviews: 23,
  };

  let isUsersTurn = false;

  if (
    isContratante &&
    proposta.Status === EnumStatusProposta.AGUARDANDO_CONTRATANTE
  ) {
    isUsersTurn = true;
  }

  if (
    isPrestador &&
    (proposta.Status === EnumStatusProposta.AGUARDANDO_PRESTADOR ||
      proposta.Status === EnumStatusProposta.PENDENTE)
  ) {
    isUsersTurn = true;
  }

  if (!isUsersTurn) {
    redirect('/propostas');
  }

  const menuItems = [
    { name: 'Home', icon: 'Home' },
    { name: 'Notificações', icon: 'Bell' },
    { name: 'Propostas', icon: 'FileText', active: true },
    { name: 'Perfil', icon: 'User' },
  ];

  return (
    <ReviewProposal
      proposal={proposalProps}
      otherUser={otherUserProps}
      menuItems={menuItems}
    />
  );
}
