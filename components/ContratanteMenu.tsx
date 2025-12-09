'use client';

import { Home, Bell, User, FileText, Search, MessageSquareText } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { HabilidadeCard } from '@/app/dashboard/page';

interface ServicesMenuProps {
  habilidades: HabilidadeCard[];
}

export default function ServicesMenu({ habilidades }: ServicesMenuProps) {
  const router = useRouter();

  const menuItems = [
    { name: 'Home', icon: Home, active: true },
    { name: 'Busca', icon: Search },
    { name: 'Mensagens', icon: MessageSquareText },
    { name: 'Propostas', icon: FileText },
    { name: 'Perfil', icon: User },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    target.style.display = 'none';
    
    const parent = target.parentElement;
    if (parent) {
      parent.classList.add('bg-gray-300');
    }
  };

  const handleMenuClick = (itemName: string) => {
    if (itemName === 'Home') router.push('/dashboard');
    else if (itemName === 'Busca') router.push('/busca-prestadores');
    else if (itemName === 'Mensagens') router.push('/mensagens');
    else if (itemName === 'Propostas') router.push('/propostas');
    else if (itemName === 'Perfil') router.push('/perfil');
  };

  return (
    <div className="min-h-screen bg-white pb-20"> 
      <div className="bg-white border-b border-gray-200 py-4 sm:py-6 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative flex items-center justify-center">
          <h1 className="text-xl sm:text-3xl font-bold text-gray-900 text-center">
            Escolha uma habilidade
          </h1>

          <button 
            onClick={() => router.push('/notificacoes')}
            className="absolute right-4 p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-colors"
            title="Notificações"
          >
            <Bell className="w-6 h-6" />
          </button>

        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {habilidades.map((habilidade) => (
            <Link 
              href={`/servicos/${habilidade.id}`} 
              key={habilidade.id}
            >
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-1">
                <div className="h-40 sm:h-48 bg-gray-200 relative overflow-hidden">
                  <img
                    src={habilidade.imagem_url || '/images/placeholder.png'}
                    alt={habilidade.nome}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    onError={handleImageError}
                  />
                </div>
                
                <div className="p-4 text-center">
                  <span className="text-lg sm:text-xl font-semibold text-gray-900">
                    {habilidade.nome}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16">
        <div className="max-w-6xl mx-auto h-full">
          <div className="grid grid-cols-5 h-full">
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
                  <span className="text-[10px] sm:text-xs font-medium truncate w-full text-center">
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}