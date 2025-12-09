'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Home, Bell, User, MapPin, Star, Mail, ShieldBan, ArrowLeft, Briefcase, UserCircle, Shield } from 'lucide-react';
import type { ProcessedUser } from '@/app/adm/usuario/[id]/page';
import { banUserAction, unbanUserAction } from '@/app/adm/actions';

interface UserProfileAdminProps {
  user: ProcessedUser;
}

export default function UserProfileAdmin({ user }: UserProfileAdminProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [userState, setUserState] = useState(user);

  const handleBackClick = () => {
    router.back();
  };

  const handleBanClick = () => {
    if (confirm(`Tem certeza que deseja BANIR o usuário ${user.name}? Essa ação impedirá o acesso dele.`)) {
      startTransition(async () => {
        const result = await banUserAction(user.id);
        if (result.success) {
          alert('Usuário banido com sucesso.');
          router.push('/dashboard'); 
        } else {
          alert('Erro ao banir usuário.');
        }
      });
    }
  };

  const handleUnbanClick = () => {
  if (confirm(`Deseja DESBANIR o usuário ${userState.name}?`)) {
    startTransition(async () => {
      const result = await unbanUserAction(userState.id);
      if (result.success) {
        alert('Usuário desbanido com sucesso.');
        setUserState({ ...userState, active: true }); // ⬅ Atualiza sem recarregar
      } else {
        alert('Erro ao desbanir usuário.');
      }
    });
  }
};

  const getUserTypeBadge = (type: string) => {
    switch (type) {
      case 'PRESTADOR':
        return (
          <span className="flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
            <Briefcase className="w-4 h-4" /> Prestador
          </span>
        );
      case 'CONTRATANTE':
        return (
          <span className="flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
            <UserCircle className="w-4 h-4" /> Contratante
          </span>
        );
      case 'ADMINISTRADOR':
        return (
          <span className="flex items-center gap-1 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
            <Shield className="w-4 h-4" /> Administrador
          </span>
        );
      default:
        return <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Usuário</span>;
    }
  };

  return (
    <div className="min-h-screen bg-white pb-20"> 
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="flex items-center max-w-4xl mx-auto">
          <button 
            onClick={handleBackClick}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors mr-3"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-xl font-bold text-gray-900">Gerenciamento de Usuário</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 sm:p-6"> 
        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border-2 border-gray-200">
                {user.photoUrl ? (
                   <img
                   src={user.photoUrl}
                   alt={user.name || 'Foto'}
                   className="w-full h-full object-cover"
                 />
                ) : (
                  <User className="w-10 h-10 text-gray-400" />
                )}
              </div>
            </div>
            
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-3 mb-2">
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-900 text-center sm:text-left">
                        {user.name}
                    </h1>
                    {getUserTypeBadge(user.userType)}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-gray-600 text-sm sm:text-base">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{user.city}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      <span>{user.email}</span>
                    </div>
                    
                    {user.userType === 'PRESTADOR' && (
                        <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{user.rating} ({user.reviews} avaliações)</span>
                        </div>
                    )}
                  </div>
                </div>
                
                {user.userType === 'PRESTADOR' && user.hourlyRate !== '0' && (
                    <div className="text-center sm:text-right mt-2 sm:mt-0">
                        <div className="text-xl font-bold text-green-600">
                        R$ {user.hourlyRate}/h
                        </div>
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 mb-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Sobre</h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            {user.description || "Este usuário não possui uma descrição."}
          </p>
        </div>

        {user.skills.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 mb-6">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Habilidades</h2>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {user.skills.map((skill, index) => (
                <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium"
                >
                    {skill}
                </span>
                ))}
            </div>
            </div>
        )}

        <div className="border border-red-200 rounded-xl p-4 sm:p-6 bg-red-50">
          <h3 className="text-red-800 font-semibold mb-2 flex items-center gap-2">
            <ShieldBan className="w-5 h-5" />
            Zona de Perigo
          </h3>
          <p className="text-red-600 text-sm mb-4">
            Banir um usuário impedirá que ele envie ou receba propostas.
          </p>
          
          {user.active ? (
            <button
              onClick={() => router.push(`/banir-usuario/${user.id}`)}
              disabled={isPending}
              className="w-full sm:w-auto bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2 font-medium disabled:opacity-50"
            >
              {isPending ? 'Processando...' : 'Banir Usuário'}
            </button>
          ) : (
            <button
              onClick={handleUnbanClick}
              disabled={isPending}
              className="w-full sm:w-auto bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 font-medium disabled:opacity-50"
            >
              {isPending ? 'Processando...' : 'Desbanir Usuário'}
            </button>
          )}
        </div>

      </div>
    </div>
  );
}