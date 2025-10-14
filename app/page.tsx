import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bem-vindo ao Contrata Fácil
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Escolha uma opção para continuar
        </p>
        <div className="space-y-4">
          <Link 
            href="/login"
            className="block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 font-medium transition-colors"
          >
            Fazer Login
          </Link>
          <Link 
            href="/cadastro"
            className="block border border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 font-medium transition-colors"
          >
            Criar Conta
          </Link>
        </div>
      </div>
    </div>
  );
}