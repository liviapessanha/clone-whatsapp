"use client"
import { ContentArea } from "@/components/ContentArea";
import { SideBar } from "@/components/SideBar";
import { chat } from "@/types/chat";
import { useEffect, useState } from "react";

const Page = () => {
    const [hiddenContentArea, setHiddenContentArea] = useState(true);
    const [activeChatContentArea, setActiveChatContentArea] = useState<chat | null>(null);

    const handleHiddenContent = () => {
        
        setHiddenContentArea(!hiddenContentArea);
    }
    const handleActiveChat = (chatItem:chat) => {
        setActiveChatContentArea(chatItem);
        console.log(activeChatContentArea);
    }
  return (
    <div className="md:flex w-full h-screen">
        <SideBar hiddenSideBar={hiddenContentArea} handleComponents={handleHiddenContent} click={handleActiveChat} />

        <ContentArea hiddenContentArea={hiddenContentArea} activeChat={activeChatContentArea} />
    </div>
  );
}

export default Page;