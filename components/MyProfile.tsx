'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { User, MapPin, Star, Edit, Mail, Phone, Calendar, Home, Bell, MessageCircle } from 'lucide-react';

export default function MyProfile() {
  const router = useRouter();
  const { data: session } = useSession();
  
  // Dados do usuário (em produção, viria da API)
  const [userData, setUserData] = useState({
    name: "João Silva",
    email: "joao.silva@email.com",
    phone: "(11) 99999-9999",
    profession: "Contratante",
    city: "São Paulo, SP",
    rating: 4.8,
    reviews: 24,
    memberSince: "2024",
    about: "Sou um contratante que valoriza serviços de qualidade e profissionais comprometidos. Sempre em busca das melhores soluções para meus projetos.",
    skills: ["Gestão de Projetos", "Orçamento", "Comunicação", "Planejamento"],
    completedProjects: 12,
    activeProjects: 2
  });

  const menuItems = [
    { name: 'Home', icon: Home, active: false },
    { name: 'Notificações', icon: Bell },
    { name: 'Mensagem', icon: MessageCircle },
    { name: 'Perfil', icon: User, active: true },
  ];

  // Ações do perfil (apenas Editar Perfil)
  const profileActions = [
    {
      icon: Edit,
      label: 'Editar Perfil',
      description: 'Atualize suas informações pessoais',
      onClick: () => console.log('Editar perfil')
    }
  ];

  const handleMenuClick = (itemName: string) => {
    if (itemName === 'Home') {
      router.push('/dashboard');
    } else if (itemName === 'Notificações') {
      router.push('/notificacoes');
    } else if (itemName === 'Mensagem') {
      router.push('/mensagens');
    }
  };

  const handleLogout = () => {
    // Aqui você implementaria o logout
    console.log('Logout realizado');
    router.push('/login');
  };

  // Gerar iniciais do nome
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Meu Perfil</h1>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
        {/* Seção Superior: Foto e Informações Básicas */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
            {/* Foto do Usuário */}
            <div className="flex flex-col items-center sm:items-start gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-500 rounded-full flex items-center justify-center relative">
                <span className="text-white text-2xl sm:text-3xl font-bold">
                  {getInitials(userData.name)}
                </span>
                <button className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
              
              {/* Estatísticas Rápidas */}
              <div className="flex gap-4 text-center">
                <div>
                  <div className="text-lg sm:text-xl font-bold text-gray-900">{userData.completedProjects}</div>
                  <div className="text-xs sm:text-sm text-gray-600">Projetos</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-gray-900">{userData.rating}</div>
                  <div className="text-xs sm:text-sm text-gray-600">Avaliação</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-gray-900">{userData.activeProjects}</div>
                  <div className="text-xs sm:text-sm text-gray-600">Ativos</div>
                </div>
              </div>
            </div>
            
            {/* Informações Principais */}
            <div className="flex-1 w-full text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div className="flex-1">
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                    {userData.name}
                  </h1>
                  <p className="text-lg text-gray-700 mb-2">{userData.profession}</p>
                  
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-gray-600 text-sm sm:text-base">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{userData.city}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{userData.rating} ({userData.reviews} avaliações)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Membro desde {userData.memberSince}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Informações de Contato */}
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{userData.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{userData.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sobre */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Sobre</h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            {userData.about}
          </p>
        </div>

        {/* Habilidades */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Minhas Habilidades</h2>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {userData.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Ações do Perfil - APENAS EDITAR PERFIL */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Gerenciar Perfil</h2>
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {profileActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <button
                  key={index}
                  onClick={action.onClick}
                  className="bg-white border border-gray-200 rounded-xl p-4 text-left hover:border-blue-300 hover:shadow-md transition-all group w-full"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      <IconComponent className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">{action.label}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{action.description}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
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