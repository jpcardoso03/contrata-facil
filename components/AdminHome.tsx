'use client';

import { useRouter } from 'next/navigation';
import { UserPlus, Search, Settings, Home, User } from 'lucide-react';

export default function AdminHomeScreen() {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  const handleMenuClick = (itemName: string) => {
    if (itemName === 'Home') router.push('/admin');
    else if (itemName === 'Busca') router.push('/busca');
    else if (itemName === 'Perfil') router.push('/perfil'); 
  };

  // Dados mockados para visualizar o layout (depois podemos conectar na API)
  const stats = [
    { label: 'Total de Usuários', value: '1,234' },
    { label: 'Administradores', value: '12' },
    { label: 'Habilidades Cadastradas', value: '48' },
  ];

  const menuItems = [
    { name: 'Home', icon: Home, active: false },
    { name: 'Busca', icon: Search, active: true },
    { name: 'Perfil', icon: User, active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Cabeçalho */}
        <div>
          <h1 className="text-2xl font-bold text-blue-900">Bem-vindo ao Sistema</h1>
          <p className="text-blue-500 mt-1">Selecione uma das opções abaixo para começar</p>
        </div>

        {/* Cards de Ação (Main Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Criar Administrador */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-start h-full hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
              <UserPlus className="w-6 h-6" />
            </div>
            <h3 className="text-gray-700 font-semibold text-lg mb-2">Criar Conta Administrador</h3>
            <p className="text-gray-500 text-sm mb-6 flex-1">
              Adicione um novo administrador ao sistema com permissões completas
            </p>
            <button 
              onClick={() => handleNavigate('/admin/criar')} 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
            >
              Criar Administrador
            </button>
          </div>

          {/* Card 2: Buscar Usuário */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-start h-full hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-gray-700 font-semibold text-lg mb-2">Buscar Usuário</h3>
            <p className="text-gray-500 text-sm mb-6 flex-1">
              Pesquise e visualize informações detalhadas de qualquer usuário
            </p>
            <button 
              onClick={() => handleNavigate('/busca')} 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
            >
              Buscar Usuário
            </button>
          </div>

          {/* Card 3: Gerenciar Habilidades */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-start h-full hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
              <Settings className="w-6 h-6" />
            </div>
            <h3 className="text-gray-700 font-semibold text-lg mb-2">Gerenciar Habilidades</h3>
            <p className="text-gray-500 text-sm mb-6 flex-1">
              Configure e edite habilidades disponíveis no sistema
            </p>
            <button 
              onClick={() => handleNavigate('/admin/habilidades')} 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
            >
              Gerenciar Habilidades
            </button>
          </div>

        </div>

        {/* Cards de Estatísticas (Rodapé) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-blue-500 font-medium mb-2 text-sm">{stat.label}</p>
              <p className="text-gray-800 text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16">
        <div className="max-w-6xl mx-auto h-full">
          <div className="grid grid-cols-3 h-full">
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
    </div>
  );
}