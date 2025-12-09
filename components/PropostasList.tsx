'use client';

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { 
  Home, Bell, User, FileText, ChevronDown, Check, Clock, Trash2, 
  Star, X, RefreshCw, Calendar, ListChecks, MessageSquareText, 
  Search, MessageSquare, ThumbsUp, Edit 
} from 'lucide-react';
import { EnumStatusProposta, EnumTipoUsuario } from "@/app/generated/prisma";
import type { PropostaProcessada, PropostaStats } from '@/app/propostas/page';
import { deleteProposalAction } from '@/app/propostas/remover/actions';
import { updateProposalStatusAction } from '@/app/propostas/actions';

interface PropostasListProps {
  initialPropostas: PropostaProcessada[];
  stats: PropostaStats;
  userType: EnumTipoUsuario;
}

function StatCard({ title, value }: { title: string; value: number }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 text-center shadow-sm">
      <h3 className="text-sm sm:text-base font-medium text-gray-500">{title}</h3>
      <p className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
        {value}
      </p>
    </div>
  );
}

function getStatusBadge(status: EnumStatusProposta, userRole: 'contratante' | 'prestador') {
  let text = '';
  let className = '';

  switch (status) {
    case 'CONCLUIDA':
      text = 'Concluída'; className = 'bg-green-100 text-green-800'; break;
    case 'EM_ANDAMENTO':
      text = 'Em andamento'; className = 'bg-blue-100 text-blue-800'; break;
    case 'PENDENTE':
      text = userRole === 'contratante' ? 'Aguardando Prestador' : 'Revisão Necessária';
      className = userRole === 'contratante' ? 'bg-gray-100 text-gray-800' : 'bg-yellow-100 text-yellow-800 animate-pulse';
      break;
    case 'AGUARDANDO_CONTRATANTE':
      text = userRole === 'contratante' ? 'Aguardando Confirmação' : 'Aguardando Contratante';
      className = userRole === 'contratante' ? 'bg-yellow-100 text-yellow-800 animate-pulse' : 'bg-gray-100 text-gray-800';
      break;
    case 'AGUARDANDO_PRESTADOR':
      text = 'Aguardando Prestador'; className = 'bg-yellow-100 text-yellow-800'; break;
    case 'ACEITA':
      text = 'Aceita'; className = 'bg-indigo-100 text-indigo-800'; break;
    case 'RECUSADA':
      text = 'Recusada'; className = 'bg-red-100 text-red-800'; break;
    default:
      text = 'Cancelada'; className = 'bg-gray-100 text-gray-800';
  }
  return <span className={`px-3 py-1 text-xs sm:text-sm font-medium rounded-full ${className}`}>{text}</span>;
}

function RespondProposalModal({ 
  isOpen, onClose, onConfirm, actionType 
}: { 
  isOpen: boolean; onClose: () => void; onConfirm: (response: string) => void; actionType: 'ACEITA' | 'RECUSADA' | null; 
}) {
  const [responseText, setResponseText] = useState('');
  if (!isOpen || !actionType) return null;
  const isAccepting = actionType === 'ACEITA';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
        <h3 className={`text-xl font-bold mb-2 ${isAccepting ? 'text-green-700' : 'text-red-700'}`}>
          {isAccepting ? 'Aceitar Proposta' : 'Recusar Proposta'}
        </h3>
        <p className="text-gray-500 mb-4 text-sm">
          {isAccepting ? 'Você está prestes a aceitar este serviço. Deseja enviar uma mensagem ao contratante?' : 'Tem certeza que deseja recusar? Você pode explicar o motivo abaixo.'}
        </p>
        <textarea value={responseText} onChange={(e) => setResponseText(e.target.value)} placeholder={isAccepting ? "Ex: Combinado! Aguardo confirmação." : "Ex: Infelizmente não tenho agenda..."} rows={3} className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none mb-4"/>
        <div className="flex gap-3 justify-end">
          <button onClick={onClose} className="px-4 py-2 text-gray-600 font-medium text-sm hover:bg-gray-100 rounded-lg transition-colors">Voltar</button>
          <button onClick={() => onConfirm(responseText)} className={`px-4 py-2 text-white font-medium text-sm rounded-lg transition-colors flex items-center gap-2 ${isAccepting ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`}>
            {isAccepting ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
            {isAccepting ? 'Confirmar Aceite' : 'Confirmar Recusa'}
          </button>
        </div>
      </div>
    </div>
  );
}

