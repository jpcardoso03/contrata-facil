/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `HABILIDADE` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "public"."NOTIFICACAO" DROP CONSTRAINT "NOTIFICACAO_userId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "HABILIDADE_nome_key" ON "HABILIDADE"("nome");

-- AddForeignKey
ALTER TABLE "NOTIFICACAO" ADD CONSTRAINT "NOTIFICACAO_userId_fkey" FOREIGN KEY ("userId") REFERENCES "USUARIO"("id_usuario") ON DELETE CASCADE ON UPDATE CASCADE;
