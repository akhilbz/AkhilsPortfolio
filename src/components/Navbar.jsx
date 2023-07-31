import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram, FaGit } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { BiFile } from 'react-icons/bi';
import { HiOutlineMenuAlt4, HiOutlineMail } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { MdDescription } from 'react-icons/md';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#121212] z-[1000]">
            <div className='flex'>
                <h1 className='font-[Megrim] text-3xl text-white cursor-pointer'><Link to="home" spy={true} smooth={true} offset={0} duration={700}>AKHILESH BITLA</Link></h1>
            </div>

            {/* menu */}
            <ul className='hidden md:flex font-medium text-white'>
                <li className='hover:scale-110  duration-500'><span className='border-b-4 border-spacing-y-6 hover:border-[#87CEFA] border-spacing-8 duration-500 border-[#121212] px-1 inline'>
                    <Link to="home" spy={true} smooth={true} offset={0} duration={700}>Home</Link></span></li>
                <li className='hover:scale-110 navbar-btns duration-500'><span className='border-b-4 border-spacing-y-6 hover:border-[#87CEFA] border-spacing-8 duration-500 border-[#121212] px-1 inline'>
                    <Link to="about" smooth={true} offset={170} duration={700}>My Story</Link></span></li>
                <li className='hover:scale-110 navbar-btns duration-500'><span className='border-b-4 border-spacing-y-6 hover:border-[#87CEFA] border-spacing-8 duration-500 border-[#121212] px-1 inline'>
                    <Link to="edu" smooth={true} offset={550} duration={700}>Education</Link></span></li>
                <li className='hover:scale-110 navbar-btns duration-500'><span className='border-b-4 border-spacing-y-6 hover:border-[#87CEFA] border-spacing-8 duration-500 border-[#121212] px-1 inline'>
                    <Link to="experience" smooth={true} offset={200} duration={700}>Experience</Link></span></li>
                <li className='hover:scale-110 navbar-btns duration-500'><span className='border-b-4 border-spacing-y-6 hover:border-[#F7760E] border-spacing-8 duration-500 border-[#121212] px-1 inline'>
                <Link to="projects" smooth={true} offset={-70} duration={700}>Projects</Link></span></li>
            </ul>

            {/** Hamburger */}
            <div onClick={handleClick} className='md:hidden z-[300] duration-500 cursor-pointer'>
                {!nav ? <HiOutlineMenuAlt4 style={{ color: '#666666'}}/> : <AiOutlineClose className='text-[#777777] hover:text-white duration-300'/>}
            </div>
            
            {/** Mobile Menu */}
            <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-[650px] rounded-bl-3xl rounded-br-3xl font-medium bg-[#222222] px-4 py-[22px] md:hidden flex flex-col z-[200]'}>
            <h1 className='font-[Megrim] text-3xl text-white'>AKHILESH BITLA</h1>
                <ul className='items-center justify-center flex flex-col text-white'>
                    <li className=' py-6 text-3xl justify-center '>
                        <Link onClick={handleClick} to="home" spy={true} smooth={true} offset={0} duration={700}>Home</Link>
                    </li>
                    <li className=' py-6 text-3xl'>
                        <Link onClick={handleClick} to="about" smooth={true} offset={20} duration={700}>My Story</Link>  
                    </li>
                    <li className=' py-6 text-3xl'>
                        <Link onClick={handleClick} to="education" smooth={true} offset={0} duration={700}>Education</Link>
                    </li>
                    <li className=' py-6 text-3xl'>
                        <Link onClick={handleClick} to="experience" smooth={true} offset={0} duration={700}>Experience</Link>
                    </li>
                    <li className=' py-6 text-3xl'>
                    <Link onClick={handleClick} to="projects" smooth={true} offset={-40} duration={700}>Projects</Link>
                    </li>
                    <div className="flex w-[50%] justify-between py-5">
                        <a href="https://www.linkedin.com/in/akhileshbitla/" target="_blank"><FaLinkedin size={30} className='cursor-pointer text-blue-500 '/></a>
                        <a href="https://github.com/akhilbz" target="_blank" ><FaGithub size={30} className='cursor-pointer text-[#9f9f9f]'/></a>
                        <a href="mailto:akhilesh.bitla@utexas.edu" target="_blank"><HiOutlineMail size={30} className='cursor-pointer text-[#d0caca]'/></a>
                        <a href="https://drive.google.com/file/d/1-n198T_DnUOjJElbZk7zRN8Xdje9Rw5x/view?usp=sharing" target="_blank"><BiFile size={30} className='cursor-pointer text-[#FFA86E]'/></a>
                    </div>
                </ul>
            </div>
            {/** Socials */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-tr-2xl hover:rounded-br-2xl'>
                        <a href="https://www.linkedin.com/in/akhileshbitla/" target="_blank" className='w-[160px] h-[60px] flex font-semibold justify-between items-center text-white'>
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-tr-2xl hover:rounded-br-2xl duration-300 bg-[#212121]'>
                        <a href="https://github.com/akhilbz" target="_blank" className='w-[160px] h-[60px] flex font-semibold justify-between items-center text-white'>
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-tr-2xl hover:rounded-br-2xl duration-300 bg-[#d0caca]'>
                        <a href="mailto:akhilesh.bitla@utexas.edu" target="_blank" className='w-[160px] h-[60px] flex font-semibold justify-between items-center text-white'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-tr-2xl duration-300 bg-[#F7760E] rounded-br-2xl'>
                        <a href="https://drive.google.com/file/d/1-n198T_DnUOjJElbZk7zRN8Xdje9Rw5x/view?usp=sharing" target="_blank" className='w-[160px] h-[60px] flex font-semibold justify-between items-center text-white'>
                            Resume <BiFile size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;