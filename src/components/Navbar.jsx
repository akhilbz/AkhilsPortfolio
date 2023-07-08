import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram, FaGit } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { BiFile } from 'react-icons/bi';
import { HiOutlineMenuAlt4, HiOutlineMail } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { MdDescription } from 'react-icons/md';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#FFFFE6] text-gray-300 z-[1000]">
            <div className='reveal-name flex'>
                <h1 className='font-[Megrim] font-thin text-2xl text-[#333333] cursor-pointer'>AKHILESH BITLA</h1>
                <h1 className='hidden hover:inline'>-</h1>
            </div>

            {/* menu */}
            <ul className='hidden md:flex font-light text-[#333333]'>
                <li className='hover:font-semibold navbar-btns '>Home</li>
                <li className='hover:font-semibold navbar-btns '>My Story</li>
                <li className='hover:font-semibold navbar-btns '>Education</li>
                <li className='hover:font-semibold navbar-btns '>Experience</li>
                <li className='hover:font-semibold navbar-btns '>Projects</li>
            </ul>

            {/** Hamburger */}
            <div onClick={handleClick} className='md:hidden z-[300]'>
                {!nav ? <HiOutlineMenuAlt4 style={{ color: '#333333'}}/> : <AiOutlineClose style={{ color: '#333333'}}/>}
            </div>
            
            {/** Mobile Menu */}
            <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#FFFFE6] px-4 py-6 flex flex-col z-[200]'}>
            <h1 className='font-[Megrim] font-thin text-2xl text-[#333333]'>AKHILESH BITLA</h1>
                <ul className='items-center justify-center flex flex-col text-[#333333]'>
                    <li className=' py-6 text-3xl justify-center'>Home</li>
                    <li className=' py-6 text-3xl'>My Story</li>
                    <li className=' py-6 text-3xl'>Education</li>
                    <li className=' py-6 text-3xl'>Experience</li>
                    <li className=' py-6 text-3xl'>Projects</li>
                    <div className="flex w-[50%] justify-between py-5">
                        <FaLinkedin size={30} className='cursor-pointer mobile-linkedin'/>
                        <FaGithub size={30} className='cursor-pointer mobile-github'/>
                        <BsFillPersonLinesFill size={30} className='cursor-pointer mobile-contact'/>
                        <BiFile size={30} className='cursor-pointer mobile-resume'/>
                    </div>
                </ul>
            </div>
            {/** Socials */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a href="/" className='w-[160px] h-[60px] flex font-semibold justify-between items-center text-gray-300'>
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a href="/" className='w-[160px] h-[60px] flex font-semibold justify-between items-center text-gray-300'>
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a18fd8]'>
                        <a href="/" className='w-[160px] h-[60px] flex font-semibold justify-between items-center text-gray-300'>
                            Contact <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a href="/" className='w-[160px] h-[60px] flex font-semibold justify-between items-center text-gray-300'>
                            Resume <BiFile size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;