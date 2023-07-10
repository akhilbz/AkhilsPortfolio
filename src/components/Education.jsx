import React from 'react';
import utAustin from '../assets/UT_austin.jpeg';
const Education = () => {
    return (
        <div className="w-full h-full flex bg-[#FFA86E] justify-start md:pl-[80px] md:pt-6 pt-2 md:grid-cols-2 ">
            <div style={{}} className=" w-[750px] items-start justify-center h-[700px] p-3">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold title-name justify-center flex text-[#FFFFE6] pb-3">Education</h1>
                <img src={utAustin} alt="" className='rounded-2xl justify-center flex' style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }}/>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold title-name justify-center flex text-[#FFFFE6] pt-2'>University of Texas at Austin</h1>
            </div>
            <div className="items-start sm:w-[730px] h-[auto] justify-center flex-col">
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold justify-center flex text-[#333333] pt-9'> College of Natural Sciences</h3>
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold justify-end flex text-[#333333] pt-2 md:pr-[120px] '> Sophomore</h3>
            </div>
        </div>
    )
}

export default Education;