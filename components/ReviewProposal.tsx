'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';

interface ProposalData {
  id: number;
  titulo: string;
  descricao: string;
  valor: number;
  data_inicio: string | Date;
  data_termino: string | Date;
}

interface OtherUserData {
  id: string;
  name: string | null;
  profissao: string | null;
  photoUrl: string | null;
  valorBase: number;
  rating: number;
  reviews: number;
}

interface ReviewProposalProps {
  proposal: ProposalData;
  otherUser: OtherUserData;
  menuItems: { name: string; icon: any; active?: boolean }[];
}

export default function ReviewProposal({ proposal, otherUser }: ReviewProposalProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleAccept = async () => {
    if (!confirm('Tem certeza que deseja aceitar esta proposta?')) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/propostas/aceitar`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: proposal.id }),
      });

      const data = await res.json();

      if (!data.success) {
        alert(`Erro: ${data.error || 'Falha ao aceitar proposta'}`);
        return;
      }

      alert('Proposta aceita com sucesso!');
      router.push('/propostas');
    } catch (err) {
      console.error(err);
      alert('Erro ao aceitar proposta.');
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async () => {
    if (!confirm('Tem certeza que deseja recusar esta proposta?')) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/propostas/recusar`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: proposal.id }),
      });

      const data = await res.json();

      if (!data.success) {
        alert(`Erro: ${data.error || 'Falha ao recusar proposta'}`);
        return;
      }

      alert('Proposta recusada.');
      router.push('/propostas');
    } catch (err) {
      console.error(err);
      alert('Erro ao recusar proposta.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{proposal.titulo}</h1>
      <p className="text-gray-700 mb-4">{proposal.descricao}</p>

      <div className="mb-6 text-gray-800">
        <p><strong>Valor:</strong> R$ {proposal.valor}</p>
        <p><strong>Período:</strong> {new Date(proposal.data_inicio).toLocaleDateString()} - {new Date(proposal.data_termino).toLocaleDateString()}</p>
      </div>

      <div className="flex gap-4 justify-end">
        <button
          onClick={handleReject}
          disabled={loading}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg transition disabled:opacity-50"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <XCircle className="w-5 h-5" />
          )}
          Recusar
        </button>

        <button
          onClick={handleAccept}
          disabled={loading}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg transition disabled:opacity-50"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <CheckCircle className="w-5 h-5" />
          )}
          Aceitar
        </button>
      </div>
    </div>
  );
}
