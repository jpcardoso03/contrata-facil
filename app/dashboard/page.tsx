import ServicesMenu from '@/components/ServicesMenu';
import prisma from '@/app/data/prisma';

import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { EnumTipoUsuario } from '@/app/generated/prisma';

export type HabilidadeCard = {
  id: number;
  nome: string;
  imagem_url: string | null;
};

async function getHabilidadesPrincipais() {
  const habilidades = await prisma.habilidade.findMany({
    where: {
      principal: true,
    },
    select: {
      id: true,
      nome: true,
      imagem_url: true,
    },
    orderBy: {
      nome: 'asc',
    },
  });
  return habilidades;
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  console.log("SESSÃO NO DASHBOARD:", session);

  if (!session || !session.user) {
    redirect('/login');
  }

  if (session.user.tipo_usuario !== EnumTipoUsuario.CONTRATANTE) {
    redirect('/propostas'); 
  }

  const habilidades = await getHabilidadesPrincipais();
  return <ServicesMenu habilidades={habilidades} />;
}