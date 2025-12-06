'use client';

import { useState, useTransition, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, Clock, DollarSign, FileText, User, ArrowLeft, Plus, Trash2, Home, Bell, Edit3 } from 'lucide-react';
import { editProposalContentAction } from '@/app/propostas/update/actions'; 
import type { ProposalEditData } from '@/app/propostas/update/[id]/page';

interface UpdateProposalProps {
  proposal: ProposalEditData;
}

export default function UpdateProposal({ proposal }: UpdateProposalProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const formatDateForInput = (date: Date) => date.toISOString().split('T')[0];
  const formatTimeForInput = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const [title, setTitle] = useState(proposal.titulo);
  const [servicesList, setServicesList] = useState<string[]>(proposal.servicos);
  const [currentServiceInput, setCurrentServiceInput] = useState('');

  const [hourlyRate, setHourlyRate] = useState(proposal.valorHora);
  const [estimatedHours, setEstimatedHours] = useState(0); 
  const [description, setDescription] = useState(proposal.descricao);
  
  const [startDate, setStartDate] = useState(formatDateForInput(proposal.dataInicio));
  const [endDate, setEndDate] = useState(formatDateForInput(proposal.dataTermino));
  const [startTime, setStartTime] = useState(formatTimeForInput(proposal.dataInicio));
  const [endTime, setEndTime] = useState(formatTimeForInput(proposal.dataTermino));

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
    
    if (!title.trim()) { alert('Título obrigatório.'); return; }
    if (servicesList.length === 0) { alert('Adicione serviços.'); return; }
    if (estimatedHours <= 0) { alert('Datas inválidas.'); return; }

    const startDateTime = new Date(`${startDate}T${startTime}`);
    const endDateTime = new Date(`${endDate}T${endTime}`);

    const formData = new FormData();
    formData.append('proposalId', String(proposal.id));
    
    formData.append('servicesList', JSON.stringify(servicesList));
    formData.append('serviceType', title);
    formData.append('totalValue', String(totalValue));
    formData.append('estimatedHours', String(estimatedHours));
    formData.append('description', description);
    formData.append('dataInicio', startDateTime.toISOString());
    formData.append('dataTermino', endDateTime.toISOString());

    startTransition(() => {
      editProposalContentAction(formData)
        .then((response) => {
          if (response?.success === false) {
            alert(`Erro: ${response.error}`);
            return;
          }
          alert('Proposta atualizada com sucesso!');
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
            Editar Proposta #{proposal.id}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-3 sm:p-4 space-y-4 sm:space-y-6">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
               <span className="text-white text-sm sm:text-xl font-bold">
                  {getInitials(proposal.professionalName)}
               </span>
            </div>
            
            <div className="flex-1 min-w-0">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 truncate">
                {proposal.professionalName}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Prestador Selecionado
              </p>
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
                    <input type="date" required value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Data de Término</label>
                    <input type="date" required min={startDate} value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900" />
                  </div>
               </div>
               <div className="space-y-2">
                 <div className="flex items-center gap-2">
                   <select value={startTime} onChange={(e) => setStartTime(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900" required>
                     {timeSlots.map(time => <option key={`start-${time}`} value={time}>{time}</option>)}
                   </select>
                   <select value={endTime} onChange={(e) => setEndTime(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900" required>
                     {timeSlots.map(time => <option key={`end-${time}`} value={time}>{time}</option>)}
                   </select>
                 </div>
               </div>
           </div>

           <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Título da Proposta *</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900" required />
              </div>
              
              <div className="mb-4">
                 <div className="flex gap-2">
                   <input type="text" value={currentServiceInput} onChange={(e) => setCurrentServiceInput(e.target.value)} onKeyDown={handleKeyPress} placeholder="Novo serviço..." className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900" />
                   <button type="button" onClick={handleAddService} className="bg-blue-600 text-white p-2 rounded-lg"><Plus className="w-5 h-5"/></button>
                 </div>
                 <div className="mt-3">
                   {servicesList.map((service, index) => (
                     <div key={index} className="flex justify-between items-center py-2 border-b">
                       <span className="text-sm text-gray-900">{service}</span>
                       <button type="button" onClick={() => handleRemoveService(index)} className="text-red-500"><Trash2 className="w-4 h-4"/></button>
                     </div>
                   ))}
                 </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                 <div>
                    <label className="block text-sm font-medium text-gray-700">Valor Hora</label>
                    <input type="number" value={hourlyRate} onChange={(e) => setHourlyRate(Number(e.target.value))} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900" />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700">Total Est.</label>
                    <input type="text" value={`R$ ${totalValue.toFixed(2)}`} readOnly className="w-full bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900" />
                 </div>
              </div>
              
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900" />
           </div>

        </form>
      </div>

      <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 p-3 sm:p-4">
        <div className="max-w-4xl mx-auto">
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isPending}
            className="w-full bg-blue-600 text-white py-3 sm:py-4 px-4 rounded-lg hover:bg-blue-700 font-semibold text-sm transition-colors"
          >
            {isPending ? 'Salvando...' : 'Salvar Alterações'}
          </button>
        </div>
      </div>
      
       <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16">
       </div>
    </div>
  );
}