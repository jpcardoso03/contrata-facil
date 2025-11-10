import prisma from '@/app/data/prisma';
import { notFound } from 'next/navigation';
import CreateProposal from '@/components/CreateProposal';

export type ProfessionalProposalInfo = {
  id: string;
  name: string | null;
  profissao: string | null;
  valor: number;
  rating: number;
  reviews: number;
  photoUrl: string | null;
  habilidades: { id: number; nome: string }[];
};

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
        profissao: true, // Campo que você adicionou
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

export default async function CreateProposalPage({
  params,
}: {
  params: { professionalId: string };
}) {
  const professional = await getProfessionalData(params.professionalId);

  if (!professional) {
    notFound();
  }

  return <CreateProposal professional={professional} />;
}