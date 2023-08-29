import { useState } from "react";
import { LeftNavigation } from "./Widgets/LeftNavigation"
import { RiAddLine, RiCloseLine, RiLayoutRight2Line, RiMenuFill, RiSendPlane2Fill } from "react-icons/ri";

export const Dashboard=()=>{
    const user = 'Edward Junior Amartey';

    const [sideNav,setSideNav] = useState(false);

    return(
        <main className=" h-screen flex justify-between">
            {/* large screen */}
            <div className=" hidden md:block">
                {sideNav && (
                    <section className=" h-full">
                        <LeftNavigation
                        disableSideNav={()=> setSideNav(false)}
                        currentUser={user}
                        />
                    </section>
                )}
            </div>

            {/* small screen */}
            <div className="md:hidden">
                {sideNav && (
                    <div className=" fixed bottom-0 right-0 left-0 top-0">
                        <div className="flex h-full">
                            <section className=" h-full">
                                <LeftNavigation
                                currentUser={user}
                                />
                            </section>

                            <div className=" flex justify-start w-full text-white bg-gray-700 bg-opacity-50">
                                <span 
                                onClick={()=> setSideNav(false)}
                                className="h-10 hover:cursor-pointer hover:bg-[#3a3b3f] m-3 w-10 border-[1px] flex items-center justify-center border-gray-200 rounded-lg">
                                    <RiCloseLine
                                    size={20}/>
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <section className=" h-full bg-[#343541] flex flex-col w-full justify-between ">
                {/* other content */}
                <div className="">
                    {/* large screen */}
                    <div className="hidden md:block">
                        {!sideNav && (
                            <div className="m-6 hover:cursor-pointer">
                            <RiLayoutRight2Line
                            color="white"
                            onClick={()=> setSideNav(true)}
                            size={20}/>
                        </div>)}
                    </div>

                    {/* small screen */}
                    <div className=" md:hidden py-5 border-b-[1px] border-gray-500">
                        <div className=" px-4 text-[#D4D4D4] flex justify-between">
                            <RiMenuFill
                            onClick={()=> setSideNav(true)}
                            className=" hover:cursor-pointer"
                            size={24}
                            />
                            
                            <p>New Chat</p>

                            <RiAddLine 
                            className=" hover:cursor-pointer"
                            size={24}/>
                        </div>
                    </div>
                </div>

                {/* input */}
                <div className=" py-14">
                    <div className=" flex justify-center">
                        <div className=" flex w-full md:w-[85%] lg:w-[75%] xl:w-[700px] mx-7 md:mx-0 justify-center ">
                            <input
                            className="h-[50px] md:h-[60px] w-full text-lg rounded-l-xl px-6 text-white m-auto bg-[#40414F] hover:outline-none focus:outline-none"
                            placeholder="Send a message"
                            />

                            <span className="flex justify-center items-center px-5 rounded-r-xl bg-[#40414F]">
                                <RiSendPlane2Fill 
                                color="#999" 
                                size={23}/>
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}