"use client"
import { MdDonutLarge } from "react-icons/md";
import { MdMoreVert } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { ChatListItem } from "./ChatListItem";
import { chat } from "@/types/chat";
import { NewChat } from "./NewChat";

type Props = {
    hiddenSideBar: boolean;
    handleComponents: () => void;
    click: (chat: chat) => void; 
    activeChat: chat | null;
    user: chat;
}
export const SideBar = ({hiddenSideBar, handleComponents, click, activeChat, user}: Props) => {

    const [chatList, setChatList] = useState<chat[]>([
        {chatId: 1, name: 'Bonieky', date: '19:00', message: 'Opa, tudo bem?', avatar: 'https://www.w3schools.com/howto/img_avatar2.png'}
    ]);

    const [showNewChat, setShowNewChat] = useState(false);
    const handleOpenChatContact = () => {
        setShowNewChat(true);
    }

  return (
    <div className={`${!hiddenSideBar ? 'hidden' : 'block'}  md:w-1/3 w-full  flex flex-col md:border-r  border-gray-300`}>
        <NewChat 
            chatList={chatList}
            user={user}
            show={showNewChat} 
            setShow={setShowNewChat}
        />
        <header className="h-14 w-full flex justify-between items-center  md:px-4 bg-teal-500 ">
            <img 
                src="https://www.w3schools.com/howto/img_avatar2.png" 
                alt="avatar" 
                className="h-7 w-7 rounded-full cursor-pointer ml-1 md:ml-0"
            />
            <div className="flex  items-center">
                <div className="w-7 h-7 cursor-pointer flex items-center">
                    <MdDonutLarge />
                </div>
                <div onClick={handleOpenChatContact} className="w-7 h-7 cursor-pointer flex items-center">
                    <IoChatboxEllipsesOutline />
                </div>
                <div className="w-7 h-7 cursor-pointer flex items-center">
                    <MdMoreVert />
                </div>
            </div>
        </header>
        <div className="bg-white/70 border-b border-slate-100 py-1 px-2 bg-teal-500">
            <div className="bg-white rounded-md flex items-center gap-1">
                <CiSearch/>
                <input 
                    type="search"
                    className="w-full flex-1 outline-none bg-transparent "
                />
            </div>
        </div>
        <div className="w-full scrollbar-thin scrollbar-thumb-transparent">
            {chatList.map((item, key) => (
                <ChatListItem active={activeChat?.chatId === item.chatId} handleComponents={handleComponents} key={key} item={item} click={click} />
            ))}
        </div>
    </div>
  );
}