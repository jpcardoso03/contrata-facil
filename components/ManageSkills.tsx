'use client';

import { useState, useEffect, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Trash2, Star, Network, Check, Loader2, ArrowLeft, ShieldCheck } from 'lucide-react';


import { 
  getGlobalSkillsAction, 
  addGlobalSkillAction, 
  removeGlobalSkillAction, 
  toggleGlobalSkillPrimaryAction 
} from '@/app/gerenciar-habilidades/actions';

interface Skill {
  id: number;
  name: string;
  category: 'primary' | 'other';
  isPrimary: boolean;
}

export default function ManageSkills() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [newSkill, setNewSkill] = useState('');

  useEffect(() => {
    loadSkills();
  }, []);

  const loadSkills = async () => {
    try {
      const data = await getGlobalSkillsAction();
      setSkills(data as Skill[]);
    } catch (error) {
      console.error("Erro ao carregar habilidades:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTogglePrimary = (id: number, currentStatus: boolean) => {
    setSkills(prev => prev.map(skill => 
      skill.id === id ? { 
        ...skill, 
        isPrimary: !skill.isPrimary, 
        category: !skill.isPrimary ? 'primary' : 'other' 
      } : skill
    ));

    startTransition(async () => {
      const result = await toggleGlobalSkillPrimaryAction(id, currentStatus);
      if (!result.success) {
        alert(result.error || "Erro ao atualizar status.");
        loadSkills();
      }
    });
  };

  const handleDelete = (id: number) => {
    if (window.confirm('ATENÇÃO: Isso removerá a habilidade do sistema globalmente. Deseja continuar?')) {
      const previousSkills = [...skills];
      setSkills(prev => prev.filter(skill => skill.id !== id));

      startTransition(async () => {
        const result = await removeGlobalSkillAction(id);
        if (!result.success) {
          alert(result.error || "Erro ao remover habilidade.");
          setSkills(previousSkills); 
        }
      });
    }
  };

  const handleAddSkill = () => {
    if (!newSkill.trim()) return;

    startTransition(async () => {
      const result = await addGlobalSkillAction(newSkill);
      if (result.success) {
        setNewSkill('');
        setIsAdding(false);
        loadSkills(); 
      } else {
        alert(result.error || "Erro ao criar habilidade.");
      }
    });
  };

  const primarySkills = skills.filter(s => s.isPrimary);
  const otherSkills = skills.filter(s => !s.isPrimary);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <button 
            onClick={() => router.back()} 
            className="flex items-center text-gray-500 hover:text-gray-900 mb-4 transition-colors"
          >
             <ArrowLeft className="w-4 h-4 mr-2" /> Voltar ao Painel
          </button>
          
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Gerenciar Habilidades
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Gerencie as habilidades disponíveis no sistema. Defina quais aparecem em destaque na tela principal.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          
          <div className="p-6 border-b border-gray-100 bg-gray-50/50">
            {!isAdding && (
                <button
                onClick={() => setIsAdding(true)}
                className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
                >
                <Plus className="w-5 h-5" />
                Adicionar Habilidade
                </button>
            )}

            {isAdding && (
              <div className="mt-4 p-4 bg-white rounded-lg border border-purple-200 shadow-sm animate-in fade-in slide-in-from-top-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome da Habilidade</label>
                <div className="flex flex-col md:flex-row gap-3">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Ex: Instalação de Ar Condicionado"
                    disabled={isPending}
                    autoFocus
                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all outline-none"
                    onKeyDown={(e) => e.key === 'Enter' && handleAddSkill()}
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleAddSkill}
                      disabled={isPending}
                      className="bg-purple-600 text-white px-4 py-2.5 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 disabled:opacity-50"
                    >
                      {isPending ? <Loader2 className="w-4 h-4 animate-spin"/> : <Check className="w-4 h-4" />}
                      Salvar
                    </button>
                    <button
                      onClick={() => { setIsAdding(false); setNewSkill(''); }}
                      disabled={isPending}
                      className="bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="divide-y divide-gray-100">
            
            <div className="p-6 bg-yellow-50/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Star className="w-5 h-5 text-yellow-600 fill-yellow-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Em Destaque ({primarySkills.length})
                  </h2>
                  <p className="text-gray-500 text-xs">
                    Aparecem como filtro rápido na tela inicial dos contratantes
                  </p>
                </div>
              </div>

              {primarySkills.length === 0 && <p className="text-gray-400 italic text-sm ml-2">Nenhuma habilidade em destaque.</p>}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {primarySkills.map((skill) => (
                  <div key={skill.id} className="flex items-center justify-between p-3 bg-white rounded-lg border border-yellow-200 shadow-sm">
                    <span className="font-medium text-gray-800">{skill.name}</span>
                    <div className="flex items-center gap-1">
                       <button 
                         onClick={() => handleTogglePrimary(skill.id, true)}
                         disabled={isPending}
                         className="p-1.5 text-yellow-600 hover:bg-yellow-50 rounded-md transition-colors"
                         title="Remover destaque"
                       >
                         <Star className="w-4 h-4 fill-yellow-600" />
                       </button>
                       <button 
                         onClick={() => handleDelete(skill.id)} 
                         disabled={isPending}
                         className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                       >
                         <Trash2 className="w-4 h-4" />
                       </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Network className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-900">
                    Gerais ({otherSkills.length})
                    </h2>
                    <p className="text-gray-500 text-xs">
                    Disponíveis na busca avançada e no perfil
                    </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {otherSkills.map((skill) => (
                  <div key={skill.id} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                    <span className="font-medium text-gray-700 truncate mr-2" title={skill.name}>{skill.name}</span>
                    <div className="flex items-center gap-1 shrink-0">
                       <button 
                         onClick={() => handleTogglePrimary(skill.id, false)}
                         disabled={isPending}
                         className="p-1.5 text-gray-400 hover:text-yellow-500 hover:bg-yellow-50 rounded-md transition-colors"
                         title="Destacar"
                       >
                         <Star className="w-4 h-4" />
                       </button>
                       <button 
                         onClick={() => handleDelete(skill.id)} 
                         disabled={isPending}
                         className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                       >
                         <Trash2 className="w-4 h-4" />
                       </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}