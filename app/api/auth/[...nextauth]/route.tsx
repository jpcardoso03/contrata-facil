import NextAuth, {AuthOptions} from "next-auth";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import prisma from '@/app/data/prisma';

export const authOptions: AuthOptions = {
    //adapter: PrismaAdapter(prisma as any),

    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {label: 'Email', type: 'text'},
                password: {label: 'Password', type: 'password'},
            },

            // autorização login
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Email e senha são obrigatórios');
                }

                const user = await prisma.usuario.findUnique({
                    where: { email: credentials.email},
                });

                if (!user || !user.hashedPassword) {
                    throw new Error('Usuário não encontrado');
                }

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                );

                if (!isCorrectPassword) {
                    throw new Error('Senha inválida');
                }

                return {
                id: user.id,
                email: user.email,
                name: user.name,
                tipo_usuario: user.tipo_usuario 
              };
            },
        }),
    ],

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
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST};