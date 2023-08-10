import React, { useState } from "react";
import portPic1 from "../assets/portpics/port-pic1.jpeg";
import portPic2 from "../assets/portpics/port-pic2.jpeg";
import portPic3 from "../assets/portpics/port-pic3.jpg";
import portPic4 from "../assets/portpics/port-pic4.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled, RxDot } from "react-icons/rx";
const About = () => {
    // const [currIndex, setCurrIndex] = useState(0);
    // const gallery = [
    //     {
    //         url: portPic1
    //     },
    //     {
    //         url: portPic2
    //     },
    //     {
    //         url: portPic3
    //     },
    //     {
    //         url: portPic4
    //     },
    // ];
    // const prevSlide = () => {
    //     const isFirstSlide = currIndex === 0;
    //     const newIndex = isFirstSlide ? gallery.length - 1 : currIndex - 1;
    //     setCurrIndex(newIndex);
    // }
    // const nextSlide = () => {
    //     const isLastSlide = currIndex === gallery.length - 1;
    //     const newIndex = isLastSlide ? 0 : currIndex + 1;
    //     setCurrIndex(newIndex);
    // }
    // const goToImage = (imageIndex) => {
    //     setCurrIndex(imageIndex);
    // }
    return (
        <div name="about" className="w-full h-[fit-content] bg-[#333333]">
            <div className="flex flex-col justify-center items-center w-full h-[fit-content]">
                <div className="w-full h-[fit-content] xl:grid xl:grid-cols-2  ">
                    <div className="lg:pl-[90px] sm:h-[fit-content] items-center flex flex-col">
                        <p className="text-5xl sm:text-8xl font-bold title-name justify-center flex pb-2 text-white" style={{ textDecoration: 'underline'}}>My Story</p>
                        <div className="flex flex-col items-center w-full justify-center">
                        <div className=" py-2 text-[#CCCCCC] sm:text-xl text-lg font-light w-[fit-content] h-[fit-content] xl:text-start text-center sm:mt-[20px] xl:ml-9 xl:mx-[0px] md:mx-[80px] sm:mx-[40px] mx-[35px]" style={{overflowY: 'hidden'}}>
                            <p className=" mb-[10px]" >Hi there! My name is <span className="font-semibold text-white text-xl sm:text-2xl">Akhilesh Bitla</span>, and I want to thank you for checking out my website and showing interest in my work.
                            I am passionate about <span className="font-semibold text-white">Computer Science</span> and love to develop software applications that can have a tangible impact on people’s lives.
                            My journey with CS has been both thrilling and challenging, yet I embrace mistakes and firmly uphold the value of a <span className="font-semibold text-[#FFD700] text-xl sm:text-2xl">growth mindset</span>. 
                            Along with my Computer Science education at UT Austin, I am improving my skills in <span className="font-semibold text-white">full-stack development</span> by exploring the integration of backend and frontend components to create holistic solutions.</p>
                            <p className="mb-[10px]">After developing a strong experience as a <span className="font-semibold text-white">Full Stack developer</span>, my goal is to enter the realm of <span className="font-semibold text-[#a1fecf]">AI</span> and <span className="font-semibold text-[#87CEFA]">Machine Learning</span> and
                            develop scalable and efficient software tools that can be used to optimize people's daily life.</p>
                            <p>I am looking for <span className="font-semibold text-white">SWE Internships</span> to enhance my skills as a <span className="font-semibold text-white">Full Stack developer</span>.</p>
                        </div>
                        </div>
                    </div>
    
                    <div className="justify-center items-center flex flex-col sm:mx-[170px] relative rounded-2xl bg-center bg-cover h-[645px] ">
                    <div style={{backgroundImage: `url(${portPic1})`, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }} className=" group w-[390px] h-[590px] items-center flex justify-between rounded-2xl bg-center bg-cover duration-500">
                    {/* <div className="hidden group-hover:block justify-start text-3xl p-2 text-white cursor-pointer">
                        <BsChevronCompactLeft onClick={prevSlide} size={35} />
                    </div>
                    <div className=""></div>
                    <div className="hidden group-hover:block justify-end text-3xl p-2 text-white cursor-pointer">
                        <BsChevronCompactRight onClick={nextSlide} size={35}/>
                    </div> */}
                    </div> 
                    {/* <div className="flex flex-row justify-center items-center md:pb-8 mt-2 px-[147px] ">
                        {gallery.map((image, imageIndex) => (
                            <div key={imageIndex} onClick={() => goToImage(imageIndex)} className="text-2xl cursor-pointer">
                               {imageIndex == currIndex ? <RxDotFilled style={{color: "white"}}/> : <RxDot style={{color: "white"}}/>}
                            </div>
                        ))}
                    </div>   */}
                    </div> 
                    {/* </div>   */}
                </div>
            </div>
        </div>
    )
}

export default About;