'use client';

import { Home, Bell, MessageCircle, User, Check, MessageSquare } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'success' | 'info';
  read: boolean;
}

export default function NotificationsList() {
  const router = useRouter();
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Serviço Confirmado",
      message: "Seu serviço de elétrica com Carlos Silva foi confirmado para amanhã às 14:00",
      time: "Há 5 minutos",
      type: "success",
      read: false
    },
    {
      id: "2", 
      title: "Nova Mensagem",
      message: "Roberto Oliveira enviou uma mensagem sobre o orçamento",
      time: "Há 3 horas",
      type: "info",
      read: false
    },
    {
      id: "3",
      title: "Serviço Concluído",
      message: "Ana Costa concluiu o serviço de hidráulica",
      time: "Ontem",
      type: "success",
      read: true
    },
    {
      id: "4",
      title: "Atualização do Sistema",
      message: "Novos recursos disponíveis na plataforma",
      time: "2 dias atrás",
      type: "info",
      read: true
    }
  ]);

  const menuItems = [
    { name: 'Home', icon: Home, active: false },
    { name: 'Notificações', icon: Bell, active: true },
    { name: 'Mensagem', icon: MessageCircle },
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
  } else if (itemName === 'Mensagem') {
    router.push('/mensagens');
  } else if (itemName === 'Perfil') {
    router.push('/perfil'); 
  }
};

  const handleNotificationClick = (notificationId: string) => {
    console.log('Clicou na notificação:', notificationId);
  };

  const markAllAsRead = () => {
    setNotifications(prevNotifications => 
      prevNotifications.map(notification => ({
        ...notification,
        read: true
      }))
    );
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header Responsivo */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Notificações</h1>
              {unreadCount > 0 && (
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm font-medium">
                  {unreadCount} não lida(s)
                </span>
              )}
            </div>
            
            {unreadCount > 0 && (
              <button 
                onClick={markAllAsRead}
                className="text-blue-600 hover:text-blue-700 font-medium px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm sm:text-base w-full sm:w-auto text-center"
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
          {notifications.map((notification) => (
            <div
              key={notification.id}
              onClick={() => handleNotificationClick(notification.id)}
              className={`bg-white rounded-xl p-4 sm:p-5 cursor-pointer transition-all hover:shadow-md ${
                !notification.read ? 'border-l-4 border-l-blue-500' : ''
              }`}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                {/* Ícone da Notificação */}
                <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                  {getNotificationIcon(notification.type)}
                </div>
                
                {/* Conteúdo da Notificação */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 mb-2">
                    <h3 className={`font-semibold text-base sm:text-lg ${
                      !notification.read ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {notification.title}
                    </h3>
                    <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                      {notification.time}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {notification.message}
                  </p>
                  
                  {/* Indicador de não lida */}
                  {!notification.read && (
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

        {/* Mensagem quando não há notificações */}
        {notifications.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <Bell className="w-16 h-16 sm:w-20 sm:h-20 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              Nenhuma notificação
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Você está em dia com todas as suas atividades
            </p>
          </div>
        )}
      </div>

      {/* Menu Inferior Fixo */}
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