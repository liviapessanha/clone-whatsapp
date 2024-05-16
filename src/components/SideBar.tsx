import { MdDonutLarge } from "react-icons/md";
import { MdMoreVert } from "react-icons/md";
import { IoChatboxEllipsesOutline } from "react-icons/io5";


export const SideBar = () => {
  return (
    <div className="w-1/3 max-w-md flex flex-col border-r border-gray-300">
        <header className="h-14 flex justify-between items-center px-1 md:px-4">
            <img 
                src="https://www.w3schools.com/howto/img_avatar2.png" 
                alt="avatar" 
                className="h-10 w-10 rounded-full cursor-pointer"
            />
            <div className="flex items-center">
                <div className="w-7 h-7 cursor-pointer">
                    <MdDonutLarge />
                </div>
                <div className="w-7 h-7 cursor-pointer">
                    <IoChatboxEllipsesOutline />
                </div>
                <div className="w-7 h-7 cursor-pointer">
                    <MdMoreVert />
                </div>
                
                
                
            </div>
        </header>
        <div>
            ...
        </div>
        <div>
            ...
        </div>
    </div>
  );
}