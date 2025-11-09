import ProfessionalList from '@/components/ProfessionalList';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { id } = await params;
  
  return <ProfessionalList serviceName={id} />;
}