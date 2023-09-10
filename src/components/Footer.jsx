import React from 'react'
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';
import { BiFile } from 'react-icons/bi';
import HTML from '../assets/stack-icons/html.png';
import Tailwind from '../assets/stack-icons/tailwind.png';
import CSS from '../assets/stack-icons/css.png';
import React_logo from '../assets/stack-icons/react.png';
import JS from '../assets/stack-icons/javascript.png';

const Footer = () => {
  return (
    <div className='w-auto xl:h-[500px] md:h-[650px] h-[1000px] bg-[#121212] flex xl:justify-between justify-center items-center'>
         <div className="lg:ml-[80px] rounded-2xl xl:flex-row flex-col justify-between flex">
            <div className="h-full">
                <h1 className='text-3xl sm:text-5xl text-white font-normal flex sm:justify-start justify-center pl-4 py-2 mt-5'>Interested in my work?</h1>
                <div className='flex p-1 justify-between md:flex-row flex-col'>
                    <div className="flex-col ">
                        <div className="flex-col flex items-center justify-center w-full ml-2">
                            <iframe className='hidden lg:flex rounded-2xl justify-center' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.2742994472255!2d-97.73919222421218!3d30.286251874802797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b59c9f7a3771%3A0xa54e5a846367f0c1!2sGates-Dell%20Complex!5e0!3m2!1sen!2sus!4v1690046160116!5m2!1sen!2sus" 
                            width="500" height="260" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <iframe className='flex lg:hidden rounded-2xl justify-end' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.2742994472255!2d-97.73919222421218!3d30.286251874802797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b59c9f7a3771%3A0xa54e5a846367f0c1!2sGates-Dell%20Complex!5e0!3m2!1sen!2sus!4v1690046160116!5m2!1sen!2sus" 
                            width="400" height="260" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="xl:hidden flex justify-center items-end w-full h-fit md:justify-start xl:pr-4 ml-2">
                            <div className="xl:w-full w-[400px] flex flex-col xl:justify-between sm:justify-evenly justify-center items-center xl:ml-[50px] xl:mt-[145px] h-[200px] text-white">
                                <div>
                                    <h1 className='xl:text-lg text-xl font-normal '>Need to write a longer message?</h1>
                                    <h1 className='xl:text-lg text-xl font-normal '>Feel free to reach out to me via my socials!</h1>
                                </div>
                                <div className="pb-2 w-full ml-2">
                                    <a href="mailto:akhilesh.bitla@utexas.edu" >
                                    <div className="flex justify-between flex-row email-highlight mb-2">
                                    <HiOutlineMail id='mail' size={30} className=' duration-500'/>
                                    <h1 className='flex justify-end font-normal duration-500'>akhilesh.bitla@utexas.edu</h1>
                                    </div>
                                    </a>
                                    <a href="https://www.linkedin.com/in/akhileshbitla/" target="_blank">
                                    <div className="flex justify-between flex-row linkedin-highlight ">
                                    <FaLinkedin id='linkedIn' className='duration-500' size={30} />
                                    <h1 className='flex justify-end font-normal duration-500'>Akhilesh Bitla</h1>
                                    </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-full flex-col">
                    <div className="flex flex-col justify-end w-full py-4 md:pl-2 lg:pl-4 h-[fit-content] items-center  ">
                        <form method='POST' action='https://getform.io/f/c3ee09be-c274-41e2-b2be-4455ff899d6b' className='flex flex-col max-w-[400px] items-center'>
                            <h1 className='text-xl text-white font-semibold border-b-4 border-[#CCCCCC] rounded'>Let's Collaborate</h1>
                            <input className=' mt-3 p-2 m-2 xl:w-[300px] lg:w-[380px] w-[330px] rounded bg-[#333333] text-white' type='text' placeholder='Name' name='name' required/>
                            <input className=' mt-1 p-2 m-2 xl:w-[300px] lg:w-[380px] w-[330px] rounded bg-[#333333] text-white' type='text' placeholder='Email' name='email' required/>
                            <textarea style={{resize: 'none'}} name='message' className=' mt-1 p-2 m-2 xl:w-[300px] lg:w-[380px] w-[330px] rounded bg-[#333333] text-white' placeholder='Quick Message' required/>
                            <button className='flex xl:ml-[210px] lg:ml-[260px] ml-[210px] text-2xl pt-1 '>
                            <span className='border-2 border-white font-semibold rounded hover:bg-white duration-500 text-white xl:px-2 px-6 hover:text-[#121212]'>&nbsp;Send&nbsp;</span>
                            </button>
                        </form>
                        
                        <div className="xl:hidden flex flex-col w-fit h-full pl-1 pt-[35px]">
                            <div className="flex-col w-full text-white">
                                <h1 className='font-normal xl:text-lg text-xl '>Grab a copy of my resume!</h1>
                                <a href="https://drive.google.com/file/d/19VygPMZQTgWMix3Dli4C5U0n1jIF-isH/view?usp=sharing" target="_blank">
                                <div className="flex justify-between flex-row file-highlight pt-[2px]">
                                <BiFile id='file' className='duration-500' size={30} />
                                <h1 className='flex justify-end font-normal duration-500'>Resume</h1>
                                </div>
                                </a>
                            </div>
                            <div className="xl:hidden flex-row flex justify-end items-end w-full h-full mt-[26px]">
                                <p className='text-[#989898] sm:font-bold font-normal text-lg'>Portfolio Stack:</p>
                                <img src={React_logo} alt="" className=' w-7 mx-2 hover:scale-95 duration-500' />
                                <img src={JS} alt="" className=' w-7 mx-2 hover:scale-95 duration-500' />
                                <img src={HTML} alt="" className=' w-7 mx-2 hover:scale-95 duration-500' />
                                <img src={Tailwind} alt="" className=' w-7 mx-2 hover:scale-95 duration-500' />
                                <img src={CSS} alt="" className=' w-7 mx-2 hover:scale-95 duration-500' />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xl:flex hidden justify-start w-fit h-fit md:justify-start  pl-1">
                <div className="xl:w-full w-[400px] flex flex-col xl:justify-between justify-evenly xl:ml-[20px] xl:mt-[145px] h-[200px] text-white">
                    <div className="">
                        <h1 className='xl:text-lg text-xl font-normal '>Need to write a longer message?</h1>
                        <h1 className='xl:text-lg text-xl font-normal '>Feel free to reach out to me via my socials!</h1>
                    </div>
                    <div className="pb-2 w-full">
                        <a href="mailto:akhilesh.bitla@utexas.edu" >
                        <div className="flex justify-between items-center flex-row email-highlight mb-2">
                        <HiOutlineMail id='mail' size={30} className=' duration-500'/>
                        <h1 className='flex justify-end font-normal duration-500'>akhilesh.bitla@utexas.edu</h1>
                        </div>
                        </a>
                        <a href="https://www.linkedin.com/in/akhileshbitla/" target="_blank">
                        <div className="flex justify-between items-center flex-row linkedin-highlight ">
                        <FaLinkedin id='linkedIn' className='duration-500' size={30} />
                        <h1 className='flex justify-end font-normal duration-500'>Akhilesh Bitla</h1>
                        </div>
                        </a>
                    </div>
                    <div className="xl:flex hidden flex-col w-full h-fit">
                        <div className="flex-col w-full ">
                            <h1 className='font-normal xl:text-lg text-xl '>Grab a copy of my resume!</h1>
                            <a href="https://drive.google.com/file/d/1nYGuuTKrVxVjpyWlviu-I4h2G9UH7dwJ/view?usp=sharing" target="_blank">
                            <div className="flex justify-between w-full items-center flex-row file-highlight">
                            <BiFile id='file' className='duration-500' size={30} />
                            <h1 className='flex justify-end font-normal duration-500'>Resume</h1>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xl:flex hidden flex-col justify-end items-end w-fit h-full overflow-hidden px-3  xl:mt-[145px]">
                <p className='text-[#989898] sm:font-bold font-normal text-md overflow-hidden flex text-right'>Portfolio Stack:</p>
                <img src={React_logo} alt="" className=' w-7 my-2 hover:scale-110 duration-500' />
                <img src={JS} alt="" className=' w-7 my-2 hover:scale-110 duration-500' />
                <img src={HTML} alt="" className=' w-7 my-2 hover:scale-110 duration-500' />
                <img src={Tailwind} alt="" className=' w-7 my-2 hover:scale-110 duration-500' />
                <img src={CSS} alt="" className=' w-7 my-2 hover:scale-110 duration-500' />
            </div>
        </div>
    </div>
  )
}

export default Footer;