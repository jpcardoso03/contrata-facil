/*
  Warnings:

  - Added the required column `conteudo` to the `MENSAGEM` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MENSAGEM" ADD COLUMN     "conteudo" TEXT NOT NULL,
ADD COLUMN     "lida" BOOLEAN NOT NULL DEFAULT false;
