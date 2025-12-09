'use client';

import { useRouter } from 'next/navigation';
import { UserPlus, Search, Settings, Home, User, Users, Briefcase, UserCheck, ChartArea } from 'lucide-react';

interface AdminHomeProps {
  data: {
    totalUsuarios: number;
    totalAdmins: number;
    totalContratantes: number;
    totalPrestadores: number;
    totalHabilidades: number;
  };
}

export default function AdminHomeScreen({ data }: AdminHomeProps) {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  const handleMenuClick = (itemName: string) => {
    if (itemName === 'Home') router.push('/adm');
    else if (itemName === 'Relatorios') router.push('/relatorios')
    else if (itemName === 'Busca') router.push('/busca');
    else if (itemName === 'Perfil') router.push('/perfil'); 
  };

  const stats = [
    { 
      label: 'Total de Usuários', 
      value: data.totalUsuarios, 
      icon: Users,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    { 
      label: 'Contratantes', 
      value: data.totalContratantes, 
      icon: User,
      color: 'text-green-600',
      bg: 'bg-green-50'
    },
    { 
      label: 'Prestadores', 
      value: data.totalPrestadores, 
      icon: Briefcase,
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    { 
      label: 'Administradores', 
      value: data.totalAdmins, 
      icon: UserCheck,
      color: 'text-orange-600',
      bg: 'bg-orange-50'
    },
    { 
      label: 'Habilidades', 
      value: data.totalHabilidades, 
      icon: Settings,
      color: 'text-gray-600',
      bg: 'bg-gray-100'
    },
  ];

  const menuItems = [
    { name: 'Home', icon: Home, active: true },
    { name: 'Relatorios', icon: ChartArea, active: false},
    { name: 'Busca', icon: Search, active: false },
    { name: 'Perfil', icon: User, active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="p-6 md:p-10">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div>
            <h1 className="text-2xl font-bold text-blue-900">Painel Administrativo</h1>
            <p className="text-blue-500 mt-1">Visão geral e gerenciamento do sistema</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-start h-full hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <UserPlus className="w-6 h-6" />
              </div>
              <h3 className="text-gray-700 font-semibold text-lg mb-2">Novo Administrador</h3>
              <p className="text-gray-500 text-sm mb-6 flex-1">
                Adicione um novo administrador ao sistema com permissões completas.
              </p>
              <button 
                onClick={() => handleNavigate('/adm/criar')} 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
              >
                Criar Conta
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-start h-full hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-gray-700 font-semibold text-lg mb-2">Buscar Usuário</h3>
              <p className="text-gray-500 text-sm mb-6 flex-1">
                Pesquise, edite ou visualize informações detalhadas de qualquer usuário.
              </p>
              <button 
                onClick={() => handleNavigate('/busca')} 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
              >
                Acessar Busca
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-start h-full hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-gray-700 font-semibold text-lg mb-2">Habilidades</h3>
              <p className="text-gray-500 text-sm mb-6 flex-1">
                Gerencie o catálogo de habilidades e serviços disponíveis.
              </p>
              <button 
                onClick={() => handleNavigate('/gerenciar-habilidades')} 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
              >
                Gerenciar
              </button>
            </div>

          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Estatísticas do Sistema</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center hover:border-blue-300 transition-colors">
                    <div className={`p-2 rounded-lg mb-2 ${stat.bg}`}>
                      <Icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">{stat.label}</p>
                    <p className="text-gray-900 text-2xl font-bold mt-1">
                      {new Intl.NumberFormat('pt-BR').format(stat.value)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

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