function StatusUpdateModal({ isOpen, onClose, onConfirm, currentStatus }: { isOpen: boolean; onClose: () => void; onConfirm: (newStatus: EnumStatusProposta) => void; currentStatus: EnumStatusProposta | null; }) {
  if (!isOpen || !currentStatus) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Atualizar Status</h3>
        <p className="text-gray-500 mb-6 text-sm">O que deseja fazer com este projeto?</p>
        <div className="flex flex-col gap-3">
          {currentStatus === 'ACEITA' && <button onClick={() => onConfirm('EM_ANDAMENTO')} className="w-full py-3 px-4 bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium rounded-lg border border-blue-200 flex items-center justify-center gap-2 transition-colors"><Clock className="w-4 h-4" /> Iniciar Serviço</button>}
          {(currentStatus === 'ACEITA' || currentStatus === 'EM_ANDAMENTO') && <button onClick={() => onConfirm('CONCLUIDA')} className="w-full py-3 px-4 bg-green-50 hover:bg-green-100 text-green-700 font-medium rounded-lg border border-green-200 flex items-center justify-center gap-2 transition-colors"><Check className="w-4 h-4" /> Concluir Serviço</button>}
        </div>
      </div>
    </div>
  );
}


function PropostaActions({
  proposta,
  onDelete,
  onUpdateStatusClick,
  onRespondClick,
  isPending,
}: {
  proposta: PropostaProcessada;
  onDelete: (id: number) => void;
  onUpdateStatusClick: (proposta: PropostaProcessada) => void;
  onRespondClick: (proposta: PropostaProcessada, action: 'ACEITA' | 'RECUSADA') => void;
  isPending: boolean;
}) {
  const { status, userRole, id } = proposta;

  if (userRole === 'contratante') {
    if (status === 'PENDENTE' || status === 'CONCLUIDA' || status === 'RECUSADA') {
        return (
          <div className="flex justify-end gap-3 items-center flex-wrap">

             {status === 'CONCLUIDA' && (
               <Link
                 href={`/avaliar/${id}`}
                 className="inline-flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 text-sm font-medium transition-colors"
               >
                 <Star className="w-4 h-4" /> Avaliar
               </Link>
             )}

             {status === 'PENDENTE' && (
               <span className="inline-flex items-center gap-2 text-gray-500 px-3 py-1 text-sm font-medium bg-gray-50 rounded-lg">
                   <Clock className="w-4 h-4" /> Aguardando Prestador
               </span>
             )}

             {status === 'PENDENTE' && (
               <Link
                 href={`/propostas/update/${id}`}
                 className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium transition-colors"
               >
                 <Edit className="w-4 h-4" /> Editar
               </Link>
             )}

             <button 
               onClick={() => onDelete(id)} 
               disabled={isPending} 
               className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 text-sm font-medium transition-colors"
             >
               <Trash2 className="w-4 h-4" /> Excluir
             </button>
          </div>
        );
    }
      if (status === 'ACEITA' || status === 'EM_ANDAMENTO') {
          return (
            <div className="flex justify-end">
                <button 
                  onClick={() => onUpdateStatusClick(proposta)} 
                  disabled={isPending} 
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 text-sm font-medium transition-colors"
                >
                  <RefreshCw className="w-4 h-4" /> Atualizar Status
                </button>
            </div>
          );
      }
  }

  if (userRole === 'prestador') {
      if (status === 'PENDENTE' || status === 'AGUARDANDO_PRESTADOR') {
          return (
            <div className="flex justify-end gap-3">
                <button 
                    onClick={() => onRespondClick(proposta, 'RECUSADA')} 
                    disabled={isPending} 
                    className="inline-flex items-center gap-2 border border-red-200 text-red-700 px-4 py-2 rounded-lg hover:bg-red-50 text-sm font-medium transition-colors"
                >
                    <X className="w-4 h-4" /> Recusar
                </button>
                <button 
                    onClick={() => onRespondClick(proposta, 'ACEITA')} 
                    disabled={isPending} 
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm font-medium transition-colors"
                >
                    <ThumbsUp className="w-4 h-4" /> Aceitar
                </button>
            </div>
          );
      }
      if (status === 'ACEITA' || status === 'AGUARDANDO_CONTRATANTE') {
          return (
            <div className="flex justify-end">
                <div className="inline-flex items-center gap-2 text-indigo-600 bg-indigo-50 px-4 py-2 rounded-lg text-sm font-medium">
                    <Clock className="w-4 h-4" /> Aguardando Contratante iniciar
                </div>
            </div>
          );
      }
  }

  return null;
}

