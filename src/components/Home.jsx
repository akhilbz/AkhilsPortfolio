import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
    return (
        <div className="w-full h-screen bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <div className="flex ">
                <p className="text-[#a18fd8] text-2xl sm:text-3xl font-light ">Welcome!&nbsp;</p>
                <p className="text-[#a18fd8] text-2xl sm:text-3xl font-light ">My name is </p>
                </div>
                <h1 className="text-5xl sm:text-7xl text-[#FFFFE6] font-bold title-name">Akhilesh Bitla </h1>
                <div className="parallelogram-top my-2"><h2 className="text-3xl sm:text-7xl text-[#333333] font-bold title-name text-center max-w-[750px]">CS Student @ UT Austin</h2></div>
                <div className="parallelogram-btm my-3 mx-[-15px]"><p className="py-2 px-4 text-xl text-[#FFFFE6] font-medium max-w-[750px]">I'm passionate about designing and developing software applications that have a tangible 
                and meaningful <span className="highlight-impact font-[Anton] text-lg text-[#333333]">IMPACT</span> on people's everyday lives.</p></div>

            </div>
        </div>
    )
}

export default Home;