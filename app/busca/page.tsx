import SearchScreen from '@/components/SearchScreen';
import prisma from '@/app/data/prisma';

import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { EnumTipoUsuario } from '@/app/generated/prisma';

export default async function BuscaPage() {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || session.user.tipo_usuario !== EnumTipoUsuario.ADMINISTRADOR) {
        redirect('/login');
    }
  return <SearchScreen />;
}
