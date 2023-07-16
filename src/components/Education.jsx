import React from 'react';
import utAustin from '../assets/UT_austin.jpeg';
import txACM from '../assets/tx-acm.png';
import fHackers from '../assets/freetail-hackers.jpeg';
import hackTX22 from '../assets/hacktx2022.jpeg';
import harkey from '../assets/hifes.jpeg';
import mccombs from '../assets/mccombs.jpeg';
const Education = () => {
    return (
        <>
        <div className="w-full h-full sm:flex bg-[#F7E3B6] md:pl-[80px] pt-2 md:grid md:grid-cols-2 ">
            <div  className=" sm:w-[750px] items-start justify-center sm:h-[620px] mx-2">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold title-name justify-center flex text-[#FFFFE6] pb-3">Education</h1>
                <img src={utAustin} alt="" className='rounded-2xl justify-center mb-4 flex' style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }}/>
                {/* <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold title-name justify-center ut-font ut-animate rounded-xl pb-2 flex pt-3'>University of Texas at Austin</h1> 
                <h3 className='text-2xl sm:text-3xl md:text-3xl font-bold  md:justify-end justify-center flex text-[#FFFFE6] pt-2 cns-edu-title '><div className='text-[#a18fd8] text-2xl sm:text-3xl bg-[#333333] md:text-4xl rounded-xl h-[fit-content] year pr-1 pl-1 mb-1' >Sophomore</div>&nbsp;&#8226; BS in Computer Science</h3>
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold md:justify-end justify-center flex text-[#333333] cns-edu-title '> College of Natural Sciences</h3> */}
                <h1 className='text-3xl sm:text-3xl md:text-4xl font-bold title-name justify-center ut-font ut-animate rounded-xl pb-2 flex pt-3'>University of Texas at Austin</h1> 

            </div>

            <div className="w-full h-full flex justify-start items-center flex-col my-1">
            {/* <div className="flex items-start justify-between sm:w-full h-[700px] md:grid-cols-2"> */}
                <div className="flex-col flex justify- items-end ">
                    {/* <h1 className='text-3xl sm:text-3xl md:text-4xl font-bold title-name justify-center ut-font ut-animate rounded-xl pb-2 flex pt-3'>University of Texas at Austin</h1>  */}
                    <h3 className='text-2xl sm:text-3xl md:text-3xl font-bold  md:justify-end justify-center flex text-[#FFFFE6] pt-2 cns-edu-title '><div className='text-[#a18fd8] text-2xl sm:text-3xl bg-[#333333] md:text-4xl rounded-xl h-[fit-content] year pr-1 pl-1 mb-1' >Sophomore</div>&nbsp;&#8226; BS in Computer Science</h3>
                    <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold sm:justify-end justify-center flex text-[#333333] cns-edu-title '> College of Natural Sciences</h3>
                    </div>
                    <div className="flex-col mx-[75px] my-5 rounded-2xl bg-[#FFFFE6] w-[fit-content] py-2">
                    <p className='flex justify-center px-5 font-bold pb-1' style={{ textIndent: '50px', fontSize: '1.05rem'}}>I’m a rising Sophomore pursuing a CS degree with an Entrepreneurship Minor at the University of Texas at Austin. 
                        I have already completed Data Structures, Discrete Math and Computer Architecture and Organization in my coursework. In Fall 2023, 
                        I will be learning Operating Systems and Algorithms in the Spring. This will conclude my core requirements for my degree.</p>
                    <p className='flex justify-center px-5 font-bold pb-1' style={{ textIndent: '50px', fontSize: '1.05rem'}}>Some of the organizations I’ve been part of are Texas ACM and Freetail Hackers. With a team of three friends, 
                        I have participated in Freetail Hacker’s HackTX 2022 competition and received a “Best Overall on a Beginners’ Track Award.”
                         More info in Projects section.</p>
                    <p className='flex justify-center px-5 font-bold pb-1' style={{ textIndent: '50px', fontSize: '1.05rem'}}>During my Sophomore year, I wish to participate in Texas Momentum or Texas Convergent, Texas Luminescence, and FreeTail Hackers. 
                        Moreover, I am excited to work on my personal projects to expand my full-stack development knowledge.</p>
                    </div>
            </div>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center bg-[#F7E3B6]">
            <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold justify-end flex title-name text-[#FFFFE6] sm:pt-5 pt-2">Entrepreneurship Minor</h2>
            <h3 className='text-xl sm:text-2xl md:text-3xl font-bold justify-end flex text-[#333333] cns-edu-title sm:pt-3 pt-2'>Harkey Institute for Entrepreneurial Studies</h3>
            <div className="flex justify-between items-start w-[fit-content] ">
                <div className="hover:scale-95 duration-500 flex bg-[#333333] mb-2 mr-2 rounded-2xl w-[250px] h-[250px] items-center" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }}>
                    <img src={mccombs} alt="" className=' ml-6 rounded-2xl  w-[200px] h-[200px]' style={{ boxShadow: '0 0 10px rgba(255, 165, 0, 0.5)' }}/>
                </div>
                <div className=" hover:scale-95 duration-500 flex bg-[#333333] mb-2 ml-2 rounded-2xl w-[250px] h-[250px] items-center" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }}>
                    <img src={harkey} alt="" className=' ml-6 rounded-2xl  w-[200px] h-[200px]' style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}/>
                </div>
            </div> 
        </div>
       
        <div className="edu-exper-spacer edu-exper-layer"></div>
        </>
    )
}

export default Education;