import CadastroFormAdmin from '@/components/CadastroFormAdm';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { EnumTipoUsuario } from '@/app/generated/prisma';

export default async function CriarAdminPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || session.user.tipo_usuario !== EnumTipoUsuario.ADMINISTRADOR) {
    redirect('/login');
  }

  return <CadastroFormAdmin />;
}