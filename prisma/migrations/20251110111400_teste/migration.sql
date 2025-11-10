-- CreateEnum
CREATE TYPE "EnumTipoNotificacao" AS ENUM ('SUCESS', 'INFO', 'WARNING', 'ERROR');

-- AlterTable
ALTER TABLE "HABILIDADE" ADD COLUMN     "imagem_url" TEXT,
ADD COLUMN     "principal" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "USUARIO" ADD COLUMN     "city" TEXT,
ADD COLUMN     "profissao" TEXT;

-- CreateTable
CREATE TABLE "NOTIFICACAO" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "mensagem" TEXT NOT NULL,
    "tipo" "EnumTipoNotificacao" NOT NULL DEFAULT 'INFO',
    "lida" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "link" TEXT,

    CONSTRAINT "NOTIFICACAO_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "NOTIFICACAO" ADD CONSTRAINT "NOTIFICACAO_userId_fkey" FOREIGN KEY ("userId") REFERENCES "USUARIO"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
