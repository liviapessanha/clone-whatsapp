import { chat } from "@/types/chat"

type Props = {
    item: chat;
    handleComponents: () => void;
}
export const ChatListItem = ({item, handleComponents}: Props) => {
  return (
    <div className="bg-white flex cursor-pointer items-center ml-1">
        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" className="w-10 h-10 rounded-full mr-2" />
        <div className="w-full flex flex-col flex-1 justify-center border-b p-2  border-gray-200"> {/*chatListItem-lines */}
            <div onClick={handleComponents} 
                className="h-10 flex justify-between items-center w-full md:pointer-events-none md:cursor-not-allowed"
            
            > {/*chatListItem-line */}
                <div className="text-sm text-black">Bonieky Lacerda</div> {/*chatListItem-name */}
                <div className="text-xs text-black/50">19:00</div> {/*chatListItem-date */}
            </div>
            <div> {/*chatListItem-line */}
                <p className="text-sm text-black/40 flex justify-between items-center w-full">Opa, tudo bem?</p> {/*chatListItem-lastmsg */}
            </div>
        </div>
    </div>
  )
}