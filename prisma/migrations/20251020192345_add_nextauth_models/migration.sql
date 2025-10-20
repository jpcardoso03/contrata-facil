/*
  Warnings:

  - The primary key for the `PRESTADOR_HABILIDADE` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `USUARIO` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `nome` on the `USUARIO` table. All the data in the column will be lost.
  - You are about to drop the column `senha_hash` on the `USUARIO` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."PRESTADOR_HABILIDADE" DROP CONSTRAINT "PRESTADOR_HABILIDADE_id_prestador_fkey";

-- DropForeignKey
ALTER TABLE "public"."PROPOSTA" DROP CONSTRAINT "PROPOSTA_id_contratante_fkey";

-- DropForeignKey
ALTER TABLE "public"."PROPOSTA" DROP CONSTRAINT "PROPOSTA_id_prestador_fkey";

-- AlterTable
ALTER TABLE "PRESTADOR_HABILIDADE" DROP CONSTRAINT "PRESTADOR_HABILIDADE_pkey",
ALTER COLUMN "id_prestador" SET DATA TYPE TEXT,
ADD CONSTRAINT "PRESTADOR_HABILIDADE_pkey" PRIMARY KEY ("id_habilidade", "id_prestador");

-- AlterTable
ALTER TABLE "PROPOSTA" ALTER COLUMN "id_contratante" SET DATA TYPE TEXT,
ALTER COLUMN "id_prestador" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "USUARIO" DROP CONSTRAINT "USUARIO_pkey",
DROP COLUMN "nome",
DROP COLUMN "senha_hash",
ADD COLUMN     "emailVerified" TIMESTAMP(3),
ADD COLUMN     "hashedPassword" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "name" TEXT,
ALTER COLUMN "id_usuario" DROP DEFAULT,
ALTER COLUMN "id_usuario" SET DATA TYPE TEXT,
ALTER COLUMN "email" DROP NOT NULL,
ADD CONSTRAINT "USUARIO_pkey" PRIMARY KEY ("id_usuario");
DROP SEQUENCE "USUARIO_id_usuario_seq";

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "USUARIO"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "USUARIO"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PRESTADOR_HABILIDADE" ADD CONSTRAINT "PRESTADOR_HABILIDADE_id_prestador_fkey" FOREIGN KEY ("id_prestador") REFERENCES "USUARIO"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PROPOSTA" ADD CONSTRAINT "PROPOSTA_id_contratante_fkey" FOREIGN KEY ("id_contratante") REFERENCES "USUARIO"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PROPOSTA" ADD CONSTRAINT "PROPOSTA_id_prestador_fkey" FOREIGN KEY ("id_prestador") REFERENCES "USUARIO"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
