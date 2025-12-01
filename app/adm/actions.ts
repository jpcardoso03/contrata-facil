'use server'

import prisma from "@/app/data/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { EnumTipoUsuario } from "@/app/generated/prisma";

export async function banUserAction(userIdToBan: string) {
    const session = await getServerSession(authOptions);

    if (!session || session.user.tipo_usuario !== EnumTipoUsuario.ADMINISTRADOR) {
        return { success: false, error: "Não autorizado" };
    }

    try {
        await prisma.usuario.delete({
            where: { id: userIdToBan }
        });

        return { success: true };
    } catch (error) {
        console.error("Erro ao banir usuário:", error);
        return { success: false, error: "Erro ao processar banimento" };
    }
}