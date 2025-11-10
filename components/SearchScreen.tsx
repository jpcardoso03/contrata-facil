'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Filter, MapPin, Star, DollarSign, User, Home, Bell, MessageCircle } from 'lucide-react';

interface Professional {
  id: string;
  name: string;
  profession: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  city: string;
  photoUrl?: string;
  skills: string[];
}

export default function SearchScreen() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedCity, setSelectedCity] = useState('todas');

  // Dados mockados de profissionais
  const professionals: Professional[] = [
    {
      id: "1",
      name: "Carlos Silva",
      profession: "Eletricista",
      rating: 4.9,
      reviews: 127,
      hourlyRate: 85,
      city: "São Paulo, SP",
      skills: ["Instalação", "Manutenção", "SPDA"]
    },
    {
      id: "2",
      name: "Ana Costa",
      profession: "Encanadora", 
      rating: 4.8,
      reviews: 94,
      hourlyRate: 75,
      city: "Rio de Janeiro, RJ",
      skills: ["Encanamento", "Reparos", "Desentupimento"]
    },
    {
      id: "3",
      name: "Roberto Oliveira",
      profession: "Pintor",
      rating: 4.7,
      reviews: 156,
      hourlyRate: 90,
      city: "Belo Horizonte, MG",
      skills: ["Pintura Residencial", "Texturização"]
    },
    {
      id: "4",
      name: "Maria Andrade",
      profession: "Jardineira",
      rating: 4.8,
      reviews: 124,
      hourlyRate: 60,
      city: "Curitiba, PR", 
      skills: ["Paisagismo", "Podas", "Plantio"]
    },
    {
      id: "5",
      name: "Fernando Lima",
      profession: "Marceneiro",
      rating: 4.6,
      reviews: 89,
      hourlyRate: 95,
      city: "São Paulo, SP",
      skills: ["Móveis Sob Medida", "Restauração"]
    },
    {
      id: "6", 
      name: "Juliana Santos",
      profession: "Diarista",
      rating: 4.9,
      reviews: 203,
      hourlyRate: 55,
      city: "Rio de Janeiro, RJ",
      skills: ["Limpeza", "Organização"]
    }
  ];

  // Categorias disponíveis
  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'eletricista', name: 'Eletricista' },
    { id: 'encanador', name: 'Encanador' },
    { id: 'pintor', name: 'Pintor' },
    { id: 'jardineiro', name: 'Jardineiro' },
    { id: 'marceneiro', name: 'Marceneiro' },
    { id: 'diarista', name: 'Diarista' }
  ];

  // Cidades disponíveis
  const cities = [
    { id: 'todas', name: 'Todas as cidades' },
    { id: 'sao-paulo', name: 'São Paulo, SP' },
    { id: 'rio-de-janeiro', name: 'Rio de Janeiro, RJ' },
    { id: 'belo-horizonte', name: 'Belo Horizonte, MG' },
    { id: 'curitiba', name: 'Curitiba, PR' }
  ];

  const menuItems = [
    { name: 'Home', icon: Home, active: false },
    { name: 'Notificações', icon: Bell },
    { name: 'Busca', icon: Search, active: false },
    { name: 'Mensagem', icon: MessageCircle },
    { name: 'Perfil', icon: User },
  ];

  // Filtrar profissionais
  const filteredProfessionals = professionals.filter(professional => {
    const matchesSearch = professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         professional.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         professional.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'todos' || 
                           professional.profession.toLowerCase().includes(selectedCategory);
    
    const matchesCity = selectedCity === 'todas' || 
                       professional.city.toLowerCase().includes(selectedCity);

    return matchesSearch && matchesCategory && matchesCity;
  });

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

  const handleProfessionalClick = (professionalId: string) => {
    router.push(`/profissional/${professionalId}`);
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
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Buscar Profissionais</h1>
          <p className="text-gray-600 text-sm mt-1">Encontre os melhores profissionais para seu serviço</p>
        </div>
      </div>

      {/* Barra de Busca e Filtros */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Barra de Busca */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por nome, serviço ou habilidade..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Filtros */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Filtro por Categoria */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>

            {/* Filtro por Cidade */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {cities.map(city => (
                  <option key={city.id} value={city.id}>{city.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Resultados da Busca */}
      <div className="max-w-4xl mx-auto p-4">
        {/* Contador de Resultados */}
        <div className="mb-4">
          <p className="text-gray-600">
            {filteredProfessionals.length} profissional{filteredProfessionals.length !== 1 ? 'es' : ''} encontrado{filteredProfessionals.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Lista de Profissionais */}
        <div className="space-y-4">
          {filteredProfessionals.map((professional, index) => (
            <div
              key={professional.id}
              onClick={() => handleProfessionalClick(professional.id)}
              className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4">
                {/* Foto/Iniciais */}
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    {professional.photoUrl ? (
                      <img 
                        src={professional.photoUrl} 
                        alt={professional.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-white text-lg font-bold">
                        {getInitials(professional.name)}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Informações */}
                <div className="flex-1 w-full text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                        {professional.name}
                      </h3>
                      <p className="text-gray-700 mb-2">{professional.profession}</p>
                      
                      <div className="flex flex-col sm:flex-row items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-gray-700 font-medium">{professional.rating}</span>
                          <span className="text-gray-500 text-sm">({professional.reviews} avaliações)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600 text-sm">{professional.city}</span>
                        </div>
                      </div>

                      {/* Habilidades */}
                      <div className="flex flex-wrap gap-1 justify-center sm:justify-start">
                        {professional.skills.slice(0, 3).map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                        {professional.skills.length > 3 && (
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            +{professional.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Preço */}
                    <div className="text-center sm:text-right">
                      <div className="text-xl sm:text-2xl font-bold text-green-600">
                        R$ {professional.hourlyRate}/h
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensagem quando não há resultados */}
        {filteredProfessionals.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              Nenhum profissional encontrado
            </h3>
            <p className="text-gray-600">
              Tente ajustar os filtros ou buscar por outros termos
            </p>
          </div>
        )}
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