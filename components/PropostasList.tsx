'use client';

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { Home, Bell, User, FileText, ChevronDown, Check, Clock, Trash2, Star, X, RefreshCw, Calendar, ListChecks, MessageSquare } from 'lucide-react';
import { EnumStatusProposta, EnumTipoUsuario } from "@/app/generated/prisma";
import type { PropostaProcessada, PropostaStats } from '@/app/propostas/page';
import { deleteProposalAction } from '@/app/propostas/remover/actions';
import { updateProposalStatusAction } from '@/app/propostas/actions';

interface PropostasListProps {
  initialPropostas: PropostaProcessada[];
  stats: PropostaStats;
  userType: EnumTipoUsuario;
}

// ... (Mantenha as funções StatCard, getStatusBadge e StatusUpdateModal IGUAIS ao que você já tem) ...
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

function getStatusBadge(
  status: EnumStatusProposta,
  userRole: 'contratante' | 'prestador'
) {
  let text = '';
  let className = '';

  switch (status) {
    case 'CONCLUIDA':
      text = 'Concluída';
      className = 'bg-green-100 text-green-800';
      break;
    case 'EM_ANDAMENTO':
      text = 'Em andamento';
      className = 'bg-blue-100 text-blue-800';
      break;
    case 'PENDENTE':
      text = userRole === 'contratante' ? 'Aguardando Prestador' : 'Revisão Necessária';
      className = userRole === 'contratante' ? 'bg-gray-100 text-gray-800' : 'bg-yellow-100 text-yellow-800 animate-pulse';
      break;
    case 'AGUARDANDO_CONTRATANTE':
      text = userRole === 'contratante' ? 'Revisão Necessária' : 'Aguardando Contratante';
      className = userRole === 'contratante' ? 'bg-yellow-100 text-yellow-800 animate-pulse' : 'bg-gray-100 text-gray-800';
      break;
    case 'AGUARDANDO_PRESTADOR':
      text = userRole === 'contratante' ? 'Aguardando Prestador' : 'Revisão Necessária';
      className = userRole === 'contratante' ? 'bg-gray-100 text-gray-800' : 'bg-yellow-100 text-yellow-800 animate-pulse';
      break;
    case 'ACEITA':
      text = 'Aceita';
      className = 'bg-indigo-100 text-indigo-800';
      break;
    case 'RECUSADA':
      text = 'Recusada';
      className = 'bg-red-100 text-red-800';
      break;
    default:
      text = 'Cancelada';
      className = 'bg-gray-100 text-gray-800';
  }
  return (
    <span
      className={`px-3 py-1 text-xs sm:text-sm font-medium rounded-full ${className}`}
    >
      {text}
    </span>
  );
}

