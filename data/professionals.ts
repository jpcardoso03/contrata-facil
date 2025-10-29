export interface Professional {
  id: string;
  name: string;
  profession: string;
  city: string;
  hourlyRate: number;
  rating: number;
  reviews: number;
  description: string;
  skills: string[];
  photoUrl: string;
}

export const professionalsData: { [key: string]: Professional } = {
  "1": {
    id: "1",
    name: "Carlos Silva",
    profession: "Eletricista Residencial",
    city: "São Paulo - SP",
    hourlyRate: 85,
    rating: 4.9,
    reviews: 127,
    description: "Eletricista com mais de 8 anos de experiência em instalações residenciais e comerciais. Especializado em reparos elétricos, instalação de tomadas, interruptores e quadros de energia. Trabalho com segurança e qualidade garantida.",
    skills: [
      "Instalações Elétricas",
      "Reparos Elétricos", 
      "Tomadas e Interruptores",
      "Quadros Elétricos",
      "Iluminação",
      "Chuveiros Elétricos",
      "Diagramas",
      "Segurança Elétrica",
      "Residencial",
      "Comercial"
    ],
    photoUrl: "https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBlbGVjdHJpY2lhbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1ODAzMDAyMXww&ixlib=rb-4.1.0&q=80&w=400&h=400&fit=crop&crop=face"
  },
  "2": {
    id: "2",
    name: "Ana Costa",
    profession: "Encanadora Profissional",
    city: "Rio de Janeiro - RJ",
    hourlyRate: 75,
    rating: 4.8,
    reviews: 94,
    description: "Encanadora com 6 anos de experiência em sistemas hidráulicos residenciais e comerciais. Especializada em reparos de vazamentos, instalação de tubulações e manutenção preventiva.",
    skills: [
      "Reparos de Vazamentos",
      "Instalação de Tubulações",
      "Manutenção Preventiva",
      "Desentupimento",
      "Sistemas Hidráulicos",
      "Residencial",
      "Comercial"
    ],
    photoUrl: "https://images.unsplash.com/photo-1746652433560-fb39d6136620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3JrZXIlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NTgwMzAwMjJ8MA&ixlib=rb-4.1.0&q=80&w=400&h=400&fit=crop&crop=face"
  },
  "3": {
    id: "3",
    name: "Roberto Oliveira",
    profession: "Marceneiro Especializado",
    city: "Belo Horizonte - MG",
    hourlyRate: 90,
    rating: 4.7,
    reviews: 156,
    description: "Marceneiro com 10 anos de experiência em móveis planejados e marcenaria fina. Trabalho com diversos tipos de madeira e técnicas de acabamento.",
    skills: [
      "Móveis Planejados",
      "Marcenaria Fina",
      "Acabamento em Madeira",
      "Restauração",
      "Carpintaria",
      "Projetos Personalizados"
    ],
    photoUrl: "https://images.unsplash.com/photo-1660074127797-1c429fbb8cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWNobmljaWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4MDMwMDIzfDA&ixlib=rb-4.1.0&q=80&w=400&h=400&fit=crop&crop=face"
  },
  "4": {
    id: "4",
    name: "Maria Santos",
    profession: "Pintora Profissional",
    city: "Brasília - DF",
    hourlyRate: 80,
    rating: 4.6,
    reviews: 89,
    description: "Pintora com 7 anos de experiência em pintura residencial e comercial. Especializada em técnicas modernas e acabamento impecável.",
    skills: [
      "Pintura Residencial",
      "Pintura Comercial",
      "Texturização",
      "Acabamento",
      "Preparação de Superfícies",
      "Técnicas Modernas"
    ],
    photoUrl: "https://images.unsplash.com/photo-1717229773894-8e7c04aac950?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzZXJ2aWNlJTIwd29ya2VyfGVufDF8fHx8MTc1ODAyMzU0OXww&ixlib=rb-4.1.0&q=80&w=400&h=400&fit=crop&crop=face"
  }
};