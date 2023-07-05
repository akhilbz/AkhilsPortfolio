import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { BiFile } from 'react-icons/bi';
import { HiOutlineMenuAlt4, HiOutlineMail } from 'react-icons/hi';
import { MdDescription } from 'react-icons/md';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <h1>AKHILESH BITLA</h1>
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About Me</li>
                <li>Education</li>
                <li>Experience</li>
                <li>Projects</li>
            </ul>

            {/** Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <HiOutlineMenuAlt4 /> : <FaTimes />}
            </div>

            {/** Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About Me</li>
                <li className='py-6 text-4xl'>Education</li>
                <li className='py-6 text-4xl'>Experience</li>
                <li className='py-6 text-4xl'>Projects</li>
            </ul>
            {/** Socials */}
            <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a href="/" className='w-[160px] h-[60px] flex justify-between items-center text-gray-300'>
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a href="/" className='w-[160px] h-[60px] flex justify-between items-center text-gray-300'>
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a18fd8]'>
                        <a href="/" className='w-[160px] h-[60px] flex justify-between items-center text-gray-300'>
                            Contact <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a href="/" className='w-[160px] h-[60px] flex justify-between items-center text-gray-300'>
                            Resume <BiFile size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;