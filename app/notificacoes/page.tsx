import prisma from '@/app/data/prisma'
import NotificationsList from '@/components/NotificationsList';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

async function getNotifications(userId:string) {
  const notifications = await prisma.notificacao.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const unreadCount = await prisma.notificacao.count({
    where: {
      userId: userId,
      lida: false,
    },
  });

  return { notifications, unreadCount };
}

export default async function NotificationsPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect('/login');
  }

  const { notifications, unreadCount } = await getNotifications(session?.user.id);
  return (
  <NotificationsList
    initialNotifications={notifications}
    initialUnreadCount={unreadCount}
    userType={session.user.tipo_usuario}
     />);
}