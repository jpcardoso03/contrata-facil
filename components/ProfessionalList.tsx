'use client';

import { Home, Bell, MessageCircle, User, Filter, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Professional {
  id: string;
  name: string;
  photoUrl: string;
  rating: number;
  hourlyRate: number;
  reviews?: number;
}

interface ProfessionalListProps {
  serviceName: string;
}

export default function ProfessionalList({ serviceName }: ProfessionalListProps) {
  const router = useRouter();
  
  const professionals: Professional[] = [
    {
      id: "1",
      name: "Carlos Silva",
      photoUrl: "https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBlbGVjdHJpY2lhbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODAzMDAyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      hourlyRate: 85,
      rating: 4.9,
      reviews: 127
    },
    {
      id: "2", 
      name: "Ana Costa",
      photoUrl: "https://images.unsplash.com/photo-1746652433560-fb39d6136620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3JrZXIlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NTgwMzAwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      hourlyRate: 75,
      rating: 4.8,
      reviews: 94
    },
    {
      id: "3",
      name: "Roberto Oliveira",
      photoUrl: "https://images.unsplash.com/photo-1660074127797-1c429fbb8cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWNobmljaWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4MDMwMDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      hourlyRate: 90,
      rating: 4.7,
      reviews: 156
    },
    {
      id: "4",
      name: "Maria Santos",
      photoUrl: "https://images.unsplash.com/photo-1717229773894-8e7c04aac950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzZXJ2aWNlJTIwd29ya2VyfGVufDF8fHx8MTc1ODAyMzU0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      hourlyRate: 80,
      rating: 4.6,
      reviews: 89
    }
  ];

  const menuItems = [
    { name: 'Home', icon: Home, active: false },
    { name: 'Notificações', icon: Bell },
    { name: 'Mensagem', icon: MessageCircle },
    { name: 'Perfil', icon: User },
  ];

  const renderStars = (rating: number) => {
    return '★★★★★'.slice(0, 5) + '☆'.slice(0, 5 - 5);
  };

  const handleMenuClick = (itemName: string) => {
    if (itemName === 'Home') {
      router.push('/dashboard');
    } else if (itemName === 'Notificações') {
      router.push('/notificacoes');
    } else if (itemName === 'Mensagem') {
      console.log('Ir para mensagens');
    } else if (itemName === 'Perfil') {
      console.log('Ir para perfil');
    }
  };

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-white pb-20"> {/* Adicionei pb-20 no container principal */}
      {/* Header com botão voltar e filtro - RESPONSIVO */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button 
              onClick={handleBackClick}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">{serviceName}</h1>
              <p className="text-sm text-gray-600">{professionals.length} profissionais encontrados</p>
            </div>
          </div>
          
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
            <Filter className="w-4 h-4" />
            Filtrar
          </button>
        </div>
      </div>

      {/* Lista de Profissionais - PADDING BOTTOM REMOVIDO */}
      <div className="max-w-4xl mx-auto p-4 sm:p-6"> {/* Removi o pb-32 */}
        <div className="space-y-4">
          {professionals.map((professional, index) => (
            <div key={professional.id}>
              {/* Card do Profissional */}
              <Link href={`/profissional/${professional.id}`}>
                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-md transition-all cursor-pointer">
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    {/* Foto circular */}
                    <div className="flex-shrink-0">
                      <img
                        src={professional.photoUrl}
                        alt={professional.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-gray-200"
                      />
                    </div>
                    
                    {/* Informações */}
                    <div className="flex-1 w-full text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                            {professional.name}
                          </h3>
                          <div className="flex flex-col sm:flex-row items-center gap-2 mb-2">
                            <div className="flex text-yellow-400 text-base sm:text-lg">
                              {renderStars(professional.rating)}
                            </div>
                            <span className="text-gray-600 font-medium">
                              {professional.rating}
                            </span>
                            {professional.reviews && (
                              <span className="text-gray-400 text-sm">
                                ({professional.reviews} avaliações)
                              </span>
                            )}
                          </div>
                        </div>
                        
                        {/* Preço */}
                        <div className="text-center sm:text-right">
                          <div className="text-xl sm:text-2xl font-bold text-green-600">
                            R$ {professional.hourlyRate}/h
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Linha divisória (exceto no último) */}
              {index < professionals.length - 1 && (
                <div className="border-t border-gray-200 my-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Menu Inferior Fixo - ALTURA FIXA */}
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