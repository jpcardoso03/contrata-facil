import prisma from '@/app/data/prisma'
import NotificationsList from '@/components/NotificationsList';
import { getSession } from 'next-auth/react';
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
  const session = await getSession();

  if (!session?.user?.id) {
    redirect('/login');
  }

  const { notifications, unreadCount } = await getNotifications(session?.user.id);
  return (
  <NotificationsList
    initialNotifications={notifications}
    initialUnreadCount={unreadCount}
     />);
}