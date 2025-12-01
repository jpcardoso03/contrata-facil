'use client';

import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { User, MapPin, Star, Edit, Mail, Phone, Calendar, Home, Bell, FileText, LogOut, Search } from 'lucide-react';
import type { ProcessedUserProfile } from '@/app/perfil/page'; 
import { EnumTipoUsuario } from '@/app/generated/prisma';

interface MyProfileClientProps {
  user: ProcessedUserProfile;
}

export default function MyProfileClient({ user }: MyProfileClientProps) {
  const router = useRouter();
  
  const isPrestador = user.tipo_usuario === EnumTipoUsuario.PRESTADOR;
  const isAdm = user.tipo_usuario === EnumTipoUsuario.ADMINISTRADOR;
  const isContratante = user.tipo_usuario === EnumTipoUsuario.CONTRATANTE;

  const menuItems = [];

  if (!isPrestador) {
    menuItems.push({ name: 'Home', icon: Home, active: false });
  }

  if (isAdm) {
    menuItems.push({ name: 'Busca', icon: Search, active: false });
  }

  if (!isAdm) {
    menuItems.push({ name: 'Notificações', icon: Bell, active: false });
    menuItems.push({ name: 'Propostas', icon: FileText, active: false });
  }

  menuItems.push({ name: 'Perfil', icon: User, active: true });

  const profileActions = [
    {
      icon: Edit,
      label: 'Editar Perfil',
      description: 'Atualize suas informações pessoais',
      onClick: () => router.push('editar-perfil')
    },
    {
      icon: LogOut,
      label: 'Sair (Logout)',
      description: 'Desconecte-se da sua conta',
      onClick: () => signOut({ callbackUrl: '/login' })
    }
  ];

  const handleMenuClick = (itemName: string) => {
    if (itemName === 'Home') {
      if (isContratante) router.push('/dashboard');
      if (isAdm) router.push('/adm');
    } 
    else if (itemName === 'Busca') {
      router.push('/busca');
    }
    else if (itemName === 'Notificações') {
      router.push('/notificacoes');
    } 
    else if (itemName === 'Propostas') {
      router.push('/propostas');
    }
  };

  const getInitials = (name: string | null) => {
    if (!name) return '??';
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
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
            <div className="flex flex-col items-center sm:items-start gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-500 rounded-full flex items-center justify-center relative overflow-hidden">
                {user.image ? (
                  <img
                    src={user.image}
                    alt={user.name || 'Foto de perfil'}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-white text-2xl sm:text-3xl font-bold">
                    {getInitials(user.name)}
                  </span>
                )}
                <button className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex gap-4 text-center">
                <div>
                  <div className="text-lg sm:text-xl font-bold text-gray-900">{user.completedProjects}</div>
                  <div className="text-xs sm:text-sm text-gray-600">Concluídos</div>
                </div>
                
                {isPrestador && (
                  <div>
                    <div className="text-lg sm:text-xl font-bold text-gray-900">{user.rating}</div>
                    <div className="text-xs sm:text-sm text-gray-600">Avaliação</div>
                  </div>
                )}
                
                <div>
                  <div className="text-lg sm:text-xl font-bold text-gray-900">{user.activeProjects}</div>
                  <div className="text-xs sm:text-sm text-gray-600">Ativos</div>
                </div>
              </div>
            </div>
            
            {/* Informações Principais */}
            <div className="flex-1 w-full text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div className="flex-1">
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                    {user.name}
                  </h1>
                  
                  {isPrestador && user.profissao && (
                    <p className="text-lg text-gray-700 mb-2">{user.profissao}</p>
                  )}
                  
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-gray-600 text-sm sm:text-base">
                    {user.city && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{user.city}</span>
                      </div>
                    )}
                    
                    {isPrestador && (
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{user.rating} ({user.reviews} avaliações)</span>
                      </div>
                    )}
                    
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Membro desde {user.memberSince}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Informações de Contato */}
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{user.email}</span>
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
            {user.sobre || (isPrestador ? 'Este profissional ainda não adicionou uma descrição.' : 'Este usuário ainda não adicionou uma descrição.')}
          </p>
        </div>

        {isPrestador && user.skills.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Minhas Habilidades</h2>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {user.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Ações Perfil */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Gerenciar Perfil</h2>
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {profileActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <button
                  key={index}
                  onClick={action.onClick}
                  className={`bg-white border rounded-xl p-4 text-left hover:shadow-md transition-all group w-full ${
                    action.label.includes('Sair') 
                    ? 'border-gray-200 hover:border-red-300' 
                    : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg transition-colors ${
                      action.label.includes('Sair') 
                      ? 'bg-red-100 group-hover:bg-red-200' 
                      : 'bg-blue-100 group-hover:bg-blue-200'
                    }`}>
                      <IconComponent className={`w-5 h-5 ${
                        action.label.includes('Sair') ? 'text-red-600' : 'text-blue-600'
                      }`} />
                    </div>
                    <div>
                      <div className={`font-semibold text-sm sm:text-base ${
                        action.label.includes('Sair') ? 'text-red-700' : 'text-gray-900'
                      }`}>{action.label}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{action.description}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Menu Inferior Atualizado com Flexbox para ajustar a qualquer quantidade de itens */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16">
        <div className="max-w-6xl mx-auto h-full">
          {/* Mudei de grid-cols-4 para flex justify-between para se adaptar à quantidade de itens */}
          <div className="flex items-center justify-between h-full px-2">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleMenuClick(item.name)}
                  // w-full garante distribuição igual do espaço
                  className={`flex flex-col items-center justify-center py-2 transition-colors h-full w-full ${
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