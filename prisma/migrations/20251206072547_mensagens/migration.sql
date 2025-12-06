-- CreateTable
CREATE TABLE "MENSAGEM" (
    "id_mensagem" SERIAL NOT NULL,
    "id_remetente" TEXT NOT NULL,
    "id_destinatario" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MENSAGEM_pkey" PRIMARY KEY ("id_mensagem")
);

-- AddForeignKey
ALTER TABLE "MENSAGEM" ADD CONSTRAINT "MENSAGEM_id_remetente_fkey" FOREIGN KEY ("id_remetente") REFERENCES "USUARIO"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MENSAGEM" ADD CONSTRAINT "MENSAGEM_id_destinatario_fkey" FOREIGN KEY ("id_destinatario") REFERENCES "USUARIO"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
