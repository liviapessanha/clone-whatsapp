import { useState } from "react";
import { ChatIntro } from "./ChatIntro";
import { chat } from "@/types/chat";
import { ChatWindow } from "./ChatWindow";

type Props = {
    hiddenContentArea: boolean;
    activeChat: chat | null;
    onClickHiddenContent: () => void;
    user: chat;
}
export const ContentArea = ({hiddenContentArea, activeChat, onClickHiddenContent, user}: Props) => {

  return (
        <div className={`${hiddenContentArea ? 'hidden' : 'block'} md:block
            flex-1
        `}>
            {activeChat ? (
                <ChatWindow user={user} onClick={onClickHiddenContent} chat={activeChat} />
            ) : (
                <ChatIntro />
            )}
        </div>
    );
}