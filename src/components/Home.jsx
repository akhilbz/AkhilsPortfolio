import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
    return (
        <>
        <div className="w-full h-screen bg-[#FFFFE6] z-10 px-8 sm:px-0 ">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-[750px]">
                <div className="flex ">
                <p className="text-[#a18fd8] text-2xl sm:text-3xl font-light ">Welcome!&nbsp;</p>
                <p className="text-[#a18fd8] text-2xl sm:text-3xl font-light ">My name is </p>
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl text-[#001220] font-bold title-name">Akhilesh Bitla</h1>
                <div className="parallelogram-top my-2 lg:w-[800px] md:w-[700px] w-[400px] h-[45px] sm:w-[600px] sm:h-[60px] lg:h-[85px] z-10 overflow-hidden"><h2 className="text-4xl sm:text-5xl lg:text-7xl sm:h-[65px] pt-1 sm:pr-0 md:pr-3 text-[#333333] font-bold title-name text-center z-10">CS Student @ UT Austin</h2></div>
                <div className="parallelogram-btm my-1 md:my-3 md:mx-[-10px] w-[365px] h-[125px] lg:w-[750px] md:w-[650px] lg:h-[85px] md:h-[100px] sm:w-[550px] z-10 overflow-hidden"><p className="py-2 px-4 text-base sm:text-xl mx-[10px] text-[#FFFFE6] font-medium max-w-[750px] z-10">I'm passionate about designing and developing software applications that have a tangible 
                and meaningful <span className="highlight-impact top-2 font-[Anton] text-2xl text-[#FFFFE6]" style={{ position: 'relative', top: '2px' }}>IMPACT</span> on people's everyday lives.</p></div>
            </div>
        </div>
        <div className="home-about-spacer home-about-layer"></div>
        </>
    )
}

export default Home;