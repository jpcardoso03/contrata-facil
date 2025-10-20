-- CreateEnum
CREATE TYPE "EnumTipoUsuario" AS ENUM ('CONTRATANTE', 'PRESTADOR', 'ADMINISTRADOR');

-- CreateEnum
CREATE TYPE "EnumStatusProposta" AS ENUM ('PENDENTE', 'ACEITA', 'RECUSADA', 'EM_ANDAMENTO', 'CONCLUIDA', 'CANCELADA');

-- CreateEnum
CREATE TYPE "EnumNivelProeficiencia" AS ENUM ('INICIANTE', 'INTERMEDIARIO', 'EXPERIENTE');

-- CreateTable
CREATE TABLE "USUARIO" (
    "id_usuario" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "senha_hash" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "valor" MONEY NOT NULL,
    "sobre" TEXT NOT NULL,
    "tipo_usuario" "EnumTipoUsuario" NOT NULL,

    CONSTRAINT "USUARIO_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "HABILIDADE" (
    "id_habilidade" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "HABILIDADE_pkey" PRIMARY KEY ("id_habilidade")
);

-- CreateTable
CREATE TABLE "PRESTADOR_HABILIDADE" (
    "id_habilidade" INTEGER NOT NULL,
    "id_prestador" INTEGER NOT NULL,
    "nivel_proeficiencia" "EnumNivelProeficiencia" NOT NULL,

    CONSTRAINT "PRESTADOR_HABILIDADE_pkey" PRIMARY KEY ("id_habilidade","id_prestador")
);

-- CreateTable
CREATE TABLE "PROPOSTA" (
    "id_proposta" SERIAL NOT NULL,
    "id_contratante" INTEGER NOT NULL,
    "id_prestador" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" MONEY NOT NULL,
    "data_envio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_inicio" TIMESTAMP(3) NOT NULL,
    "data_termino" TIMESTAMP(3) NOT NULL,
    "Status" "EnumStatusProposta" NOT NULL,

    CONSTRAINT "PROPOSTA_pkey" PRIMARY KEY ("id_proposta")
);

-- CreateTable
CREATE TABLE "SERVICO" (
    "id_servico" INTEGER NOT NULL,
    "id_proposta" INTEGER NOT NULL,
    "nome_servico" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "SERVICO_pkey" PRIMARY KEY ("id_servico","id_proposta")
);

-- CreateTable
CREATE TABLE "AVALIACAO" (
    "id_proposta" INTEGER NOT NULL,
    "nota" INTEGER NOT NULL,
    "comentario" TEXT NOT NULL,
    "data_avaliacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AVALIACAO_pkey" PRIMARY KEY ("id_proposta")
);

-- CreateIndex
CREATE UNIQUE INDEX "USUARIO_email_key" ON "USUARIO"("email");

-- AddForeignKey
ALTER TABLE "PRESTADOR_HABILIDADE" ADD CONSTRAINT "PRESTADOR_HABILIDADE_id_habilidade_fkey" FOREIGN KEY ("id_habilidade") REFERENCES "HABILIDADE"("id_habilidade") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PRESTADOR_HABILIDADE" ADD CONSTRAINT "PRESTADOR_HABILIDADE_id_prestador_fkey" FOREIGN KEY ("id_prestador") REFERENCES "USUARIO"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PROPOSTA" ADD CONSTRAINT "PROPOSTA_id_contratante_fkey" FOREIGN KEY ("id_contratante") REFERENCES "USUARIO"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PROPOSTA" ADD CONSTRAINT "PROPOSTA_id_prestador_fkey" FOREIGN KEY ("id_prestador") REFERENCES "USUARIO"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SERVICO" ADD CONSTRAINT "SERVICO_id_proposta_fkey" FOREIGN KEY ("id_proposta") REFERENCES "PROPOSTA"("id_proposta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AVALIACAO" ADD CONSTRAINT "AVALIACAO_id_proposta_fkey" FOREIGN KEY ("id_proposta") REFERENCES "PROPOSTA"("id_proposta") ON DELETE RESTRICT ON UPDATE CASCADE;
