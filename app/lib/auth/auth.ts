import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import type { Provider } from "next-auth/providers";
import { PrismaAdapter } from "@auth/prisma-adapter"; 
import bcrypt from 'bcryptjs';
import prisma from '@/app/data/prisma';

const providers: Provider[] = [
    Credentials({
        name: 'Credentials',
        credentials: {
            email: {label: 'Email', type: 'text'},
            password: {label: 'Password', type: 'password'},
        },

        async authorize(credentials) {
            if (!credentials?.email || !credentials?.password) {
                throw new Error('Email e senha são obrigatórios');
            }

            const user = await prisma.usuario.findUnique({
                where: { email: credentials.email as string }, 
            });

            if (!user || !user.hashedPassword) {
                throw new Error('Usuário não encontrado');
            }

            const isCorrectPassword = await bcrypt.compare(
                credentials.password as string,
                user.hashedPassword
            );

            if (!isCorrectPassword) {
                throw new Error('Senha inválida');
            }

            return user;
        },
    }), 
];

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers, 
    
    adapter: PrismaAdapter(prisma as any),
    session: {
        strategy: 'jwt',
    },

    callbacks: {
        jwt({ token, user }) {
            if (user) {
                const u = user as any; 
                token.id = u.id;
                token.tipo_usuario = u.tipo_usuario;
            }
            return token;
        },
        session({ session, token }) {
            if (session.user) {
                (session.user as any).id = token.id as string;
                (session.user as any).tipo_usuario = token.tipo_usuario;
            }
            return session;
        },
    },

    pages: {
        signIn: '/login',
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === 'development',
});