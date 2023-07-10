import React, { useState } from "react";
import portPic1 from "../assets/port-pic1.jpeg";
import portPic2 from "../assets/port-pic2.jpeg";
import portPic3 from "../assets/port-pic3.jpg";
import portPic4 from "../assets/port-pic4.jpg";
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
        <div name="about" className="w-full h-[fit-content] bg-[#ff4c52]">
            <div className="flex flex-col justify-center items-center w-full h-[fit-content]">
                <div className="w-full h-[fit-content] md:grid md:grid-cols-2 gap-8">
                    <div className="sm:text-left sm:my-[0px] sm:h-[fit-content] justify-center flex flex-col">
                        <p className="text-5xl sm:text-7xl font-bold title-name justify-center flex text-[#FAF0E6]">My Story</p>
                        <div className="py-5 md:pl-[80px] justify-center items-start w-full h-[fit-content]">
                            <p className="text-[#FAF0E6] flex justify-center pl-5 font-medium text-xl">Hey! This is Akhilesh Bitla. Welcome to my life! Lorem Ipsum is simply dummy text of 
                            the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                            xxx`sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                    <div className="justify-center items-center flex flex-col sm:mx-[170px] sm:mt-[-30px] sm:pb-[-5px] sm:pl-3 relative rounded-2xl bg-center bg-cover h-[645px]  ">
                    <div style={{backgroundImage: `url(${gallery[currIndex].url})`, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)    ' }} className=" group w-[390px] h-[590px] items-center flex justify-between rounded-2xl bg-center bg-cover duration-500">
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
                               {imageIndex == currIndex ? <RxDotFilled style={{color: "white"}}/> : <RxDot style={{color: "white"}}/>}
                            </div>
                        ))}
                    </div>  
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default About;