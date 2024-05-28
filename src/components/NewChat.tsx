import { chat } from "@/types/chat";
import { Dispatch, SetStateAction, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

type Props = {
    user: chat;
    chatList: chat[];
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
}
export const NewChat = ({ user, chatList, show, setShow}: Props) => {
    const [listContact, setListContact] = useState([
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', nome: 'Bonieky Lacerda'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', nome: 'Bonieky Lacerda'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', nome: 'Bonieky Lacerda'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', nome: 'Bonieky Lacerda'}
    ]);

    const handleClose = () => {
        setShow(false);
    }
  return (
    <div className={`w-full md:w-1/3 fixed ${show ? 'left-0' : '-left-full'} top-0 bottom-0 bg-white flex flex-col border-r border-l-gray-50 transition-all ease-in-out duration-700`}> {/* newchat*/}
        <div className="flex bg-teal-400 items-center pt-14 pr-4 pb-4 pl-4"> {/* newchat--head*/}
            <div onClick={handleClose} className="w-10 h-10 flex justify-center items-center cursor-pointer "> {/* newchat--backbutton*/}
                <IoIosArrowBack />
            </div>
            <div className="text-sm flex-1 font-bold text-white ml-5">Nova Conversa</div> {/* newchat--headtitle*/}
        </div>
        <div className="flex-1 overflow-y-auto ::-webkit-scrollbar ::-webkit-scrollbar-thumb"> {/* newchat--list*/}
            {listContact.map((item, key) => (
                <div key={key} className="flex items-center p-2 cursor-pointer hover:bg-gray-100">
                    <img src={item.avatar} alt="" className="h-10 w-10 rounded-full mr-2" />
                    <div className="text-black text-sm">{item.nome}</div>
                </div>
            ))}
        </div>
    </div>
  );
}