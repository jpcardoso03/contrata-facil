'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, Clock, DollarSign, FileText, User, ArrowLeft, Star, Home, Bell, MessageCircle, Search } from 'lucide-react';


interface ProfessionalInfo {
  id: string;
  name: string;
  profession: string;
  hourlyRate: number;
  rating: number;
  reviews: number;
  photoUrl: string;
  city?: string;
  description?: string;
  skills?: string[];
}

interface CreateProposalProps {
  professionalId: string;
}


const professionalsData: { [key: string]: ProfessionalInfo } = {
  "1": {
    id: "1",
    name: "Carlos Silva",
    profession: "Eletricista",
    hourlyRate: 85,
    rating: 4.9,
    reviews: 127,
    photoUrl: "https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?w=400",
    city: "São Paulo, SP",
    description: "Eletricista com mais de 10 anos de experiência",
    skills: ["Instalação Elétrica", "Manutenção", "Quadros de Distribuição"]
  },
  "2": {
    id: "2",
    name: "Ana Costa", 
    profession: "Encanadora",
    hourlyRate: 75,
    rating: 4.8,
    reviews: 94,
    photoUrl: "https://images.unsplash.com/photo-1746652433560-fb39d6136620?w=400",
    city: "Rio de Janeiro, RJ",
    description: "Encanadora especializada em soluções hidráulicas",
    skills: ["Encanamento", "Reparos", "Instalações Hidráulicas"]
  },
  "3": {
    id: "3",
    name: "Roberto Oliveira",
    profession: "Pintor",
    hourlyRate: 90,
    rating: 4.7,
    reviews: 156,
    photoUrl: "https://images.unsplash.com/photo-1660074127797-1c429fbb8cd6?w=400",
    city: "Belo Horizonte, MG", 
    description: "Pintor profissional com vasta experiência",
    skills: ["Pintura Residencial", "Pintura Comercial", "Texturização"]
  },
  "4": {
    id: "4", 
    name: "Maria Andrade",
    profession: "Jardineira",
    hourlyRate: 60,
    rating: 4.8, 
    reviews: 124,
    photoUrl: "",
    city: "Curitiba, PR",
    description: "Jardineira especializada em paisagismo",
    skills: ["Paisagismo", "Manutenção de Jardins", "Podas", "Plantio"]
  }
};

