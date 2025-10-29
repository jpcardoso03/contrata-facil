import ProfessionalProfile from '@/components/ProfessionalProfile';

interface PageProps {
  params: { id: string };
}

export default function ProfessionalPage({ params }: PageProps) {
  return <ProfessionalProfile professionalId={params.id} />;
}