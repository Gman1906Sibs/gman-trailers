import Logo from "./images/gc.png";
import { SearchCircleIcon } from "@heroicons/react/solid";
import { BellIcon, ChatIcon } from "@heroicons/react/outline";
import Pic from "./images/propic.jpg";


function Header() {


    return (
        <div className=" w-[80vw] max-w-[1150px] ">
            <div className=" py-1 items-center ">
                <div className=" px-[30px] flex h-10 items-center justify-between ">
                    
                    <div className=" max-w-[500px] flex justify-evenly items-center border rounded-full px-2 py-1 shadow-sm flex-grow ml-10 ">
                        <input 
                            type="text" 
                            className="  outline-none flex-grow px-2 "
                            placeholder="enter your search..."
                        />
                        <SearchCircleIcon 
                            className=" h-7 object-contain text-[#ff4d00] cursor-pointer "
                        />
                    </div>
                    <div className=" flex px-5 items-center space-x-5 ">
                        <span>
                            <BellIcon 
                                    className=" h-5 object-contain text-gray-400 cursor-pointer "
                                />
                        </span>
                        <span>
                            <ChatIcon 
                                    className=" h-5 object-contain text-gray-400 cursor-pointer "
                                />
                        </span>
                        <span>
                            <img 
                                src={Pic}
                                className=" h-8 object-contain rounded-lg "
                            />
                        </span>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Header
