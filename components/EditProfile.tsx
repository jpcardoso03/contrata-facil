'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  User,
  MapPin,
  DollarSign,
  Mail,
  Lock,
  X,
  Plus,
  ArrowLeft,
  Save,
  Trash2,
} from 'lucide-react';

type UserType = 'CONTRATANTE' | 'PRESTADOR';

interface EditProfileProps {
  userData: {
    id: string;
    name: string;
    about: string;
    city: string;
    email: string;
    hourlyRate: number;
    skills: string[];
  };
  userType: UserType;
}

export default function EditProfile({
  userData: initialData,
  userType,
}: EditProfileProps) {
  const router = useRouter();

  const [userData, setUserData] = useState({
    name: initialData.name,
    about: initialData.about,
    city: initialData.city,
    hourlyRate: initialData.hourlyRate,
    email: initialData.email,
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [skills, setSkills] = useState(initialData.skills || []);
  const [availableSkills, setAvailableSkills] = useState<
    { id: number; nome: string }[]
  >([]);
  const [newSkill, setNewSkill] = useState('');

  useEffect(() => {
    async function fetchSkills() {
      try {
        const res = await fetch('/api/skills');
        const data = await res.json();
        if (data.success) setAvailableSkills(data.skills);
      } catch (err) {
        console.error('Erro ao carregar habilidades:', err);
      }
    }
    fetchSkills();
  }, []);

  const handleAddSkill = (skillId: number) => {
    const skill = availableSkills.find((s) => s.id === skillId);
    if (skill && !skills.includes(skill.nome)) {
      setSkills([...skills, skill.nome]);
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleInputChange = (field: string, value: string) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveProfile = async () => {
    try {
      const selectedSkillIds = availableSkills
        .filter((s) => skills.includes(s.nome))
        .map((s) => s.id);

      const res = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: userData.name,
          about: userData.about,
          city: userData.city,
          hourlyRate: userData.hourlyRate,
          skills: selectedSkillIds,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        alert(`Erro: ${data.error || 'Falha ao salvar perfil'}`);
        return;
      }

      alert('Perfil atualizado com sucesso!');
      router.refresh();
    } catch (err) {
      console.error(err);
      alert('Erro ao atualizar perfil');
    }
  };

  const handleUpdateEmail = async () => {
    if (!userData.email) {
      alert('Por favor, insira um e-mail válido');
      return;
    }

    try {
      const res = await fetch('/api/updateEmail', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userData.email }),
      });

      const data = await res.json();
      if (!data.success) {
        alert(`Erro: ${data.error || 'Falha ao atualizar e-mail'}`);
        return;
      }

      alert('E-mail atualizado com sucesso!');
    } catch (err) {
      console.error(err);
      alert('Erro ao atualizar e-mail. Tente novamente.');
    }
  };

  const handleChangePassword = async () => {
    if (!userData.currentPassword || !userData.newPassword) {
      alert('Por favor, preencha todos os campos de senha');
      return;
    }

    if (userData.newPassword !== userData.confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    try {
      const res = await fetch('/api/updatePassword', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentPassword: userData.currentPassword,
          newPassword: userData.newPassword,
        }),
      });

      const data = await res.json();
      if (!data.success) {
        alert(`Erro: ${data.error || 'Falha ao alterar senha'}`);
        return;
      }

      alert('Senha alterada com sucesso!');
      setUserData((prev) => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      }));
    } catch (err) {
      console.error(err);
      alert('Erro ao alterar senha. Tente novamente.');
    }
  };

  const handleBack = () => {
    router.back();
  };

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm(
      'Tem certeza que deseja excluir sua conta? Essa ação não pode ser desfeita.'
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch('/api/deleteAccount', {
        method: 'DELETE',
      });

      const data = await res.json();

      if (!data.success) {
        alert(`Erro: ${data.error || 'Falha ao excluir conta'}`);
        return;
      }

      alert('Conta excluída com sucesso!');
      router.push('/login');
    } catch (err) {
      console.error(err);
      alert('Erro ao excluir conta. Tente novamente mais tarde.');
    }
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

      {/* Conteúdo principal */}
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-red-600 mb-3 flex items-center gap-2">
            <Trash2 className="w-5 h-5" />
            Excluir Conta
          </h2>
          <p className="text-gray-700 mb-4">
            Esta ação é permanente. Todos os seus dados serão removidos do sistema.
          </p>
          <button
            onClick={handleDeleteAccount}
            className="bg-red-600 text-white px-5 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
          >
            <Trash2 className="w-5 h-5" />
            Excluir minha conta
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-blue-600" />
            Informações Pessoais
          </h2>

          <div className="space-y-4">
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

              {userType === 'PRESTADOR' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <DollarSign className="w-4 h-4 inline mr-1" />
                    Valor por Hora (R$)
                  </label>
                  <input
                    type="number"
                    value={userData.hourlyRate}
                    onChange={(e) =>
                      handleInputChange('hourlyRate', e.target.value)
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    min="0"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Seção: Habilidades */}
        {userType === 'PRESTADOR' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Habilidades
            </h2>

            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value=""
              onChange={(e) => handleAddSkill(Number(e.target.value))}
            >
              <option value="">Selecione uma habilidade...</option>
              {availableSkills.map((skill) => (
                <option key={skill.id} value={skill.id}>
                  {skill.nome}
                </option>
              ))}
            </select>

            {/* Habilidades selecionadas */}
            <div className="flex flex-wrap gap-2">
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
          </div>
        )}
      </div>
    </div>
  );
}
