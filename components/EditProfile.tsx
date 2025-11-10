'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, MapPin, DollarSign, Mail, Lock, X, Plus, ArrowLeft, Save } from 'lucide-react';

export default function EditProfile() {
  const router = useRouter();
  
  // Dados atuais do usuário
  const [userData, setUserData] = useState({
    name: "João Silva",
    about: "Sou um contratante que valoriza serviços de qualidade e profissionais comprometidos. Sempre em busca das melhores soluções para meus projetos.",
    city: "São Paulo, SP",
    hourlyRate: 85,
    email: "joao.silva@email.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  // Habilidades do usuário
  const [skills, setSkills] = useState([
    "Gestão de Projetos",
    "Orçamento", 
    "Comunicação",
    "Planejamento"
  ]);
  
  const [newSkill, setNewSkill] = useState('');

  // Adicionar nova habilidade
  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  // Remover habilidade
  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Salvar alterações do perfil
  const handleSaveProfile = () => {
    console.log('Perfil salvo:', { ...userData, skills });
    alert('Perfil atualizado com sucesso!');
    router.back();
  };

  // Atualizar email
  const handleUpdateEmail = () => {
    if (!userData.email) {
      alert('Por favor, insira um email válido');
      return;
    }
    console.log('Email atualizado:', userData.email);
    alert('Email atualizado com sucesso!');
  };

  // Alterar senha
  const handleChangePassword = () => {
    if (!userData.currentPassword || !userData.newPassword) {
      alert('Por favor, preencha todos os campos de senha');
      return;
    }
    
    if (userData.newPassword !== userData.confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    console.log('Senha alterada');
    alert('Senha alterada com sucesso!');
    
    // Limpar campos de senha
    setUserData(prev => ({
      ...prev,
      currentPassword: "",
      newPassword: "", 
      confirmPassword: ""
    }));
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={handleBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors mr-3"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <h1 className="text-xl font-bold text-gray-900">Editar Perfil</h1>
          </div>
          <button
            onClick={handleSaveProfile}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            Salvar
          </button>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Seção: Informações Pessoais */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-blue-600" />
            Informações Pessoais
          </h2>

          <div className="space-y-4">
            {/* Nome */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                value={userData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Seu nome completo"
              />
            </div>

            {/* Sobre */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sobre
              </label>
              <textarea
                value={userData.about}
                onChange={(e) => handleInputChange('about', e.target.value)}
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                placeholder="Conte um pouco sobre você..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Cidade */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Cidade
                </label>
                <input
                  type="text"
                  value={userData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Sua cidade"
                />
              </div>

              {/* Valor por Hora */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <DollarSign className="w-4 h-4 inline mr-1" />
                  Valor por Hora (R$)
                </label>
                <input
                  type="number"
                  value={userData.hourlyRate}
                  onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Seção: Habilidades */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Habilidades</h2>
          
          {/* Lista de Habilidades */}
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg flex items-center gap-2"
              >
                <span className="text-sm font-medium">{skill}</span>
                <button
                  onClick={() => handleRemoveSkill(skill)}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Adicionar Nova Habilidade */}
          <div className="flex gap-2">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
              placeholder="Nova habilidade..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={handleAddSkill}
              disabled={!newSkill.trim()}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Adicionar
            </button>
          </div>
        </div>

        {/* Seção: Trocar Email */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-600" />
            Trocar Email
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Novo Email
              </label>
              <input
                type="email"
                value={userData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="seu.novo.email@exemplo.com"
              />
            </div>
            
            <button
              onClick={handleUpdateEmail}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Atualizar Email
            </button>
          </div>
        </div>

        {/* Seção: Trocar Senha */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5 text-blue-600" />
            Trocar Senha
          </h2>

          <div className="space-y-4">
            {/* Senha Atual */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Senha Atual
              </label>
              <input
                type="password"
                value={userData.currentPassword}
                onChange={(e) => handleInputChange('currentPassword', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Sua senha atual"
              />
            </div>

            {/* Nova Senha */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nova Senha
              </label>
              <input
                type="password"
                value={userData.newPassword}
                onChange={(e) => handleInputChange('newPassword', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Sua nova senha"
              />
            </div>

            {/* Confirmar Nova Senha */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirmar Nova Senha
              </label>
              <input
                type="password"
                value={userData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirme sua nova senha"
              />
            </div>
            
            <button
              onClick={handleChangePassword}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Alterar Senha
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}