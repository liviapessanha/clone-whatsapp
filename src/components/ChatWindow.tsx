"use client"
import { chat } from "@/types/chat";
import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosAttach } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import { IoMicOutline } from "react-icons/io5";
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { EmojiProperties } from "emoji-picker-react/dist/dataUtils/DataTypes";
import { MouseDownEvent } from "emoji-picker-react/dist/config/config";
import { MessageItem } from "./MessageItem";

type Props = {
  chat: chat;
  onClick: () => void;
  user: chat;
}
export const ChatWindow = ({chat, onClick, user}: Props) => {
    const body = useRef<any>();

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const [ emojiOpen, setEmojiOpen ] = useState(false);
    const [ text, setText ] = useState('');
    const [ listening, setListening ] = useState(false);
    const [ list, setList ] = useState<chat[]>([{chatId: 1,  name: 'Bonieky Lacerda', date: '19:00', message: 'Olá, tudo bem?', avatar: 'https://www.w3schools.com/howto/img_avatar2.png'}, 
    {chatId: 2,  name: 'Lívia', date: '19:00', message: 'Olá!', 
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png'},
        {chatId: 1,  name: 'Lívia', date: '19:00', message: 'Olá!', 
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 2,  name: 'Lívia', date: '19:00', message: 'Olá!', 
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 1,  name: 'Lívia', date: '19:00', message: 'Olá!,, so escrevedo bobeira aqui para testar', 
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 1,  name: 'Lívia', date: '19:00', message: 'como vaisua familia usuario alguma coisa!', 
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 2,  name: 'Lívia', date: '19:00', message: 'Olá!, outra coisa interessante aqui tudo bem', 
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 1,  name: 'Lívia', date: '19:00', message: 'Olá, algo bem legal aqui ta!', 
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 2,  name: 'Lívia', date: '19:00', message: 'ultima coisa que tenho para falar com vc ok ', 
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 2,  name: 'Lívia', date: '19:00', message: 'nao ai ser a ultuma mas estamos quase la no utimo ok', 
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 1,  name: 'Lívia', date: '19:00', message: 'fique avontade para gaalr o que quiser para s=testar esse codigo ai espero que de tuo certo para vc tudo bem', 
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 2,  name: 'Lívia', date: '19:00', message: 'agora cheguei onde queria valeu valeu', 
    avatar: 'https://www.w3schools.com/howto/img_avatar2.png'}
    ]);

    useEffect(() => {
        if(body.current.scrollHeight > body.current.offsetHeight) {
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    }, [ list ]);

    const handleEmojiClick = (emoji: EmojiClickData) => {
        setText(text + emoji.emoji);
    }

    const handleSendClick = () => {

    }
    const handleMicClick = () => {
        if(recognition !== null) {
            recognition.onstart = () => {
                setListening(true);
            }
            recognition.onend = () => {
                setListening(false);
            }
            recognition.onresult = (e: any) => {
                setText(e.results[0][0].transcript);
            }
            recognition.start();
        }
    }

  return (
    <div className="flex flex-col h-screen"> {/*chatWindow */}
        <header className="h-14 border-b border-gray-300 flex justify-between items-center"> {/*chatWindow--header */}
            <div className="flex items-center gap-2"> {/*chatWindow--headerinfo */}
                <IoIosArrowBack onClick={onClick} className="cursor-pointer md:hidden" />
                <img src={chat.avatar} alt="" className="h-10 w-10 rounded-full ml-1 cursor-pointer" />
                <div className="cursor-pointer text-black text-sm md:text-base">{chat.name}</div> {/*chatWindow--name */}
            </div>
            <div className="flex justify-center items-center gap-2"> {/*chatWindow--headerbuttons*/}
                <CiSearch className="cursor-pointer" />
                <IoIosAttach />
                <IoMdMore />
            </div>
        </header>
        <div ref={body} className="flex-1 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] ::-webkit-scrollbar ::-webkit-scrollbar-thumb  overflow-y-auto bg-cover bg-top bg-slate-100"> {/*chatWindow--body*/}
            {list.map((item, key) => (
                <MessageItem 
                    key={key}
                    item={item}
                    user={user}
                />
            ))}
        </div>

        <div > {/*chatWindow--emojiarea*/}
            <EmojiPicker
                open={emojiOpen}
                width={'auto'}
                onEmojiClick={handleEmojiClick}
                searchDisabled
                skinTonesDisabled
                previewConfig={{
                    showPreview:false
                    }}
            />
        </div>

        <footer className="h-14 flex items-center gap-1 justify-center bg-gray-100"> {/*chatWindow--footer*/}
            <div className="flex gap-1 items-center px-3"> {/*chatWindow-pre*/}
                <IoIosClose 
                    onClick={() => setEmojiOpen(false)} 
                    size={22} 
                    className={`${emojiOpen ? 'block' : 'hidden'} cursor-pointer`} />
                <MdOutlineEmojiEmotions 
                    onClick={() => setEmojiOpen(true)} 
                    className={`${emojiOpen ? 'bg-gray-400' : ''} rounded-full cursor-pointer `} />
            </div>
            <div className="flex-1"> {/*chatWindow-inputarea*/}
                <input 
                    placeholder="mensagem" 
                    type="text" 
                    className="p-3 outline-none bg-white w-full  rounded-md text-black/80 text-sm"
                    value={text}
                    onChange={e => setText(e.target.value)} 
                />
            </div>
            <div className="flex items-center px-3 gap-1"> {/*chatWindow-pos*/}
                {text === '' && 
                    <IoMicOutline onClick={handleMicClick} className={`cursor-pointer rounded-full ${listening ? 'bg-blue-300' : ''}`} />
                }
                {text !== '' && 
                    <IoMdSend onClick={handleSendClick} className="cursor-pointer" />
                }
            </div>
        </footer>
    </div>
  );
}