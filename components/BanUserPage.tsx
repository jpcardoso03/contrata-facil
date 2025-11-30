'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, User, AlertTriangle } from 'lucide-react';

export default function BanUserPage() {
  const router = useRouter();
  const [banReason, setBanReason] = useState('');
  const [banDuration, setBanDuration] = useState('');

  // Dados do usuário (em produção, viriam da API)
  const userData = {
    name: "Ana Maria",
    email: "ana.maria@email.com",
    profession: "Designer",
    city: "São Paulo, SP",
    photoUrl: ""
  };

  const durationOptions = [
    { value: '1', label: '1 dia' },
    { value: '3', label: '3 dias' },
    { value: '7', label: '7 dias' },
    { value: '30', label: '30 dias' },
    { value: 'permanent', label: 'Permanente' }
  ];

  const handleConfirmBan = () => {
    if (!banReason.trim()) {
      alert('Por favor, informe o motivo do banimento');
      return;
    }

    if (!banDuration) {
      alert('Por favor, selecione a duração do banimento');
      return;
    }

    // Aqui você faria a chamada para a API banir o usuário
    console.log('Banindo usuário:', {
      userId: "123",
      userName: userData.name,
      reason: banReason,
      duration: banDuration
    });

    alert(`Usuário ${userData.name} banido com sucesso!`);
    router.back();
  };

  const handleCancel = () => {
    router.back();
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center">
          <button 
            onClick={handleCancel}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors mr-3"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-xl font-bold text-gray-900">Banir Usuário</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Alerta de Aviso */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-900 mb-2">Atenção: Esta ação é irreversível</h3>
              <p className="text-red-700 text-sm">
                Ao banir um usuário, ele perderá acesso à plataforma conforme a duração selecionada. 
                Esta ação será registrada no sistema.
              </p>
            </div>
          </div>
        </div>

        {/* Informações do Usuário */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Usuário a Ser Banido</h2>
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
              {userData.photoUrl ? (
                <img 
                  src={userData.photoUrl} 
                  alt={userData.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              ) : (
                <span className="text-white font-bold text-lg">
                  {getInitials(userData.name)}
                </span>
              )}
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">{userData.name}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{userData.profession}</span>
                </div>
                <div>
                  <span>📧 {userData.email}</span>
                </div>
                <div>
                  <span>📍 {userData.city}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulário de Banimento */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Detalhes do Banimento</h2>

          <div className="space-y-6">
            {/* Motivo do Banimento */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Motivo do banimento *
              </label>
              <textarea
                value={banReason}
                onChange={(e) => setBanReason(e.target.value)}
                rows={4}
                placeholder="Digite o motivo do banimento..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                required
              />
            </div>

            {/* Duração */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duração do banimento *
              </label>
              <select
                value={banDuration}
                onChange={(e) => setBanDuration(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Selecione a duração...</option>
                {durationOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleConfirmBan}
            disabled={!banReason.trim() || !banDuration}
            className="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
          >
            Confirmar Banimento
          </button>
          <button
            onClick={handleCancel}
            className="flex-1 border border-gray-300 text-gray-700 bg-white py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}