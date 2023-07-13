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
        <div className="w-full h-full sm:flex bg-[#FFA86E] justify-start md:pl-[80px] sm:pt-6 pt-2 md:grid-cols-2 ">
            <div  className=" sm:w-[750px] items-start justify-center sm:h-[700px] p-3">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold title-name justify-center flex text-[#FFFFE6] pb-3">Education</h1>
                <img src={utAustin} alt="" className='rounded-2xl justify-center flex' style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }}/>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold title-name justify-center flex text-[#FFFFE6] pt-3'>University of Texas at Austin</h1>
            </div>
            <div className="sm:items-start sm:w-[730px] sm:h-[auto] justify-center sm:flex-col">
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold justify-center flex text-[#333333] cns-edu-title sm:pt-4 pt-3'> College of Natural Sciences</h3>
                <h3 className='text-2xl sm:text-3xl md:text-3xl font-bold  md:justify-end justify-center flex text-[#FFFFE6] pt-2 pb-2 cns-edu-title md:pr-[160px] '><div className='text-[#a18fd8] text-2xl sm:text-3xl md:text-4xl rounded-xl h-[fit-content] bg-[#333333] pr-1 pl-1'>Sophomore</div>&nbsp;&#8226; BS in Computer Science</h3>
                <div className="rounded-2xl bg-[#333333] ml-4 mr-4 pt-1 h-[fit-content] mb-5">
                    <p className='text-xl font-bold text-[#FFA86E] flex justify-start pl-8 pt-1' style={{textDecoration: 'underline'}}>Relevant Coursework:</p>
                    <p className='text-lg font-bold text-[#a18fd8] flex justify-start pl-8 pt-1'>~Freshman Year~</p>
                    <p className='text-lg font-bold text-[#FFFFE6] flex justify-start pl-8'> &#8226; Data Structures & Algorithms</p>
                    <p className='text-lg font-bold text-[#FFFFE6] flex justify-start pl-8'> &#8226; Discrete Math</p>
                    <p className='text-lg font-bold text-[#FFFFE6] flex justify-start pl-8'> &#8226; Computer Architecture & Organization</p>
                    <p className='text-lg font-bold text-[#a18fd8] flex justify-start pl-8 pt-2'>~Sophomore Year~</p>
                    <p className='text-lg font-bold text-[#FFFFE6] flex justify-start pl-8 pb-2'> &#8226; Operating Systems</p>
                </div>
                <div className="rounded-2xl bg-[#333333] ml-4 mr-4 pt-1 h-[fit-content]">
                    <p className='text-xl font-bold text-[#FFFFE6] text-[#FFA86E] flex justify-start pl-8 pt-1' style={{textDecoration: 'underline'}}>Organizations:</p>
                    <p className='text-lg font-bold text-[#a18fd8] flex justify-start pl-8 pt-1'>~Freshman Year~</p>
                    <div className=" pl-8 flex ">
                        <img src={fHackers} alt="" className='p-2 h-[80px] w-[80px] rounded-2xl'/>
                        <img src={hackTX22} alt="" className=' p-2 h-[80px] w-[80px] rounded-2xl'/>
                        <img src={txACM} alt="" className=' p-2 h-[80px] w-[80px] rounded-2xl'/>
                    </div>
                    <p className='text-lg font-bold text-[#a18fd8] flex justify-start pl-8 pt-1'>~Sophomore Year~</p>
                    <p className='text-lg font-bold text-[#ff4c52] flex justify-start pl-8 pb-1'> TBD</p>

                </div>
            </div>
        </div>
        <div className="w-full h-full bg-[#FFA86E] md:pl-[80px] pb-4">
            <div className="flex items-start justify-between sm:w-full h-[700px] md:grid-cols-2">
                <div className="">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold title-name text-[#FFFFE6] pt-8">Entrepreneurship Minor</h2>
                    <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold justify-center flex text-[#333333] cns-edu-title sm:pt-3 pt-2' style={{textDecoration: 'underline'}}>Harkey Institute for Entrepreneurial Studies</h3>
                </div>
                <div className="flex justify-start items-start w-[fit-content] ">
                    <div className="flex bg-[#333333] mr-5 mb-2 rounded-2xl w-[250px] h-[250px] items-center" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }}>
                        <img src={mccombs} alt="" className=' ml-6 rounded-2xl  w-[200px] h-[200px]' style={{ boxShadow: '0 0 10px rgba(255, 165, 0, 0.5)' }}/>
                    </div>
                    <div className="flex bg-[#333333] mr-[90px] mb-2 rounded-2xl w-[250px] h-[250px] items-center" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }}>
                        <img src={harkey} alt="" className=' ml-6 rounded-2xl  w-[200px] h-[200px]' style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Education;