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

async function getServiceData(serviceId: number) {
  const service = await prisma.habilidade.findUnique({
    where: { id: serviceId },
    select: {
      nome: true, 
      prestadores: { 
        select: {
          prestador: {
            include: {
              propostas_prestadas: {
                include: {
                  avaliacao: {
                    select: { nota: true },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

if (!service) {
    notFound();
  }

  const professionals = service.prestadores.map(({ prestador: user }) => {
    const allRatings = user.propostas_prestadas
      .map((proposta) => proposta.avaliacao[0]?.nota)
      .filter((nota): nota is number => nota != null);

    const reviews = allRatings.length;
    const rating =
      reviews > 0
        ? parseFloat(
            (allRatings.reduce((acc, curr) => acc + curr, 0) / reviews).toFixed(1)
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

  // Retorna ambos os dados para a página
  return {
    serviceName: service.nome,
    professionals: professionals,
  };
}

export default async function ServicePage(
   props: {
    params: { id: string};
   }) {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      redirect('/login');
    }

    if (session.user.tipo_usuario === EnumTipoUsuario.PRESTADOR) {
      redirect('/propostas')
    }
  
    const serviceId = parseInt(props.params.id);
    if (isNaN(serviceId)) {
      notFound();
    }

    const { serviceName, professionals } = await getServiceData(serviceId);

    return <ProfessionalList serviceName={serviceName} professionals={professionals} />;
}