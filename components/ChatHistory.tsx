'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MessageSquare, User, Check, CheckCheck, Search, MessageSquareText, Home, FileText, Bell } from 'lucide-react';
import { EnumTipoUsuario } from "@/app/generated/prisma";

export interface Conversation {
  id: string;
  contactName: string;
  contactProfession: string;
  contactAvatar: string | null;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  lastMessageStatus: 'sent' | 'delivered' | 'read';
  isOnline: boolean;
}

interface ChatHistoryProps {
  initialConversations: Conversation[];
  userType: EnumTipoUsuario; 
}

export default function ChatHistory({ initialConversations, userType }: ChatHistoryProps) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredConversations = initialConversations.filter(conv =>
    conv.contactName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.contactProfession.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleConversationClick = (contactId: string) => {
    router.push(`/chat/${contactId}`); 
  };

  const getStatusIcon = (status: Conversation['lastMessageStatus']) => {
    switch (status) {
      case 'sent': return <Check className="w-3 h-3 text-gray-400" />;
      case 'delivered': return <CheckCheck className="w-3 h-3 text-gray-400" />;
      case 'read': return <CheckCheck className="w-3 h-3 text-blue-500" />;
      default: return null;
    }
  };

  const menuItems = [];

  if (userType === EnumTipoUsuario.CONTRATANTE) {
      menuItems.push({ name: 'Home', icon: Home, route: '/dashboard', active: false });
      menuItems.push({ name: 'Busca', icon: Search, route: '/busca-prestadores', active: false });
  } 
  
  if (userType === EnumTipoUsuario.PRESTADOR) {
    menuItems.push({ name: 'Notificações', icon: Bell, route: '/notificacoes', active: false });
  }

  menuItems.push(
    { name: 'Mensagens', icon: MessageSquareText, route: '/mensagens', active: true},
    { name: 'Propostas', icon: FileText, route: '/propostas', active: false},
    { name: 'Perfil', icon: User, route: '/perfil', active: false }
  );

  const handleMenuClick = (route: string) => {
    router.push(route);
  };

  const gridClass = menuItems.length === 5 ? 'grid-cols-5' : 'grid-cols-4';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pb-20">
      <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Mensagens</h1>
                <p className="text-sm text-gray-600">Histórico de conversas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar conversas, pessoas ou mensagens..."
              className="w-full px-4 py-3 pl-10 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {initialConversations.length === 0 ? (
            <div className="p-12 text-center">
              <MessageSquare className="w-16 h-16 text-gray-200 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nenhuma conversa iniciada
              </h3>
              <p className="text-gray-500 max-w-sm mx-auto">
                O usuário não possui nenhuma conversa registrada no momento. Envie uma proposta ou aguarde contato.
              </p>
            </div>
          ) : filteredConversations.length === 0 ? (
            <div className="p-8 text-center">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Nenhum resultado para "{searchTerm}"
              </h3>
              <button
                onClick={() => setSearchTerm('')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Limpar busca
              </button>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => handleConversationClick(conversation.id)}
                  className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden border border-gray-100">
                        {conversation.contactAvatar ? (
                          <img 
                            src={conversation.contactAvatar} 
                            alt={conversation.contactName}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-blue-600 font-bold text-lg">
                            {conversation.contactName.charAt(0).toUpperCase()}
                          </span>
                        )}
                      </div>
                      {conversation.isOnline && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <h3 className="font-semibold text-gray-900 truncate">
                            {conversation.contactName}
                          </h3>
                          <p className="text-sm text-gray-500 font-medium">{conversation.contactProfession}</p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-xs text-gray-400">
                            {conversation.lastMessageTime}
                          </span>
                          {conversation.unreadCount > 0 && (
                            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full min-w-[20px] text-center font-bold">
                              {conversation.unreadCount}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className={`text-sm truncate pr-2 ${conversation.unreadCount > 0 ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
                          {conversation.lastMessage}
                        </p>
                        <div className="flex-shrink-0">
                          {getStatusIcon(conversation.lastMessageStatus)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="max-w-6xl mx-auto h-full">
          <div className={`grid ${gridClass} h-full`}>
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleMenuClick(item.route)}
                  className={`flex flex-col items-center justify-center py-2 transition-colors h-full w-full ${
                    item.active
                      ? 'text-blue-600'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <IconComponent className={`w-6 h-6 mb-1 ${item.active ? 'fill-blue-100' : ''}`} />
                  <span className="text-[10px] font-medium truncate w-full text-center">{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
}