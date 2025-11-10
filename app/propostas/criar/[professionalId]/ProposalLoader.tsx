// Este novo componente fará todo o trabalho assíncrono

import prisma from '@/app/data/prisma';
import { notFound, redirect } from 'next/navigation';
import CreateProposal from '@/components/CreateProposal';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { EnumTipoUsuario } from '@/app/generated/prisma';
import type { ProfessionalProposalInfo } from './page'; 

async function getProfessionalData(
  id: string
): Promise<ProfessionalProposalInfo | null> {
  const professional = await prisma.usuario.findUnique({
    where: { id: id, tipo_usuario: 'PRESTADOR' },
    select: {
      id: true,
      name: true,
      image: true,
      valor: true,
      profissao: true,
      habilidades: {
        select: {
          habilidade: {
            select: { id: true, nome: true },
          },
        },
      },
      propostas_prestadas: {
        include: { avaliacao: { select: { nota: true } } },
      },
    },
  });

  if (!professional) {
    return null;
  }

  const allRatings = professional.propostas_prestadas
    .map((proposta) => proposta.avaliacao[0]?.nota)
    .filter((nota): nota is number => nota != null);
  const reviews = allRatings.length;
  const rating =
    reviews > 0
      ? parseFloat(
          (allRatings.reduce((acc, curr) => acc + curr, 0) / reviews).toFixed(1)
        )
      : 0;
  const habilidades = professional.habilidades.map((h) => h.habilidade);

  return {
    id: professional.id,
    name: professional.name,
    profissao: professional.profissao,
    valor: professional.valor.toNumber(),
    rating: rating,
    reviews: reviews,
    photoUrl: professional.image,
    habilidades: habilidades,
  };
}


export default async function ProposalLoader({
  professionalId,
}: {
  professionalId: string;
}) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect('/login');
  }

  if (session.user.tipo_usuario === EnumTipoUsuario.PRESTADOR) {
    redirect('/propostas');
  }
  
  const professional = await getProfessionalData(professionalId);

  if (!professional) {
    notFound();
  }

  return <CreateProposal professional={professional} />;
}