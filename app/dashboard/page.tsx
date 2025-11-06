import ServicesMenu from '@/components/HabilidadesMenu';
import prisma from '@/app/data/prisma';

export type HabilidadeCard = {
  id: number;
  nome: string;
  imagem_url: string | null;
}

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
    }
  });
  return habilidades;
}

export default function DashboardPage() {
  const habilidades = await getHabilidadesPrincipais();
  return (
  <ServicesMenu habilidades={habilidades} />
  );
}