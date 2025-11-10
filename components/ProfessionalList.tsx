'use client';

import { Home, Bell, MessageCircle, User, Filter, ChevronLeft, FileText } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import type { ProcessedProfessional } from '@/app/servicos/[id]/page';

interface ProfessionalListProps {
  serviceName: string;
  professionals: ProcessedProfessional[];
}

export default function ProfessionalList({ 
  serviceName, 
  professionals }: ProfessionalListProps) {
  const router = useRouter();

  const menuItems = [
    { name: 'Home', icon: Home, active: false },
    { name: 'Notificações', icon: Bell },
    { name: 'Propostas', icon: FileText },
    { name: 'Perfil', icon: User },
  ];

  const renderStars = (rating: number) => {
    const roundedRating = Math.round(rating);
    return '★'.repeat(roundedRating) + '☆'.repeat(5 - roundedRating);
  };

  const handleMenuClick = (itemName: string) => {
    if (itemName === 'Home') {
      router.push('/dashboard');
    } else if (itemName === 'Notificações') {
      router.push('/notificacoes');
    } else if (itemName === 'Propostas') {
      router.push('/propostas');
    } else if (itemName === 'Perfil') {
      router.push('Ir para perfil');
    }
  };

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header com botão voltar e filtro */}
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
              {/* O 'professionals' agora vem das props */}
              <p className="text-sm text-gray-600">{professionals.length} profissionais encontrados</p>
            </div>
          </div>
          
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
            <Filter className="w-4 h-4" />
            Filtrar
          </button>
        </div>
      </div>

      {/* Lista de Profissionais */}
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <div className="space-y-4">
          {professionals.map((professional, index) => (
            <div key={professional.id}>
              <Link href={`/profissional/${professional.id}`}>
                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-md transition-all cursor-pointer">
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    {/* Foto circular */}
                    <div className="flex-shrink-0">
                      <img
                        src={professional.photoUrl || '/default-avatar.png'} 
                        alt={professional.name || 'Profissional'}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-gray-200"
                      />
                    </div>
                    
                    {/* Informações */}
                    <div className="flex-1 w-full text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              _           <div className="flex-1">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                              {professional.name}
                          </h3>
                          <div className="flex flex-col sm:flex-row items-center gap-2 mb-2">
                            <div className="flex text-yellow-400 text-base sm:text-lg">
                              {renderStars(professional.rating)}
                            </div>
                            <span className="text-gray-600 font-medium">
                              {professional.rating}
                        _   </span>
                            {professional.reviews > 0 && (
                              <span className="text-gray-400 text-sm">
                                ({professional.reviews} avaliações)
                              </span>
                            )}
                          </div>
                        </div>
                        
                        {/* Preço */}
                        <div className="text-center sm:text-right">
                        s <div className="text-xl sm:text-2xl font-bold text-green-600">
                            R$ {professional.hourlyRate}/h
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Linha divisória */}
              {index < professionals.length - 1 && (
                <div className="border-t border-gray-200 my-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Menu Inferior */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16">
      </div>
    </div>
  );
}