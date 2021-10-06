import Logo from "./images/gc.png";

function Landing() {
    return (
        <div className=" topOne ">
            <div className=" max-w-[1500px] ">
                <div className=" w-full lg:flex h-[100vh] items-center justify-between p-[30px] ">

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
                            <button className=" button active:bg-[#ff4d00] ">
                                Login
                            </button>

                            <button className=" button active:bg-[#ff4d00]  ">Register</button>

                            <button className=" button active:bg-[#ff4d00]  ">Continue</button> </div>
                        
                    </div>

                    <div className=" flex justify-end ">
                        <img 
                            src={Logo}
                            className=" max-w-[500px] "
                        />
                    </div>

                </div>
            </div>
                
        </div>
        
    )
}

export default Landing
