import React from 'react'
import Trove from '../assets/trove.png';
import AccounTech from '../assets/accountech.png';
import Organize from '../assets/organize-logo.png';
import { FaGithub, FaYoutube,  } from 'react-icons/fa';
import Devpost from '../assets/devpost.svg';
import JS from '../assets/stack-icons/javascript.png';
import HTML from '../assets/stack-icons/html.png';
import CSS from '../assets/stack-icons/css.png';
import React_logo from '../assets/stack-icons/react.png';
import Redux from '../assets/stack-icons/redux.svg';
import Bootstrap from '../assets/stack-icons/bootstrap.png';
import Webpack from '../assets/stack-icons/webpack.png';
import Java from '../assets/stack-icons/java.png';
import MongoDB from '../assets/stack-icons/mongo.png';
import MovieDB from '../assets/moviedb.png';
import SpringBoot from '../assets/stack-icons/springboot.svg';
import Figma from '../assets/stack-icons/figma.svg';
import Node from '../assets/stack-icons/node.png';
import GPT from '../assets/stack-icons/gpt.png';
import GCP from '../assets/stack-icons/google_cloud.png';
import Tailwind from '../assets/stack-icons/tailwind.png';

const Projects = () => {
  return (
    <div name="projects" className='w-full h-full bg-[#1A1A1A] pt-[75px]'>
      <div className="h-[fit-content] pb-[50px]">
        <div className="w-full flex justify-center lg:justify-start">
          <div className="bg-[#121212] lg:ml-[80px]  w-[fit-content] p-3 rounded-xl">
            <h1 className='title-name sm:text-8xl text-5xl text-[#F7760E] sm:font-bold pb-1'>Projects</h1>
          </div>
        </div>
        <div className="flex-col mt-[90px] ">
          <div className="lg:flex-row flex-col flex lg:justify-between justify-center items-center lg:mr-8 lg:ml-[80px]">
            
            <div id="side1" className="border-b-2 border-t-2 my-6 py-4 border-[#F7760E] xl:w-[750px] lg:w-[500px] hidden lg:flex flex-col text-white justify-center font-medium xl:text-xl text-lg ml-5 ">
            <div className="flex-row flex px-2">
            <p>Tech Stack:</p>
            <img src={React_logo} alt="" className=' w-7 mx-2 hover:scale-95 duration-500' />
            <img src={JS} alt="" className=' w-7 mx-2 hover:scale-95 duration-500' />
            <img src={HTML} alt="" className=' w-7 mx-2 hover:scale-95 duration-500' />
            <img src={CSS} alt="" className=' w-7 mx-2 hover:scale-95 duration-500' />
            <img src={Redux} alt="" className=' w-7 mx-2 hover:scale-95 duration-500' />
            <img src={Bootstrap} alt="" className=' w-7 mx-2 hover:scale-95 duration-500' />
            <img src={Webpack} alt="" className=' w-7 mx-2 hover:scale-95 duration-500' />
            <img src={Figma} alt="" className='w-8 h-8 mx-2 hover:scale-95 duration-500' />
            </div>
              <p className='py-3 px-2'><span className='font-bold text-2xl text-[#8dd9f7]'>Organize</span> is a chrome extension designed to enhance your tab management experience and optimize
                            productivity and organization. Implemented intuitive features for effortless tab organization, including
                            quick grouping, fast searching, and more.</p>
              <p className='py-3 px-2'>This project is my <span className='text-xl text-[#FFD700]'>first standalone front-end project</span> that uses chrome developer APIs to manage and update the state of tabs and its properties through the extension.</p>
              <div className="flex-row flex w-full justify-center">
              <button className='flex mx-3'>
              <a href="https://www.loom.com/share/24335b615bf646e3b0e337809b947cee?sid=a7c8b91b-361b-40c3-a171-bc704669e753" target='_blank'><span className='border-2 border-[#F7760E] h-[50px] sm:font-semibold font-normal rounded hover:bg-[#F7760E] duration-500 text-[#F7760E] xl:px-2 flex items-center text-2xl hover:text-[#121212]'>&nbsp;<FaYoutube />&nbsp;Demo&nbsp;</span></a>
              </button>
              </div>
            </div>
            <div className="sm:w-[400px] w-[350px] sm:h-[400px] h-[350px] bg-[#121212] flex-col z-10 flex justify-center lg:py-9 items-center rounded-xl hover:scale-105 duration-500 overflow-hidden">
              <img src={Organize} alt="" className='h-[250px] w-[250px] rounded-2xl'/>
              <p className='text-white text-2xl flex'>Organize Chrome Extension</p>
            </div>
            <div id="under1" className="border-b-2 border-t-2 sm:mx-[120px] mx-[60px] my-6 py-4 border-[#F7760E] text-white lg:hidden flex flex-col justify-center font-medium sm:text-lg text-base">
              <div className="flex-row flex justify-center items-center w-full ">
              <p>Tech Stack:</p>
              <img src={React_logo} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={JS} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1  hover:scale-95 duration-500' />
              <img src={HTML} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={CSS} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={Redux} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={Bootstrap} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={Webpack} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={Figma} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              </div>
                <p className='py-3 px-2'><span className='font-normal text-xl text-[#8dd9f7]'>Organize</span> is a chrome extension designed to enhance your tab management experience and optimize
                              productivity and organization. Implemented intuitive features for effortless tab organization, including
                              quick grouping, fast searching, and more.</p>
                <p className='py-3 px-2'>This project is my <span className='text-lg text-[#FFD700]'>first standalone front-end project</span> that uses Chrome developer APIs to manage and update the state of tabs and their properties through the extension.</p>
                <div className="flex-row flex w-full justify-center">
                <button className='flex mx-3'>
                <a href="https://www.loom.com/share/24335b615bf646e3b0e337809b947cee?sid=a7c8b91b-361b-40c3-a171-bc704669e753" target='_blank'><span className='border-2 border-[#F7760E] sm:h-[50px] sm:font-semibold font-normal rounded hover:bg-[#F7760E] duration-500 text-[#F7760E] xl:px-2  flex items-center text-xl hover:text-[#121212]'>&nbsp;<FaYoutube />&nbsp;Demo&nbsp;</span></a>
                </button>
                </div>
            </div>
          </div>

          <div className="lg:flex-row flex-col flex lg:justify-between justify-center items-center lg:mr-8 lg:ml-[80px] mt-7 sm:mt-[80px]">
            <div className="sm:w-[400px] w-[350px] sm:h-[400px] h-[350px]  bg-[#121212] flex-col flex justify-center lg:py-9 items-center rounded-xl hover:scale-105 duration-500 overflow-hidden">
                  <img src={Trove} alt="" className='h-[250px] w-[250px] rounded-2xl'/>
              <p className='text-white text-2xl p-2'>Trove: The Lost & Found App</p>
            </div>
            <div id='under2' className="border-b-2 border-t-2 sm:mx-[120px] mx-[60px] my-6 py-4 border-[#F7760E] text-white lg:hidden flex flex-col justify-center font-medium sm:text-lg text-base">
            <div className="flex-row flex justify-center items-center w-full ">
              <p>Tech Stack:</p>
              <img src={React_logo} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={JS} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={HTML} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={CSS} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={Java} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={MongoDB} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={SpringBoot} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={Figma} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              </div>
              <p className='py-3'><span className='font-normal text-xl text-[#c2adff]'>Trove</span> is a virtual service platform that allows college students to report lost items and claim lost
              valuables through a student network. Trove was built as a hackathon project with three peers and a time constraint of 24 hours. Our team won the <span className='text-[#FFD700] text-lg font-normal'>Best Overall Beginner Hack Award</span> out of  <span className='text-[#FFD700] text-lg font-normal'>75 teams</span> in
              HackTX 2022 (Hosted by Freetail Hackers).</p>
              <div className="flex-row flex w-full justify-center">
              <button className='flex mx-3'>
                <a href="https://devpost.com/software/found-b1p3x7" target="_blank"><span className='border-2 border-[#F7760E] hover:border-white sm:h-[50px] sm:font-semibold font-normal rounded bg-[#F7760E] hover:bg-white duration-500 xl:px-2  flex items-center text-xl text-[#121212]'>&nbsp;<img src={Devpost} alt="" className='h-[25px] w-[25px]'/>&nbsp;Devpost&nbsp;</span></a>
                </button>
                <button className='flex mx-3'>
                  <a href="https://www.youtube.com/watch?v=Zl_hXwML1_o" target="_blank"><span className='border-2 border-[#F7760E] sm:h-[50px] sm:font-semibold font-normal rounded hover:bg-[#F7760E] duration-500 text-[#F7760E] xl:px-2  flex items-center text-xl hover:text-[#121212]'>&nbsp;<FaYoutube />&nbsp;Demo&nbsp;</span></a>
                </button>
                </div>
            </div>

            <div id='side2' className="border-b-2 border-t-2 my-6 py-4 border-[#F7760E] text-white xl:w-[750px] lg:w-[500px] hidden lg:flex flex-col justify-center font-medium xl:text-xl text-lg mr-5">
              <div className="flex-row flex w-full ">
              <p>Tech Stack:</p>
              <img src={React_logo} alt="" className='w-8 h-8 mx-2 hover:scale-95 duration-500' />
              <img src={JS} alt="" className=' w-8 h-8  mx-2 hover:scale-95 duration-500' />
              <img src={HTML} alt="" className=' w-8 h-8 mx-2 hover:scale-95 duration-500' />
              <img src={CSS} alt="" className=' w-8 h-8 mx-2 hover:scale-95 duration-500' />
              <img src={Java} alt="" className=' w-8 h-8 mx-2 hover:scale-95 duration-500' />
              <img src={MongoDB} alt="" className='w-8 h-8 mx-2 hover:scale-95 duration-500' />
              <img src={SpringBoot} alt="" className='w-8 h-8 mx-2 hover:scale-95 duration-500' />
              <img src={Figma} alt="" className='w-8 h-8 mx-2 hover:scale-95 duration-500' />
              </div>
              <p className='py-3'><span className='font-bold text-2xl text-[#c2adff]'>Trove</span> is a virtual service platform that allows college students to report lost items and claim lost
              valuables through a student network. Trove was built as a hackathon project with three peers and a time constraint of 24 hours. Our team won the <span className='text-[#FFD700] text-xl font-bold'>Best Overall Beginner Hack Award</span> out of <span className='text-[#FFD700] text-xl font-bold'>75 teams</span> in
              HackTX 2022 (Hosted by Freetail Hackers).</p>
              <div className="flex-row flex w-full justify-center">
              <button className='flex mx-3'>
                <a href="https://devpost.com/software/found-b1p3x7" target="_blank"><span className='border-2 border-[#F7760E] hover:border-white sm:h-[50px] sm:font-semibold font-normal rounded bg-[#F7760E] hover:bg-white duration-500 xl:px-2  flex items-center text-2xl text-[#121212]'>&nbsp;<img src={Devpost} alt="" className='h-[32px] w-[32px]'/>&nbsp;Devpost&nbsp;</span></a>
                </button>
                <button className='flex mx-3' >
                <a href="https://www.youtube.com/watch?v=Zl_hXwML1_o" target="_blank"><span className='border-2 border-[#F7760E] sm:h-[50px] sm:font-semibold font-normal rounded hover:bg-[#F7760E] duration-500 text-[#F7760E] xl:px-2  flex items-center text-2xl hover:text-[#121212]'>&nbsp;<FaYoutube />&nbsp;Demo&nbsp;</span></a>
                </button>
                </div>
            </div>
          </div>

          <div className="lg:flex-row flex-col flex lg:justify-between justify-center items-center lg:mr-8 lg:ml-[80px]  mt-7 sm:mt-[80px]">
            
            <div id='side3' className="border-b-2 border-t-2 my-6 py-4 border-[#F7760E] xl:w-[750px] lg:w-[500px] hidden lg:flex flex-col text-white justify-center font-medium xl:text-xl text-lg ml-5 ">
            <div className="flex-row flex px-2 justify-start items-center w-full">
              <p>Tech Stack:</p>
              <img src={React_logo} alt="" className='w-8 h-8 mx-2 hover:scale-95 duration-500' />
              <img src={JS} alt="" className=' w-8 h-8  mx-2 hover:scale-95 duration-500' />
              <img src={HTML} alt="" className=' w-8 h-8 mx-2 hover:scale-95 duration-500' />
              <img src={CSS} alt="" className=' w-8 h-8 mx-2 hover:scale-95 duration-500' />
              <img src={Java} alt="" className=' w-8 h-8 mx-2 hover:scale-95 duration-500' />
              <img src={Bootstrap} alt="" className='w-8 h-8 mx-2 hover:scale-95 duration-500' />
              <img src={MongoDB} alt="" className='w-8 h-8 mx-2 hover:scale-95 duration-500' />
              <img src={SpringBoot} alt="" className='w-8 h-8 mx-2 hover:scale-95 duration-500' />
            </div>
              <p className='py-3 px-2'><span className='font-bold text-2xl text-[#5eefbf]'>MovieDB Clone</span> is a simplified version of MovieDB. 
              The primary objective of this project was to attain a deeper understanding of the back-end infrastructure.
              I watched a video tutorial to develop this project to get a further understanding of RESTful APIs and how data was managed and accessed from the <span className='text-xl text-[#47A248]'>MongoDB database</span>. 
              This was a valuable project experience, helping me deepen my knowledge of the <span className='text-xl text-[#8dd9f7]'>back-end aspect</span>  of full-stack development.</p>
              <p className='pb-4 px-2'>Tutorial by <a href="https://www.youtube.com/watch?v=5PdEmeopJVQ" target='_blank' className='hover:text-[#F7760E] underline duration-300'>freeCodeCamp.org</a></p>
              <div className="flex-row flex w-full justify-center">
              <button className='flex mx-3'>
                <a href="https://github.com/akhilbz/moviedb_clone" target='_blank'><span className='border-2 border-[#F7760E] hover:border-white sm:h-[50px] sm:font-semibold font-normal rounded hover:bg-white bg-[#F7760E] duration-500  xl:px-2 flex items-center text-2xl text-[#121212]'>&nbsp;<FaGithub />&nbsp;GitHub&nbsp;</span></a>
                </button>
              <button className='flex mx-3'>
              <a href="https://www.loom.com/share/ed7a09308003493db3afd0bf595b2dc6?sid=63fbe098-7b6e-4ff6-95e2-083c1481e855" target='_blank'><span className='border-2 border-[#F7760E]  h-[50px] sm:font-semibold font-normal rounded hover:bg-[#F7760E] duration-500 text-[#F7760E] xl:px-2 flex items-center text-2xl hover:text-[#121212]'>&nbsp;<FaYoutube />&nbsp;Demo&nbsp;</span></a>
              </button>
              </div>
            </div>
            <div className="sm:w-[400px] w-[350px] sm:h-[400px] h-[350px] bg-[#121212] flex-col z-10 flex justify-center lg:py-9 items-center rounded-xl hover:scale-105 duration-500 overflow-hidden">
              <img src={MovieDB} alt="" className=' sm:max-w-[375px] max-w-[320px] w-[100%] sm:h-full h-[250px] rounded-2xl' style={{aspectRatio: '3022/1614'}}/>
              <p className='text-white text-2xl flex p-2'>MovieDB Clone</p>
            </div>
            <div id='under3' className="border-b-2 border-t-2 sm:mx-[120px] mx-[60px] my-6 py-4 border-[#F7760E] text-white lg:hidden flex flex-col justify-center font-medium sm:text-lg text-base">
              <div className="flex-row flex justify-center items-center w-full ">
              <p className='flex'>Tech Stack:</p>
              <img src={React_logo} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={JS} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={HTML} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={CSS} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={Java} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={Bootstrap} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={MongoDB} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={SpringBoot} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              </div>
                <p className='py-3 px-2'><span className='font-normal text-xl text-[#5eefbf]'>MovieDB Clone</span> is a simplified version of MovieDB. 
              The primary objective of this project was to attain a deeper understanding of the back-end infrastructure.
              I watched a video tutorial to develop this project to get a further understanding of RESTful APIs and how data was managed and accessed from the <span className='text-lg text-[#47A248]'>MongoDB database</span>. 
              This was a valuable project experience, helping me deepen my knowledge of the <span className='text-lg text-[#8dd9f7]'>back-end aspect</span> of full-stack development.</p>
              <p className='pb-4 px-2'>Tutorial by <a href="https://www.youtube.com/watch?v=5PdEmeopJVQ" target='_blank' className='text-[#F7760E] underline'>freeCodeCamp.org</a></p>


                <div className="flex-row flex w-full justify-center">
                <button className='flex mx-3'>
                <a href="https://github.com/akhilbz/moviedb_clone" target='_blank'><span className='border-2 border-[#F7760E] hover:border-white sm:h-[50px] sm:font-semibold font-normal rounded hover:bg-white bg-[#F7760E] duration-500  xl:px-2 flex items-center text-xl text-[#121212]'>&nbsp;<FaGithub />&nbsp;GitHub&nbsp;</span></a>
                </button>
                <button className='flex mx-3'>
                <a href="https://www.loom.com/share/ed7a09308003493db3afd0bf595b2dc6?sid=63fbe098-7b6e-4ff6-95e2-083c1481e855" target='_blank'><span className='border-2 border-[#F7760E] sm:h-[50px] sm:font-semibold font-normal rounded hover:bg-[#F7760E] duration-500 text-[#F7760E] xl:px-2  flex items-center text-xl hover:text-[#121212]'>&nbsp;<FaYoutube />&nbsp;Demo&nbsp;</span></a>
                </button>
                </div>
            </div>
          </div>

          <div className="lg:flex-row flex-col flex lg:justify-between justify-center items-center lg:mr-8 lg:ml-[80px] mt-7 sm:mt-[80px]">
            <div className="sm:w-[400px] w-[350px] sm:h-[400px] h-[350px]  bg-[#121212] flex-col flex justify-center lg:py-9 items-center rounded-xl hover:scale-105 duration-500 overflow-hidden">
                  <img src={AccounTech} alt="" className='h-[250px] w-[250px] rounded-2xl'/>
              <p className='text-white text-2xl p-2'>AccounTech</p>
            </div>
            <div id='under4' className="border-b-2 border-t-2 sm:mx-[120px] mx-[60px] my-6 py-4 border-[#F7760E] text-white lg:hidden flex flex-col justify-center font-medium sm:text-lg text-base">
            <div className="flex-row flex justify-center items-center w-full ">
              <p>Tech Stack:</p>
              <img src={React_logo} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={JS} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={HTML} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={CSS} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={Tailwind} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={Node} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={GPT} alt="" className='rounded-lg sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={GCP} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              <img src={Figma} alt="" className='sm:w-8 sm:h-8 sm:mx-2 w-7 h-7 mx-1 hover:scale-95 duration-500' />
              </div>
              <p className='py-3'><span className='font-normal text-xl text-[#1db954]'>AccounTech</span> is a <span className='font-normal text-xl text-[#c2adff]'>GPT4-powered</span> virtual accountant for credit/debit cardholders to assist them with their finances. 
              The AI accountant follows a <span className='text-[#FFD700] text-lg font-normal'>reactive feedback system</span>, providing immediate feedback on every transaction made. Built within 24 hours with three peers for HackTX 2023 (Hosted by Freetail Hackers).</p>
              <div className="flex-row flex w-full justify-center">
              <button className='flex mx-3'>
                <a href="https://devpost.com/software/accoun-tech" target="_blank"><span className='border-2 border-[#F7760E] hover:border-white sm:h-[50px] sm:font-semibold font-normal rounded bg-[#F7760E] hover:bg-white duration-500 xl:px-2  flex items-center text-xl text-[#121212]'>&nbsp;<img src={Devpost} alt="" className='h-[25px] w-[25px]'/>&nbsp;Devpost&nbsp;</span></a>
                </button>
                <button className='flex mx-3'>
                  <a href="https://www.youtube.com/watch?v=NWfa8gtDus8" target="_blank"><span className='border-2 border-[#F7760E] sm:h-[50px] sm:font-semibold font-normal rounded hover:bg-[#F7760E] duration-500 text-[#F7760E] xl:px-2  flex items-center text-xl hover:text-[#121212]'>&nbsp;<FaYoutube />&nbsp;Demo&nbsp;</span></a>
                </button>
                </div>
            </div>

            <div id='side4' className="border-b-2 border-t-2 my-6 py-4 border-[#F7760E] text-white xl:w-[750px] lg:w-[500px] hidden lg:flex flex-col justify-center font-medium xl:text-xl text-lg mr-5">
              <div className="flex-row flex w-full ">
              <p>Tech Stack:</p>
              <img src={React_logo} alt="" className='w-8 h-8 mx-2 hover:scale-95 duration-500' />
              <img src={JS} alt="" className=' w-8 h-8  mx-2 hover:scale-95 duration-500' />
              <img src={HTML} alt="" className=' w-8 h-8 mx-2 hover:scale-95 duration-500' />
              <img src={CSS} alt="" className=' w-8 h-8 mx-2 hover:scale-95 duration-500' />
              <img src={Tailwind} alt="" className='w-8 h-8 mx-2 hover:scale-95 duration-500' />
              <img src={Node} alt="" className='w-8 h-8 mx-2 hover:scale-95 duration-500' />
              <img src={GPT} alt="" className='rounded-lg w-8 h-8 mx-2 hover:scale-95 duration-500' />
              <img src={GCP} alt="" className='w-[30px] h-[30px] mx-2 hover:scale-95 duration-500' />
              <img src={Figma} alt="" className='w-8 h-8 mx-2 hover:scale-95 duration-500' />
              </div>
              <p className='py-3'><span className='font-bold text-2xl text-[#1db954]'>AccounTech</span> is a <span className='font-bold text-xl text-[#c2adff]'>GPT4-powered</span> virtual accountant for credit/debit cardholders to assist them with their finances. 
              The AI accountant follows a <span className='text-[#FFD700] text-xl font-bold'>reactive feedback system</span>, providing immediate feedback on every transaction made. Built within 24 hours with three peers for HackTX 2023 (Hosted by Freetail Hackers).</p>
              <div className="flex-row flex w-full justify-center">
              <button className='flex mx-3'>
                <a href="https://devpost.com/software/accoun-tech" target="_blank"><span className='border-2 border-[#F7760E] hover:border-white sm:h-[50px] sm:font-semibold font-normal rounded bg-[#F7760E] hover:bg-white duration-500 xl:px-2  flex items-center text-2xl text-[#121212]'>&nbsp;<img src={Devpost} alt="" className='h-[32px] w-[32px]'/>&nbsp;Devpost&nbsp;</span></a>
                </button>
                <button className='flex mx-3' >
                <a href="https://www.youtube.com/watch?v=NWfa8gtDus8" target="_blank"><span className='border-2 border-[#F7760E] sm:h-[50px] sm:font-semibold font-normal rounded hover:bg-[#F7760E] duration-500 text-[#F7760E] xl:px-2  flex items-center text-2xl hover:text-[#121212]'>&nbsp;<FaYoutube />&nbsp;Demo&nbsp;</span></a>
                </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;