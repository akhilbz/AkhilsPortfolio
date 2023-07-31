import React from 'react'
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';
import { BiFile } from 'react-icons/bi';


const Footer = () => {
  return (
    <div className='w-full xl:h-[500px] md:h-[630px]  h-[900px] bg-[#121212] flex xl:justify-between justify-center items-center'>
         <div className="lg:ml-[80px] rounded-2xl xl:flex-row flex-col justify-between flex">
            <div className="h-full">
                <h1 className='text-3xl sm:text-5xl text-white font-normal flex sm:justify-start justify-center p-1 mt-8'>Interested in my work?</h1>
                <div className='flex p-1 justify-between md:flex-row flex-col'>
                    <div className="flex-col flex items-center justify-center w-full">
                        <iframe className='hidden lg:flex rounded-2xl justify-center' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.2742994472255!2d-97.73919222421218!3d30.286251874802797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b59c9f7a3771%3A0xa54e5a846367f0c1!2sGates-Dell%20Complex!5e0!3m2!1sen!2sus!4v1690046160116!5m2!1sen!2sus" 
                        width="500" height="260" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                         <iframe className='flex lg:hidden rounded-2xl justify-end' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.2742994472255!2d-97.73919222421218!3d30.286251874802797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b59c9f7a3771%3A0xa54e5a846367f0c1!2sGates-Dell%20Complex!5e0!3m2!1sen!2sus!4v1690046160116!5m2!1sen!2sus" 
                        width="400" height="260" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="flex flex-col justify-center w-full p-4 h-[fit-content] items-center ">
                        <form method='POST' action='https://getform.io/f/c3ee09be-c274-41e2-b2be-4455ff899d6b' className='flex flex-col max-w-[400px] items-center'>
                            <h1 className='text-xl text-white font-semibold border-b-4 border-[#CCCCCC] rounded'>Let's Collaborate</h1>
                            <input className=' mt-3 p-2 m-2 xl:w-[300px] lg:w-[380px] w-[330px] rounded bg-[#333333] text-white' type='text' placeholder='Name' name='name' required/>
                            <input className=' mt-1 p-2 m-2 xl:w-[300px] lg:w-[380px] w-[330px] rounded bg-[#333333] text-white' type='text' placeholder='Email' name='email' required/>
                            <textarea style={{resize: 'none'}} name='message' className=' mt-1 p-2 m-2 xl:w-[300px] lg:w-[380px] w-[330px] rounded bg-[#333333] text-white' placeholder='Quick Message' required/>
                            <button className='flex xl:ml-[210px] lg:ml-[260px] ml-[210px] text-2xl pt-1 '>
                            <span className='border-2 border-white font-semibold rounded hover:bg-white duration-500 text-white xl:px-2 px-6 hover:text-[#121212]'>&nbsp;Send&nbsp;</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex justify-center h-[fit-content] md:justify-start xl:pr-4 pl-1">
                <div className="xl:w-full w-[400px] flex flex-col xl:justify-between justify-evenly xl:ml-[50px] xl:mt-[145px] h-[200px] text-white">
                    <div className="">
                        <h1 className='xl:text-lg text-xl font-normal '>Need to write a longer message?</h1>
                        <h1 className='xl:text-lg text-xl font-normal '>Feel free to reach out to me via my socials!</h1>
                    </div>
                    <div className=" w-full">
                        <a href="mailto:akhilesh.bitla@utexas.edu" >
                        <div className="flex justify-between flex-row email-highlight mb-2">
                        <HiOutlineMail id='mail' size={30} className=' duration-500'/>
                        <h1 className='flex justify-end font-normal duration-500'>akhilesh.bitla@utexas.edu</h1>
                        </div>
                        </a>
                        <a href="https://www.linkedin.com/in/akhileshbitla/" target="_blank">
                        <div className="flex justify-between flex-row linkedin-highlight pb-8">
                        <FaLinkedin id='linkedIn' className='duration-500' size={30} />
                        <h1 className='flex justify-end font-normal duration-500'>Akhilesh Bitla</h1>
                        </div>
                        </a>
                    </div>
                    <div className="flex-col w-full">
                        <h1 className='font-normal xl:text-lg text-xl '>Grab a copy of my resume!</h1>
                        <a href="https://drive.google.com/file/d/1i1rQZ77h48EsLGpX3Sict4tL1PBZ88AZ/view?usp=sharing" target="_blank">
                        <div className="flex justify-between flex-row file-highlight">
                        <BiFile id='file' className='duration-500' size={30} />
                        <h1 className='flex justify-end font-normal duration-500'>Resume</h1>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;