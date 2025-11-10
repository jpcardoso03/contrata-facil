'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { Home, Bell, User, Edit, FileText, ChevronDown } from 'lucide-react';
import { EnumStatusProposta } from "@/app/generated/prisma";
import type { PropostaProcessada, PropostaStats } from '@/app/propostas/page';

interface PropostasListProps {
  initialPropostas: PropostaProcessada[];
  stats: PropostaStats;
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

function getStatusBadge(status: EnumStatusProposta) {
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
      text = 'Pendente';
      className = 'bg-yellow-100 text-yellow-800';
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

export default function PropostasList({
  initialPropostas,
  stats,
}: PropostasListProps) {
  const router = useRouter();

  const menuItems = [
  	{ name: 'Home', icon: Home, active: false },
  	{ name: 'Notificações', icon: Bell, active: true },
  	{ name: 'Propostas', icon: FileText },
  	{ name: 'Perfil', icon: User },
  ];

  const handleMenuClick = (itemName: string) => {
    if (itemName === 'Home') {
      router.push('/dashboard');
    } else if (itemName === 'Notificações') {
      router.push('/notificacoes');
    } else if (itemName === 'Propostas') {
      router.push('/propostas');
    } else if (itemName === 'Perfil') {
      router.push('/perfil');
    }
  };

  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleProposta = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 max-w-6xl mx-auto">
          Propostas
        </h1>
      </div>

      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        {/* Seção de Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <StatCard title="Total" value={stats.total} />
          <StatCard title="Concluídas" value={stats.concluidas} />
          <StatCard title="Em andamento" value={stats.emAndamento} />
          <StatCard title="Pendentes" value={stats.pendentes} />
        </div>

        {/* Lista de Propostas (Acordeão) */}
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
            initialPropostas.map((proposta) => {
              const isExpanded = expandedId === proposta.id;
              return (
                <div
                  key={proposta.id}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
                >
                  {/* Header do Acordeão (Clicável) */}
                  <button
                    onClick={() => toggleProposta(proposta.id)}
                    className="flex items-center justify-between w-full p-4 sm:p-6 text-left"
                  >
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                      {proposta.titulo}
                    </h2>
                    <div className="flex items-center gap-4">
                      {getStatusBadge(proposta.status)}
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {/* Conteúdo Colapsável */}
                  {isExpanded && (
                    <div className="px-4 sm:px-6 pb-6 border-t border-gray-200">
                      <div className="pt-4">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Descrição
                        </h4>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {proposta.descricao}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                          <div>
                            <h4 className="font-semibold text-gray-800">
                              Valor
                            </h4>
                            <p className="text-gray-700">
                              {proposta.valorFormatado}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">
                              Prazo
                            </h4>
                            <p className="text-gray-700">{proposta.prazo}</p>
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <Link
                            href={`/propostas/editar/${proposta.id}`} // Rota de Edição
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium"
                          >
                            <Edit className="w-4 h-4" />
                            Editar Proposta
                          </Link>
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