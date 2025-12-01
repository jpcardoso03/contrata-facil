'use client';

import { useState, useEffect, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Star, Calendar, Clock, MessageSquare, AlertCircle } from 'lucide-react';
import { getProposalForRatingAction, submitRatingAction } from '@/app/avaliar/actions';

interface RateProfessionalProps {
  proposalId: number;
}

export default function RateProfessional({ proposalId }: RateProfessionalProps) {
  const router = useRouter();
  
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [proposalData, setProposalData] = useState({
    id: 0,
    professionalName: "",
    professionalProfession: "",
    serviceType: "",
    scheduledDate: "",
    scheduledTime: "",
    totalValue: 0,
    description: ""
  });

  useEffect(() => {
    const fetchProposalData = async () => {
      if (!proposalId) return;

      try {
        const result = await getProposalForRatingAction(proposalId);
        
        if (result.success && result.data) {
          setProposalData(result.data);
        } else {
          setErrorMsg(result.error || 'Erro ao carregar proposta');
          if (result.alreadyRated) {
             alert("Esta proposta já foi avaliada.");
             router.push('/propostas');
          }
        }
      } catch (error) {
        setErrorMsg('Erro de conexão ao buscar dados.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProposalData();
  }, [proposalId, router]);

  const handleSubmitRating = () => {
    if (rating === 0) {
      alert('Por favor, selecione uma avaliação');
      return;
    }

    startTransition(async () => {
      const result = await submitRatingAction(proposalId, rating, comment);

      if (result.success) {
        alert('Avaliação enviada com sucesso! Obrigado pelo feedback.');
        router.push('/propostas');
        router.refresh();
      } else {
        alert(`Erro: ${result.error}`);
      }
    });
  };

  const handleBack = () => {
    router.back();
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando dados do serviço...</p>
        </div>
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center max-w-md">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Atenção</h2>
          <p className="text-gray-600 mb-6">{errorMsg}</p>
          <button onClick={() => router.push('/propostas')} className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-200">
             Voltar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center">
          <button 
            onClick={handleBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors mr-3"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-xl font-bold text-gray-900">Avaliar Serviço</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Serviço Concluído</h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {proposalData.professionalName ? proposalData.professionalName.substring(0,2).toUpperCase() : 'P'}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{proposalData.professionalName}</h3>
                <p className="text-gray-600">{proposalData.professionalProfession}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>{formatDate(proposalData.scheduledDate)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>{proposalData.scheduledTime}</span>
              </div>
              <div className="md:col-span-2">
                <span className="font-medium">Serviço:</span> {proposalData.serviceType}
              </div>
              <div className="md:col-span-2">
                <span className="font-medium">Descrição:</span> {proposalData.description}
              </div>
              <div className="md:col-span-2">
                <span className="font-medium">Valor:</span> R$ {proposalData.totalValue.toFixed(2)}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            Como foi sua experiência?
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4 text-center">
                Selecione sua avaliação *
              </label>
              
              <div className="flex justify-center space-x-2 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="text-4xl transition-transform hover:scale-110 focus:scale-110 outline-none"
                  >
                    <span className={`
                      ${star <= (hoverRating || rating) 
                        ? 'text-yellow-400' 
                        : 'text-gray-300'
                      }
                    `}>
                      ★
                    </span>
                  </button>
                ))}
              </div>
              
              <div className="text-center h-5">
                 <p className="text-sm text-gray-600">
                  {rating === 1 && 'Péssimo - Muito insatisfeito'}
                  {rating === 2 && 'Ruim - Insatisfeito'}
                  {rating === 3 && 'Regular - Poderia ser melhor'}
                  {rating === 4 && 'Bom - Satisfeito'}
                  {rating === 5 && 'Excelente - Muito satisfeito'}
                 </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Comentário (opcional)
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                placeholder="Conte como foi a experiência..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <button
            onClick={handleSubmitRating}
            disabled={rating === 0 || isPending}
            className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-semibold text-lg flex items-center justify-center gap-2"
          >
            {isPending ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Star className="w-5 h-5" />
                Enviar Avaliação
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}