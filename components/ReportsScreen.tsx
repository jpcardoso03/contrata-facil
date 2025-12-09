'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { BarChart3, Calendar, Users, ArrowLeft, Filter, User, Briefcase, Home, Search, ChartArea } from 'lucide-react';
import { generateReportAction, type ReportResult } from '@/app/relatorios/actions';

export default function ReportsScreen() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [reportType, setReportType] = useState<'PRESTADORES' | 'CONTRATANTES'>('PRESTADORES');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [limit, setLimit] = useState(10);

  const [data, setData] = useState<ReportResult[] | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleGenerate = () => {
    if (!startDate || !endDate) {
      alert('Por favor, selecione as datas de início e fim.');
      return;
    }

    startTransition(async () => {
      const results = await generateReportAction({
        type: reportType,
        startDate,
        endDate,
        limit
      });
      setData(results);
      setHasSearched(true);
    });
  };

  const handleBack = () => {
    router.back();
  };

  const handleMenuClick = (itemName: string) => {
    if (itemName === 'Home') router.push('/adm');
    else if (itemName === 'Relatorios') router.push('/relatorios')
    else if (itemName === 'Busca') router.push('/busca');
    else if (itemName === 'Perfil') router.push('/perfil'); 
  };

  const menuItems = [
    { name: 'Home', icon: Home, active: false },
    { name: 'Relatorios', icon: ChartArea, active: true},
    { name: 'Busca', icon: Search, active: false },
    { name: 'Perfil', icon: User, active: false },
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  const getInitials = (name: string | null) => {
    if (!name) return '??';
    return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={handleBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-blue-600" />
                Relatórios
              </h1>
              <p className="text-xs text-gray-500">Análise de desempenho e atividade</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 sm:p-6 space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <div className="flex items-center gap-2 mb-4 text-blue-800 font-medium">
            <Filter className="w-5 h-5" />
            Configuração do Relatório
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Tipo de Análise</label>
              <div className="flex bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setReportType('PRESTADORES')}
                  className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-all ${
                    reportType === 'PRESTADORES' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Top Prestadores
                </button>
                <button
                  onClick={() => setReportType('CONTRATANTES')}
                  className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-all ${
                    reportType === 'CONTRATANTES' 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Top Contratantes
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">De</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Até</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex gap-3 items-end">
              <div className="space-y-1 w-24">
                <label className="text-sm font-medium text-gray-700">Top</label>
                <select
                  value={limit}
                  onChange={(e) => setLimit(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>
              
              <button
                onClick={handleGenerate}
                disabled={isPending}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm disabled:bg-blue-400 h-[38px] flex items-center justify-center gap-2"
              >
                {isPending ? 'Gerando...' : 'Gerar Relatório'}
              </button>
            </div>
          </div>
        </div>

        {hasSearched && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-800">
                Resultado: Top {limit} {reportType === 'PRESTADORES' ? 'Prestadores' : 'Contratantes'}
              </h2>
              {data && data.length > 0 && (
                <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
                  {data.length} registros encontrados
                </span>
              )}
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {!data || data.length === 0 ? (
                <div className="p-12 text-center text-gray-500">
                  <div className="flex justify-center mb-3">
                    <Users className="w-12 h-12 text-gray-300" />
                  </div>
                  <p>Nenhum dado encontrado para o período selecionado.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold">
                        <th className="px-6 py-4 w-16 text-center">Rank</th>
                        <th className="px-6 py-4">Usuário</th>
                        <th className="px-6 py-4 text-center">
                          {reportType === 'PRESTADORES' ? 'Contratos Realizados' : 'Propostas Criadas'}
                        </th>
                        <th className="px-6 py-4 text-right">Volume Total (R$)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {data.map((item) => (
                        <tr key={item.userId} className="hover:bg-blue-50/30 transition-colors">
                          <td className="px-6 py-4 text-center">
                            <div className={`
                              inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm
                              ${item.rank === 1 ? 'bg-yellow-100 text-yellow-700' : 
                                item.rank === 2 ? 'bg-gray-200 text-gray-700' : 
                                item.rank === 3 ? 'bg-orange-100 text-orange-800' : 
                                'bg-gray-50 text-gray-600'}
                            `}>
                              {item.rank}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                                {item.userImage ? (
                                  <img src={item.userImage} alt={item.userName || ''} className="w-full h-full object-cover" />
                                ) : (
                                  <span className="text-blue-600 font-bold text-xs">{getInitials(item.userName)}</span>
                                )}
                              </div>
                              <div>
                                <div className="font-semibold text-gray-900">{item.userName}</div>
                                <div className="text-xs text-gray-500 flex items-center gap-1">
                                  {reportType === 'PRESTADORES' ? <Briefcase className="w-3 h-3" /> : <Users className="w-3 h-3" />}
                                  {item.userProfession}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
                              {item.count}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right font-medium text-gray-700">
                            {formatCurrency(item.totalValue)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
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