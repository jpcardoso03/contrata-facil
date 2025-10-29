import ProfessionalList from '@/components/ProfessionalList';

// Mapeamento de IDs para nomes de serviços
const serviceMap: { [key: string]: string } = {
  'electrical': 'Elétrica',
  'plumbing': 'Hidráulica', 
  'painting': 'Pintura',
  'cleaning': 'Limpeza',
  'gardening': 'Jardinagem',
  'carpentry': 'Marcenaria'
};

interface PageProps {
  params: { id: string };
}

export default function ServicePage({ params }: PageProps) {
  const serviceName = serviceMap[params.id] || 'Serviço';

  return <ProfessionalList serviceName={serviceName} />;
}