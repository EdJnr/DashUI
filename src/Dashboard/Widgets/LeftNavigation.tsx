import React from "react"
import { RiAddLine } from "react-icons/ri";
import { RiLayoutRight2Line } from "react-icons/ri";

interface props{
    currentUser : string
    disableSideNav ?: ()=> void
}

export const LeftNavigation:React.FC<props>=({currentUser, disableSideNav})=>{
    return(
        <main className=" h-full w-[270px] bg-[#202123] text-[#e6e4e4]  px-2.5 py-2.5 text-left flex flex-col justify-between">
            {/* new chat section */}
            <section className=" w-full flex  flex-row justify-between hover:cursor-pointer">
                <span className=" border-[1px] hover:bg-[#3a3b3f] border-gray-600 px-3 h-12 text-[14px] flex items-center w-full rounded-lg">
                    <RiAddLine size={22}/>

                    <p className=" ml-3">New chat</p>
                </span>

                {disableSideNav && (
                    <span 
                    onClick={disableSideNav}
                    className="h-12 hover:bg-[#3a3b3f] ml-2.5 w-14 border-[1px] flex items-center justify-center border-gray-600 rounded-lg">
                        <RiLayoutRight2Line size={20}/>
                    </span>
                )}
            </section>

            {/* user section */}
            <section className=" border-t-[1px] border-gray-600 py-6 flex items-center">
                <span className=" bg-[#0097A4] h-10 w-10 flex items-center justify-center rounded mr-2">
                    <p className=" text-2xl ">{currentUser.slice(0,1)}</p>
                </span>

                <p>{currentUser}</p>
            </section>
        </main>
    )
}