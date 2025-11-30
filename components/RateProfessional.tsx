'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Star, User, Calendar, Clock, MessageSquare } from 'lucide-react';

interface RateProfessionalProps {
  proposalId: string;
}

export default function RateProfessional({ proposalId }: RateProfessionalProps) {
  const router = useRouter();
  
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Dados da proposta concluída
  const [proposalData, setProposalData] = useState({
    id: "",
    professionalName: "",
    professionalProfession: "",
    serviceType: "",
    scheduledDate: "",
    scheduledTime: "",
    totalValue: 0,
    description: ""
  });

  // Buscar dados da proposta quando o componente montar
  useEffect(() => {
    const fetchProposalData = async () => {
      try {
        // Simular busca dos dados da proposta
        // Em produção, você faria uma chamada API aqui:
        // const response = await fetch(`/api/proposals/${proposalId}`);
        // const data = await response.json();
        
        // Dados mockados baseados no proposalId
        const mockData = {
          id: proposalId,
          professionalName: "Carlos Silva",
          professionalProfession: "Eletricista",
          serviceType: "Instalação de Tomadas",
          scheduledDate: "2024-12-15",
          scheduledTime: "14:00",
          totalValue: 255,
          description: "Instalação de 5 tomadas novas na sala e quarto"
        };
        
        setProposalData(mockData);
      } catch (error) {
        console.error('Erro ao carregar dados da proposta:', error);
        alert('Erro ao carregar dados da proposta');
      } finally {
        setIsLoading(false);
      }
    };

    if (proposalId) {
      fetchProposalData();
    }
  }, [proposalId]);

  const handleSubmitRating = async () => {
    if (rating === 0) {
      alert('Por favor, selecione uma avaliação');
      return;
    }

    setIsSubmitting(true);

    try {
      // Enviar avaliação para a API
      const response = await fetch('/api/ratings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          proposalId: proposalData.id,
          rating,
          comment,
          professionalId: "1" // Em produção, isso viria dos dados da proposta
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar avaliação');
      }

      alert('Avaliação enviada com sucesso! Obrigado pelo feedback.');
      router.push('/dashboard');
      
    } catch (error) {
      console.error('Erro ao enviar avaliação:', error);
      alert('Erro ao enviar avaliação. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    router.back();
  };

  const formatDate = (dateString: string) => {
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
        {/* Informações do Serviço */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Serviço Concluído</h2>
          
          <div className="space-y-4">
            {/* Profissional */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {proposalData.professionalName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{proposalData.professionalName}</h3>
                <p className="text-gray-600">{proposalData.professionalProfession}</p>
              </div>
            </div>

            {/* Detalhes do Serviço */}
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

        {/* Avaliação */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            Como foi sua experiência?
          </h2>

          <div className="space-y-6">
            {/* Avaliação por Estrelas */}
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
                    className="text-4xl transition-transform hover:scale-110 focus:scale-110"
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

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  {rating === 0 && 'Selecione de 1 a 5 estrelas'}
                  {rating === 1 && 'Péssimo - Muito insatisfeito'}
                  {rating === 2 && 'Ruim - Insatisfeito'}
                  {rating === 3 && 'Regular - Poderia ser melhor'}
                  {rating === 4 && 'Bom - Satisfeito'}
                  {rating === 5 && 'Excelente - Muito satisfeito'}
                </p>
              </div>
            </div>

            {/* Comentário */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Comentário (opcional)
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                placeholder="Conte como foi a experiência com o profissional... (pontualidade, qualidade do serviço, comunicação, etc.)"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              />
              <p className="text-xs text-gray-500 mt-1">
                Sua avaliação ajuda outros usuários a escolherem os melhores profissionais
              </p>
            </div>
          </div>
        </div>

        {/* Botão de Enviar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <button
            onClick={handleSubmitRating}
            disabled={rating === 0 || isSubmitting}
            className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-semibold text-lg flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
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