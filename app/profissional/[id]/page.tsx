import ProfessionalProfile from '@/components/ProfessionalProfile';
import { notFound, redirect } from 'next/navigation';
import prisma from '@/app/data/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { EnumTipoUsuario } from '@/app/generated/prisma';

export type ProcessedProfessional = {
  id: string;
  name: string | null;
  photoUrl: string | null;
  city: string;
  rating: string | number;
  reviews: number;
  hourlyRate: string; // Prisma Decimal será convertido para string
  description: string;
  skills: string[];
};

async function getProfessionalData(id: string): Promise<ProcessedProfessional | null> {
  const user = await prisma.usuario.findUnique({
    where: {
      id: id,
      tipo_usuario: 'PRESTADOR',
    },
    include: {
      habilidades: {
        include: {
          habilidade: {
            select: {nome: true},
          },
        },
      },
      propostas_prestadas: {
        include: {
          avaliacao: true,
        },
      },
    }
  });

  if (!user) {
    return null;
  }

  // Processamento

  const skills = user.habilidades.map((ph) => ph.habilidade.nome);

  const allRatings = user.propostas_prestadas
    .map((proposta) => proposta.avaliacao[0]?.nota)
    .filter((nota): nota is number => nota != null);

  const reviews = allRatings.length;
  const rating = reviews > 0
    ? (allRatings.reduce((acc, curr) => acc + curr, 0)/reviews).toFixed(1)
    : 'N/A';

  const processedData: ProcessedProfessional = {
    id: user.id,
    name: user.name,
    photoUrl: user.image,
    city: user.city ?? 'Local não informado',
    rating: rating,
    reviews: reviews,
    hourlyRate: user.valor.toString(),
    description: user.sobre,
    skills: skills,
  };

  return processedData;
}
interface PageProps {
  params: { id: string };
}

export default async function ProfessionalPage({ params }: {params: {id: string}}) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    redirect('/login');
  }

  if (session.user.tipo_usuario === EnumTipoUsuario.PRESTADOR) {
    redirect('/propostas');
  }
  
  const professional = await getProfessionalData(params.id)

  if (!professional) {
    notFound();
  }
  return <ProfessionalProfile professional={professional} />;
}