// Importa o Prisma Client e os Enums necessários
import { 
  PrismaClient, 
  EnumTipoUsuario, 
  EnumNivelProeficiencia, 
  EnumStatusProposta,
  EnumTipoNotificacao // Enum que faltava
} from "../app/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log(`Iniciando o seeding...`);

  // --- 0. Limpar dados transacionais antigos ---
  // Isso torna o script idempotente para dados que não usam 'upsert'
  console.log('Limpando dados transacionais antigos (Avaliações, Serviços, Propostas, Notificações)...');
  await prisma.avaliacao.deleteMany({});
  await prisma.servico.deleteMany({});
  await prisma.proposta.deleteMany({});
  await prisma.notificacao.deleteMany({});
  // Mantemos Usuários e Habilidades, pois usamos 'upsert'

  // --- 1. Criar Habilidades ---
  const habEletrica = await prisma.habilidade.upsert({
    where: { nome: 'Elétrica' },
    update: {},
    create: {
      nome: 'Elétrica',
      descricao: 'Habilidades relacionadas à elétrica e seus afins.',
      principal: true, // Campo adicionado
      imagem_url: 'https://images.unsplash.com/photo-1621905251187-0c94b30c33f6?q=80&w=800' // Campo adicionado
    },
  });

  const habHidraulica = await prisma.habilidade.upsert({
    where: { nome: 'Hidráulica' },
    update: {},
    create: {
      nome: 'Hidráulica',
      descricao: 'Habilidades relacionadas à hidráulica e seus afins.',
      principal: true, // Campo adicionado
      imagem_url: 'https://images.unsplash.com/photo-1598604907133-e18e0d6c1f5a?q=80&w=800' // Campo adicionado
    },
  });

  const habMarcenaria = await prisma.habilidade.upsert({
    where: { nome: 'Marcenaria' },
    update: {},
    create: {
      nome: 'Marcenaria',
      descricao: 'Habilidades relacionadas à marcenaria e seus afins.',
      principal: true, // Campo adicionado
      imagem_url: 'https://images.unsplash.com/photo-1600585152220-0402e7b9b3ac?q=80&w=800' // Campo adicionado
    },
  });

  const habLimpeza = await prisma.habilidade.upsert({
    where: { nome: 'Limpeza' },
    update: {},
    create: {
      nome: 'Limpeza',
      descricao: 'Habilidades relacionadas à limpeza e seus afins.',
      principal: false, // Campo adicionado
      imagem_url: 'https://images.unsplash.com/photo-1583946261058-a96da13a05c3?q=80&w=800' // Campo adicionado
    },
  });

  const habJardinagem = await prisma.habilidade.upsert({
    where: { nome: 'Jardinagem' },
    update: {},
    create: {
      nome: 'Jardinagem',
      descricao: 'Habilidades relacionadas à jardinagem e seus afins.',
      principal: false, // Campo adicionado
      imagem_url: 'https://images.unsplash.com/photo-1523348832108-16421d8b2d3e?q=80&w=800' // Campo adicionado
    },
  });

  const habPintura = await prisma.habilidade.upsert({
    where: { nome: 'Pintura' },
    update: {},
    create: {
      nome: 'Pintura',
      descricao: 'Pintura de casas e objetos.',
      principal: false, // Campo adicionado
      imagem_url: 'https://images.unsplash.com/photo-1596633614062-1e7c52b956a8?q=80&w=800' // Campo adicionado
    },
  });
  console.log('Habilidades criadas/atualizadas.');

  // --- 2. Criar Usuários (Prestador e Contratante) ---
  const prestador1 = await prisma.usuario.upsert({
    where: { email: 'prestador1@gmail.com' },
    update: {},
    create: {
      name: 'Carlos',
      email: 'prestador1@gmail.com',
      hashedPassword: 'hash_falso_para_teste',
      tipo_usuario: EnumTipoUsuario.PRESTADOR,
      valor: 120,
      sobre: 'Trabalho como eletricista há mais de 2 anos.',
      city: 'São Paulo', // Campo adicionado
      profissao: 'Eletricista', // Campo adicionado
      emailVerified: new Date(), // Campo adicionado
      image: 'https://ui-avatars.com/api/?name=Carlos' // Campo adicionado
    },
  });

  const prestador2 = await prisma.usuario.upsert({
    where: { email: 'prestador2@gmail.com' },
    update: {},
    create: {
      name: 'Gabriel',
      email: 'prestador2@gmail.com',
      hashedPassword: 'hash_falso_para_teste',
      tipo_usuario: EnumTipoUsuario.PRESTADOR,
      valor: 90,
      sobre: 'Trabalho com marcenaria e pintura.',
      city: 'Rio de Janeiro', // Campo adicionado
      profissao: 'Marceneiro', // Campo adicionado
      emailVerified: new Date(), // Campo adicionado
      image: 'https://ui-avatars.com/api/?name=Gabriel' // Campo adicionado
    },
  });

  const prestador3 = await prisma.usuario.upsert({
    where: { email: 'prestador3@gmail.com' },
    update: {},
    create: {
      name: 'Lucas',
      email: 'prestador3@gmail.com',
      hashedPassword: 'hash_falso_para_teste',
      tipo_usuario: EnumTipoUsuario.PRESTADOR,
      valor: 110,
      sobre: 'Eletricista residencial e predial com 10 anos de experiência.',
      city: 'Belo Horizonte', // Campo adicionado
      profissao: 'Eletricista Sênior', // Campo adicionado
      emailVerified: new Date(), // Campo adicionado
      image: 'https://ui-avatars.com/api/?name=Lucas' // Campo adicionado
    },
  });

  const prestador4 = await prisma.usuario.upsert({
    where: { email: 'prestador4@gmail.com' },
    update: {},
    create: {
      name: 'Fernanda',
      email: 'prestador4@gmail.com',
      hashedPassword: 'hash_falso_para_teste',
      tipo_usuario: EnumTipoUsuario.PRESTADOR,
      valor: 70,
      sobre: 'Especialista em paisagismo e manutenção de jardins.',
      city: 'Curitiba', // Campo adicionado
      profissao: 'Jardineira', // Campo adicionado
      emailVerified: new Date(), // Campo adicionado
      image: 'https://ui-avatars.com/api/?name=Fernanda' // Campo adicionado
    },
  });

  const prestador5 = await prisma.usuario.upsert({
    where: { email: 'prestador5@gmail.com' },
    update: {},
    create: {
      name: 'Roberto',
      email: 'prestador5@gmail.com',
      hashedPassword: 'hash_falso_para_teste',
      tipo_usuario: EnumTipoUsuario.PRESTADOR,
      valor: 60,
      sobre: 'Serviços de limpeza pesada e pós-obra.',
      city: 'Porto Alegre', // Campo adicionado
      profissao: 'Auxiliar de Limpeza', // Campo adicionado
      emailVerified: new Date(), // Campo adicionado
      image: 'https://ui-avatars.com/api/?name=Roberto' // Campo adicionado
    },
  });

  const prestador6 = await prisma.usuario.upsert({
    where: { email: 'prestador6@gmail.com' },
    update: {},
    create: {
      name: 'Juliana',
      email: 'prestador6@gmail.com',
      hashedPassword: 'hash_falso_para_teste',
      tipo_usuario: EnumTipoUsuario.PRESTADOR,
      valor: 100,
      sobre: 'Encanadora especializada em reparos e instalações hidráulicas.',
      city: 'São Paulo', // Campo adicionado
      profissao: 'Encanadora', // Campo adicionado
      emailVerified: new Date(), // Campo adicionado
      image: 'https://ui-avatars.com/api/?name=Juliana' // Campo adicionado
    },
  });

  const prestador7 = await prisma.usuario.upsert({
    where: { email: 'prestador7@gmail.com' },
    update: {},
    create: {
      name: 'Marcos',
      email: 'prestador7@gmail.com',
      hashedPassword: 'hash_falso_para_teste',
      tipo_usuario: EnumTipoUsuario.PRESTADOR,
      valor: 130,
      sobre: 'Faço reparos gerais em elétrica e hidráulica. O "faz-tudo" da sua casa.',
      city: 'Rio de Janeiro', // Campo adicionado
      profissao: 'Marido de Aluguel', // Campo adicionado
      emailVerified: new Date(), // Campo adicionado
      image: 'https://ui-avatars.com/api/?name=Marcos' // Campo adicionado
    },
  });

  const prestador8 = await prisma.usuario.upsert({
    where: { email: 'prestador8@gmail.com' },
    update: {},
    create: {
      name: 'Sofia',
      email: 'prestador8@gmail.com',
      hashedPassword: 'hash_falso_para_teste',
      tipo_usuario: EnumTipoUsuario.PRESTADOR,
      valor: 100,
      sobre: 'Pintora detalhista e também realizo pequenos reparos em marcenaria.',
      city: 'Salvador', // Campo adicionado
      profissao: 'Pintora', // Campo adicionado
      emailVerified: new Date(), // Campo adicionado
      image: 'https://ui-avatars.com/api/?name=Sofia' // Campo adicionado
    },
  });
  
  const prestador9 = await prisma.usuario.upsert({
    where: { email: 'prestador9@gmail.com' },
    update: {},
    create: {
      name: 'Ricardo',
      email: 'prestador9@gmail.com',
      hashedPassword: 'hash_falso_para_teste',
      tipo_usuario: EnumTipoUsuario.PRESTADOR,
      valor: 80,
      sobre: 'Cuido do seu jardim e também da limpeza de áreas externas.',
      city: 'Curitiba', // Campo adicionado
      profissao: 'Jardineiro', // Campo adicionado
      emailVerified: new Date(), // Campo adicionado
      image: 'https://ui-avatars.com/api/?name=Ricardo' // Campo adicionado
    },
  });

  const prestador10 = await prisma.usuario.upsert({
    where: { email: 'prestador10@gmail.com' },
    update: {},
    create: {
      name: 'Beatriz',
      email: 'prestador10@gmail.com',
      hashedPassword: 'hash_falso_para_teste',
      tipo_usuario: EnumTipoUsuario.PRESTADOR,
      valor: 115,
      sobre: 'Pintora profissional e também faço reparos hidráulicos simples.',
      city: 'Belo Horizonte', // Campo adicionado
      profissao: 'Pintora', // Campo adicionado
      emailVerified: new Date(), // Campo adicionado
      image: 'https://ui-avatars.com/api/?name=Beatriz' // Campo adicionado
    },
  });

  const contratante = await prisma.usuario.upsert({
    where: { email: 'contratante@exemplo.com' },
    update: {},
    create: {
      name: 'Ana',
      email: 'contratante@exemplo.com',
      hashedPassword: 'hash_falso_para_teste',
      tipo_usuario: EnumTipoUsuario.CONTRATANTE,
      valor: 0,
      sobre: 'Procuro os melhores talentos para meus projetos.',
      city: 'São Paulo', // Campo adicionado
      profissao: 'Cliente', // Campo adicionado
      emailVerified: new Date(), // Campo adicionado
      image: 'https://ui-avatars.com/api/?name=Ana' // Campo adicionado
    },
  });
  console.log('Usuários criados/atualizados.');

  // --- 3. Ligar Habilidades ao Prestador ---
  // (Seu código original estava correto e foi mantido)
  
  // prestador1 (Carlos) - Elétrica
  await prisma.prestadorHabilidade.upsert({
    where: { id_habilidade_id_prestador: { id_habilidade: habEletrica.id, id_prestador: prestador1.id } },
    update: {},
    create: {
      id_prestador: prestador1.id,
      id_habilidade: habEletrica.id,
      nivel_proeficiencia: EnumNivelProeficiencia.INTERMEDIARIO
    }
  });

  // prestador2 (Gabriel) - Marcenaria e Pintura
  await prisma.prestadorHabilidade.upsert({
    where: { id_habilidade_id_prestador: { id_habilidade: habMarcenaria.id, id_prestador: prestador2.id } },
    update: {},
    create: {
      id_prestador: prestador2.id,
      id_habilidade: habMarcenaria.id,
      nivel_proeficiencia: EnumNivelProeficiencia.INTERMEDIARIO
    }
  });
  await prisma.prestadorHabilidade.upsert({
    where: { id_habilidade_id_prestador: { id_habilidade: habPintura.id, id_prestador: prestador2.id } },
    update: {},
    create: {
      id_prestador: prestador2.id,
      id_habilidade: habPintura.id,
      nivel_proeficiencia: EnumNivelProeficiencia.INTERMEDIARIO
    }
  });

  // prestador3 (Lucas) - Elétrica
  await prisma.prestadorHabilidade.upsert({
    where: { id_habilidade_id_prestador: { id_habilidade: habEletrica.id, id_prestador: prestador3.id } },
    update: {},
    create: {
      id_prestador: prestador3.id,
      id_habilidade: habEletrica.id,
      nivel_proeficiencia: EnumNivelProeficiencia.EXPERIENTE
    }
  });

  // prestador4 (Fernanda) - Jardinagem
  await prisma.prestadorHabilidade.upsert({
    where: { id_habilidade_id_prestador: { id_habilidade: habJardinagem.id, id_prestador: prestador4.id } },
    update: {},
    create: {
      id_prestador: prestador4.id,
      id_habilidade: habJardinagem.id,
      nivel_proeficiencia: EnumNivelProeficiencia.EXPERIENTE
    }
  });

  // prestador5 (Roberto) - Limpeza
  await prisma.prestadorHabilidade.upsert({
    where: { id_habilidade_id_prestador: { id_habilidade: habLimpeza.id, id_prestador: prestador5.id } },
    update: {},
    create: {
      id_prestador: prestador5.id,
      id_habilidade: habLimpeza.id,
      nivel_proeficiencia: EnumNivelProeficiencia.INTERMEDIARIO
    }
  });

  // prestador6 (Juliana) - Hidráulica
  await prisma.prestadorHabilidade.upsert({
    where: { id_habilidade_id_prestador: { id_habilidade: habHidraulica.id, id_prestador: prestador6.id } },
    update: {},
    create: {
      id_prestador: prestador6.id,
      id_habilidade: habHidraulica.id,
      nivel_proeficiencia: EnumNivelProeficiencia.EXPERIENTE
    }
  });

  // prestador7 (Marcos) - Elétrica e Hidráulica
  await prisma.prestadorHabilidade.upsert({
    where: { id_habilidade_id_prestador: { id_habilidade: habEletrica.id, id_prestador: prestador7.id } },
    update: {},
    create: {
      id_prestador: prestador7.id,
      id_habilidade: habEletrica.id,
      nivel_proeficiencia: EnumNivelProeficiencia.INTERMEDIARIO
    }
  });
  await prisma.prestadorHabilidade.upsert({
    where: { id_habilidade_id_prestador: { id_habilidade: habHidraulica.id, id_prestador: prestador7.id } },
    update: {},
    create: {
      id_prestador: prestador7.id,
      id_habilidade: habHidraulica.id,
      nivel_proeficiencia: EnumNivelProeficiencia.INTERMEDIARIO
    }
  });

  // prestador8 (Sofia) - Pintura e Marcenaria
  await prisma.prestadorHabilidade.upsert({
    where: { id_habilidade_id_prestador: { id_habilidade: habPintura.id, id_prestador: prestador8.id } },
    update: {},
    create: {
      id_prestador: prestador8.id,
      id_habilidade: habPintura.id,
      nivel_proeficiencia: EnumNivelProeficiencia.EXPERIENTE
    }
  });
  await prisma.prestadorHabilidade.upsert({
    where: { id_habilidade_id_prestador: { id_habilidade: habMarcenaria.id, id_prestador: prestador8.id } },
    update: {},
    create: {
      id_prestador: prestador8.id,
      id_habilidade: habMarcenaria.id,
      nivel_proeficiencia: EnumNivelProeficiencia.INICIANTE
    }
  });
  
  // prestador9 (Ricardo) - Jardinagem e Limpeza
  await prisma.prestadorHabilidade.upsert({
    where: { id_habilidade_id_prestador: { id_habilidade: habJardinagem.id, id_prestador: prestador9.id } },
    update: {},
    create: {
      id_prestador: prestador9.id,
      id_habilidade: habJardinagem.id,
      nivel_proeficiencia: EnumNivelProeficiencia.INTERMEDIARIO
    }
  });
  await prisma.prestadorHabilidade.upsert({
    where: { id_habilidade_id_prestador: { id_habilidade: habLimpeza.id, id_prestador: prestador9.id } },
    update: {},
    create: {
      id_prestador: prestador9.id,
      id_habilidade: habLimpeza.id,
      nivel_proeficiencia: EnumNivelProeficiencia.INTERMEDIARIO
    }
  });

  // prestador10 (Beatriz) - Pintura e Hidráulica
  await prisma.prestadorHabilidade.upsert({
    where: { id_habilidade_id_prestador: { id_habilidade: habPintura.id, id_prestador: prestador10.id } },
    update: {},
    create: {
      id_prestador: prestador10.id,
      id_habilidade: habPintura.id,
      nivel_proeficiencia: EnumNivelProeficiencia.EXPERIENTE
    }
  });
  await prisma.prestadorHabilidade.upsert({
    where: { id_habilidade_id_prestador: { id_habilidade: habHidraulica.id, id_prestador: prestador10.id } },
    update: {},
    create: {
      id_prestador: prestador10.id,
      id_habilidade: habHidraulica.id,
      nivel_proeficiencia: EnumNivelProeficiencia.INICIANTE
    }
  });

  console.log('Habilidades dos prestadores associadas.');

  // --- 4. Criar Propostas de Exemplo ---
  // (Seu código original estava correto e foi mantido)

  // Proposta 1: Pendente (Para Lucas, o Eletricista)
  const proposta1 = await prisma.proposta.create({
    data: {
      id_contratante: contratante.id,
      id_prestador: prestador3.id,
      titulo: "Instalação elétrica completa em apartamento novo",
      descricao: "Preciso de toda a instalação elétrica para um apartamento de 2 quartos, incluindo quadro de luz, tomadas e iluminação.",
      valor: 4500.00,
      data_inicio: new Date('2025-11-10T09:00:00Z'),
      data_termino: new Date('2025-11-20T18:00:00Z'),
      Status: EnumStatusProposta.PENDENTE,
      servicos: {
        create: [
          { id_servico: 1, nome_servico: "Passagem de fiação", descricao: "Passar fiação por todos os conduítes do apartamento." },
          { id_servico: 2, nome_servico: "Instalação do quadro de luz", descricao: "Montagem completa do quadro de disjuntores." },
          { id_servico: 3, nome_servico: "Instalação de pontos", descricao: "Instalar 40 pontos (tomadas e interruptores)." }
        ]
      }
    }
  });

  // Proposta 2: Em Andamento (Para Gabriel, Marcenaria/Pintura)
  const proposta2 = await prisma.proposta.create({
    data: {
      id_contratante: contratante.id,
      id_prestador: prestador2.id,
      titulo: "Armário embutido e pintura do quarto",
      descricao: "Fabricação de um armário embutido (3 portas) e pintura do quarto de casal (cor 'Crômio').",
      valor: 3200.00,
      data_inicio: new Date('2025-10-20T09:00:00Z'),
      data_termino: new Date('2025-11-15T18:00:00Z'), // Ajustei a data de término
      Status: EnumStatusProposta.EM_ANDAMENTO,
      servicos: {
        create: [
          { id_servico: 1, nome_servico: "Fabricação e montagem do armário", descricao: "Produção e montagem do armário em MDF branco." },
          { id_servico: 2, nome_servico: "Pintura do quarto", descricao: "Lixar e pintar paredes e teto." }
        ]
      }
    }
  });

  // Proposta 3: Concluída (Para Juliana, Hidráulica)
  const proposta3 = await prisma.proposta.create({
    data: {
      id_contratante: contratante.id,
      id_prestador: prestador6.id,
      titulo: "Reparo de vazamento urgente no banheiro",
      descricao: "Vazamento no cano do chuveiro do banheiro social. Serviço foi concluído com sucesso.",
      valor: 350.00,
      data_inicio: new Date('2025-10-15T14:00:00Z'),
      data_termino: new Date('2025-10-15T17:00:00Z'),
      Status: EnumStatusProposta.CONCLUIDA,
      servicos: {
        create: [
          { id_servico: 1, nome_servico: "Detecção e reparo de vazamento", descricao: "Quebra da parede, substituição do cano defeituoso e fechamento." }
        ]
      }
    }
  });

  // Proposta 4: Aceita (Para Fernanda, Jardinagem)
  const proposta4 = await prisma.proposta.create({
    data: {
      id_contratante: contratante.id,
      id_prestador: prestador4.id,
      titulo: "Manutenção mensal do jardim da frente",
      descricao: "Contrato para manutenção mensal do jardim, incluindo corte de grama, poda e adubação.",
      valor: 250.00,
      data_inicio: new Date('2025-12-01T09:00:00Z'), // Ajustei a data de início
      data_termino: new Date('2026-12-01T09:00:00Z'),
      Status: EnumStatusProposta.ACEITA,
      servicos: {
        create: [
          { id_servico: 1, nome_servico: "Manutenção de Jardim", descricao: "Duas visitas mensais para corte, poda e limpeza." }
        ]
      }
    }
  });

  // Proposta 5: Recusada (Para Marcos, Elétrica/Hidráulica)
  const proposta5 = await prisma.proposta.create({
    data: {
      id_contratante: contratante.id,
      id_prestador: prestador7.id,
      titulo: "Orçamento para revisão geral da casa",
      descricao: "Solicitei um orçamento para revisão elétrica e hidráulica completa da casa, mas o valor ficou acima do esperado.",
      valor: 2800.00,
      data_inicio: new Date('2025-10-22T09:00:00Z'),
      data_termino: new Date('2025-10-25T09:00:00Z'),
      Status: EnumStatusProposta.RECUSADA,
      servicos: {
        create: [
          { id_servico: 1, nome_servico: "Inspeção elétrica", descricao: "Análise do quadro e fiação." },
          { id_servico: 2, nome_servico: "Inspeção hidráulica", descricao: "Verificação de todos os pontos de água e esgoto." }
        ]
      }
    }
  });

  // Proposta 6: Concluída (Para Roberto, Limpeza)
  const proposta6 = await prisma.proposta.create({
    data: {
      id_contratante: contratante.id,
      id_prestador: prestador5.id,
      titulo: "Limpeza pós-reforma da sala",
      descricao: "Serviço de limpeza pesada após a instalação do gesso e pintura da sala. Excelente serviço.",
      valor: 400.00,
      data_inicio: new Date('2025-09-30T08:00:00Z'),
      data_termino: new Date('2025-09-30T16:00:00Z'),
      Status: EnumStatusProposta.CONCLUIDA,
      servicos: {
        create: [
          { id_servico: 1, nome_servico: "Remoção de poeira e detritos", descricao: "Limpeza de todas as superfícies, incluindo paredes e teto." },
          { id_servico: 2, nome_servico: "Limpeza de vidros e piso", descricao: "Limpeza da janela da sala e do piso." }
        ]
      }
    }
  });

  console.log('Propostas de exemplo criadas.');

  // --- 5. Criar Avaliações (NOVO) ---
  // Criar avaliações para as propostas concluídas
  await prisma.avaliacao.create({
    data: {
      id_proposta: proposta3.id, // Proposta 3 (Juliana, Hidráulica)
      nota: 5,
      comentario: "Serviço excelente! Resolveu o vazamento muito rápido e foi muito profissional.",
      data_avaliacao: new Date('2025-10-16T10:00:00Z')
    }
  });

  await prisma.avaliacao.create({
    data: {
      id_proposta: proposta6.id, // Proposta 6 (Roberto, Limpeza)
      nota: 4,
      comentario: "Bom serviço, a limpeza ficou ótima. Apenas atrasou 30 minutos para chegar.",
      data_avaliacao: new Date('2025-10-01T09:00:00Z')
    }
  });
  console.log('Avaliações criadas.');

  // --- 6. Criar Notificações (NOVO) ---
  await prisma.notificacao.create({
    data: {
      titulo: "Nova proposta recebida!",
      mensagem: `Você recebeu uma nova proposta de ${contratante.name} para: "${proposta1.titulo}"`,
      tipo: EnumTipoNotificacao.INFO,
      userId: prestador3.id, // Notificação para Lucas (prestador da proposta 1)
      link: `/propostas/${proposta1.id}`
    }
  });

  await prisma.notificacao.create({
    data: {
      titulo: "Proposta Aceita!",
      mensagem: `Sua proposta "${proposta4.titulo}" foi aceita por ${contratante.name}.`,
      tipo: EnumTipoNotificacao.SUCESS,
      userId: prestador4.id, // Notificação para Fernanda (prestadora da proposta 4)
      link: `/propostas/${proposta4.id}`
    }
  });

  await prisma.notificacao.create({
    data: {
      titulo: "Proposta Recusada",
      mensagem: `Sua proposta "${proposta5.titulo}" foi recusada por ${contratante.name}.`,
      tipo: EnumTipoNotificacao.WARNING,
      userId: prestador7.id, // Notificação para Marcos (prestador da proposta 5)
      link: `/propostas/${proposta5.id}`
    }
  });

  await prisma.notificacao.create({
    data: {
      titulo: "Bem-vinda!",
      mensagem: "Obrigado por se juntar à nossa plataforma. Encontre os melhores profissionais aqui.",
      tipo: EnumTipoNotificacao.INFO,
      userId: contratante.id, // Notificação para Ana (Contratante)
    }
  });
  console.log('Notificações criadas.');


  console.log(`Seeding finalizado com sucesso.`);
}

// Executa a função main e trata erros
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Fecha a conexão com o banco
    await prisma.$disconnect();
  });