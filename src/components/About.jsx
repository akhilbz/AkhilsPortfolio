import React, { useState } from "react";
import portPic1 from "../assets/portpics/port-pic1.jpeg";
import portPic2 from "../assets/portpics/port-pic2.jpeg";
import portPic3 from "../assets/portpics/port-pic3.jpg";
import portPic4 from "../assets/portpics/port-pic4.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled, RxDot } from "react-icons/rx";
const About = () => {
    const [currIndex, setCurrIndex] = useState(0);
    const gallery = [
        {
            url: portPic1
        },
        {
            url: portPic2
        },
        {
            url: portPic3
        },
        {
            url: portPic4
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
        <div name="about" className="w-full h-[fit-content] bg-[#F7E3B6]">
            <div className="flex flex-col justify-center items-center w-full h-[fit-content]">
                <div className="w-full h-[fit-content] md:grid md:grid-cols-2  ">
                    <div className="sm:text-left md:pl-[120px] sm:my-[0px] sm:h-[fit-content] items-center flex flex-col">
                        <p className="text-5xl sm:text-8xl font-bold title-name justify-center flex pb-2 text-[#333333]" style={{ textDecoration: 'underline'}}>My Story</p>
                        <div className="py-2 text-[#FFFFE6] bg-[#333333] justify-center items-start w-[fit-content] h-[fit-content] rounded-2xl sm:mt-3 m-2">
                            <p className=" flex justify-center px-5 font-bold pb-[2px]" style={{ textIndent: '50px', fontSize: '1.05rem'}}>Hello! My name is Akhilesh Bitla. Before I delve in, thank you for checking out my portfolio! 
                            I really appreciate you for spending time reading about me and my work! As you probably can see, I still have a long way to go, 
                            but I am a dedicated, passionate, and diligent student, pushing through my limits to establish a successful career.</p>
                            <p className=" flex justify-center px-5 font-bold pb-[2px]" style={{ textIndent: '50px', fontSize: '1.05rem'}}>Embarking on a journey with CS has been a bumpy road with all sorts of twists and turns for me, and I barely started Sophomore year. 
                            Its a pot-load of an adventure! Sometimes it can be pretty scary and stressful. Other times, it can be as exciting as winning the lottery! 
                            Definitely, a huge mood-swinger, and I’m sure all of my CS-major buddies can relate to this.</p>
                            <p className=" flex justify-center px-5 font-bold pb-[2px]" style={{ textIndent: '50px', fontSize: '1.05rem'}}>Most importantly, throughout my entire academic career, I have learned to embrace mistakes and cultivate a growth mindset. 
                            I firmly believe that this mindset is not only essential for education but also crucial for excelling in internships and thriving in my professional journey. 
                            It is this mindset that has fueled my passion for various aspects of Computer Science.</p>
                            <p className=" flex justify-center px-5 font-bold" style={{ textIndent: '50px', fontSize: '1.05rem'}}>From intricate algorithms that power efficient data processing to elegant design principles that form user-friendly interfaces, I am captivated by the endless possibilities within the realm of computer science. 
                            Delving into full stack development presents an exciting opportunity to enhance my expertise by exploring the powerful integration between backend and frontend components 
                            and gaining a comprehensive grasp of the holistic development process.</p>
                        </div>
                    </div>
                    <div className="pt-2">
                    <div className="justify-center items-center flex flex-col sm:mx-[170px] sm:mt-[30px] relative rounded-2xl bg-center bg-cover h-[645px] md:mt-[105px]">
                    <div style={{backgroundImage: `url(${gallery[currIndex].url})`, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }} className=" group w-[390px] h-[590px] items-center flex justify-between rounded-2xl bg-center bg-cover duration-500">
                    <div className="hidden group-hover:block justify-start text-3xl p-2 text-white cursor-pointer">
                        <BsChevronCompactLeft onClick={prevSlide} size={35} />
                    </div>
                    <div className=""></div>
                    <div className="hidden group-hover:block justify-end text-3xl p-2 text-white cursor-pointer">
                        <BsChevronCompactRight onClick={nextSlide} size={35}/>
                    </div>
                    </div> 
                    <div className="flex flex-row justify-center items-center md:pb-8 mt-2 px-[147px] ">
                        {gallery.map((image, imageIndex) => (
                            <div key={imageIndex} onClick={() => goToImage(imageIndex)} className="text-2xl cursor-pointer">
                               {imageIndex == currIndex ? <RxDotFilled style={{color: "#FFFFE6"}}/> : <RxDot style={{color: "#FFFFE6"}}/>}
                            </div>
                        ))}
                    </div>  
                    </div> 
                    </div>  
                </div>
            </div>
            {/* <div className="about-edu-spacer about-edu-layer"></div> */}
        </div>
    )
}

export default About;