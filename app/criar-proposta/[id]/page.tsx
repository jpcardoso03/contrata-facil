import CreateProposal from '@/components/CreateProposal';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CreateProposalPage({ params }: PageProps) {
  const { id } = await params;
  
  return <CreateProposal professionalId={id} />;
}