export default function CreateProposal({ professionalId }: CreateProposalProps) {
  const router = useRouter();
  
  // Buscar dados do profissional baseado no ID
  const professional = professionalsData[professionalId];

  // Estados do formulário
  const [serviceType, setServiceType] = useState('');
  const [hourlyRate, setHourlyRate] = useState(professional?.hourlyRate || 0);
  const [estimatedHours, setEstimatedHours] = useState(1);
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Menu items
  const menuItems = [
  { name: 'Home', icon: Home, active: false },
  { name: 'Notificações', icon: Bell },
  { name: 'Busca', icon: Search, active: false }, 
  { name: 'Mensagem', icon: MessageCircle },
  { name: 'Perfil', icon: User },
];

  // Tipos de serviço baseados na profissão
  const getServiceTypes = () => {
    const serviceMap: { [key: string]: string[] } = {
      'Jardineira': [
        "Manutenção de Jardim",
        "Paisagismo", 
        "Podas",
        "Plantio",
        "Irrigação",
        "Limpeza de Área Verde",
        "Outro"
      ],
      'Eletricista': [
        "Instalação Elétrica",
        "Manutenção Elétrica", 
        "Quadro de Distribuição",
        "SPDA",
        "Automação Residencial",
        "Outro"
      ],
      'Encanadora': [
        "Reparos Hidráulicos",
        "Instalações Hidráulicas",
        "Desentupimento",
        "Manutenção Preventiva", 
        "Outro"
      ],
      'Pintor': [
        "Pintura Residencial",
        "Pintura Comercial",
        "Texturização",
        "Impermeabilização",
        "Preparação de Superfícies",
        "Outro"
      ]
    };

    return serviceMap[professional?.profession || 'Jardineira'] || [
      "Serviço Geral",
      "Outro"
    ];
  };

  const serviceTypes = getServiceTypes();

  // Gerar próximos 7 dias
  const generateNextDays = () => {
    const days = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      days.push({
        date: date.toISOString().split('T')[0],
        dayName: date.toLocaleDateString('pt-BR', { weekday: 'short' }),
        dayNumber: date.getDate(),
        month: date.getMonth() + 1,
        fullDate: date.toLocaleDateString('pt-BR')
      });
    }
    
    return days;
  };

  // Horários disponíveis
  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];

  const nextDays = generateNextDays();
  const totalValue = hourlyRate * estimatedHours;

  // Inicializar com os dados do profissional
  useEffect(() => {
    if (professional) {
      setHourlyRate(professional.hourlyRate);
    }
  }, [professional]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!serviceType || !selectedDate || !selectedTime) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    console.log('Proposta enviada:', {
      professionalId,
      professionalName: professional?.name,
      serviceType,
      hourlyRate,
      estimatedHours,
      totalValue,
      description,
      scheduledDate: selectedDate,
      scheduledTime: selectedTime
    });

    alert('Proposta enviada com sucesso!');
    router.back();
  };

  const handleBack = () => {
    router.back();
  };

  // Função para navegação do menu
  const handleMenuClick = (itemName: string) => {
  if (itemName === 'Home') {
    router.push('/dashboard');
  } else if (itemName === 'Notificações') {
    router.push('/notificacoes');
  } else if (itemName === 'Busca') { 
    router.push('/busca');
  } else if (itemName === 'Mensagem') {
    router.push('/mensagens');
  } else if (itemName === 'Perfil') {
    router.push('/perfil'); 
  }
};

  // Se profissional não for encontrado
  if (!professional) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Profissional não encontrado</h1>
          <button 
            onClick={handleBack}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-sm sm:text-base"
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-blue-50 pb-24 sm:pb-20">
      {/* Header Fixo */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center">
          <button 
            onClick={handleBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors mr-3 flex-shrink-0"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>
          <h1 className="text-lg sm:text-xl font-bold text-gray-900 truncate">
            Proposta para {professional.name}
          </h1>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-4xl mx-auto p-3 sm:p-4 space-y-4 sm:space-y-6">
        {/* Cabeçalho - Informações do Prestador */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-start gap-3 sm:gap-4">
            {/* Foto/Iniciais */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              {professional.photoUrl ? (
                <img 
                  src={professional.photoUrl} 
                  alt={professional.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                />
              ) : (
                <span className="text-white text-sm sm:text-xl font-bold">
                  {getInitials(professional.name)}
                </span>
              )}
            </div>
            
            {/* Informações */}
            <div className="flex-1 min-w-0">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 truncate">{professional.name}</h2>
              <p className="text-gray-600 text-sm sm:text-base">{professional.profession}</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">R$ {professional.hourlyRate}/hora</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">{professional.rating} ({professional.reviews} avaliações)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Seção: Configurar Proposta */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
              Configurar Proposta
            </h3>

            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {/* Tipo de Serviço */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Tipo de Serviço *
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Selecione o tipo de serviço</option>
                  {serviceTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Valor por Hora */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Valor por Hora (R$)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4" />
                    <input
                      type="number"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(Number(e.target.value))}
                      className="w-full border border-gray-300 rounded-lg pl-7 sm:pl-10 pr-2 sm:pr-4 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      min="1"
                    />
                  </div>
                </div>

                {/* Horas Estimadas */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Horas Estimadas
                  </label>
                  <input
                    type="number"
                    value={estimatedHours}
                    onChange={(e) => setEstimatedHours(Number(e.target.value))}
                    className="w-full border border-gray-300 rounded-lg px-2 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    min="1"
                    max="24"
                  />
                </div>
              </div>

              {/* Valor Total */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Valor Total Estimado
                </label>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl font-bold text-blue-900 text-center">
                    R$ {totalValue.toFixed(2)}
                  </div>
                  <p className="text-xs sm:text-sm text-blue-700 text-center mt-1">
                    {estimatedHours} hora{estimatedHours > 1 ? 's' : ''} × R$ {hourlyRate}/h
                  </p>
                </div>
              </div>
            </div>

            {/* Descrição do Serviço */}
            <div className="mt-3 sm:mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Descrição do Serviço
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                placeholder={`Descreva detalhadamente o serviço de ${professional.profession.toLowerCase()} que precisa ser realizado...`}
                className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              />
            </div>
          </div>

          {/* Seção: Selecionar Data */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
              Selecionar Data *
            </h3>

            <div className="grid grid-cols-4 sm:grid-cols-7 gap-1 sm:gap-2">
              {nextDays.map((day) => (
                <button
                  key={day.date}
                  type="button"
                  onClick={() => setSelectedDate(day.date)}
                  className={`flex flex-col items-center justify-center p-2 sm:p-3 rounded-lg border-2 transition-all min-h-[70px] sm:min-h-0 ${
                    selectedDate === day.date
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <span className="text-xs font-medium capitalize">{day.dayName}</span>
                  <span className="text-base sm:text-lg font-bold">{day.dayNumber}</span>
                  <span className="text-[10px] sm:text-xs text-gray-500">/{day.month}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Seção: Selecionar Horário */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
              Selecionar Horário *
            </h3>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-1 sm:gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`py-2 sm:py-3 px-1 sm:px-2 rounded-lg border-2 transition-all text-xs sm:text-sm ${
                    selectedTime === time
                      ? 'border-blue-500 bg-blue-500 text-white'
                      : 'border-gray-200 hover:border-blue-300 text-gray-700'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </form>
      </div>

      {/* Botão Enviar Fixo */}
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 p-3 sm:p-4">
        <div className="max-w-4xl mx-auto">
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={!serviceType || !selectedDate || !selectedTime}
            className="w-full bg-blue-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold text-sm sm:text-lg transition-colors"
          >
            Enviar Proposta para {professional.name.split(' ')[0]}
          </button>
        </div>
      </div>

      {/* Menu Inferior Fixo */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16">
        <div className="max-w-6xl mx-auto h-full">
          <div className="grid grid-cols-5 h-full">
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