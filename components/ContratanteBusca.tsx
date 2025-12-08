'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Star, User, Home, Loader2, Bell, FileText, Filter } from 'lucide-react';

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
  userType: 'PRESTADOR';
}

interface FilterOption {
  id: string;
  name: string;
}

export default function ClientSearchScreen() {
  const router = useRouter();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedCity, setSelectedCity] = useState('todas');
  
  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [availableCategories, setAvailableCategories] = useState<FilterOption[]>([
    { id: 'todos', name: 'Todas as Habilidades' }
  ]);
  const [availableCities, setAvailableCities] = useState<FilterOption[]>([
    { id: 'todas', name: 'Todas as Cidades' }
  ]);

  const menuItems = [
    { name: 'Home', icon: Home, route: '/dashboard', active: false },
    { name: 'Notificações', icon: Bell, route: '/notificacoes', active: false },
    { name: 'Propostas', icon: FileText, route: '/propostas', active: false },
    { name: 'Perfil', icon: User, route: '/perfil', active: false },
  ];

  useEffect(() => {
    async function fetchProfessionals() {
      try {
        const response = await fetch('/api/profissionais');
        if (!response.ok) throw new Error('Falha ao buscar dados');
        
        const allUsers: any[] = await response.json();
        
        const data: Professional[] = allUsers.filter(u => u.userType === 'PRESTADOR');
        
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

    return matchesSearch && matchesCategory && matchesCity;
  });

  const handleMenuClick = (route: string) => {
    router.push(route);
  };

  const handleProfessionalClick = (professionalId: string) => {
    router.push(`/propostas/criar/${professionalId}`);
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
    <div className="min-h-screen bg-blue-50/50 pb-24">
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Search className="w-6 h-6 text-blue-600" />
            Encontrar Profissionais
          </h1>
          <p className="text-gray-600 text-sm mt-1">Busque e contrate os melhores prestadores</p>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por nome, eletricista, pintor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide">Especialidade</label>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg pl-3 pr-8 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                >
                  {availableCategories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wide">Localização</label>
              <div className="relative">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg pl-3 pr-8 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                >
                  {availableCities.map(city => (
                    <option key={city.id} value={city.id}>{city.name}</option>
                  ))}
                </select>
                <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-10 h-10 text-blue-600 animate-spin mb-4" />
            <p className="text-gray-500 font-medium">Buscando profissionais...</p>
          </div>
        ) : (
          <>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-600 font-medium">
                {filteredProfessionals.length} profissionais encontrados
              </p>
            </div>

            <div className="space-y-4">
              {filteredProfessionals.map((professional) => (
                <div
                  key={professional.id}
                  onClick={() => handleProfessionalClick(professional.id)}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-blue-200 transition-all cursor-pointer group"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <div className="flex-shrink-0 mx-auto sm:mx-0">
                      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-white shadow-sm group-hover:border-blue-100 transition-colors">
                        {professional.photoUrl ? (
                          <img 
                            src={professional.photoUrl} 
                            alt={professional.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="text-blue-600 text-xl font-bold">
                            {getInitials(professional.name)}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex-1 w-full text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div className="flex-1">
                          <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                              {professional.name}
                            </h3>
                            {professional.rating >= 4.5 && (
                                <span className="bg-yellow-100 text-yellow-800 text-[10px] px-1.5 py-0.5 rounded font-bold border border-yellow-200">TOP</span>
                            )}
                          </div>
                          
                          <p className="text-blue-600 font-medium text-sm mb-2">{professional.profession || 'Profissional'}</p>
                          
                          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-gray-600 mb-3">
                            {professional.reviews > 0 && (
                                <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
                                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                                    <span className="font-bold text-gray-900">{professional.rating}</span>
                                    <span className="text-gray-400 text-xs">({professional.reviews})</span>
                                </div>
                            )}
                            <div className="flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                                <span>{professional.city}</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
                            {professional.skills.slice(0, 4).map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md text-xs font-medium border border-blue-100"
                              >
                                {skill}
                              </span>
                            ))}
                            {professional.skills.length > 4 && (
                              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs border border-gray-200">
                                +{professional.skills.length - 4}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="mt-3 sm:mt-0 flex flex-col items-center sm:items-end gap-2">
                            {professional.hourlyRate > 0 && (
                                <div className="text-right">
                                    <p className="text-xs text-gray-500">Valor hora</p>
                                    <p className="text-lg font-bold text-gray-900">R$ {Number(professional.hourlyRate).toFixed(2)}</p>
                                </div>
                            )}
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto shadow-sm shadow-blue-200">
                                Contratar
                            </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProfessionals.length === 0 && (
              <div className="text-center py-16 bg-white rounded-xl border border-gray-200 border-dashed">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-gray-900">
                  Nenhum profissional encontrado
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Tente alterar a categoria ou a cidade selecionada.
                </p>
                <button 
                    onClick={() => {setSearchTerm(''); setSelectedCategory('todos'); setSelectedCity('todas');}}
                    className="mt-4 text-blue-600 font-medium text-sm hover:underline"
                >
                    Limpar filtros
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="max-w-6xl mx-auto h-full">
          <div className="grid grid-cols-4 h-full">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = false; 

              return (
                <button
                  key={index}
                  onClick={() => handleMenuClick(item.route)}
                  className={`flex flex-col items-center justify-center py-2 transition-colors h-full ${
                    isActive
                      ? 'text-blue-600'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <IconComponent className={`w-6 h-6 mb-1 ${isActive ? 'fill-blue-100' : ''}`} />
                  <span className="text-[10px] font-medium">{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}