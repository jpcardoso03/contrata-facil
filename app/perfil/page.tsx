import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/app/data/prisma';
import { EnumStatusProposta, EnumTipoUsuario } from '@/app/generated/prisma';
import MyProfileClient from '@/components/MyProfile';
import { notFound } from 'next/navigation';

export type ProcessedUserProfile = {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  city: string | null;
  sobre: string;
  tipo_usuario: EnumTipoUsuario;
  profissao: string | null; 
  memberSince: string;
  rating: number;
  reviews: number;
  skills: string[];
  completedProjects: number;
  activeProjects: number;
};

async function getProfileData(
  userId: string
): Promise<ProcessedUserProfile | null> {
  const user = await prisma.usuario.findUnique({
    where: { id: userId },
    include: {
      propostas_contratadas: true,
      propostas_prestadas: true,
      habilidades: {
        include: {
          habilidade: true,
        },
      },
    },
  });

  if (!user) {
    return null;
  }

  let completedProjects = 0;
  let activeProjects = 0;
  let rating = 0;
  let reviews = 0;
  let skills: string[] = [];

  if (user.tipo_usuario === EnumTipoUsuario.PRESTADOR) {
    const proposals = user.propostas_prestadas;
    const ratings = proposals
      .map((p) => (p as any).avaliacao?.[0]?.nota)
      .filter((n): n is number => n != null);
    
    reviews = ratings.length;
    rating = reviews > 0
        ? parseFloat((ratings.reduce((a, b) => a + b, 0) / reviews).toFixed(1))
        : 0;
    
    completedProjects = proposals.filter(
      (p) => p.Status === EnumStatusProposta.CONCLUIDA
    ).length;
    activeProjects = proposals.filter(
      (p) => p.Status === EnumStatusProposta.ACEITA || p.Status === EnumStatusProposta.EM_ANDAMENTO
    ).length;
    
    skills = user.habilidades.map((h) => h.habilidade.nome);

  } else {
    const proposals = user.propostas_contratadas;
    completedProjects = proposals.filter(
      (p) => p.Status === EnumStatusProposta.CONCLUIDA
    ).length;
    activeProjects = proposals.filter(
      (p) => p.Status === EnumStatusProposta.ACEITA || p.Status === EnumStatusProposta.EM_ANDAMENTO
    ).length;
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    image: user.image,
    city: user.city,
    sobre: user.sobre,
    tipo_usuario: user.tipo_usuario,
    profissao: user.profissao,
    memberSince: user.emailVerified?.getFullYear().toString() || '2024',
    rating: rating,
    reviews: reviews,
    skills: skills,
    completedProjects: completedProjects,
    activeProjects: activeProjects,
  };
}

export default async function PerfilPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || !session.user.id) {
    redirect('/login');
  }

  const userProfile = await getProfileData(session.user.id);

  if (!userProfile) {
    notFound();
  }

  return <MyProfileClient user={userProfile} />;
}