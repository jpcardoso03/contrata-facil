import RateProfessional from '@/components/RateProfessional';

interface PageProps {
  params: { id: string };
}

export default function AvaliarPage({ params }: PageProps) {
  return <RateProfessional proposalId={params.id} />;
}