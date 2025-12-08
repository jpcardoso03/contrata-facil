import AdminHomeScreen from '@/components/AdminHome';
import prisma from '@/app/data/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { EnumTipoUsuario } from '@/app/generated/prisma';

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user || session.user.tipo_usuario !== EnumTipoUsuario.ADMINISTRADOR) {
    redirect('/login');
  }

  const [totalAdmins, totalContratantes, totalPrestadores, totalHabilidades] = await Promise.all([
    prisma.usuario.count({ where: { tipo_usuario: EnumTipoUsuario.ADMINISTRADOR } }),
    prisma.usuario.count({ where: { tipo_usuario: EnumTipoUsuario.CONTRATANTE } }),
    prisma.usuario.count({ where: { tipo_usuario: EnumTipoUsuario.PRESTADOR } }),
    prisma.habilidade.count(),
  ]);

  const totalUsuarios = totalAdmins + totalContratantes + totalPrestadores;

  const dashboardData = {
    totalUsuarios,
    totalAdmins,
    totalContratantes,
    totalPrestadores,
    totalHabilidades
  };

  return <AdminHomeScreen data={dashboardData} />;
}