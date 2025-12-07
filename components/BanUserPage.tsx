'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, User, AlertTriangle, CheckCircle, ShieldCheck } from 'lucide-react';
import { toggleUserBanStatus } from '@/app/banir-usuario/actions';

interface UserData {
  id: string;
  name: string;
  email: string;
  profession: string;
  city: string;
  photoUrl: string | null;
  isActive: boolean;
}

interface BanUserPageProps {
  user: UserData;
}

export default function BanUserPage({ user }: BanUserPageProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [banReason, setBanReason] = useState('');

  const isBanningAction = user.isActive;

  const handleConfirmAction = () => {
    if (isBanningAction && !banReason.trim()) {
       alert('Por favor, informe o motivo para continuar.');
       return;
    }

    startTransition(async () => {
      const result = await toggleUserBanStatus(user.id, isBanningAction);
      
      if (result.success) {
        alert(isBanningAction 
          ? `Usuário ${user.name} foi banido com sucesso.` 
          : `Usuário ${user.name} foi reativado com sucesso.`);
        router.back();
        router.refresh();
      } else {
        alert(`Erro: ${result.error}`);
      }
    });
  };

  const handleCancel = () => {
    router.back();
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const themeColor = isBanningAction ? 'red' : 'green';
  const IconComponent = isBanningAction ? AlertTriangle : ShieldCheck;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center">
          <button 
            onClick={handleCancel}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors mr-3"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-xl font-bold text-gray-900">
            {isBanningAction ? 'Banir Usuário' : 'Reativar Usuário'}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        
        <div className={`bg-${themeColor}-50 border border-${themeColor}-200 rounded-2xl p-6`}>
          <div className="flex items-start gap-3">
            <IconComponent className={`w-6 h-6 text-${themeColor}-600 flex-shrink-0 mt-0.5`} />
            <div>
              <h3 className={`font-semibold text-${themeColor}-900 mb-2`}>
                {isBanningAction 
                  ? 'Atenção: Esta ação suspende o acesso do usuário' 
                  : 'Confirmar reativação de conta'}
              </h3>
              <p className={`text-${themeColor}-700 text-sm`}>
                {isBanningAction
                  ? 'Ao banir este usuário, ele ficará impedido de fazer login, enviar ou receber propostas até que seja reativado.'
                  : 'Ao reativar este usuário, ele recuperará o acesso imediato à plataforma e poderá voltar a negociar.'}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Usuário Selecionado
          </h2>
          
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 ${isBanningAction ? 'bg-blue-500' : 'bg-gray-400'} rounded-full flex items-center justify-center`}>
              {user.photoUrl ? (
                <img 
                  src={user.photoUrl} 
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              ) : (
                <span className="text-white font-bold text-lg">
                  {getInitials(user.name)}
                </span>
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2">
                 <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
                 {!user.isActive && (
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full font-bold">
                        BANIDO
                    </span>
                 )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{user.profession}</span>
                </div>
                <div>
                  <span>📧 {user.email}</span>
                </div>
                <div>
                  <span>📍 {user.city}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isBanningAction && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
             <h2 className="text-lg font-semibold text-gray-900 mb-4">Detalhes</h2>
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Motivo do bloqueio
                </label>
                <textarea
                  value={banReason}
                  onChange={(e) => setBanReason(e.target.value)}
                  rows={3}
                  placeholder="Descreva o motivo..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
                />
             </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleConfirmAction}
            disabled={isPending || (isBanningAction && !banReason.trim())}
            className={`flex-1 text-white py-3 px-6 rounded-lg transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed
                ${isBanningAction ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}
            `}
          >
            {isPending 
                ? 'Processando...' 
                : (isBanningAction ? 'Confirmar Banimento' : 'Reativar Usuário')
            }
          </button>
          <button
            onClick={handleCancel}
            disabled={isPending}
            className="flex-1 border border-gray-300 text-gray-700 bg-white py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}