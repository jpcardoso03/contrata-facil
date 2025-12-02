'use client';

import { useState } from 'react';
import { Plus, Edit2, Trash2, Star, Network, Check } from 'lucide-react';

interface Skill {
  id: number;
  name: string;
  category: 'primary' | 'other';
  isPrimary: boolean;
}

export default function ManageSkills() {
  const [skills, setSkills] = useState<Skill[]>([
    { id: 1, name: 'Carpintaria', category: 'primary', isPrimary: true },
    { id: 2, name: 'Marcenaria', category: 'primary', isPrimary: true },
    { id: 3, name: 'Serralheria', category: 'other', isPrimary: false },
    { id: 4, name: 'Pintura', category: 'other', isPrimary: false },
    { id: 5, name: 'Elétrica', category: 'other', isPrimary: false },
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [newSkill, setNewSkill] = useState('');

  const handleTogglePrimary = (id: number) => {
    setSkills(skills.map(skill => 
      skill.id === id ? { ...skill, isPrimary: !skill.isPrimary } : skill
    ));
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Tem certeza que deseja remover esta habilidade?')) {
      setSkills(skills.filter(skill => skill.id !== id));
    }
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      const newSkillObj: Skill = {
        id: skills.length + 1,
        name: newSkill.trim(),
        category: 'other',
        isPrimary: false
      };
      setSkills([...skills, newSkillObj]);
      setNewSkill('');
      setIsAdding(false);
    }
  };

  const primarySkills = skills.filter(s => s.category === 'primary' || s.isPrimary);
  const otherSkills = skills.filter(s => !s.isPrimary);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Cabeçalho */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Gerenciar Habilidades
          </h1>
          <p className="text-gray-600 text-lg">
            Adicione, edite e organize suas habilidades profissionais.
          </p>
        </div>

        {/* Card Principal */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Botão Adicionar Habilidade */}
          <div className="p-6 border-b border-gray-100">
            <button
              onClick={() => setIsAdding(true)}
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
            >
              <Plus className="w-5 h-5" />
              Adicionar Habilidade
            </button>

            {/*Adicionar Habilidade */}
            {isAdding && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex flex-col md:flex-row gap-3">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Digite o nome da nova habilidade..."
                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleAddSkill}
                      className="bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      Adicionar
                    </button>
                    <button
                      onClick={() => setIsAdding(false)}
                      className="bg-gray-200 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Conteúdo */}
          <div className="divide-y divide-gray-100">
            {/* Seção: Habilidades Principais */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Network className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Habilidades Principais ({primarySkills.length})
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Suas habilidades principais serão exibidas em destaque no perfil
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {primarySkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-100 hover:bg-blue-100/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg border border-blue-200">
                        <Star className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{skill.name}</h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Principal
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Principal</span>
                        <button
                          onClick={() => handleTogglePrimary(skill.id)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${skill.isPrimary ? 'bg-blue-600' : 'bg-gray-200'}`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${skill.isPrimary ? 'translate-x-6' : 'translate-x-1'}`}
                          />
                        </button>
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(skill.id)}
                          className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Seção: Outras Habilidades */}
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">
                  Outras Habilidades ({otherSkills.length})
                </h2>
                <p className="text-gray-500 text-sm">
                  Habilidades complementares que você possui
                </p>
              </div>

              <div className="space-y-3">
                {otherSkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg border border-gray-300">
                        <Network className="w-4 h-4 text-gray-600" />
                      </div>
                      <h3 className="font-medium text-gray-900">{skill.name}</h3>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">Principal</span>
                        <button
                          onClick={() => handleTogglePrimary(skill.id)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${skill.isPrimary ? 'bg-blue-600' : 'bg-gray-200'}`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${skill.isPrimary ? 'translate-x-6' : 'translate-x-1'}`}
                          />
                        </button>
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(skill.id)}
                          className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>
            <span className="font-medium">Dica:</span> Arraste as habilidades para reorganizar a ordem de exibição
          </p>
        </div>
      </div>
    </div>
  );
}