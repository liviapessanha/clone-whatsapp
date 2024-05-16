"use client"
import { MdDonutLarge } from "react-icons/md";
import { MdMoreVert } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { ChatListItem } from "./ChatListItem";
import { chat } from "@/types/chat";

type Props = {
    hiddenSideBar: boolean;
    handleComponents: () => void;
}
export const SideBar = ({hiddenSideBar, handleComponents}: Props) => {
    const [chatList, setChatList] = useState<chat[]>([
        {name: 'Bonieky', date: '19:00', lastMessage: 'Opa, tudo bem?'}
    ]);

  return (
    <div className={`${!hiddenSideBar ? 'hidden' : 'block'}  md:w-1/3 w-full flex flex-col border-r border-gray-300`}>
        <header className="h-14 flex justify-between items-center px-1 md:px-4">
            <img 
                src="https://www.w3schools.com/howto/img_avatar2.png" 
                alt="avatar" 
                className="h-7 w-7 rounded-full cursor-pointer"
            />
            <div className="flex items-center">
                <div className="w-7 h-7 cursor-pointer flex items-center">
                    <MdDonutLarge />
                </div>
                <div className="w-7 h-7 cursor-pointer flex items-center">
                    <IoChatboxEllipsesOutline />
                </div>
                <div className="w-7 h-7 cursor-pointer flex items-center">
                    <MdMoreVert />
                </div>
            </div>
        </header>
        <div className="bg-white/70 border-b border-slate-100 py-1 px-2">
            <div className="bg-white rounded-md flex items-center p-1 gap-1">
                <CiSearch/>
                <input 
                    type="search"
                    className="w-full flex-1 outline-none bg-transparent "
                />
            </div>
        </div>
        <div className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-transparent">
            {chatList.map((item, key) => (
                <ChatListItem handleComponents={handleComponents} key={key} item={item} />
            ))}
        </div>
    </div>
  );
}