import Logo from "./images/gc.png";

function Landing() {
    return (
        <div className=" max-w-[1500px] flex justify-center ">
            <div className=" lg:flex h-[100vh] items-center justify-evenly p-[30px] ">

            <div className=" hidden justify-end ">
                            <img 
                                src={Logo}
                                className=" max-w-[500px] "
                            />
            </div>

            <div className=" max-w-[500px] ">
                <h1 className=" text-4xl font-thin mb-[30px] text-center ">
                    All your favourite movies and series trailers and more...
                </h1>

                <p className=" text-gray-400 font-thin text-center ">
                    To save trailers login or register otherwise click continue to just browse
                </p>

                <div className=" flex space-x-8 pt-7 justify-center ">
                    <button className=" text-gray-400 text-sm font-extralight border px-3 py-1 rounded-md cursor-pointer hover:shadow-lg active:hover:scale-95 active:bg-[#ff4d00] transition transform duration-100 ease-out ">
                        Login
                    </button>

                    <button className=" text-gray-400 text-sm font-extralight border px-3 py-1 rounded-md cursor-pointer hover:shadow-lg active:hover:scale-95 active:bg-[#ff4d00] transition transform duration-100 ease-out  ">Register</button>

                    <button className=" text-gray-400 text-sm font-extralight border px-3 py-1 rounded-md cursor-pointer hover:shadow-lg active:hover:scale-95 active:bg-[#ff4d00] transition transform duration-100 ease-out  ">Continue</button> </div>
                
            </div>

            <div className=" flex justify-end ">
                <img 
                    src={Logo}
                    className=" max-w-[500px] "
                />
            </div>

</div>
        </div>
        
    )
}

export default Landing
