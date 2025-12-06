'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MessageSquare, User, Check, CheckCheck, Search } from 'lucide-react';

interface Conversation {
  id: string;
  contactName: string;
  contactProfession: string;
  contactAvatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  lastMessageStatus: 'sent' | 'delivered' | 'read';
  isOnline: boolean;
}

export default function ChatHistory() {
  const router = useRouter();
  
  const [conversations] = useState<Conversation[]>([
    {
      id: '1',
      contactName: 'Maria Silva',
      contactProfession: 'Cliente',
      contactAvatar: '/avatars/maria.jpg',
      lastMessage: 'Obrigada pelo serviço! Ficou perfeito.',
      lastMessageTime: '10:30',
      unreadCount: 0,
      lastMessageStatus: 'read',
      isOnline: true
    },
    {
      id: '2',
      contactName: 'Carlos Santos',
      contactProfession: 'Eletricista',
      contactAvatar: '/avatars/carlos.jpg',
      lastMessage: 'Posso ir amanhã às 14h para avaliar o problema.',
      lastMessageTime: 'Ontem',
      unreadCount: 2,
      lastMessageStatus: 'delivered',
      isOnline: false
    },
    {
      id: '3',
      contactName: 'Ana Oliveira',
      contactProfession: 'Encanadora',
      contactAvatar: '/avatars/ana.jpg',
      lastMessage: 'O material chegou, podemos marcar a instalação.',
      lastMessageTime: '15/12',
      unreadCount: 0,
      lastMessageStatus: 'read',
      isOnline: true
    },
    {
      id: '4',
      contactName: 'Roberto Lima',
      contactProfession: 'Pintor',
      contactAvatar: '/avatars/roberto.jpg',
      lastMessage: 'Qual seria o orçamento para pintar a sala?',
      lastMessageTime: '14/12',
      unreadCount: 1,
      lastMessageStatus: 'sent',
      isOnline: false
    },
    {
      id: '5',
      contactName: 'Fernanda Costa',
      contactProfession: 'Cliente',
      contactAvatar: '/avatars/fernanda.jpg',
      lastMessage: 'Preciso de um serviço de jardinagem urgente.',
      lastMessageTime: '13/12',
      unreadCount: 0,
      lastMessageStatus: 'read',
      isOnline: false
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredConversations = conversations.filter(conv =>
    conv.contactName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.contactProfession.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleConversationClick = (conversationId: string) => {
    router.push(`/chat/${conversationId}`);
  };

  const getStatusIcon = (status: Conversation['lastMessageStatus']) => {
    switch (status) {
      case 'sent': return <Check className="w-3 h-3" />;
      case 'delivered': return <CheckCheck className="w-3 h-3 text-gray-400" />;
      case 'read': return <CheckCheck className="w-3 h-3 text-blue-500" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
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
        {/* Search Bar */}
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

        {/* Conversations List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {filteredConversations.length === 0 ? (
            <div className="p-8 text-center">
              <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {searchTerm ? `Nenhuma conversa encontrada para "${searchTerm}"` : 'Nenhuma conversa'}
              </h3>
              <p className="text-gray-600">
                {searchTerm ? 'Tente buscar por outro nome ou profissão' : 'Você ainda não tem conversas'}
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Limpar busca
                </button>
              )}
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
                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                        {conversation.contactAvatar ? (
                          <img 
                            src={conversation.contactAvatar} 
                            alt={conversation.contactName}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User className="w-6 h-6 text-blue-600" />
                        )}
                      </div>
                      {conversation.isOnline && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>

                    {/* Conversation Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <h3 className="font-semibold text-gray-900 truncate">
                            {conversation.contactName}
                          </h3>
                          <p className="text-sm text-gray-600">{conversation.contactProfession}</p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-xs text-gray-500">
                            {conversation.lastMessageTime}
                          </span>
                          {conversation.unreadCount > 0 && (
                            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full min-w-[20px] text-center">
                              {conversation.unreadCount}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-700 truncate pr-2">
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
    </div>
  );
}