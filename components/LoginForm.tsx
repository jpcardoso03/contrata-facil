'use client';

import { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import { UserType } from '@/types';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [userType, setUserType] = useState<UserType>('candidato');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ userType, email, password });
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Login</h1>
          <p className="text-gray-600">Entre na sua conta</p>
        </div>

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

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              E-mail
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="seu@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Senha
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Sua senha"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium transition-all"
          >
            Entrar
          </button>

          <div className="text-center">
            <p className="text-gray-600">
              Não tem conta?{' '}
              <a 
                href="/cadastro" 
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Cadastre-se
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}