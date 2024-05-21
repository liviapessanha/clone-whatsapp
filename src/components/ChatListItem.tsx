import { chat } from "@/types/chat"

type Props = {
    item: chat;
    handleComponents: () => void;
    click: (chat:chat) => void;
}
export const ChatListItem = ({item, handleComponents, click}: Props) => {
    
  return (
    <div onClick={() => click(item)} className="flex cursor-pointer items-center gap-2 w-full border-b p-2 border-gray-300 hover:bg-teal-100">
        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" className="w-10 h-10 rounded-full" />
        <div className="w-full flex overflow-hidden flex-col justify-center"> {/*chatListItem-lines */}
            <div onClick={handleComponents} 
                className="h-10 flex justify-between items-center w-full  md:pointer-events-none md:cursor-not-allowed"
            > {/*chatListItem-line */}
                <div className="text-sm text-black">Bonieky Lacerda</div> {/*chatListItem-name */}
                <div className="text-xs text-black/50 ">19:00</div> {/*chatListItem-date */}
            </div>
            <div className="w-full"> {/*chatListItem-line */}
                <p className="text-sm text-black/40 truncate w-full">Pariatur mollit in u Pariatur mollit in u Pariatur mollit in u Pariatur mollit in u</p> {/*chatListItem-lastmsg */}
            </div>
        </div>
    </div>
  )
}