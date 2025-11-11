'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, Clock, DollarSign, FileText, User, ArrowLeft, Star, Home, Bell, Check, X, } from 'lucide-react';
import { updateProposalAction } from '@/app/propostas/update/actions';
import { EnumStatusProposta } from '@/app/generated/prisma';

type OtherUserData = {
  id: string;
  name: string | null;
  profissao: string | null;
  photoUrl: string | null;
  valorBase: number;
  rating: number;
  reviews: number;
};

type ProposalData = {
  id: number;
  titulo: string;
  descricao: string;
  valor: number;
  data_inicio: Date;
  data_termino: Date;
  status: EnumStatusProposta;
};

interface ReviewProposalProps {
  proposal: ProposalData;
  otherUser: OtherUserData;
}

export default function ReviewProposal({
  proposal,
  otherUser,
}: ReviewProposalProps) {
  const router = useRouter();
  const isNegotiationPhase = proposal.status !== EnumStatusProposta.EM_ANDAMENTO;
  const [isPending, startTransition] = useTransition();

  const [totalValue, setTotalValue] = useState(Number(proposal.valor) || 0);
  const [description, setDescription] = useState(proposal.descricao || '');

  const [hourlyRate, setHourlyRate] = useState(Number(otherUser.valorBase) || 0);
  
  const menuItems = [
    { name: 'Home', icon: Home, active: false },
    { name: 'Notificações', icon: Bell },
    { name: 'Propostas', icon: FileText, active: true }, // 'Propostas' está ativo
    { name: 'Perfil', icon: User },
  ];

  const formatDateTime = (date: Date) => {
    return {
      date: date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
      time: date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
  };
  
  const { date: selectedDate, time: selectedTime } = formatDateTime(proposal.data_inicio);


  const handleBack = () => {
    router.back();
  };

  const handleMenuClick = (itemName: string) => {
    if (itemName === 'Home') {
      router.push('/dashboard');
    } else if (itemName === 'Notificações') {
      router.push('/notificacoes');
    } else if (itemName === 'Propostas') {
      router.push('/propostas');
    } else if (itemName === 'Perfil') {
      router.push('/perfil');
    }
  };

  const getInitials = (name: string | null) => {
    if (!name) return '??';
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const handleSubmit = (actionType: 'accept' | 'reject' | 'counter-offer') => {
    startTransition(() => {
      const formData = new FormData();
      formData.append('propostaId', String(proposal.id));
      formData.append('actionType', actionType);

      if (actionType === 'counter-offer') {
        
        if (totalValue === Number(proposal.valor) && description === proposal.descricao) {
          alert('Para enviar uma contraproposta, você deve alterar o valor ou a descrição.');
          return;
        }
        
        formData.append('valor', String(totalValue));
        formData.append('descricao', description);
      }

      updateProposalAction(formData)
        .then((response) => {
          if (response?.success === false) {
            alert(`Erro: ${response.error || 'Falha ao processar ação.'}`);
            return;
          }

          let successMessage = '';
          if (actionType === 'accept') successMessage = 'Proposta aceita com sucesso!';
          else if (actionType === 'reject') successMessage = 'Proposta recusada.';
          else successMessage = 'Contraproposta enviada com sucesso!';
          
          alert(successMessage);
          router.push('/propostas');
        })
        .catch((err) => {
          console.error(err);
          alert('Ocorreu um erro inesperado.');
        });
    });
  };

  return (
    <div className="min-h-screen bg-blue-50 pb-24 sm:pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center">
          <button
            onClick={handleBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors mr-3 flex-shrink-0"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>
          <h1 className="text-lg sm:text-xl font-bold text-gray-900 truncate">
            Revisar Proposta
          </h1>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-4xl mx-auto p-3 sm:p-4 space-y-4 sm:space-y-6">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              {otherUser.photoUrl ? (
                <img
                  src={otherUser.photoUrl}
                  alt={otherUser.name || 'Usuário'}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                />
              ) : (
                <span className="text-white text-sm sm:text-xl font-bold">
                  {getInitials(otherUser.name)}
                </span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 truncate">
                {otherUser.name}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                {otherUser.profissao || 'Profissional'}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">
                    R$ {otherUser.valorBase}/hora (base)
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">
                    {otherUser.rating} ({otherUser.reviews} avaliações)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contraproposta */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit('counter-offer');
          }}
          className="space-y-4 sm:space-y-6"
        >
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
              Termos da Proposta
            </h3>

            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Tipo de Serviço
                </label>
                <input
                  type="text"
                  value={proposal.titulo}
                  readOnly
                  className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-100 text-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Valor Total da Proposta (R$)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4" />
                  <input
                    type="number"
                    value={totalValue}
                    onChange={(e) => setTotalValue(Number(e.target.value))}
                    className="w-full border border-gray-300 rounded-lg pl-7 sm:pl-10 pr-2 sm:pr-4 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    min="1"
                    step="0.01"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Edite o valor total se quiser fazer uma contraproposta.
                </p>
              </div>
            </div>

            <div className="mt-3 sm:mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Descrição do Serviço
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                placeholder="Descreva detalhadamente o serviço..."
                className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              />
            </div>
            
             <div className="mt-6 border-t pt-6">
               <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-blue-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold text-sm sm:text-lg transition-colors"
                >
                  {isPending
                    ? 'Enviando...'
                    : 'Enviar Contraproposta (com as edições acima)'}
                </button>
             </div>
          </div>
          
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                  Data
                </h3>
                <p className="text-gray-700 text-sm sm:text-base p-3 bg-gray-100 rounded-lg">{selectedDate}</p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                  Horário
                </h3>
                <p className="text-gray-700 text-sm sm:text-base p-3 bg-gray-100 rounded-lg">{selectedTime}</p>
              </div>
            </div>
          </div>
        </form>
      </div>

      {isNegotiationPhase && (
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 p-3 sm:p-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => handleSubmit('reject')}
            disabled={isPending}
            className="w-full bg-red-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold text-sm sm:text-lg transition-colors flex items-center justify-center gap-2"
          >
            <X className="w-5 h-5" />
            Recusar Proposta
          </button>
          <button
            type="button"
            onClick={() => handleSubmit('accept')}
            disabled={isPending}
            className="w-full bg-green-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold text-sm sm:text-lg transition-colors flex items-center justify-center gap-2"
          >
            <Check className="w-5 h-5" />
            Aceitar Termos
          </button>
        </div>
      </div>
      )}

      {/* Menu Inferior */}
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