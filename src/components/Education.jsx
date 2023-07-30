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
        <div name="education"  className="w-full h-full sm:flex bg-[#333333] flex pt-[100px] xl:flex-row flex-col ">
            <div  className=" flex-col flex items-center justify-center h-[fit-content] xl:pl-[80px] w-full px-2 pb-2">
            <h1 className="text-6xl sm:text-6xl md:text-8xl font-bold title-name justify-center flex text-white pb-4" style={{ textDecoration: 'underline'}}>Education</h1>
                <img src={utAustin} alt="" className='rounded-2xl justify-center mb-4 w-[700px] flex' style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }}/>
                {/* <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold title-name justify-center ut-font ut-animate rounded-xl pb-2 flex pt-3'>University of Texas at Austin</h1> 
                <h3 className='text-2xl sm:text-3xl md:text-3xl font-bold  md:justify-end justify-center flex text-[#FFFFE6] pt-2 cns-edu-title '><div className='text-[#a18fd8] text-2xl sm:text-3xl bg-[#333333] md:text-4xl rounded-xl h-[fit-content] year pr-1 pl-1 mb-1' >Sophomore</div>&nbsp;&#8226; BS in Computer Science</h3>
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold md:justify-end justify-center flex text-[#333333] cns-edu-title '> College of Natural Sciences</h3> */}
                <h1 className='text-3xl font-bold title-name justify-center ut-font ut-animate rounded-xl sm:pb-2 flex py-2 px-2'>University of Texas at Austin</h1> 
            </div>

            <div className="w-[fit-content] h-[fit-content] flex justify-start items-center flex-col sm:pt-3 pt-1">
                <div className="flex-col flex xl:items-end ">
                    <h3 className='text-2xl sm:text-3xl md:text-3xl font-bold  md:justify-end justify-center flex text-white cns-edu-title '><div className='text-[#a18fd8] text-2xl sm:text-3xl bg-[#1C1C1C] md:text-4xl rounded-xl h-[fit-content] year pr-1 pl-1 mb-1' >Sophomore</div>&nbsp;&#8226; BS in Computer Science</h3>
                    <h3 className='text-2xl sm:text-3xl font-bold xl:justify-end justify-center flex text-[#FFA86E] cns-edu-title '> College of Natural Sciences</h3>
                    </div>
                    <div className="flex-col lg:my-[40px] my-5 rounded-2xl w-[fit-content] mx-[30px] md:mx-[150px] lg:mx-[75px] py-2 text-[#CCCCCC]">
                    <p className='flex justify-center px-3 font-normal mb-4'>I’m a rising Sophomore pursuing a CS degree with an Entrepreneurship Minor at the University of Texas at Austin. 
                        I have completed Data Structures, Discrete Math and Computer Architecture and Organization in my coursework. In Fall 2023, 
                        I will be learning Operating Systems. Then Algorithms in the Spring. This will conclude my core requirements for my degree.</p>
                    <p className='flex justify-center px-3 font-normal mb-4'>Some of the organizations I’ve been part of are Texas ACM and Freetail Hackers. With a team of three friends, 
                        I have participated in Freetail Hacker’s HackTX 2022 competition and received a “Best Overall on a Beginners’ Track Award.”
                         More info in Projects section.</p>
                    <p className='flex justify-center px-3 font-normal mb-4'>During my Sophomore year, I'm planning on participating in either Texas Momentum or Texas Convergent, Texas Luminescence, and FreeTail Hackers' Hackathons. 
                        Moreover, I am excited to work on my personal projects to expand my full-stack development knowledge.</p>
                    </div>
            </div>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center bg-[#333333] md:pt-[140px] pt-[20px]">
            <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold justify-end flex title-name text-[#87CEFA]">Entrepreneurship Minor</h2>
            <h3 className='text-xl sm:text-2xl md:text-3xl font-bold justify-end flex text-[#CCCCCC] cns-edu-title sm:pt-3 pt-2'>Harkey Institute for Entrepreneurial Studies</h3>
            {/* <div className="sm:w-full w-[fit-content] flex-col"> */}
            <div className="mt-2 w-[fit-content] md:w-full flex-col lg:flex-row flex lg:items-start items-center ">
                <div className="flex lg:ml-[70px] lg:flex-col flex-row justify-center items-start w-[fit-content]">
                    <div className="hover:scale-95 duration-500 flex bg-[#1C1C1C] mb-3 rounded-2xl md:w-[250px] md:h-[250px] w-[200px] h-[200px] items-center ml-2 lg:ml-[0px]" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }}>
                        <img src={mccombs} alt="" className='ml-6 rounded-2xl  md:w-[200px] md:h-[200px] w-[150px] h-[150px]' style={{ boxShadow: '0 0 10px rgba(255, 165, 0, 0.5)' }}/>
                    </div>
                    <div className="hover:scale-95 duration-500 flex bg-[#1C1C1C] rounded-2xl md:w-[250px] md:h-[250px] w-[200px] h-[200px] items-center ml-2 lg:ml-[0px]" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }}>
                        <img src={harkey} alt="" className='ml-6 rounded-2xl  md:w-[200px] md:h-[200px] w-[150px] h-[150px]' style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}/>
                    </div>
                </div> 
                <div className="flex-col xl:flex-row xl:flex sm:justify-start justify-center sm:items-start items-center sm:ml-3 ">
                    <div className="rounded-2xl bg-center bg-cover ">
                        <div style={{backgroundImage: `url(${gallery[currIndex].url})`, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }} className=" group md:w-[700px] md:h-[512px] w-[480px] h-[312px] items-center flex justify-between rounded-2xl bg-center bg-cover duration-500">
                        <div className="hidden group-hover:block justify-start text-3xl p-2 text-[#FFFFFF] cursor-pointer">
                            <BsChevronCompactLeft onClick={prevSlide} size={35} />
                        </div>
                        <div className=""></div>
                        <div className="hidden group-hover:block justify-end text-3xl p-2 text-[#FFFFFF] cursor-pointer">
                            <BsChevronCompactRight onClick={nextSlide} size={35}/>
                        </div>
                        </div> 
                        <div className="flex flex-row justify-center items-center md:pb-8 mt-2 px-[147px]">
                            {gallery.map((image, imageIndex) => (
                                <div key={imageIndex} onClick={() => goToImage(imageIndex)} className="text-2xl cursor-pointer">
                                {imageIndex == currIndex ? <RxDotFilled style={{color: "#FFFFFF"}}/> : <RxDot style={{color: "#FFFFFF"}}/>}
                                </div>
                            ))}
                        </div>  
                        </div>
                    </div> 
                    <div className='hidden lg:block text-[#CCCCCC] xl:w-[fit-content] w-0 xl:h-[512px] h-0  mx-3 p-3 rounded-2xl font-normal' style={{overflow: 'hidden'}}>
                    <p>Ranked 2nd in the nation, the Entrepreneurship Minor at McCombs School of Business stands as a highly prestigious program.
                        In Summer 2023, I successfully completed this rigorous minor by participating in the enriching Summer Entrepreneurship Academy (SEA). 
                        Throughout the program's eight weeks, I had the opportunity to engage in four out of five essential classes, each contributing to my entrepreneurial education.</p>
                        <p>At SEA, I honed essential skills, including confident and effective pitching, brainstorming innovative solutions, validating market potential for ideas, and transforming concepts into viable business models. 
                            This transformative experience exposed me to the vital traits shared by successful entrepreneurs.</p>
                        <p>The academy proved to be much more than a learning opportunity; it became a truly valuable experience. 
                            I formed meaningful connections with extraordinary students from diverse backgrounds. Together, we navigated the fundamentals of entrepreneurship, fostering collaborative growth and friendship.</p>  
                        <p>SEA has been a pivotal chapter in my academic journey, equipping me with valuable skills and empowering me to approach challenges with creativity and perseverance.</p>
                    </div>
                </div>
                <div className="flex-col justify-start">
                    <div className='xl:hidden lg:ml-[70px] lg:w-[968px] md:w-[700px] w-[480px] xl:w-[fit-content] h-[fit-content] justify-center mx-3 p-3 rounded-2xl font-normal' style={{overflow: 'hidden'}}>
                        <p className='xl:hidden block text-[#CCCCCC]'>Hey! This is Akhilesh Bitla. Welcome to my life! Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset xxx`sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            {/* </div> */}
        </div>
       
        <div name="experience" className="edu-exper-spacer edu-exper-layer"></div>
        </>
    )
}

export default Education;