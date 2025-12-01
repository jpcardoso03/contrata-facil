'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Star, User, Home, Loader2 } from 'lucide-react';

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
  userType: 'PRESTADOR' | 'CONTRATANTE' | 'ADMINISTRADOR';
}

interface FilterOption {
  id: string;
  name: string;
}

export default function SearchScreen() {
  const router = useRouter();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUserType, setSelectedUserType] = useState('todos');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedCity, setSelectedCity] = useState('todas');
  
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [availableCategories, setAvailableCategories] = useState<FilterOption[]>([
    { id: 'todos', name: 'Todas as Categorias' }
  ]);
  const [availableCities, setAvailableCities] = useState<FilterOption[]>([
    { id: 'todas', name: 'Todas as Cidades' }
  ]);

  const userTypes = [
    { id: 'todos', name: 'Todos os Usuários' },
    { id: 'PRESTADOR', name: 'Prestadores' },
    { id: 'CONTRATANTE', name: 'Contratantes' },
    { id: 'ADMINISTRADOR', name: 'Administradores' },
  ];

  const isCategoryDisabled = selectedUserType === 'CONTRATANTE' || selectedUserType === 'ADMINISTRADOR';

  const handleUserTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value;
    setSelectedUserType(newType);
    
    if (newType === 'CONTRATANTE' || newType === 'ADMINISTRADOR') {
      setSelectedCategory('todos');
    }
  };

  const menuItems = [
    { name: 'Home', icon: Home, active: false },
    { name: 'Busca', icon: Search, active: true },
    { name: 'Perfil', icon: User, active: false },
  ];

  useEffect(() => {
    async function fetchProfessionals() {
      try {
        const response = await fetch('/api/profissionais');
        if (!response.ok) throw new Error('Falha ao buscar dados');
        const data: Professional[] = await response.json();
        
        setProfessionals(data);

        const uniqueCities = Array.from(
          new Set(data.map(p => p.city).filter(c => c && c !== 'Localização não informada'))
        ).sort();

        const cityOptions = [
          { id: 'todas', name: 'Todas as Cidades' },
          ...uniqueCities.map(city => ({ id: city, name: city }))
        ];
        setAvailableCities(cityOptions);

        const allSkills = data.flatMap(p => p.skills || []);
        const uniqueSkills = Array.from(new Set(allSkills)).sort();

        const categoryOptions = [
          { id: 'todos', name: 'Todas as Habilidades' },
          ...uniqueSkills.map(skill => ({ id: skill, name: skill }))
        ];
        setAvailableCategories(categoryOptions);

      } catch (error) {
        console.error("Erro ao carregar profissionais:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProfessionals();
  }, []);

  const filteredProfessionals = professionals.filter(professional => {
    const name = professional.name?.toLowerCase() || '';
    const profession = professional.profession?.toLowerCase() || '';
    const city = professional.city?.toLowerCase() || '';
    
    const term = searchTerm.toLowerCase();

    const matchesSearch = name.includes(term) ||
                          profession.includes(term) ||
                          professional.skills.some(skill => skill.toLowerCase().includes(term));
    
    const matchesCategory = selectedCategory === 'todos' || 
                            professional.skills.includes(selectedCategory) ||
                            profession.includes(selectedCategory.toLowerCase());
    
    const matchesCity = selectedCity === 'todas' || 
                        city.toLowerCase() === selectedCity.toLowerCase();

    const matchesUserType = selectedUserType === 'todos' || 
                            professional.userType === selectedUserType;

    return matchesSearch && matchesCategory && matchesCity && matchesUserType;
  });

  const handleMenuClick = (itemName: string) => {
    if (itemName === 'Home') router.push('/admin');
    else if (itemName === 'Busca') router.push('/busca');
    else if (itemName === 'Perfil') router.push('/perfil'); 
  };

  const handleProfessionalClick = (professionalId: string) => {
    router.push(`/profissional/${professionalId}`);
  };

  const getInitials = (name: string) => {
    if (!name) return '??';
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Buscar Usuários</h1>
          <p className="text-gray-600 text-sm mt-1">Encontre profissionais, contratantes ou administradores</p>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-4xl mx-auto space-y-4">
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

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Usuário</label>
              <select
                value={selectedUserType}
                onChange={handleUserTypeChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {userTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className={`block text-sm font-medium mb-1 ${isCategoryDisabled ? 'text-gray-400' : 'text-gray-700'}`}>
                Categoria
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                disabled={isCategoryDisabled}
                className={`w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    isCategoryDisabled ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed' : 'border-gray-300'
                }`}
              >
                {availableCategories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Cidade</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {availableCities.map(city => (
                  <option key={city.id} value={city.id}>{city.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="w-8 h-8 text-blue-500 animate-spin mb-4" />
            <p className="text-gray-500">Carregando...</p>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-gray-600">
                {filteredProfessionals.length} usuário{filteredProfessionals.length !== 1 ? 's' : ''} encontrado{filteredProfessionals.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="space-y-4">
              {filteredProfessionals.map((professional) => (
                <div
                  key={professional.id}
                  onClick={() => handleProfessionalClick(professional.id)}
                  className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="flex-shrink-0 mx-auto sm:mx-0">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center overflow-hidden">
                        {professional.photoUrl ? (
                          <img 
                            src={professional.photoUrl} 
                            alt={professional.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-white text-lg font-bold">
                            {getInitials(professional.name)}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex-1 w-full text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                            {professional.name}
                          </h3>
                          <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                            <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs font-medium border border-gray-200">
                                {professional.userType}
                            </span>
                            <span className="text-gray-700 text-sm">{professional.profession}</span>
                          </div>
                          
                          {professional.reviews > 0 && (
                            <div className="flex flex-col sm:flex-row items-center gap-2 mb-3">
                                <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                <span className="text-gray-700 font-medium">{professional.rating}</span>
                                <span className="text-gray-500 text-sm">({professional.reviews} avaliações)</span>
                                </div>
                            </div>
                          )}
                          
                          <div className="flex items-center justify-center sm:justify-start gap-1 mb-3">
                             <MapPin className="w-4 h-4 text-gray-400" />
                             <span className="text-gray-600 text-sm">{professional.city}</span>
                          </div>

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
                        
                        {professional.hourlyRate > 0 && (
                            <div className="text-center sm:text-right">
                            <div className="text-xl sm:text-2xl font-bold text-green-600">
                                R$ {professional.hourlyRate}/h
                            </div>
                            </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProfessionals.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Nenhum usuário encontrado
                </h3>
                <p className="text-gray-600">
                  Tente ajustar os filtros ou buscar por outros termos
                </p>
              </div>
            )}
          </>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16">
        <div className="max-w-6xl mx-auto h-full">
          <div className="grid grid-cols-3 h-full">
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