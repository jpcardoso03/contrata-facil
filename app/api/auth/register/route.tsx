import {NextResponse} from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/app/data/prisma';

export async function POST(request: Request) {
    try{
        const body = await request.json();
        const { email, name, password, tipo_usuario, ...outrosDados} = body;

        if (!email || !password || !tipo_usuario) {
            return new NextResponse('Email, senha e tipo de usuário são obrigatórios', { status: 400 });
        }

        const existingUser = await prisma.usuario.findUnique({
            where: {email},
        });

        if (existingUser) {
            return new NextResponse('Email já cadastrado', {status: 409});
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.usuario.create({
            data: {
                email,
                name,
                hashedPassword,
                tipo_usuario,
                valor: 0,
                sobre: "",
            },
        });

        return NextResponse.json(user);
    }
    catch (error) {
        console.error("ERRO NO CADASTRO:", error);
        return new NextResponse('Erro interno do servidor', {status: 500});
    }
}