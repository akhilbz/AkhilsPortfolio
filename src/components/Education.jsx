import React, { useState } from 'react';
import utAustin from '../assets/UT_austin.jpeg';
import txACM from '../assets/tx-acm.png';
import fHackers from '../assets/freetail-hackers.jpeg';
import hackTX22 from '../assets/hacktx2022.jpeg';
import harkey from '../assets/hifes.jpeg';
import mccombs from '../assets/mccombs.jpeg';
import harkey_1 from '../assets/harkey-pics/harkey_img1.jpeg';
import harkey_2 from '../assets/harkey-pics/harkey_img2.jpeg';
import harkey_3 from '../assets/harkey-pics/harkey_img3.jpeg';
import harkey_4 from '../assets/harkey-pics/harkey_img4.jpg';
import harkey_5 from '../assets/harkey-pics/harkey_img5.jpeg';
import harkey_6 from '../assets/harkey-pics/harkey_img6.jpeg';
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled, RxDot } from "react-icons/rx";

const Education = () => {
    const [currIndex, setCurrIndex] = useState(0);
    const gallery = [
        {
            url: harkey_1
        },
        {
            url: harkey_2
        },
        {
            url: harkey_3
        },
        {
            url: harkey_4
        },
        {
            url: harkey_5
        },
        {
            url: harkey_6
        },
    ];
    const prevSlide = () => {
        const isFirstSlide = currIndex === 0;
        const newIndex = isFirstSlide ? gallery.length - 1 : currIndex - 1;
        setCurrIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = currIndex === gallery.length - 1;
        const newIndex = isLastSlide ? 0 : currIndex + 1;
        setCurrIndex(newIndex);
    }
    const goToImage = (imageIndex) => {
        setCurrIndex(imageIndex);
    }
    return (
        <>
        <div name="education"  className="w-full h-full sm:flex bg-[#333333] flex pt-[50px] xl:flex-row flex-col ">
            <div  className=" flex-col flex items-center justify-center h-[fit-content] xl:pl-[80px] w-full px-2 pb-2">
            <h1 className="text-6xl sm:text-6xl md:text-8xl sm:font-bold title-name justify-center flex text-white pb-4" style={{ textDecoration: 'underline'}}>Education</h1>
                <img src={utAustin} alt="" className='rounded-2xl justify-center mb-4 w-[700px] flex' style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }}/>
                <h1 className='sm:text-3xl text-2xl font-bold justify-center ut-font ut-animate rounded-xl sm:pb-2 flex py-2 px-2'>University of Texas at Austin</h1> 
            </div>

            <div className="w-[fit-content] h-[fit-content] flex justify-start items-center flex-col sm:pt-3 pt-1">
                <div className="flex-col flex xl:items-end ">
                    <h3 className='text-2xl sm:text-3xl md:text-3xl font-bold  md:justify-end justify-center flex text-white cns-edu-title '><div className='text-2xl sm:text-3xl bg-[#1C1C1C] md:text-4xl rounded-xl h-[fit-content] year pr-1 pl-1 mb-1' >Sophomore</div>&nbsp;&#8226; BS in Computer Science</h3>
                    <h3 className='text-2xl sm:text-3xl font-bold xl:justify-end justify-center flex text-[#FFA86E] cns-edu-title '> College of Natural Sciences</h3>
                    </div>
                    <div className=" flex-col flex xl:text-start text-center lg:my-[20px] my-5 md:text-xl text-lg w-[fit-content] sm:mx-[40px] mx-[35px]  lg:mx-[200px] xl:mx-[75px] py-2 text-[#CCCCCC]">
                        <p className='font-light mb-2'>I'm a <span className='text-white md:text-2xl text-xl font-semibold'>rising Sophomore</span> pursuing <span className='text-white font-semibold'>Computer Science</span> with an <span className='text-[#87CEFA] font-semibold'>Entrepreneurship Minor</span> at the <span className='text-[#FFA86E] font-semibold'>University of Texas at Austin</span>.</p>
                        <p className='text-center'>Freshman Year Relevant Coursework:</p> 
                        <p className='mb-2 text-center'><span className='text-white md:text-2xl text-xl font-semibold'>Data Structures</span>, <span className='text-white md:text-2xl text-xl font-semibold'>Discrete Math</span>, and <span className='text-white md:text-2xl text-xl font-semibold'>Computer Architecture and Organization.</span></p>
                        <p className='mb-2 text-center'>Current Class: <span className='text-[#FFA86E] md:text-2xl text-xl font-semibold'>Operating Systems</span></p>
                        <p className='font-light text-center'>Organizations I'm involved in:</p> 
                        <p className='text-center'><span className='text-white md:text-2xl text-xl font-semibold mb-4'>Texas ACM</span>, <span className='text-[#FF3636] md:text-2xl text-xl font-semibold'>Texas Momentum</span>.</p> 
                    </div>
            </div>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center bg-[#333333] md:pt-[40px] pt-[20px]">
            <h2 className="text-4xl sm:text-5xl md:text-5xl sm:font-bold justify-end flex title-name text-[#87CEFA]">Entrepreneurship Minor</h2>
            <h3 className='text-xl sm:text-2xl md:text-3xl font-bold  flex text-[#CCCCCC] cns-edu-title sm:pt-3 pt-2'>Harkey Institute for Entrepreneurial Studies</h3>
            <div className="mt-2 w-full flex-col lg:flex-row flex lg:items-start items-center justify-center ">
                <div className="flex lg:ml-[70px] lg:flex-col flex-row md:mb-2 justify-end items-start w-[fit-content]">
                    <div className="hover:scale-95 duration-500 flex bg-[#1C1C1C] mb-3 rounded-2xl md:w-[250px] md:h-[250px] w-[200px] h-[200px] items-center  lg:ml-[0px]" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }}>
                        <img src={mccombs} alt="" className='ml-6 rounded-2xl  md:w-[200px] md:h-[200px] w-[150px] h-[150px]' style={{ boxShadow: '0 0 10px rgba(255, 165, 0, 0.5)' }}/>
                    </div>
                    <div className="hover:scale-95 duration-500 flex bg-[#1C1C1C] rounded-2xl md:w-[250px] md:h-[250px] w-[200px] h-[200px] items-center ml-2 lg:ml-[0px]" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }}>
                        <img src={harkey} alt="" className='ml-6 rounded-2xl  md:w-[200px] md:h-[200px] w-[150px] h-[150px]' style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}/>
                    </div>
                </div> 
                <div className="flex-col xl:flex-row flex sm:ml-3 sm:w-fit sm:items-center items-start">
                    <div className="rounded-2xl bg-center bg-cover w-fit flex-col  ">
                        <div className="w-full flex-col flex lg:items-start items-center group">
                            <div style={{backgroundImage: `url(${gallery[currIndex].url})`, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }} className=" xl:w-[700px] lg:w-[660px] md:w-[680px] md:h-[512px] w-[400px] h-[300px] items-center flex justify-between rounded-2xl bg-center bg-cover duration-500">
                            <div className="sm:hidden block group-hover:block justify-start text-3xl p-2 text-[#FFFFFF] cursor-pointer">
                                <BsChevronCompactLeft onClick={prevSlide} size={35} />
                            </div>
                            <div className=""></div>
                            <div className="sm:hidden block group-hover:block justify-end text-3xl p-2 text-[#FFFFFF] cursor-pointer">
                                <BsChevronCompactRight onClick={nextSlide} size={35}/>
                            </div>
                            </div> 
                        </div>
                        <div className="flex flex-row justify-center md:pb-8 mt-2 ">
                            {gallery.map((image, imageIndex) => (
                                <div key={imageIndex} onClick={() => goToImage(imageIndex)} className="text-2xl cursor-pointer">
                                {imageIndex == currIndex ? <RxDotFilled style={{color: "#FFFFFF"}}/> : <RxDot style={{color: "#FFFFFF"}}/>}
                                </div>
                            ))}
                        </div>  
                    </div>
                    </div> 
                    <div className='hidden xl:block text-[#a9a9a9] xl:w-[fit-content] w-full xl:h-[512px] h-0 p-5 font-light md:text-xl text-lg border-t-2 border-b-2 border-[#CCCCCC] rounded-t-md rounded-b-md mx-2' style={{overflowX: 'hidden'}}>
                    <p>In summer 2023, I completed the rigorous <span className='text-[#FFA86E] font-semibold'>Entrepreneurship Minor</span> at <span className='text-[#FFA86E] font-semibold'>McCombs School of Business</span> by pursuing the enriching  <span className='text-white font-semibold'>Summer Entrepreneurship Academy (SEA)</span>.</p>
                    <p>Ranked no. <span className='highlight-impact font-[Anton] md:text-3xl text-2xl text-white' style={{ position: 'relative', top: '3px' }}>2</span> in the nation, the <span className='text-[#FFA86E] font-semibold'>Entrepreneurship Minor</span> presented a challenging yet rewarding journey, 
                    consisting of a demanding workload that I aimed to complete over the summer to make time to improve upon my entrepreneurship skills.
                    Over eight weeks, I engaged in four of five essential classes, honing skills such as <span className='text-white font-semibold'>effective pitching</span>, <span className='text-white font-semibold'>ideation</span>, <span className='text-white font-semibold'>market validation</span>, and <span className='text-white font-semibold'>business model creation</span>.</p> 
                        
                    <p className='pt-3'>This transformative experience allowed me to expand upon the key traits needed to become a <span className='text-white font-semibold'>successful entrepreneur</span> and form meaningful connections with extraordinary students from diverse backgrounds.
                        SEA has been a <span className='text-white font-[Anton] text-2xl' style={{ position: 'relative', top: '2px' }}>pivotal chapter</span> in my academic journey, and I aim to use the skills I learned in every aspect of my career.</p>
                    </div>
                </div>
                <div className="flex-col justify-start">
                    <div className='xl:hidden text-[#CCCCCC] xl:text-start text-center lg:w-[768px] md:w-[650px] sm:px-[10px] sm:w-[580px] w-fit px-[38px] xl:w-[fit-content] h-[fit-content] justify-center py-4 font-light md:text-xl text-lg overflow-hidden' style={{overflow: 'hidden'}}>
                    <p>In Summer 2023, I completed the rigorous <span className='text-[#FFA86E] font-semibold'>Entrepreneurship Minor</span> at <span className='text-[#FFA86E] font-semibold'>McCombs School of Business</span> by pursuing the enriching  <span className='text-white font-semibold'>Summer Entrepreneurship Academy (SEA)</span>.</p>
                    <p>Ranked no. <span className='highlight-impact font-[Anton] md:text-3xl text-2xl text-white' style={{ position: 'relative', top: '3px' }}>2</span> in the nation, the <span className='text-[#FFA86E] font-semibold'>Entrepreneurship Minor</span> presented a challenging yet rewarding journey, 
                    consisting of a demanding workload that I aimed to complete over the summer to make time to improve upon my entrepreneurship skills.
                    Over eight weeks, I engaged in four of five essential classes, honing skills such as <span className='text-white font-semibold'>effective pitching</span>, <span className='text-white font-semibold'>ideation</span>, <span className='text-white font-semibold'>market validation</span>, and <span className='text-white font-semibold'>business model creation</span>.</p> 
                        
                    <p className='pt-3'>This transformative experience allowed me to expand upon the key traits needed to become a <span className='text-white font-semibold'>successful entrepreneur</span> and form meaningful connections with extraordinary students from diverse backgrounds.
                        SEA has been a <span className='text-white font-[Anton] text-2xl' style={{ position: 'relative', top: '2px' }}>pivotal chapter</span> in my academic journey, and I aim to use the skills I learned in every aspect of my career.</p>
                    </div>
                </div>
            {/* </div> */}
        </div>
       
        <div name="experience" className="edu-exper-spacer edu-exper-layer"></div>
        </>
    )
}

export default Education;