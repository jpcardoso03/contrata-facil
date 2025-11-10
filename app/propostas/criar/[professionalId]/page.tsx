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

export default function CreateProposalPage(props: {
  params: { professionalId: string };
}) {
  
  const id = props.params.professionalId;

  return <ProposalLoader professionalId={id} />;
}