'use client';

import { Home, Bell, User, MapPin, Star, Mail, FileText, AlertTriangle, Ban } from 'lucide-react';
import { useRouter } from 'next/navigation';
import type { ProcessedProfessional } from '@/app/profissional/[id]/page';

interface ProfessionalProfileProps {
  professional: ProcessedProfessional;
  isCurrentUserActive: boolean;
}

export default function ProfessionalProfile({ professional, isCurrentUserActive }: ProfessionalProfileProps) {
  const router = useRouter();

  const menuItems = [
    { name: 'Home', icon: Home, active: false },
    { name: 'Notificações', icon: Bell },
    { name: 'Propostas', icon: FileText },
    { name: 'Perfil', icon: User },
  ];

  const handleMenuClick = (itemName: string) => {
    if (itemName === 'Home') router.push('/dashboard');
    else if (itemName === 'Notificações') router.push('/notificacoes');
    else if (itemName === 'Propostas') router.push('/propostas');
    else if (itemName === 'Perfil') router.push('/perfil');
  };

  const handleBackClick = () => {
    router.back();
  };

  const isProfessionalActive = professional.isActive;
  const canInteract = isCurrentUserActive && isProfessionalActive;

  const handleContactClick = () => {
    if (!canInteract) return;
    router.push(`/chat/${professional.id}`);
  };

  const handleCreateProposalClick = () => {
    if (!canInteract) return;
    router.push(`/propostas/criar/${professional.id}`);
  };

  return (
    <div className="min-h-screen bg-white pb-20"> 
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="flex items-center max-w-4xl mx-auto">
          <button 
            onClick={handleBackClick}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors mr-3"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold text-gray-900">Perfil do Profissional</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 sm:p-6"> 
        
        {!isCurrentUserActive && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-900 text-sm">Sua Conta Suspensa</h3>
              <p className="text-red-700 text-sm">
                Você não pode criar novas propostas ou entrar em contato no momento.
              </p>
            </div>
          </div>
        )}

        {isCurrentUserActive && !isProfessionalActive && (
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6 flex items-start gap-3">
            <Ban className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-orange-900 text-sm">Profissional Indisponível</h3>
              <p className="text-orange-800 text-sm">
                Este profissional está temporariamente suspenso e não pode receber novas propostas.
              </p>
            </div>
          </div>
        )}

        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="flex-shrink-0 mx-auto sm:mx-0 relative">
              <img
                src={professional.photoUrl || '/default-avatar.png'}
                alt={professional.name || 'Foto do profissional'}
                className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 ${!isProfessionalActive ? 'grayscale border-gray-300' : 'border-gray-200'}`}
              />
              {!isProfessionalActive && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-500/10 rounded-full">
                      <Ban className="w-8 h-8 text-gray-500" />
                  </div>
              )}
            </div>
            
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div className="flex-1">
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 text-center sm:text-left flex items-center gap-2 justify-center sm:justify-start">
                    {professional.name}
                    {!isProfessionalActive && (
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded border border-gray-200 font-normal">
                            Inativo
                        </span>
                    )}
                  </h1>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-gray-600 text-sm sm:text-base">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{professional.city}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{professional.rating} ({professional.reviews} avaliações)</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center sm:text-right">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">
                    R$ {professional.hourlyRate}/hora
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 mb-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Sobre</h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            {professional.description}
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 mb-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Habilidades</h2>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {professional.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <button
            onClick={handleCreateProposalClick}
            disabled={!canInteract}
            className={`
              py-4 px-6 rounded-xl flex items-center justify-center gap-3 group transition-colors
              ${canInteract 
                ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'}
            `}
          >
            <div className={`p-2 rounded-lg transition-colors ${canInteract ? 'bg-blue-500 group-hover:bg-blue-600' : 'bg-gray-400'}`}>
              <FileText className={`w-6 h-6 ${canInteract ? 'text-white' : 'text-gray-200'}`} />
            </div>
            <div className="text-left">
              <div className="font-semibold text-lg">Criar proposta</div>
              <div className={`text-sm ${canInteract ? 'text-blue-100' : 'text-gray-500'}`}>
                {canInteract ? 'Solicitar orçamento' : 'Indisponível'}
              </div>
            </div>
          </button>

          <button
            onClick={handleContactClick}
            disabled={!canInteract}
            className={`
              border py-4 px-6 rounded-xl flex items-center justify-center gap-3 group transition-colors
              ${canInteract 
                ? 'bg-white border-blue-600 text-blue-600 hover:bg-blue-50 cursor-pointer' 
                : 'bg-gray-50 border-gray-300 text-gray-400 cursor-not-allowed'}
            `}
          >
            <div className={`p-2 rounded-lg transition-colors ${canInteract ? 'bg-blue-100 group-hover:bg-blue-200' : 'bg-gray-200'}`}>
              <Mail className={`w-6 h-6 ${canInteract ? 'text-blue-600' : 'text-gray-400'}`} />
            </div>
            <div className="text-left">
              <div className="font-semibold text-lg">Entrar em contato</div>
              <div className={`text-sm ${canInteract ? 'text-gray-600' : 'text-gray-400'}`}>
                {canInteract ? 'Enviar mensagem direta' : 'Indisponível'}
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}