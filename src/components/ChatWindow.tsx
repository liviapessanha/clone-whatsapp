import { chat } from "@/types/chat";

type Props = {
  chat: chat;
}
export const ChatWindow = ({chat}: Props) => {
  return (
    <div>
      {chat.chatId}
    </div>
  );
}