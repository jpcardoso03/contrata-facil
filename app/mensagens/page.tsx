import prisma from '@/app/data/prisma';
import ChatHistory, { Conversation } from '@/components/ChatHistory';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { format } from 'date-fns';
import { EnumTipoUsuario } from '@/app/generated/prisma'; 

function formatMessageDate(date: Date) {
  const now = new Date();
  const isToday = 
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();

  if (isToday) {
    return format(date, 'HH:mm');
  }
  return format(date, 'dd/MM');
}

async function getConversations(currentUserId: string): Promise<Conversation[]> {
  const messages = await prisma.mensagem.findMany({
    where: {
      OR: [
        { id_remetente: currentUserId },
        { id_destinatario: currentUserId }
      ]
    },
    orderBy: {
      data: 'desc'
    },
    include: {
      remetente: {
        select: { id: true, name: true, image: true, profissao: true }
      },
      destinatario: {
        select: { id: true, name: true, image: true, profissao: true }
      }
    }
  });

  const contactsMap = new Map<string, Conversation>();

  for (const msg of messages) {
    const isMeSender = msg.id_remetente === currentUserId;
    const contact = isMeSender ? msg.destinatario : msg.remetente;
    
    if (!contactsMap.has(contact.id)) {
      let status: 'sent' | 'delivered' | 'read' = 'sent';
      if (isMeSender) {
        status = msg.lida ? 'read' : 'delivered';
      }

      contactsMap.set(contact.id, {
        id: contact.id,
        contactName: contact.name || 'Usuário',
        contactProfession: contact.profissao || 'Usuário',
        contactAvatar: contact.image,
        lastMessage: msg.conteudo, 
        lastMessageTime: formatMessageDate(msg.data),
        lastMessageStatus: status,
        unreadCount: 0,
        isOnline: false 
      });
    }

    if (!isMeSender && !msg.lida) {
      const conv = contactsMap.get(contact.id)!;
      conv.unreadCount += 1;
    }
  }

  return Array.from(contactsMap.values());
}

export default async function MensagensPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect('/login');
  }

  const conversations = await getConversations(session.user.id);

  return <ChatHistory 
            initialConversations={conversations} 
            userType={session.user.tipo_usuario as EnumTipoUsuario} 
         />;
}