export default function PropostasList({
  initialPropostas,
  stats,
  userType
}: PropostasListProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [propostas, setPropostas] = useState(initialPropostas);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [isRespondModalOpen, setIsRespondModalOpen] = useState(false);
  const [selectedProposta, setSelectedProposta] = useState<PropostaProcessada | null>(null);
  const [responseActionType, setResponseActionType] = useState<'ACEITA' | 'RECUSADA' | null>(null);

  const toggleProposta = (id: number) => setExpandedId(expandedId === id ? null : id);

  const menuItems = [];

  if (userType === EnumTipoUsuario.CONTRATANTE) {
      menuItems.push({ name: 'Home', icon: Home, route: '/dashboard', active: false });
      menuItems.push({ name: 'Busca', icon: Search, route: '/busca-prestadores', active: false });
  } 
  
  if (userType === EnumTipoUsuario.PRESTADOR) {
    menuItems.push({ name: 'Notificações', icon: Bell, route: '/notificacoes', active: false });
  }

  menuItems.push(
    { name: 'Mensagens', icon: MessageSquareText, route: '/mensagens', active: false},
    { name: 'Propostas', icon: FileText, route: '/propostas', active: true},
    { name: 'Perfil', icon: User, route: '/perfil', active: false }
  );

  const handleMenuClick = (route: string) => {
    router.push(route);
  };

  const gridClass = menuItems.length === 5 ? 'grid-cols-5' : 'grid-cols-4';

  const handleDelete = (id: number) => {
    if (confirm('Tem certeza que deseja excluir esta proposta?')) {
      startTransition(async () => {
        const result = await deleteProposalAction(id);
        if (result.success) {
            setPropostas(p => p.filter(x => x.id !== id));
            router.refresh();
        } else {
            alert(result.error);
        }
      });
    }
  };

  const openStatusModal = (proposta: PropostaProcessada) => {
    setSelectedProposta(proposta);
    setIsStatusModalOpen(true);
  };

  const handleStatusUpdate = (newStatus: EnumStatusProposta) => {
    if (!selectedProposta) return;
    startTransition(async () => {
      await updateProposalStatusAction(selectedProposta.id, newStatus);
      setIsStatusModalOpen(false);
      router.refresh();
    });
  };

  const openRespondModal = (proposta: PropostaProcessada, action: 'ACEITA' | 'RECUSADA') => {
      setSelectedProposta(proposta);
      setResponseActionType(action);
      setIsRespondModalOpen(true);
  };

  const handlePrestadorResponse = (responseText: string) => {
      if (!selectedProposta || !responseActionType) return;

      startTransition(async () => {
          const result = await updateProposalStatusAction(selectedProposta.id, responseActionType, responseText);
          if (result.success) {
              setIsRespondModalOpen(false);
              setSelectedProposta(null);
              setResponseActionType(null);
              router.refresh(); 
          } else {
              alert(result.error);
          }
      });
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 relative">
      <StatusUpdateModal isOpen={isStatusModalOpen} onClose={() => setIsStatusModalOpen(false)} onConfirm={handleStatusUpdate} currentStatus={selectedProposta?.status || null} />
      <RespondProposalModal isOpen={isRespondModalOpen} onClose={() => setIsRespondModalOpen(false)} onConfirm={handlePrestadorResponse} actionType={responseActionType} />

      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 max-w-6xl mx-auto">Propostas</h1>
      </div>

      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <StatCard title="Total" value={stats.total} />
          <StatCard title="Concluídas" value={stats.concluidas} />
          <StatCard title="Em andamento" value={stats.emAndamento} />
          <StatCard title="Pendentes" value={stats.pendentes} />
        </div>

        <div className="space-y-4">
          {propostas.length === 0 ? (
             <div className="text-center bg-white border border-gray-200 rounded-xl p-12 text-gray-500">Nenhuma proposta encontrada.</div>
          ) : (
            propostas.map((proposta) => {
              const isExpanded = expandedId === proposta.id;
              return (
                <div key={proposta.id} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <button onClick={() => toggleProposta(proposta.id)} className="flex items-center justify-between w-full p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors">
                    <div className="min-w-0 flex-1 mr-4">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs text-gray-500 font-medium">Enviada em {proposta.dataEnvio}</span>
                        </div>
                        <h2 className="text-base sm:text-lg font-bold text-gray-900 truncate">{proposta.titulo}</h2>
                        <p className="text-sm text-gray-600 truncate mt-1">
                            {proposta.userRole === 'contratante' ? `Para: ${proposta.prestadorNome}` : `De: ${proposta.contratanteNome}`}
                        </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        {getStatusBadge(proposta.status, proposta.userRole)}
                        <div className="flex items-center gap-1 font-bold text-gray-900">
                            {proposta.valorFormatado}
                            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </div>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-4 sm:px-6 pb-6 border-t border-gray-200 bg-gray-50/50">
                      <div className="pt-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2"><FileText className="w-4 h-4 text-blue-600"/> Descrição</h4>
                                    <p className="bg-white p-3 rounded-lg border border-gray-200 text-sm text-gray-700 leading-relaxed">{proposta.descricao || 'Sem descrição'}</p>
                                </div>
                                {proposta.resposta && (
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2"><MessageSquare className="w-4 h-4 text-purple-600"/> Resposta / Observação</h4>
                                        <p className="bg-yellow-50 p-3 rounded-lg border border-yellow-100 text-sm text-gray-700 leading-relaxed">{proposta.resposta}</p>
                                    </div>
                                )}
                            </div>
                            
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-600"/> Agendamento</h4>
                                    <div className="bg-white p-3 rounded-lg border border-gray-200 text-sm space-y-2">
                                        <div className="flex justify-between"><span className="text-gray-500">Início:</span> <span>{proposta.dataInicio}</span></div>
                                        <div className="flex justify-between"><span className="text-gray-500">Fim:</span> <span>{proposta.dataTermino}</span></div>
                                        <div className="border-t border-gray-100 my-2"></div>
                                        <div className="flex justify-between font-bold text-blue-800"><span>Duração:</span> <span>{proposta.duracaoEstimada}</span></div>
                                    </div>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2"><ListChecks className="w-4 h-4 text-blue-600"/> Serviços</h4>
                                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                        {proposta.servicos && proposta.servicos.length > 0 ? (
                                            <ul className="divide-y divide-gray-200">
                                                {proposta.servicos.map((s, i) => (
                                                    <li key={i} className="px-4 py-2 text-sm text-gray-700">{s.nome}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="px-4 py-2 text-sm text-gray-500 italic">Nenhum serviço listado.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-200">
                          <PropostaActions
                            proposta={proposta}
                            onDelete={handleDelete}
                            onUpdateStatusClick={openStatusModal}
                            onRespondClick={openRespondModal}
                            isPending={isPending}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-20">
        <div className="max-w-6xl mx-auto h-full">
          <div className={`grid ${gridClass} h-full`}>
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <button key={index} onClick={() => handleMenuClick(item.route)} className={`flex flex-col items-center justify-center py-2 transition-colors h-full w-full ${item.active ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
                  <IconComponent className={`w-6 h-6 mb-1 ${item.active ? 'fill-blue-100' : ''}`} />
                  <span className="text-[10px] font-medium truncate w-full text-center">{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
}