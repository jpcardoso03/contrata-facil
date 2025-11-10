// types/next-auth.d.ts

// 1. CORRIJA ESTE IMPORT
import { EnumTipoUsuario } from '@/app/generated/prisma';

import 'next-auth';
import { DefaultSession } from 'next-auth';

// Estenda o módulo 'next-auth'
declare module 'next-auth' {
  
  /**
   * Estende o tipo 'User' padrão
   */
  interface User {
    id: string;
    tipo_usuario: EnumTipoUsuario; // 2. Verifique se esta linha existe
  }

  /**
   * Estende o tipo 'Session'
   */
  interface Session {
    user: {
      id: string;
      tipo_usuario: EnumTipoUsuario; // 3. Verifique se esta linha existe
    } & DefaultSession['user']; 
  }
}

// Isso também se aplica ao JWT
declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    tipo_usuario: EnumTipoUsuario; // 4. Verifique se esta linha existe
  }
}