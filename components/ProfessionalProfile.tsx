'use client';

import { Home, Bell, MessageCircle, User, MapPin, Star, Mail, FileText, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ProfessionalProfileProps {
  professionalId: string;
}

// Dados mockados - você pode mover para um arquivo separado depois
const professionalsData: any = {
  "1": {
    name: "Carlos Silva",
    photoUrl: "https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?w=400",
    profession: "Eletricista",
    city: "São Paulo, SP",
    rating: 4.9,
    reviews: 127,
    hourlyRate: 85,
    description: "Eletricista com mais de 10 anos de experiência, especializado em instalações residenciais e comerciais. Trabalho com qualidade e garantia em todos os serviços prestados.",
    skills: ["Instalação Elétrica", "Manutenção", "Quadros de Distribuição", "Automação Residencial", "SPDA"]
  },
  "2": {
    name: "Ana Costa", 
    photoUrl: "https://images.unsplash.com/photo-1746652433560-fb39d6136620?w=400",
    profession: "Encanadora",
    city: "Rio de Janeiro, RJ", 
    rating: 4.8,
    reviews: 94,
    hourlyRate: 75,
    description: "Encanadora especializada em soluções hidráulicas para residências e pequenos comércios. Atendo emergências e faço orçamentos sem compromisso.",
    skills: ["Encanamento", "Reparos", "Instalações Hidráulicas", "Manutenção Preventiva", "Desentupimento"]
  },
  "3": {
    name: "Roberto Oliveira",
    photoUrl: "https://images.unsplash.com/photo-1660074127797-1c429fbb8cd6?w=400",
    profession: "Pintor",
    city: "Belo Horizonte, MG",
    rating: 4.7,
    reviews: 156,
    hourlyRate: 90,
    description: "Pintor profissional com vasta experiência em pintura residencial e comercial. Utilizo apenas materiais de primeira qualidade e ofereço garantia no serviço.",
    skills: ["Pintura Residencial", "Pintura Comercial", "Texturização", "Impermeabilização", "Preparação de Superfícies"]
  },
  "4": {
    name: "Maria Santos",
    photoUrl: "https://images.unsplash.com/photo-1717229773894-8e7c04aac950?w=400",
    profession: "Jardineira",
    city: "Curitiba, PR",
    rating: 4.6,
    reviews: 89,
    hourlyRate: 80,
    description: "Jardineira especializada em paisagismo e manutenção de áreas verdes. Crio e mantenho jardins bonitos e saudáveis para residências e empresas.",
    skills: ["Paisagismo", "Manutenção de Jardins", "Podas", "Plantio", "Irrigação"]
  }
};

export default function ProfessionalProfile({ professionalId }: ProfessionalProfileProps) {
  const router = useRouter();

  const professional = professionalsData[professionalId];

  if (!professional) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Profissional não encontrado</h1>
          <button 
            onClick={() => router.back()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }

  const menuItems = [
    { name: 'Home', icon: Home, active: false },
    { name: 'Notificações', icon: Bell },
    { name: 'Mensagem', icon: MessageCircle },
    { name: 'Perfil', icon: User },
  ];

  const handleMenuClick = (itemName: string) => {
  if (itemName === 'Home') {
    router.push('/dashboard');
  } else if (itemName === 'Notificações') {
    router.push('/notificacoes');
  } else if (itemName === 'Mensagem') {
    router.push('/mensagens');
  } else if (itemName === 'Perfil') {
    router.push('/perfil'); 
  }
};

  const handleBackClick = () => {
    router.back();
  };

  const handleContactClick = () => {
    console.log('Entrar em contato com:', professional.name);
    // Aqui você pode implementar a lógica de contato
  };

  const handleCreateProposalClick = () => {
  router.push(`/criar-proposta/${professionalId}`);
};

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex text-yellow-400 text-lg">
        {'★'.repeat(fullStars)}
        {hasHalfStar && '½'}
        {'☆'.repeat(5 - Math.ceil(rating))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="flex items-center max-w-4xl mx-auto">
          <button 
            onClick={handleBackClick}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors mr-3"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-xl font-bold text-gray-900">Perfil do Profissional</h1>
        </div>
      </div>

      {/* Conteúdo do Perfil */}
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        {/* Seção Superior: Foto e Informações Básicas */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            {/* Foto do Profissional */}
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <img
                src={professional.photoUrl}
                alt={professional.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-gray-200"
              />
            </div>
            
            {/* Informações Principais */}
            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div className="flex-1">
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 text-center sm:text-left">
                    {professional.name}
                  </h1>
                  <p className="text-lg text-gray-700 mb-2 text-center sm:text-left">
                    {professional.profession}
                  </p>
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
                
                {/* Preço por hora */}
                <div className="text-center sm:text-right">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">
                    R$ {professional.hourlyRate}/hora
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Descrição */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 mb-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Sobre</h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            {professional.description}
          </p>
        </div>

        {/* Habilidades */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 mb-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Habilidades</h2>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {professional.skills.map((skill: string, index: number) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Botão Criar Proposta */}
          <button
            onClick={handleCreateProposalClick}
            className="bg-blue-600 text-white py-4 px-6 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-3 group"
          >
            <div className="p-2 bg-blue-500 rounded-lg group-hover:bg-blue-600 transition-colors">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-lg">Criar proposta</div>
              <div className="text-sm text-blue-100">Solicitar orçamento</div>
            </div>
          </button>

          {/* Botão Entrar em Contato */}
          <button
            onClick={handleContactClick}
            className="bg-white border border-blue-600 text-blue-600 py-4 px-6 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-3 group"
          >
            <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-lg">Entrar em contato</div>
              <div className="text-sm text-gray-600">Enviar mensagem direta</div>
            </div>
          </button>
        </div>
      </div>

      {/* Menu Inferior Fixo */}
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