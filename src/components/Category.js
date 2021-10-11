import { PlayIcon, PlusCircleIcon, ThumbUpIcon, ThumbDownIcon } from "@heroicons/react/outline";
import { useState } from "react";
import ReactPlayer from 'react-player';

function Category() {

    const trailer = "https://www.youtube.com/watch?v=pWdKf3MneyI";
    const [ display, setDisplay] = useState("image");
    console.log(display)

    return (
        <div className=" p-3 flex justify-center relative py-10 ">
                <div 
                    onMouseEnter ={()=> setDisplay("video")}
                    onMouseLeave= {()=> setDisplay("image")}
                    className=" flex-col border border-gray-200 h-[150px] hover:h-[400px]
                     w-[200px] hover:w-[350px] rounded-lg flex justify-center items-center 
                     hover:items-baseline hover:cursor-pointer hover:bg-gray-50 hover:border-[#ff4d00] button hover:rounded-b-lg hover:rounded-t-none
                     "
                >
                    {display === "video" ? (
                        <div className=" flex-col items-center justify-center ">
                            <div className=" max-h-[200px] h-[200px] max-w-[340px] rounded-lg flex justify-center items-center ">
                                <ReactPlayer 
                                    url={trailer} 
                                    playing={true}
                                    width="100%"
                                    height="200px"
                                    muted={true}
                                    className=" absolute left-0 top-0 rounded-lg "
                                />
                            </div>
                            <div className=" flex-col h-[200px] ">
                                <div className=" flex space-x-2 pt-2 pb-2 ">
                                    <PlayIcon className=" videoButton h-[30px] hover:text-[#ff4d00] " />
                                    <PlusCircleIcon className=" videoButton h-[30px] hover:text-[#ff4d00] " />
                                    <ThumbUpIcon className=" videoButton h-[30px] hover:text-[#ff4d00] " />
                                    <ThumbDownIcon className=" videoButton h-[30px] hover:text-[#ff4d00] " />
                                </div>
                                <div className=" flex text-gray-400 space-x-2 font-bold ">
                                    <p>1 hour 15 mins</p>
                                    <p className=" border border-gray-400 px-[3px] ">+ 16</p>
                                    <p>1999</p>
                                </div>
                                <p className=" text-gray-400 font-thin ">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </p>
                                <p className=" pt-2 text-[#ff4d00] font-bold "> Action </p>
                            </div>
                        </div>
            
                     ) : (
                        <img 
                        src="https://tveater.com/wp-content/uploads/2018/12/ant-man-and-wasp-hindi-dubbed-full-movie.png"
                        className=" h-[140px] w-[100vw] absolute left-0 top-0 mb-2 z-20 hover:hidden  "
                    />
                     )}
                        
                                
                        {/* <video 
                            src={trailer} 
                            autoPlay={true} 
                            loop
                            className=" w-[200px] object-contain mb-2 absolute left-0 top-0 "
                        /> */}
                        <div className=" hidden hover:flex-col ">
                            <h1 className=" text-sm text-black ">Ant-Man </h1>
                            <p className=" text-xs text-gray-400 font-thin ">More Action Movies...</p>
                        </div>
                        
                    </div>
            </div>
    )
}

export default Category
