import RateProfessional from '@/components/RateProfessional';

interface PageProps {
  params: { id: string };
}

export default function RateProfessionalPage({ params }: PageProps) {
  const proposalId = Number(params.id);

  return <RateProfessional proposalId={proposalId} />;
}