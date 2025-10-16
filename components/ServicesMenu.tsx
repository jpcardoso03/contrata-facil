'use client';

import { Home, Bell, MessageCircle, User } from 'lucide-react';

export default function ServicesMenu() {
  const services = [
    {
      id: "electrical",
      name: "Elétrica",
      image: "https://images.unsplash.com/photo-1581166418878-11f0dde922c2?w=400&h=200&fit=crop&crop=center",
    },
    {
      id: "plumbing", 
      name: "Hidráulica",
      image: "https://images.unsplash.com/photo-1454988501794-2992f706932e?w=400&h=200&fit=crop&crop=center",
    },
    {
      id: "painting",
      name: "Pintura",
      image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=400&h=200&fit=crop&crop=center",
    },
    {
      id: "cleaning",
      name: "Limpeza", 
      image: "https://images.unsplash.com/photo-1550963295-019d8a8a61c5?w=400&h=200&fit=crop&crop=center",
    },
    {
      id: "gardening",
      name: "Jardinagem",
      image: "https://images.unsplash.com/photo-1523301551780-cd17359a95d0?w=400&h=200&fit=crop&crop=center", 
    },
    {
      id: "carpentry",
      name: "Marcenaria",
      image: "https://images.unsplash.com/photo-1590880795696-20c7dfadacde?w=400&h=200&fit=crop&crop=center",
    },
  ];

  const menuItems = [
    { name: 'Home', icon: Home, active: true },
    { name: 'Notificações', icon: Bell },
    { name: 'Mensagem', icon: MessageCircle },
    { name: 'Perfil', icon: User },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    target.style.display = 'none';
    
    // Solução mais segura para o parentElement
    const parent = target.parentElement;
    if (parent) {
      parent.classList.add('bg-gray-300');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Escolha um serviço
          </h1>
        </div>
      </div>

      {/* Grid de Serviços */}
      <div className="max-w-6xl mx-auto p-6 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-1"
            >
              {/* PARTE DE CIMA: Imagem */}
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onError={handleImageError}
                />
              </div>
              
              {/* PARTE DE BAIXO: Nome do serviço */}
              <div className="p-4 text-center">
                <span className="text-xl font-semibold text-gray-900">
                  {service.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-gray-300 my-6"></div>
      </div>

      {/* Menu Inferior Fixo */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={index}
                  className={`flex flex-col items-center justify-center py-5 transition-colors ${
                    item.active
                      ? 'text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <IconComponent className="w-7 h-7 mb-1" />
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}