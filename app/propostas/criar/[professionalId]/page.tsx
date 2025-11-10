import ProposalLoader from './ProposalLoader';

export type ProfessionalProposalInfo = {
  id: string;
  name: string | null;
  profissao: string | null;
  valor: number;
  rating: number;
  reviews: number;
  photoUrl: string | null;
  habilidades: { id: number; nome: string }[];
};

export default async function CreateProposalPage(props: {
  params: Promise<{ professionalId: string }>;
}) {
  const { professionalId } = await props.params;

  return <ProposalLoader professionalId={professionalId} />;
}