'use client';

import { Home, Bell, User, Check, MessageSquare, FileText } from 'lucide-react';
import { useRouter } from 'next/navigation';
import type { Notificacao } from '@/app/generated/prisma';
import { markAsRead, markAllAsRead } from '@/app/notificacoes/actions';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface NotificationsListProps {
  initialNotifications: Notificacao[];
  initialUnreadCount: number;
}

export default function NotificationsList({
  initialNotifications,
  initialUnreadCount,
}: NotificationsListProps) {
  const router = useRouter();

  const menuItems = [
    { name: 'Home', icon: Home, active: false },
    { name: 'Notificações', icon: Bell, active: true },
    { name: 'Propostas', icon: FileText },
    { name: 'Perfil', icon: User },
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />;
      default:
        return <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />;
    }
  };

  const handleMenuClick = (itemName: string) => {
    if (itemName === 'Home') {
      router.push('/dashboard');
    } else if (itemName === 'Propostas') {
      router.push('/propostas');
    } else if (itemName === 'Perfil') {
      router.push('/perfil');
    }
  };

  const handleNotificationClick = (notification: Notificacao) => {
    markAsRead(notification.id, notification.link);
  };

  const handleMarkAllAsRead = () => {
    markAllAsRead();
  }

  const formatTimeAgo = (date: Date) => {
    return formatDistanceToNow(date, {
      addSuffix: true,
      locale: ptBR,
    });
  };

  
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Notificações</h1>
              {initialUnreadCount > 0 && (
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm font-medium">
                  {initialUnreadCount} não lida(s)
                </span>
              )}
            </div>
            
            {initialUnreadCount > 0 && (
              <button 
                onClick={handleMarkAllAsRead}
                className="text-blue-600 hover:text-blue-700..."
              >
                Marcar todas como lidas
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Lista de Notificações */}
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <div className="space-y-3">
          {initialNotifications.map((notification) => (
            <div
              key={notification.id}
              onClick={() => handleNotificationClick(notification)} // Chama a nova função
              className={`bg-white rounded-xl p-4 sm:p-5 cursor-pointer ... ${
                !notification.lida ? 'border-l-4 border-l-blue-500' : ''
              }`}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                  {getNotificationIcon(notification.tipo)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row ...">
                    <h3 className={`font-semibold ... ${
                      !notification.lida ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {notification.titulo}
                    </h3>
                    <span className="text-xs sm:text-sm text-gray-500 ...">
                      {formatTimeAgo(notification.createdAt)}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 ...">
                    {notification.mensagem}
                  </p>
                  
                  {!notification.lida && (
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-xs text-blue-600 font-medium">Nova</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {initialNotifications.length === 0 && (
          <div className="text-center py-12 sm:py-16">
          </div>
        )}
      </div>

      {/* Menu Inferior */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16">
        <div className="max-w-6xl mx-auto h-full">
          <div className="grid grid-cols-4 h-full">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleMenuClick(item.name)}
                  className={`flex flex-col items-center justify-center py-2 transition-colors h-full ${
                    item.active
                      ? 'text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mb-1" />
                  <span className="text-xs font-medium">{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}