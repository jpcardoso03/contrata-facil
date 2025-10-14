'use client';

import { useState } from 'react';
import { Mail, Lock, User, FileText } from 'lucide-react';
import { UserType } from '@/types';

export default function CadastroForm() {
  const [userType, setUserType] = useState<UserType>('candidato');
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    cpf: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ userType, ...formData });
    // Aqui você implementaria a lógica de cadastro
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Cadastro {userType === 'candidato' ? 'Candidato' : 'Contratante'}
          </h1>
          <p className="text-gray-600">Crie sua conta</p>
        </div>

        {/* Toggle Candidato/Contratante */}
        <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
          <button
            type="button"
            onClick={() => setUserType('candidato')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
              userType === 'candidato'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <User className="w-4 h-4 inline mr-2" />
            Candidato
          </button>
          <button
            type="button"
            onClick={() => setUserType('contratante')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
              userType === 'contratante'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <User className="w-4 h-4 inline mr-2" />
            Contratante
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome Completo */}
          <div>
            <label htmlFor="nomeCompleto" className="block text-sm font-medium text-gray-700 mb-2">
              Nome completo
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                id="nomeCompleto"
                name="nomeCompleto"
                type="text"
                value={formData.nomeCompleto}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Seu nome completo"
                required
              />
            </div>
          </div>

          {/* E-mail */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              E-mail
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="seu@email.com"
                required
              />
            </div>
          </div>

          {/* CPF */}
          <div>
            <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-2">
              CPF
            </label>
            <div className="relative">
              <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                id="cpf"
                name="cpf"
                type="text"
                value={formData.cpf}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="000.000.000-00"
                required
              />
            </div>
          </div>

          {/* Senha */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Senha
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Sua senha"
                required
              />
            </div>
          </div>

          {/* Linha divisória */}
          <div className="border-t border-gray-200 my-6"></div>

          {/* Botão Cadastrar */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium transition-all"
          >
            Cadastrar
          </button>

          {/* Link para Login */}
          <div className="text-center">
            <p className="text-gray-600">
              Já tem conta?{' '}
              <a 
                href="/login" 
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Faça login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}