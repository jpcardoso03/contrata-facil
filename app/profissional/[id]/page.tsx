import ProfessionalProfile from '@/components/ProfessionalProfile';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProfessionalPage({ params }: PageProps) {
  const { id } = await params;
  
  return <ProfessionalProfile professionalId={id} />;
}