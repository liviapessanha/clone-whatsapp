"use client"
import { ContentArea } from "@/components/ContentArea";
import { SideBar } from "@/components/SideBar";
import { chat } from "@/types/chat";
import { useEffect, useState } from "react";

const Page = () => {
    const [hiddenContentArea, setHiddenContentArea] = useState(true);
    const [activeChatContentArea, setActiveChatContentArea] = useState<chat | null>(null);
    const [ user, setUser ] = useState<chat>({chatId: 1,  name: 'Usuario Logado', date: '19:00', message: 'Olá, tudo bem?', avatar: 'https://www.w3schools.com/howto/img_avatar2.png'});

    const handleHiddenContent = () => {
        
        setHiddenContentArea(!hiddenContentArea);
    }
    const handleActiveChat = (chatItem:chat) => {
        setActiveChatContentArea(chatItem);
    }
  return (
    <div className="md:flex w-full h-screen">
        <SideBar activeChat={activeChatContentArea} hiddenSideBar={hiddenContentArea} handleComponents={handleHiddenContent} click={handleActiveChat} />

        <ContentArea user={user} onClickHiddenContent={handleHiddenContent} hiddenContentArea={hiddenContentArea} activeChat={activeChatContentArea} />
    </div>
  );
}

export default Page;