import Logo from "./images/gc.png";
import { HomeIcon, ClockIcon, VideoCameraIcon, FilmIcon, ClipboardListIcon, CogIcon, LogoutIcon } from "@heroicons/react/outline";
import { useState } from "react";

function SideBar({renderComponent}) {

    const [select, setSelect] = useState("home")
    console.log(select)

    return (
        <div className=" w-full flex "> 
            <div className=" w-[200px] h-[100vh] flex-col border-r-[1px] border-gray-200 relative ">

                <div className=" pl-10 py-3 ">
                    <h1 >Welcome</h1>
                    <h1 className="text-[#ff4d00] ">John Doe</h1>
                </div>
               

                <p className=" text-xs text-gray-400 py-5 pl-10 ">Menu</p>


                <div 
                    className=" menu1 "
                    onClick = {() => {setSelect("home"); renderComponent("HomeContent")} }  
                >
                    <span className={ ` menu2 ${ select === "home" ? " border-[#ff4d00]  " : " border-white  "  } `  }/>
                    <span><HomeIcon className={` menu3  ${ select === "home" ? " text-[#ff4d00]  " : " text-gray-400  "  }`} /></span>
                    <span className=" text-gray-400 pl-2 font-thin text-xs ">Home</span>
                </div>


                <div 
                    className=" menu1 "
                    onClick = {() => {setSelect("latest"); renderComponent("Latest")} } 
                >
                    <span className={ ` menu2 ${ select === "latest" ? " border-[#ff4d00]  " : " border-white  "  } `  }/>
                    <span><ClockIcon className={` menu3 ${ select === "latest" ? " text-[#ff4d00]  " : " text-gray-400  "  }`} /></span>
                    <span className=" text-gray-400 pl-2 font-thin text-xs ">Latest</span>
                </div>

                <div 
                    className=" menu1 "
                    onClick = {() => {setSelect("movies"); renderComponent("Movies")} } 
                >
                    <span className={ ` menu2 ${ select === "movies" ? " border-[#ff4d00]  " : " border-white  "  } `  }/>
                    <span><VideoCameraIcon className={` menu3 ${ select === "movies" ? " text-[#ff4d00]  " : " text-gray-400  "  }`} /></span>
                    <span className=" text-gray-400 pl-2 font-thin text-xs ">Movies</span>
                </div>

                <div 
                    className=" menu1 "
                    onClick = {() => {setSelect("series"); renderComponent("Series")} } 
                >
                    <span className={ ` menu2 ${ select === "series" ? " border-[#ff4d00]  " : " border-white  "  } `  }/>
                    <span><FilmIcon className={` menu3 ${ select === "series" ? " text-[#ff4d00]  " : " text-gray-400  "  }`} /></span>
                    <span className=" text-gray-400 pl-2 font-thin text-xs ">Series</span>
                </div>

                <div 
                    className=" menu1 "
                    onClick = {() => {setSelect("myList"); renderComponent("MyList")} } 
                >
                    <span className={ ` menu2 ${ select === "myList" ? " border-[#ff4d00]  " : " border-white  "  } `  }/>
                    <span><ClipboardListIcon className={` menu3 ${ select === "myList" ? " text-[#ff4d00]  " : " text-gray-400  "  }`} /></span>
                    <span className=" text-gray-400 pl-2 font-thin text-xs ">My List</span>
                </div>

                <p className=" text-xs text-gray-400 py-5 pl-10 ">General</p>

                <div 
                    className=" menu1 "
                    onClick = {() => {setSelect("settings"); renderComponent("Settings")} } 
                >
                    <span className={ ` menu2 ${ select === "settings" ? " border-[#ff4d00]  " : " border-white  "  } `  }/>
                    <span><CogIcon className={` menu3 ${ select === "settings" ? " text-[#ff4d00]  " : " text-gray-400  "  }`} /></span>
                    <span className=" text-gray-400 pl-2 font-thin text-xs ">Settings</span>
                </div>

                <div 
                    className=" menu1 "
                    onClick = {() => {setSelect("logOut"); renderComponent("LogOut")} } 
                >
                    <span className={ ` menu2 ${ select === "logOut" ? " border-[#ff4d00]  " : " border-white  "  } `  }/>
                    <span><LogoutIcon className={` menu3 ${ select === "logOut" ? " text-[#ff4d00]  " : " text-gray-400  "  }`} /></span>
                    <span className=" text-gray-400 pl-2 font-thin text-xs ">Log out</span>
                </div>

                <img 
                    src={Logo}
                    className=" absolute bottom-10 "
                />
                
            </div>
        </div>
    )
}

export default SideBar
