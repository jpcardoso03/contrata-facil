import UserProfileAdmin from '@/components/UserProfileAdm';
import { notFound, redirect } from 'next/navigation';
import prisma from '@/app/data/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { EnumTipoUsuario } from '@/app/generated/prisma';

export type ProcessedUser = {
  id: string;
  name: string | null;
  email: string | null;
  photoUrl: string | null;
  city: string;
  userType: string; 
  rating: string | number;
  reviews: number;
  hourlyRate: string; 
  description: string;
  skills: string[];
};

async function getUserData(id: string): Promise<ProcessedUser | null> {
  const user = await prisma.usuario.findUnique({
    where: { id: id },
    include: {
      habilidades: {
        include: {
          habilidade: { select: { nome: true } },
        },
      },
      propostas_prestadas: {
        include: {
          avaliacao: true,
        },
      },
    },
  });

  if (!user) {
    return null;
  }

  const skills = user.habilidades ? user.habilidades.map((ph) => ph.habilidade.nome) : [];

  let rating: string | number = 'N/A';
  let reviews = 0;

  if (user.propostas_prestadas && user.propostas_prestadas.length > 0) {
    const allRatings = user.propostas_prestadas
      .map((proposta) => proposta.avaliacao[0]?.nota)
      .filter((nota): nota is number => nota != null);

    reviews = allRatings.length;
    if (reviews > 0) {
        rating = (allRatings.reduce((acc, curr) => acc + curr, 0) / reviews).toFixed(1);
    }
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    photoUrl: user.image,
    city: user.city ?? 'Local não informado',
    userType: user.tipo_usuario,
    rating,
    reviews,
    hourlyRate: user.valor ? user.valor.toString() : '0',
    description: user.sobre,
    skills,
  };
}

export default async function AdminUserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; 

  const session = await getServerSession(authOptions);

  if (!session || !session.user || session.user.tipo_usuario !== EnumTipoUsuario.ADMINISTRADOR) {
    redirect('/dashboard');
  }

  const user = await getUserData(id);

  if (!user) {
    notFound();
  }

  return <UserProfileAdmin user={user} />;
}