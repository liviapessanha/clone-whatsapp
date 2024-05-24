import { chat } from "@/types/chat";

type Props = {
    item: chat;
    user: chat;
}
export const MessageItem = ({item, user}: Props) => {
  return (
    <div className={`m-2 flex ${user.chatId === item.chatId ? 'justify-end' : 'justify-start'}`}> {/**messageLine */}
        <div className={`bg-white rounded-md shadow-sm shadow-slate-300 flex flex-col p-3 max-w-[90%]
        ${user.chatId === item.chatId ? 'bg-green-100' : 'bg-white'}`}> {/**messageItem*/}
            <div className="text-sm mt-1 mr-10 mb-1 ml-1">{item.message}</div> {/**messageText */}
            <span className="text-xs ml-1 text-black/80  text-right h-3 -mt-3">{item.date}</span> {/**messageDate */}
        </div>
    </div>
  );
}