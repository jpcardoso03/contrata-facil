'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserPlus, Search, Settings, Users, Shield, Tags } from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();

  // Estatísticas mockadas
  const [stats] = useState({
    totalUsers: 1234,
    totalAdmins: 12,
    totalSkills: 48
  });

  // Funções dos botões (por enquanto só console.log)
  const handleCreateAdmin = () => {
    console.log('Criar administrador');
    // router.push('/admin/criar-admin');
  };

  const handleSearchUser = () => {
    console.log('Buscar usuário');
    // router.push('/admin/buscar-usuario');
  };

  const handleManageSkills = () => {
    console.log('Gerenciar habilidades');
    // router.push('/admin/gerenciar-habilidades');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Bem-vindo ao Sistema
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Selecione uma das opções abaixo para começar
          </p>
        </div>
      </div>

      {/* Cards Principais */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 - Criar Conta Administrador */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <UserPlus className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Criar Conta Administrador
              </h3>
              
              <p className="text-gray-600 mb-6 flex-grow">
                Adicione um novo administrador ao sistema com permissões completas
              </p>
              
              <button
                onClick={handleCreateAdmin}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Criar Administrador
              </button>
            </div>
          </div>

          {/* Card 2 - Buscar Usuário */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Buscar Usuário
              </h3>
              
              <p className="text-gray-600 mb-6 flex-grow">
                Pesquise e visualize informações detalhadas de qualquer usuário
              </p>
              
              <button
                onClick={handleSearchUser}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Buscar Usuário
              </button>
            </div>
          </div>

          {/* Card 3 - Gerenciar Habilidades */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Settings className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Gerenciar Habilidades
              </h3>
              
              <p className="text-gray-600 mb-6 flex-grow">
                Configure e edite habilidades disponíveis no sistema
              </p>
              
              <button
                onClick={handleManageSkills}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Gerenciar Habilidades
              </button>
            </div>
          </div>
        </div>

        {/* Cards de Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total de Usuários */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
            <div className="flex justify-center mb-3">
              <Users className="w-8 h-8 text-gray-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Total de Usuários
            </h4>
            <p className="text-3xl font-bold text-gray-900">
              {stats.totalUsers.toLocaleString('pt-BR')}
            </p>
          </div>

          {/* Administradores */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
            <div className="flex justify-center mb-3">
              <Shield className="w-8 h-8 text-gray-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Administradores
            </h4>
            <p className="text-3xl font-bold text-gray-900">
              {stats.totalAdmins}
            </p>
          </div>

          {/* Habilidades Cadastradas */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
            <div className="flex justify-center mb-3">
              <Tags className="w-8 h-8 text-gray-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Habilidades Cadastradas
            </h4>
            <p className="text-3xl font-bold text-gray-900">
              {stats.totalSkills}
            </p>
          </div>
        </div>

        {/* Rodapé */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Sistema de Administração - Controle completo da plataforma
          </p>
        </div>
      </div>
    </div>
  );
}