import React from 'react'
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';



const Footer = () => {
  return (
    <div className='w-full h-[400px] bg-[#FFFFE6] flex justify-between items-center'>
         <div className="ml-[80px] h-[300px] rounded-2xl flex-row justify-between flex mr-5">
            <div className="h-[fit-content]">
                <h1 className='text-5xl text-[#333333] font-normal p-1'>Interested in my work?</h1>
                <div className='flex p-1 justify-between flex-row'>
                    <div className="flex-col flex items-center justify-center w-[fit-content]">
                        <iframe className='rounded-2xl flex justify-center' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.2742994472255!2d-97.73919222421218!3d30.286251874802797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b59c9f7a3771%3A0xa54e5a846367f0c1!2sGates-Dell%20Complex!5e0!3m2!1sen!2sus!4v1690046160116!5m2!1sen!2sus" 
                        width="500" height="260" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="flex flex-col justify-end w-[fit-content] p-4  h-[fit-content]">
                        <form method='POST' action='https://getform.io/f/c3ee09be-c274-41e2-b2be-4455ff899d6b' className='flex flex-col max-w-[400px] items-center'>
                            <h1 className='text-xl text-[#333333] font-semibold border-b-4 border-[#140021] rounded'>Let's Collaborate</h1>
                            <input className=' mt-3 p-2 m-2 xl:w-[300px] lg:w-[200px] rounded bg-[#333333] text-white' type='text' placeholder='Name' name='name' required/>
                            <input className=' mt-1 p-2 m-2 xl:w-[300px] lg:w-[200px] rounded bg-[#333333] text-white' type='text' placeholder='Email' name='email' required/>
                            <textarea style={{resize: 'none'}} name='message' className=' mt-1 p-2 m-2 xl:w-[300px] lg:w-[200px] rounded bg-[#333333] text-white' placeholder='Quick Message' required/>
                            <button className='flex justify-start ml-[210px] text-2xl pt-1 '>
                            <span className='border-2 border-[#333333] font-semibold rounded hover:bg-[#333333] duration-500 text-[#333333] px-2 hover:text-white'>&nbsp;Send&nbsp;</span></button>
                        </form>
                    </div>
                   
                </div>
            </div>
            <div className="w-full flex flex-col justify-center xl:ml-[100px] mr-5 mt-[50px]">
                <h1 className='text-xl font-normal '>Need to write a longer message?</h1>
                <h1 className='text-xl font-normal '>Feel free to reach out to me via my socials!</h1>

                <div className="flex justify-between flex-row ">
                <HiOutlineMail size={30} color='#333333' />
                <h1 className='flex justify-end font-normal'>akhilesh.bitla@utexas.edu</h1>
                </div>
                <div className="flex justify-between flex-row ">
                <FaLinkedin className='rounded' size={30} />
                <h1 className='flex justify-end font-normal'>@akhileshbitla</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;