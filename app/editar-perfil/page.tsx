import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import prisma from '@/app/data/prisma';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { EnumTipoUsuario } from '@/app/generated/prisma';
import EditProfile from '@/components/EditProfile';

export default async function EditProfilePage() {
  const session = await getServerSession(authOptions);

  // Redireciona caso não esteja logado
  if (!session?.user?.id) {
    redirect('/login');
  }

  // Busca usuário no banco
  const user = await prisma.usuario.findUnique({
    where: { id: session.user.id },
    include: {
      habilidades: {
        include: {
          habilidade: true,
        },
      },
    },
  });

  if (!user) {
    redirect('/login');
  }

  const userData = {
    id: user.id,
    name: user.name || '',
    about: user.sobre || '',
    city: user.city || '',
    email: user.email || '',
    hourlyRate: user.valor ? Number(user.valor) : 0,
    skills: user.habilidades.map((h) => h.habilidade.nome),
  };

  const userType =
    user.tipo_usuario === EnumTipoUsuario.PRESTADOR ? 'PRESTADOR' : 'CONTRATANTE';

  return <EditProfile userData={userData} userType={userType} />;
}
