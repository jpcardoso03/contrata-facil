'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, KeyboardEvent } from 'react';
import { Send, Search, Paperclip, Smile, MoreVertical, Check, CheckCheck, ArrowLeft, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'me' | 'them';
  time: string;
  status: 'sent' | 'delivered' | 'read';
}

export default function ChatPage() {
  const params = useParams();
  const router = useRouter();
  const conversationId = params.id as string;

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Olá, tudo bem? Precito de um eletricista urgente!', sender: 'them', time: '09:30', status: 'sent' },
    { id: 2, text: 'Olá! Sim, posso ajudar. Qual é o problema?', sender: 'me', time: '09:32', status: 'read' },
    { id: 3, text: 'Meus disjuntores estão desarmando toda hora.', sender: 'them', time: '09:33', status: 'sent' },
    { id: 4, text: 'Entendi. Pode ser sobrecarga ou curto. Posso ir hoje às 14h?', sender: 'me', time: '09:35', status: 'delivered' },
    { id: 5, text: 'Perfeito! O endereço é Rua das Flores, 123.', sender: 'them', time: '09:36', status: 'sent' },
    { id: 6, text: 'Anotado. Levo material ou precisa de algo específico?', sender: 'me', time: '09:37', status: 'read' },
    { id: 7, text: 'Só os disjuntores mesmo. Até mais tarde!', sender: 'them', time: '09:38', status: 'sent' },
  ]);

  const [newMessage, setNewMessage] = useState('');
  
  // Dados do contato baseados no ID
  const contact = {
    id: conversationId,
    name: 'Maria Silva',
    profession: 'Cliente',
    online: true,
    avatar: '/avatars/maria.jpg'
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg: Message = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'me',
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        status: 'sent'
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleBack = () => {
    router.push('/mensagens');
  };

  const getStatusIcon = (status: Message['status']) => {
    switch (status) {
      case 'sent': return <Check className="w-3 h-3" />;
      case 'delivered': return <CheckCheck className="w-3 h-3 text-gray-400" />;
      case 'read': return <CheckCheck className="w-3 h-3 text-blue-500" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col">
      {/* Header com botão de voltar */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={handleBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors mr-2"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                {contact.avatar ? (
                  <img 
                    src={contact.avatar} 
                    alt={contact.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-6 h-6 text-blue-600" />
                )}
              </div>
              {contact.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            
            <div>
              <h1 className="font-semibold text-gray-900">{contact.name}</h1>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">{contact.profession}</span>
                {contact.online && (
                  <>
                    <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600">Online</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreVertical className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 overflow-hidden max-w-6xl mx-auto w-full">
        <div className="h-full flex flex-col">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            <div className="text-center">
              <div className="inline-block px-3 py-1 bg-gray-100 rounded-full">
                <span className="text-sm text-gray-600">Hoje</span>
              </div>
            </div>

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xl ${message.sender === 'me' ? 'order-1' : 'order-2'}`}>
                  {message.sender === 'them' && (
                    <div className="flex items-center gap-2 mb-1 ml-2">
                      <span className="text-xs font-medium text-gray-700">{contact.name}</span>
                      <span className="text-xs text-gray-500">{message.time}</span>
                    </div>
                  )}
                  
                  <div className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`px-4 py-3 rounded-2xl ${message.sender === 'me'
                          ? 'bg-blue-600 text-white rounded-br-none'
                          : 'bg-white text-gray-900 border border-gray-200 rounded-bl-none'
                        }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>

                  {message.sender === 'me' && (
                    <div className="flex items-center gap-2 justify-end mt-1">
                      <span className="text-xs text-gray-500">{message.time}</span>
                      <div className="flex items-center">
                        {getStatusIcon(message.status)}
                      </div>
                    </div>
                  )}
                </div>

                {/* Avatar */}
                <div className={`flex items-end ${message.sender === 'me' ? 'order-2 ml-2' : 'order-1 mr-2'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === 'me' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                    <User className={`w-4 h-4 ${message.sender === 'me' ? 'text-blue-600' : 'text-gray-600'}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 bg-white p-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-end gap-3">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Paperclip className="w-5 h-5 text-gray-600" />
                </button>
                
                <div className="flex-1 relative">
                  <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Digite sua mensagem..."
                    rows={1}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none min-h-[44px] max-h-32"
                  />
                  <button className="absolute right-3 bottom-3 p-1 hover:bg-gray-100 rounded transition-colors">
                    <Smile className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                <button
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className={`p-3 rounded-lg ${newMessage.trim()
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-gray-200'
                    } transition-colors`}
                >
                  <Send className={`w-5 h-5 ${newMessage.trim() ? 'text-white' : 'text-gray-400'}`} />
                </button>
              </div>
              
              <div className="mt-2 text-xs text-gray-500">
                Pressione Enter para enviar • Shift + Enter para nova linha
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}