import { PlayIcon, InformationCircleIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/outline";
import Category from "./Category";

function HomeContent() {
    return (
        <div className=" max-w-[1000px] p-2 ">
            <div className=" flex items-center justify-start p-3 relative ">
                <img 
                    src="http://sciencefiction.com/wp-content/uploads/2018/12/the-punisher-banner.jpg"
                    className=" h-[400px] object-contain rounded-3xl "
                />
                <div className=" absolute flex-col left-20 bottom-20 ">
                    <h1 className=" text-[30px] text-white font-bold pb-5 ">The Punisher</h1>
                    <div className=" flex space-x-3 ">
                        <div className=" flex bg-[#ff4d00] px-4 py-2 rounded-lg justify-center max-w-[100px] button ">
                            <button className=" text-white font-extralight text-xs ">
                                Watch
                            </button>
                            <PlayIcon className=" h-4 text-white pl-[3px] " />
                        </div>

                        <div className=" flex bg-gray-600 border-[#ff4d00] px-1 py-1 rounded-lg justify-center w-[35px] h-[35px] items-center button ">
                            <InformationCircleIcon className=" text-[#ff4d00] h-5 "/>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" pb-5 ">
                <h1 className=" p-5 text-4xl font-extralight underline ">Movies</h1>
            </div>

            <div className=" px-2 w-[1030px] flex items-center  ">
                {/* <ChevronDoubleLeftIcon className=" bg-gray-700 h-[30px] text-[#ff4d00] absolute left-0 z-20 " /> */}
                <div className=" flex space-x-3 items-center transform:translate-x-200 overflow-y-hidden scrollbar-hide ">
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                </div>
                {/* <ChevronDoubleRightIcon className=" bg-gray-700 h-[30px] text-[#ff4d00] absolute right-0 z-20 " /> */}
            </div>

            <div className=" px-2 w-[1030px] flex items-center  ">
                {/* <ChevronDoubleLeftIcon className=" bg-gray-700 h-[30px] text-[#ff4d00] absolute left-0 z-20 " /> */}
                <div className=" flex space-x-3 items-center transform:translate-x-200 overflow-y-hidden scrollbar-hide ">
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                </div>
                {/* <ChevronDoubleRightIcon className=" bg-gray-700 h-[30px] text-[#ff4d00] absolute right-0 z-20 " /> */}
            </div>

            <div className=" px-2 w-[1030px] flex items-center  ">
                {/* <ChevronDoubleLeftIcon className=" bg-gray-700 h-[30px] text-[#ff4d00] absolute left-0 z-20 " /> */}
                <div className=" flex space-x-3 items-center transform:translate-x-200 overflow-y-hidden scrollbar-hide ">
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                </div>
                {/* <ChevronDoubleRightIcon className=" bg-gray-700 h-[30px] text-[#ff4d00] absolute right-0 z-20 " /> */}
            </div>

            <div className=" px-2 w-[1030px] flex items-center  ">
                {/* <ChevronDoubleLeftIcon className=" bg-gray-700 h-[30px] text-[#ff4d00] absolute left-0 z-20 " /> */}
                <div className=" flex space-x-3 items-center transform:translate-x-200 overflow-y-hidden scrollbar-hide ">
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                </div>
                {/* <ChevronDoubleRightIcon className=" bg-gray-700 h-[30px] text-[#ff4d00] absolute right-0 z-20 " /> */}
            </div>

            <div className=" px-2 w-[1030px] flex items-center  ">
                {/* <ChevronDoubleLeftIcon className=" bg-gray-700 h-[30px] text-[#ff4d00] absolute left-0 z-20 " /> */}
                <div className=" flex space-x-3 items-center transform:translate-x-200 overflow-y-hidden scrollbar-hide ">
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                </div>
                {/* <ChevronDoubleRightIcon className=" bg-gray-700 h-[30px] text-[#ff4d00] absolute right-0 z-20 " /> */}
            </div>
            
        </div>
    )
}

export default HomeContent
