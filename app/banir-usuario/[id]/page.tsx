import prisma from '@/app/data/prisma';
import BanUserPage from '@/components/BanUserPage';
import { notFound, redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function BanirUsuarioPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  const user = await prisma.usuario.findUnique({
    where: { id: params.id },
    select: {
      id: true,
      name: true,
      email: true,
      profissao: true,
      city: true,
      image: true,
      active: true, 
    }
  });

  if (!user) {
    notFound();
  }

  const userData = {
    id: user.id,
    name: user.name || "Sem nome",
    email: user.email || "Sem email",
    profession: user.profissao || "Não informado",
    city: user.city || "Não informado",
    photoUrl: user.image,
    isActive: user.active 
  };

  return <BanUserPage user={userData} />;
}