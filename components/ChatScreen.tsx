'use client';

import { useState, useEffect, useRef, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Send, User, Search, MoreVertical, Check, CheckCheck, ArrowLeft, Paperclip, Smile, Ban, AlertCircle, Home, Bell, FileText, MessageSquareText } from 'lucide-react';
import { sendMessageAction } from '@/app/chat/actions';
import { EnumTipoUsuario } from "@/app/generated/prisma";

export interface ChatMessage {
  id: number;
  text: string;
  sender: 'me' | 'them';
  time: string;
  status: 'sent' | 'delivered' | 'read';
}

export interface ChatContact {
  id: string;
  name: string;
  profession: string;
  avatar: string | null;
  online: boolean;
  active: boolean; 
}

interface ChatScreenProps {
  contact: ChatContact;
  initialMessages: ChatMessage[];
  currentUserId: string;
  isCurrentUserActive: boolean;
  userType: EnumTipoUsuario; // Nova prop
}

export default function ChatScreen({ contact, initialMessages, isCurrentUserActive, userType }: ChatScreenProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    setMessages(initialMessages);
  }, [initialMessages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!isCurrentUserActive || !contact.active) return;

    const interval = setInterval(() => {
      router.refresh();
    }, 5000);
    return () => clearInterval(interval);
  }, [router, isCurrentUserActive, contact.active]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !isCurrentUserActive || !contact.active) return;

    const tempMessage: ChatMessage = {
      id: Date.now(),
      text: newMessage,
      sender: 'me',
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    };

    setMessages((prev) => [...prev, tempMessage]);
    const messageToSend = newMessage;
    setNewMessage('');

    const formData = new FormData();
    formData.append('recipientId', contact.id);
    formData.append('content', messageToSend);

    startTransition(async () => {
        const result = await sendMessageAction(formData);
        if (!result.success) {
            alert(result.error);
            setMessages((prev) => prev.filter(m => m.id !== tempMessage.id));
        } else {
            router.refresh();
        }
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleBack = () => {
    router.push('/mensagens');
  };

  const getStatusIcon = (status: ChatMessage['status']) => {
    switch (status) {
      case 'sent': return <Check className="w-3 h-3 text-gray-400" />;
      case 'delivered': return <CheckCheck className="w-3 h-3 text-gray-400" />;
      case 'read': return <CheckCheck className="w-3 h-3 text-blue-500" />;
      default: return null;
    }
  };

  const isChatBlocked = !isCurrentUserActive || !contact.active;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col pb-20">
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
             <button 
              onClick={handleBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors mr-2 md:hidden"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>

            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden">
                {contact.avatar ? (
                    <img src={contact.avatar} alt={contact.name} className="w-full h-full object-cover" />
                ) : (
                    <User className="w-6 h-6 text-blue-600" />
                )}
              </div>
              {contact.online && contact.active && isCurrentUserActive && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div>
              <h1 className="font-semibold text-gray-900 text-sm sm:text-base flex items-center gap-2">
                {contact.name}
                {!contact.active && (
                    <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold">SUSPENSO</span>
                )}
              </h1>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm text-gray-600">{contact.profession}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreVertical className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden max-w-6xl mx-auto w-full flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {messages.map((message, index) => (
            <div
              key={message.id || index}
              className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] sm:max-w-xl ${message.sender === 'me' ? 'order-1' : 'order-2'}`}>
                <div className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`px-4 py-3 rounded-2xl shadow-sm ${message.sender === 'me'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-white text-gray-900 border border-gray-200 rounded-bl-none'
                      }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>

                <div className={`flex items-center gap-1 mt-1 ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                  <span className="text-[10px] sm:text-xs text-gray-500">{message.time}</span>
                  {message.sender === 'me' && (
                    <div className="flex items-center">
                      {getStatusIcon(message.status)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t border-gray-200 bg-white p-3 sm:p-4 sticky bottom-0">
          <div className="max-w-6xl mx-auto">
            
            {isChatBlocked ? (
                <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-200 text-gray-500 gap-2">
                    {!isCurrentUserActive ? (
                        <>
                            <AlertCircle className="w-5 h-5 text-red-500" />
                            <span className="text-sm font-medium text-red-600">Sua conta está suspensa. Você não pode enviar mensagens.</span>
                        </>
                    ) : (
                        <>
                            <Ban className="w-5 h-5" />
                            <span className="text-sm">Não é possível enviar mensagens para este usuário.</span>
                        </>
                    )}
                </div>
            ) : (
                <div className="flex items-end gap-2 sm:gap-3">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors hidden sm:block">
                    <Paperclip className="w-5 h-5 text-gray-600" />
                </button>
                
                <div className="flex-1 relative">
                    <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Digite sua mensagem..."
                    rows={1}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none min-h-[44px] max-h-32 text-sm sm:text-base text-gray-900"
                    />
                    <button className="absolute right-2 bottom-2.5 p-1 hover:bg-gray-100 rounded transition-colors text-gray-400">
                    <Smile className="w-5 h-5" />
                    </button>
                </div>

                <button
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim() || isPending}
                    className={`p-3 rounded-lg flex-shrink-0 transition-colors ${
                        newMessage.trim() && !isPending ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-200 text-gray-400'
                    }`}
                >
                    <Send className="w-5 h-5" />
                </button>
                </div>
            )}

          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20">
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