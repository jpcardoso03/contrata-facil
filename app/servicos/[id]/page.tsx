import ProfessionalList from '@/components/ProfessionalList';
import prisma from '@/app/data/prisma';
import { notFound, redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { EnumTipoUsuario } from '@/app/generated/prisma';

export type ProcessedProfessional = {
  id: string;
  name: string | null;
  photoUrl: string | null;
  rating: number;
  hourlyRate: number;
  reviews: number;
};

async function getProfessionalsByService(
  serviceName: string
): Promise<ProcessedProfessional[]>{
  const users = await prisma.usuario.findMany({
    where: {
      tipo_usuario: 'PRESTADOR',
      habilidades: {
        some: {
          habilidade: {
            nome: serviceName,
          },
        },
      },
    },
    include: {
      propostas_prestadas: {
        include: {
          avaliacao: {
            select: { nota: true},
          },
        },
      },
    },
  });

  const professionals = users.map((user) => {
    const allRatings = user.propostas_prestadas
      .map((proposta) => proposta.avaliacao[0]?.nota)
      .filter((nota): nota is number => nota != null);

    const reviews = allRatings.length;
    const rating =
      reviews > 0
        ? parseFloat(
            (allRatings.reduce((acc, curr) => acc+curr, 0)/reviews).toFixed(1)
        )
        : 0;

    return {
      id: user.id,
      name: user.name,
      photoUrl: user.image,
      hourlyRate: user.valor.toNumber(),
      rating: rating,
      reviews: reviews,
    };
  });

  return professionals;
}

export default async function ServicePage({
   params,
   }: {
    params: { serviceName: string};
   }) {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      redirect('/login');
    }

    if (session.user.tipo_usuario === EnumTipoUsuario.PRESTADOR) {
      redirect('/propostas')
    }
  
    const serviceName = decodeURIComponent(params.serviceName);
    const professionals = await getProfessionalsByService(serviceName);

    return <ProfessionalList serviceName={serviceName} professionals={professionals} />;
}