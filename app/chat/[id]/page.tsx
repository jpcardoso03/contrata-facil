import prisma from '@/app/data/prisma';
import ChatScreen, { ChatMessage, ChatContact } from '@/components/ChatScreen';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect, notFound } from 'next/navigation';
import { format } from 'date-fns';
import { EnumTipoUsuario } from '@/app/generated/prisma'; 

export default async function ChatPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect('/login');
  }

  const currentUserId = session.user.id;
  const otherUserId = params.id;

  const contactUser = await prisma.usuario.findUnique({
    where: { id: otherUserId },
    select: {
      id: true,
      name: true,
      profissao: true,
      image: true,
      active: true, 
    }
  });

  if (!contactUser) {
    notFound();
  }

  const currentUser = await prisma.usuario.findUnique({
    where: { id: currentUserId },
    select: { active: true }
  });

  const messagesDb = await prisma.mensagem.findMany({
    where: {
      OR: [
        { id_remetente: currentUserId, id_destinatario: otherUserId },
        { id_remetente: otherUserId, id_destinatario: currentUserId }
      ]
    },
    orderBy: {
      data: 'asc'
    }
  });

  const formattedMessages: ChatMessage[] = messagesDb.map(msg => ({
    id: msg.id_mensagem,
    text: msg.conteudo,
    sender: msg.id_remetente === currentUserId ? 'me' : 'them',
    time: format(msg.data, 'HH:mm'),
    status: msg.id_remetente === currentUserId 
      ? (msg.lida ? 'read' : 'delivered')
      : 'read'
  }));

  const contactData: ChatContact = {
    id: contactUser.id,
    name: contactUser.name || 'Usuário',
    profession: contactUser.profissao || 'Sem profissão',
    avatar: contactUser.image,
    online: false,
    active: contactUser.active 
  };

  if (currentUser?.active) {
    await prisma.mensagem.updateMany({
      where: { 
          id_destinatario: currentUserId,
          id_remetente: otherUserId,
          lida: false
      },
      data: { lida: true }
    });
  }

  return (
    <ChatScreen 
      contact={contactData} 
      initialMessages={formattedMessages} 
      currentUserId={currentUserId}
      isCurrentUserActive={currentUser?.active ?? true}
      userType={session.user.tipo_usuario as EnumTipoUsuario}
    />
  );
}