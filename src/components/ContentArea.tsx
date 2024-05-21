import { useState } from "react";
import { ChatIntro } from "./ChatIntro";
import { chat } from "@/types/chat";
import { ChatWindow } from "./ChatWindow";

type Props = {
    hiddenContentArea: boolean;
    activeChat: chat | null;
}
export const ContentArea = ({hiddenContentArea, activeChat}: Props) => {

  return (
        <div className={`${hiddenContentArea ? 'hidden' : 'block'} md:block
            flex-1
        `}>
            {activeChat ? (
                <ChatWindow chat={activeChat} />
            ) : (
                <ChatIntro />
            )}
        </div>
    );
}