function StatusUpdateModal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  currentStatus 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  onConfirm: (newStatus: EnumStatusProposta) => void;
  currentStatus: EnumStatusProposta | null;
}) {
  if (!isOpen || !currentStatus) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">Atualizar Proposta</h3>
        <p className="text-gray-500 mb-6">Selecione o novo status para esta proposta:</p>
        
        <div className="flex flex-col gap-3">
          {currentStatus === 'ACEITA' && (
            <button
              onClick={() => onConfirm('EM_ANDAMENTO')}
              className="w-full py-3 px-4 bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium rounded-lg border border-blue-200 transition-colors flex items-center justify-center gap-2"
            >
              <Clock className="w-4 h-4" />
              Marcar como Em Andamento
            </button>
          )}

          {(currentStatus === 'ACEITA' || currentStatus === 'EM_ANDAMENTO') && (
            <button
              onClick={() => onConfirm('CONCLUIDA')}
              className="w-full py-3 px-4 bg-green-50 hover:bg-green-100 text-green-700 font-medium rounded-lg border border-green-200 transition-colors flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" />
              Marcar como Concluída
            </button>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
          <button 
            onClick={onClose}
            className="text-gray-600 font-medium text-sm hover:underline"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
// ... (Mantenha as funções StatCard, getStatusBadge e StatusUpdateModal IGUAIS) ...

function PropostaActions({
  proposta,
  onDelete,
  onUpdateStatusClick, 
  isPending,
}: {
  proposta: PropostaProcessada;
  onDelete: (id: number) => void;
  onUpdateStatusClick: (proposta: PropostaProcessada) => void;
  isPending: boolean;
}) {
  const { status, userRole, id } = proposta;

  const canDelete =
    userRole === 'contratante' && (status === 'PENDENTE' || status === 'CONCLUIDA');
  
  const deleteButton = canDelete && (
    <button
      onClick={() => onDelete(id)}
      disabled={isPending}
      className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 text-sm font-medium disabled:opacity-50"
    >
      <Trash2 className="w-4 h-4" />
      Excluir
    </button>
  );

  const canUpdateStatus = 
    userRole === 'contratante' && 
    (status === 'EM_ANDAMENTO' || status === 'ACEITA');

  const updateStatusButton = canUpdateStatus && (
    <button
      onClick={() => onUpdateStatusClick(proposta)}
      disabled={isPending}
      className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 text-sm font-medium disabled:opacity-50"
    >
      <RefreshCw className="w-4 h-4" />
      Atualizar Proposta
    </button>
  );

  // Lógica dos botões (Mantida a sua, apenas adicionado Link onde necessário)
  let actionButton = null;

  if (
    (status === 'PENDENTE' && userRole === 'contratante') ||
    (status === 'AGUARDANDO_PRESTADOR' && userRole === 'prestador')
  ) {
    actionButton = (
      <Link
        href={`/propostas/review/${id}`}
        className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium"
        >
        <Check className="w-4 h-4" />
        Editar
      </Link>
    );
  } else if (
    (status === 'AGUARDANDO_CONTRATANTE' && userRole === 'contratante') ||
    (status === 'PENDENTE' && userRole === 'prestador')
  ) {
      // Caso aguardando o OUTRO responder
      actionButton = (
        <div className="inline-flex items-center gap-2 text-gray-500 px-4 py-2 text-sm font-medium bg-gray-50 rounded-lg">
            <Clock className="w-4 h-4" />
            Aguardando resposta...
        </div>
      );
  } else if (status === 'CONCLUIDA' && userRole === 'contratante') {
    actionButton = (
      <Link 
        href={`/avaliar/${id}`}
        className="inline-flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 text-sm font-medium"
      >
        <Star className="w-4 h-4" />
        Avaliar
      </Link>
    )
  }

  return (
    <div className="flex justify-end gap-3 flex-wrap">
      {deleteButton}
      {updateStatusButton} 
      {actionButton}
    </div>
  );
}

export default function PropostasList({
  initialPropostas,
  stats,
  userType
}: PropostasListProps) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [propostas, setPropostas] = useState(initialPropostas);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProposta, setSelectedProposta] = useState<PropostaProcessada | null>(null);

  const menuItems = [];

  if (userType !== EnumTipoUsuario.PRESTADOR) {
      menuItems.push({ name: 'Home', icon: Home, active: false });
  }

  menuItems.push(
    { name: 'Notificações', icon: Bell, active: false },
    { name: 'Propostas', icon: FileText, active: true},
    { name: 'Perfil', icon: User, active: false }
  );

  const handleMenuClick = (itemName: string) => {
    if (itemName === 'Home') router.push('/dashboard');
    else if (itemName === 'Notificações') router.push('/notificacoes');
    else if (itemName === 'Propostas') router.push('/propostas');
    else if (itemName === 'Perfil') router.push('/perfil');
  };

  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleProposta = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleDelete = (id: number) => {
    if (confirm('Tem certeza que deseja excluir esta proposta? Esta ação não pode ser desfeita.')) {
      startTransition(async () => {
        const result = await deleteProposalAction(id);
        if (result.success) {
          setPropostas((prev) => prev.filter((p) => p.id !== id));
          alert('Proposta excluída com sucesso.');
          router.refresh();
        } else {
          alert(`Erro ao excluir: ${result.error}`);
        }
      });
    }
  };

  const openUpdateModal = (proposta: PropostaProcessada) => {
    setSelectedProposta(proposta);
    setIsModalOpen(true);
  };

  const handleStatusUpdate = (newStatus: EnumStatusProposta) => {
    if (!selectedProposta) return;

    startTransition(async () => {
      const result = await updateProposalStatusAction(selectedProposta.id, newStatus);
      
      if (result.success) {
        setPropostas((prev) => 
          prev.map((p) => 
            p.id === selectedProposta.id ? { ...p, status: newStatus } : p
          )
        );
        setIsModalOpen(false);
        setSelectedProposta(null);
        router.refresh();
      } else {
        alert('Erro ao atualizar status.');
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 relative">
      
      <StatusUpdateModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleStatusUpdate}
        currentStatus={selectedProposta?.status || null}
      />

      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 max-w-6xl mx-auto">
          Propostas
        </h1>
      </div>

      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        {/* Cards de Estatística */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <StatCard title="Total" value={stats.total} />
          <StatCard title="Concluídas" value={stats.concluidas} />
          <StatCard title="Em andamento" value={stats.emAndamento} />
          <StatCard title="Pendentes" value={stats.pendentes} />
        </div>

        <div className="space-y-4">
          {initialPropostas.length === 0 ? (
            <div className="text-center bg-white border border-gray-200 rounded-xl p-12">
              <h3 className="text-xl font-semibold text-gray-900">
                Nenhuma proposta encontrada
              </h3>
              <p className="text-gray-600 mt-2">
                Quando você criar propostas, elas aparecerão aqui.
              </p>
            </div>
          ) : (
            propostas.map((proposta) => {
              const isExpanded = expandedId === proposta.id;
              return (
                <div
                  key={proposta.id}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleProposta(proposta.id)}
                    className="flex items-center justify-between w-full p-4 sm:p-6 text-left transition-colors hover:bg-gray-50"
                  >
                    <div className="min-w-0 flex-1 mr-4">
                      <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-gray-500 font-medium">
                            Enviada em {proposta.dataEnvio}
                          </span>
                      </div>
                      <h2 className="text-base sm:text-lg font-bold text-gray-900 truncate">
                        {proposta.titulo}
                      </h2>
                      <p className="text-sm text-gray-600 truncate mt-1">
                         {proposta.userRole === 'contratante' 
                            ? `Para: ${proposta.prestadorNome}` 
                            : `De: ${proposta.contratanteNome}`}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                      {getStatusBadge(proposta.status, proposta.userRole)}
                      <div className="flex items-center gap-1 mt-1">
                          <span className="font-bold text-gray-900">{proposta.valorFormatado}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-400 transition-transform ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                      </div>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-4 sm:px-6 pb-6 border-t border-gray-200 bg-gray-50/50">
                      <div className="pt-6 space-y-6">
                        
                        {/* Seção 1: Detalhes Principais e Datas */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="flex items-center gap-2 font-semibold text-gray-900 mb-2">
                                        <FileText className="w-4 h-4 text-blue-600" />
                                        Descrição Geral
                                    </h4>
                                    <p className="text-gray-700 text-sm leading-relaxed bg-white p-3 rounded-lg border border-gray-200">
                                        {proposta.descricao || 'Sem descrição.'}
                                    </p>
                                </div>

                                {/* Resposta/Comentário se houver */}
                                {proposta.resposta && (
                                    <div>
                                        <h4 className="flex items-center gap-2 font-semibold text-gray-900 mb-2">
                                            <MessageSquare className="w-4 h-4 text-purple-600" />
                                            Resposta / Observação
                                        </h4>
                                        <p className="text-gray-700 text-sm leading-relaxed bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                                            {proposta.resposta}
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="flex items-center gap-2 font-semibold text-gray-900 mb-2">
                                        <Calendar className="w-4 h-4 text-blue-600" />
                                        Agendamento
                                    </h4>
                                    <div className="bg-white p-3 rounded-lg border border-gray-200 text-sm space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Início:</span>
                                            <span className="font-medium text-gray-900">{proposta.dataInicio}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Término:</span>
                                            <span className="font-medium text-gray-900">{proposta.dataTermino}</span>
                                        </div>
                                        <div className="border-t border-gray-100 my-2"></div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-500">Duração Total:</span>
                                            <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs font-bold">
                                                {proposta.duracaoEstimada}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <h4 className="flex items-center gap-2 font-semibold text-gray-900 mb-2">
                                        <User className="w-4 h-4 text-blue-600" />
                                        Envolvidos
                                    </h4>
                                    <div className="bg-white p-3 rounded-lg border border-gray-200 text-sm space-y-1">
                                        <p><span className="text-gray-500">Contratante:</span> <span className="font-medium">{proposta.contratanteNome}</span></p>
                                        <p><span className="text-gray-500">Prestador:</span> <span className="font-medium">{proposta.prestadorNome}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Seção 2: Lista de Serviços */}
                        <div>
                            <h4 className="flex items-center gap-2 font-semibold text-gray-900 mb-3">
                                <ListChecks className="w-4 h-4 text-blue-600" />
                                Serviços Inclusos
                            </h4>
                            {proposta.servicos && proposta.servicos.length > 0 ? (
                                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Item</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {proposta.servicos.map((servico, idx) => (
                                                <tr key={idx}>
                                                    <td className="px-4 py-2 text-sm text-gray-700">
                                                        {servico.nome}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <p className="text-sm text-gray-500 italic">Nenhum serviço listado especificamente.</p>
                            )}
                        </div>

                        {/* Botões de Ação */}
                        <div className="pt-4 border-t border-gray-200">
                          <PropostaActions
                            proposta={proposta}
                            onDelete={handleDelete}
                            onUpdateStatusClick={openUpdateModal}
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

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16 z-20">
        <div className="max-w-6xl mx-auto h-full">
          <div className="flex items-center justify-between h-full px-2">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleMenuClick(item.name)}
                  className={`flex flex-col items-center justify-center py-2 transition-colors h-full w-full ${
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