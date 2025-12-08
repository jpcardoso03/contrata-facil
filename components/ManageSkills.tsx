'use client';

import { useState, useEffect, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Trash2, Edit2, Check, Loader2, ArrowLeft, X, ImageIcon, Search } from 'lucide-react';

import { 
  getGlobalSkillsAction, 
  addGlobalSkillAction, 
  removeGlobalSkillAction, 
  updateGlobalSkillAction 
} from '@/app/gerenciar-habilidades/actions';

interface Skill {
  id: number;
  name: string;
  imagemUrl: string | null;
}

export default function ManageSkills() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Estados para Adicionar
  const [isAdding, setIsAdding] = useState(false);
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillUrl, setNewSkillUrl] = useState('');

  // Estados para Editar
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState('');
  const [editUrl, setEditUrl] = useState('');

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

  const handleAddSkill = () => {
    if (!newSkillName.trim()) return;

    startTransition(async () => {
      const result = await addGlobalSkillAction(newSkillName, newSkillUrl);
      if (result.success) {
        setNewSkillName('');
        setNewSkillUrl('');
        setIsAdding(false);
        loadSkills(); 
      } else {
        alert(result.error || "Erro ao criar habilidade.");
      }
    });
  };

  const startEditing = (skill: Skill) => {
    setEditingId(skill.id);
    setEditName(skill.name);
    setEditUrl(skill.imagemUrl || '');
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditName('');
    setEditUrl('');
  };

  const handleUpdateSkill = () => {
    if (!editingId || !editName.trim()) return;

    startTransition(async () => {
      const result = await updateGlobalSkillAction(editingId, editName, editUrl);
      if (result.success) {
        setEditingId(null);
        loadSkills();
      } else {
        alert(result.error || "Erro ao atualizar habilidade.");
      }
    });
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Tem certeza que deseja tentar excluir esta habilidade?')) {
      const previousSkills = [...skills];
      setSkills(prev => prev.filter(skill => skill.id !== id));

      startTransition(async () => {
        const result = await removeGlobalSkillAction(id);
        
        if (!result.success) {
          alert(result.error); 
          setSkills(previousSkills); 
        }
      });
    }
  };

  const filteredSkills = skills.filter(skill => 
    skill.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <button 
            onClick={() => router.back()} 
            className="flex items-center text-gray-500 hover:text-gray-900 mb-4 transition-colors"
          >
             <ArrowLeft className="w-4 h-4 mr-2" /> Voltar ao Painel
          </button>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Gerenciar Habilidades</h1>
                <p className="text-gray-600 mt-1">Adicione, edite ou remova as especialidades disponíveis na plataforma.</p>
            </div>
            
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                    type="text" 
                    placeholder="Buscar habilidade..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none w-full md:w-64"
                />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-100 bg-gray-50/50">
            {!isAdding ? (
                <button
                onClick={() => setIsAdding(true)}
                className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
                >
                <Plus className="w-5 h-5" />
                Adicionar Nova Habilidade
                </button>
            ) : (
              <div className="bg-white p-5 rounded-xl border border-purple-200 shadow-sm animate-in fade-in slide-in-from-top-2">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Plus className="w-4 h-4 text-purple-600" /> Nova Habilidade
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nome *</label>
                        <input
                            type="text"
                            value={newSkillName}
                            onChange={(e) => setNewSkillName(e.target.value)}
                            placeholder="Ex: Pintura Residencial"
                            disabled={isPending}
                            autoFocus
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">URL da Imagem</label>
                        <div className="relative">
                            <ImageIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                value={newSkillUrl}
                                onChange={(e) => setNewSkillUrl(e.target.value)}
                                placeholder="https://exemplo.com/imagem.png"
                                disabled={isPending}
                                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex gap-3 justify-end">
                    <button
                      onClick={() => { setIsAdding(false); setNewSkillName(''); setNewSkillUrl(''); }}
                      disabled={isPending}
                      className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={handleAddSkill}
                      disabled={isPending || !newSkillName.trim()}
                      className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 disabled:opacity-50 text-sm font-medium"
                    >
                      {isPending ? <Loader2 className="w-4 h-4 animate-spin"/> : <Check className="w-4 h-4" />}
                      Salvar Habilidade
                    </button>
                </div>
              </div>
            )}
          </div>

          <div className="divide-y divide-gray-100">
            {filteredSkills.length === 0 ? (
                <div className="p-12 text-center text-gray-500">
                    <p>Nenhuma habilidade encontrada.</p>
                </div>
            ) : (
                filteredSkills.map((skill) => (
                    <div key={skill.id} className="p-4 flex flex-col md:flex-row md:items-center justify-between hover:bg-gray-50 transition-colors gap-4">
                        
                        {editingId === skill.id ? (
                            <div className="flex-1 w-full bg-blue-50 p-4 rounded-lg border border-blue-200">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                                    <input
                                        type="text"
                                        value={editName}
                                        onChange={(e) => setEditName(e.target.value)}
                                        className="px-3 py-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                                        placeholder="Nome da habilidade"
                                    />
                                    <input
                                        type="text"
                                        value={editUrl}
                                        onChange={(e) => setEditUrl(e.target.value)}
                                        className="px-3 py-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                                        placeholder="URL da imagem"
                                    />
                                </div>
                                <div className="flex justify-end gap-2">
                                    <button 
                                        onClick={cancelEditing}
                                        className="px-3 py-1.5 text-sm text-gray-600 hover:bg-white rounded-md border border-transparent hover:border-gray-300 transition-all"
                                    >
                                        Cancelar
                                    </button>
                                    <button 
                                        onClick={handleUpdateSkill}
                                        disabled={isPending}
                                        className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-1"
                                    >
                                        {isPending ? <Loader2 className="w-3 h-3 animate-spin"/> : <Check className="w-3 h-3"/>}
                                        Confirmar
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="flex items-center gap-4 overflow-hidden">
                                    <div className="w-12 h-12 rounded-lg bg-gray-100 border border-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
                                        {skill.imagemUrl ? (
                                            <img src={skill.imagemUrl} alt={skill.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <ImageIcon className="w-5 h-5 text-gray-400" />
                                        )}
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="font-medium text-gray-900 truncate text-lg">{skill.name}</h4>
                                        {skill.imagemUrl && (
                                            <p className="text-xs text-gray-400 truncate max-w-md">{skill.imagemUrl}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 self-end md:self-center">
                                    <button 
                                        onClick={() => startEditing(skill)}
                                        disabled={isPending}
                                        className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                        title="Editar"
                                    >
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(skill.id)}
                                        disabled={isPending}
                                        className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                        title="Excluir"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}