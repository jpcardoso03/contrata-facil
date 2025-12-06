'use client';

import { useState, useTransition, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, Clock, DollarSign, FileText, User, ArrowLeft, Plus, Trash2, Home, Bell, Edit3 } from 'lucide-react';
import type { ProfessionalProposalInfo } from '@/app/propostas/criar/[professionalId]/page';
import { createProposalAction } from '@/app/propostas/criar/actions';

interface CreateProposalProps {
  professional: ProfessionalProposalInfo;
}

export default function ReviewProposal({ professional }: CreateProposalProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [title, setTitle] = useState('');
  const [servicesList, setServicesList] = useState<string[]>([]);
  const [currentServiceInput, setCurrentServiceInput] = useState('');

  const [hourlyRate, setHourlyRate] = useState(professional.valor || 0);
  const [estimatedHours, setEstimatedHours] = useState(0);
  const [description, setDescription] = useState('');
  
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const [calcDetails, setCalcDetails] = useState({ days: 0, hoursPerDay: 0 });

  const menuItems = [
    { name: 'Home', icon: Home, active: false },
    { name: 'Notificações', icon: Bell },
    { name: 'Propostas', icon: FileText },
    { name: 'Perfil', icon: User },
  ];

  const generateTimeSlots = () => {
    const slots = [];
    for (let i = 0; i < 24; i++) {
      const hour = i.toString().padStart(2, '0');
      slots.push(`${hour}:00`);
      slots.push(`${hour}:30`);
    }
    return slots;
  };
  const timeSlots = generateTimeSlots();

  const handleAddService = () => {
    if (!currentServiceInput.trim()) return;
    setServicesList([...servicesList, currentServiceInput]);
    setCurrentServiceInput(''); 
  };

  const handleRemoveService = (indexToRemove: number) => {
    setServicesList(servicesList.filter((_, index) => index !== indexToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddService();
    }
  };

  useEffect(() => {
    if (startDate && endDate && startTime && endTime) {
      const startD = new Date(startDate);
      const endD = new Date(endDate);
      startD.setHours(0,0,0,0);
      endD.setHours(0,0,0,0);

      const timeDiff = endD.getTime() - startD.getTime();
      const daysCount = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;

      const [startH, startM] = startTime.split(':').map(Number);
      const [endH, endM] = endTime.split(':').map(Number);
      
      const startTotalMinutes = startH * 60 + startM;
      const endTotalMinutes = endH * 60 + endM;
      
      const minutesPerDay = endTotalMinutes - startTotalMinutes;
      const hoursPerDay = minutesPerDay / 60;

      if (daysCount > 0 && hoursPerDay > 0) {
        setEstimatedHours(daysCount * hoursPerDay);
        setCalcDetails({ days: daysCount, hoursPerDay: hoursPerDay });
      } else {
        setEstimatedHours(0);
        setCalcDetails({ days: 0, hoursPerDay: 0 });
      }
    }
  }, [startDate, endDate, startTime, endTime]);

  const totalValue = hourlyRate * estimatedHours;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      alert('Por favor, dê um título para a proposta.');
      return;
    }

    if (servicesList.length === 0) {
      alert('Por favor, adicione pelo menos um serviço à lista.');
      return;
    }

    if (!startDate || !startTime || !endDate || !endTime) {
      alert('Por favor, preencha todos os campos de data e hora.');
      return;
    }

    if (estimatedHours <= 0) {
      alert('Verifique as datas e horários.');
      return;
    }

    const startDateTime = new Date(`${startDate}T${startTime}`);
    const endDateTime = new Date(`${endDate}T${endTime}`);

    const formData = new FormData();
    formData.append('professionalId', professional.id);
    formData.append('professionalName', professional.name || 'Profissional');
    
    formData.append('servicesList', JSON.stringify(servicesList));
    formData.append('serviceType', title);

    formData.append('hourlyRate', String(hourlyRate));
    formData.append('estimatedHours', String(estimatedHours));
    formData.append('totalValue', String(totalValue));
    formData.append('description', description);
    formData.append('dataInicio', startDateTime.toISOString());
    formData.append('dataTermino', endDateTime.toISOString());

    startTransition(() => {
      createProposalAction(formData)
        .then((response) => {
          if (response?.success === false) {
            alert(`Erro: ${response.error}`);
            return;
          }
          alert('Proposta enviada com sucesso!');
          router.push('/propostas');
        })
        .catch((err) => {
          console.error(err);
          alert('Ocorreu um erro inesperado.');
        });
    });
  };

  const handleBack = () => router.back();
  
  const handleMenuClick = (itemName: string) => {
    if (itemName === 'Home') router.push('/dashboard');
    else if (itemName === 'Notificações') router.push('/notificacoes');
    else if (itemName === 'Propostas') router.push('/propostas');
    else if (itemName === 'Perfil') router.push('/perfil');
  };

  const getInitials = (name: string | null) => {
    if (!name) return '??';
    return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-blue-50 pb-24 sm:pb-20">
      <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center">
          <button
            onClick={handleBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors mr-3 flex-shrink-0"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>
          <h1 className="text-lg sm:text-xl font-bold text-gray-900 truncate">
            Nova Proposta
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-3 sm:p-4 space-y-4 sm:space-y-6">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
              {professional.photoUrl ? (
                <img
                  src={professional.photoUrl}
                  alt={professional.name || 'Profissional'}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                />
              ) : (
                <span className="text-white text-sm sm:text-xl font-bold">
                  {getInitials(professional.name)}
                </span>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 truncate">
                {professional.name}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                {professional.profissao || 'Profissional'}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">
                    R$ {Number(professional.valor).toFixed(2)}/hora
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
              Período e Horário
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Data de Início</label>
                <input
                  type="date"
                  required
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  onClick={(e) => e.currentTarget.showPicker()}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 cursor-pointer text-gray-900 font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Data de Término</label>
                <input
                  type="date"
                  required
                  min={startDate}
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  onClick={(e) => e.currentTarget.showPicker()}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 cursor-pointer text-gray-900 font-medium"
                />
              </div>
            </div>

            <div className="border-t border-gray-100 my-4"></div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block">
                Horário de Trabalho (Diário)
              </label>
              <div className="flex items-center gap-2">
                <div className="flex-1">
                  <span className="text-xs text-gray-500 mb-1 block">Das</span>
                  <select
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 font-medium"
                    required
                  >
                    <option value="">Início</option>
                    {timeSlots.map(time => (
                      <option key={`start-${time}`} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex-1">
                  <span className="text-xs text-gray-500 mb-1 block">Até as</span>
                  <select
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 font-medium"
                    required
                  >
                    <option value="">Fim</option>
                    {timeSlots.map(time => (
                      <option key={`end-${time}`} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            {estimatedHours > 0 && (
              <div className="mt-4 bg-blue-50 p-3 rounded-lg border border-blue-100">
                <p className="text-sm text-blue-800 font-medium flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Resumo: {calcDetails.days} dias × {calcDetails.hoursPerDay}h/dia
                  </span>
                  <span className="text-blue-900 font-bold bg-blue-100 px-2 py-1 rounded">
                    Total: {estimatedHours} horas
                  </span>
                </p>
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
              Serviços e Valores
            </h3>

            <div className="grid grid-cols-1 gap-3 sm:gap-4">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Título da Proposta *
                </label>
                <div className="relative">
                  <Edit3 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Ex: Reforma da Cozinha, Manutenção Elétrica..."
                    className="w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 font-medium"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Adicionar Itens / Serviços *
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={currentServiceInput}
                    onChange={(e) => setCurrentServiceInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Digite um serviço e clique no +"
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={handleAddService}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors flex items-center justify-center"
                    title="Adicionar serviço"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                {servicesList.length > 0 ? (
                  <div className="mt-3 border border-gray-200 rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Descrição
                          </th>
                          <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider w-10">
                            Remover
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {servicesList.map((service, index) => (
                          <tr key={index}>
                            <td className="px-4 py-2 text-sm text-gray-900">
                              {service}
                            </td>
                            <td className="px-4 py-2 text-right">
                              <button
                                type="button"
                                onClick={() => handleRemoveService(index)}
                                className="text-red-500 hover:text-red-700 p-1"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-xs text-gray-500 mt-2">
                    Nenhum serviço adicionado.
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Valor Hora
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="number"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(Number(e.target.value))}
                      className="w-full border border-gray-300 rounded-lg pl-8 pr-2 py-2 text-sm text-gray-900 font-medium"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Horas Totais
                  </label>
                  <input
                    type="number"
                    value={estimatedHours}
                    readOnly
                    className="w-full bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 font-medium cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-green-800 font-medium">Valor Total Estimado</span>
                  <span className="text-2xl font-bold text-green-900">
                    R$ {totalValue.toFixed(2)}
                  </span>
                </div>
                <p className="text-xs text-green-700 text-right">
                  {estimatedHours}h × R$ {Number(hourlyRate).toFixed(2)}/h
                </p>
              </div>

              <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Observações Gerais
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
                  placeholder="Alguma observação adicional sobre a proposta..."
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 p-3 sm:p-4">
        <div className="max-w-4xl mx-auto">
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={!title.trim() || servicesList.length === 0 || !startDate || !endDate || !startTime || !endTime || isPending || estimatedHours <= 0}
            className="w-full bg-blue-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold text-sm sm:text-lg transition-colors"
          >
            {isPending ? 'Enviando...' : `Enviar Proposta (R$ ${totalValue.toFixed(2)})`}
          </button>
        </div>
      </div>

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
                    item.active ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
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