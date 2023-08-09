import React from 'react'
import Trove from '../assets/trove.png';
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
            
            <div className="border-b-2 border-t-2 my-6 py-4 border-[#F7760E] xl:w-[750px] lg:w-[500px] hidden lg:flex flex-col text-white justify-center font-medium xl:text-xl text-lg ml-5 ">
            <div className="flex-row flex px-2">
            <p>Tech Stack:</p>
            <img src={React_logo} alt="" className=' w-7 mx-2 hover:scale-95 duration-500' />
            <img src={JS} alt="" className=' w-7 mx-2 hover:scale-95 duration-500' />
            <img src={HTML} alt="" className=' w-7 mx-2 hover:scale-95 duration-500' />
            <img src={CSS} alt="" className=' w-7 mx-2 hover:scale-95 duration-500' />
            <img src={Redux} alt="" className=' w-7 mx-2 hover:scale-95 duration-500' />
            <img src={Bootstrap} alt="" className=' w-7 mx-2 hover:scale-95 duration-500' />
            <img src={Webpack} alt="" className=' w-7 mx-2 hover:scale-95 duration-500' />
            </div>
              <p className='py-3 px-2'><span className='font-bold text-2xl text-[#8dd9f7]'>Organize</span> is a chrome extension designed to enhance your tab management experience and optimize
                            productivity and organization. Implemented intuitive features for effortless tab organization, including
                            quick grouping, fast searching, and more.</p>
              <div className="flex-row flex w-full justify-center">
              {/* <button className='flex mx-3'>
              <span className='border-2 border-[#F7760E] font-semibold rounded hover:bg-[#F7760E] duration-500 text-[#F7760E] xl:px-2 px-6 hover:text-[#121212]'>&nbsp;Send&nbsp;</span>
              </button> */}
              <button className='flex mx-3'>
              <span className='border-2 border-[#F7760E]  h-[50px] font-semibold rounded hover:bg-[#F7760E] duration-500 text-[#F7760E] xl:px-2 flex items-center text-2xl hover:text-[#121212]'>&nbsp;<FaYoutube />&nbsp;Demo&nbsp;</span>
              </button>
              </div>
            </div>
            <div className="sm:w-[400px] w-[350px] sm:h-[400px] h-[350px] bg-[#121212] flex-col z-10 flex justify-center lg:py-9 items-center rounded-xl hover:scale-105 duration-500 overflow-hidden">
              {/* <p id='tap-read' className='text-white h-0 lg:pb-9 pb-[70px] font-light text-sm flex lg:hidden'>Tap to read</p>*/}
              {/* <div className="w-full flex justify-end ml-[90px] overflow-hidden">
                <div className=" bg-white hover:bg-black hover:text-white duration-500 h-9 flex flex-col rounded-bl-xl rounded-tl-xl justify-center w-[90px] z-50 ">
                  <a href="https://github.com/akhilbz/Organize" target='_blank'><FaGithub size={30} className='ml-2'/></a>
                </div>
              </div> */}
              <img src={Organize} alt="" className='h-[250px] w-[250px] rounded-2xl'/>
              <p className='text-white text-2xl flex'>Organize Chrome Extension</p>
            </div>
            <div className="border-b-2 border-t-2 sm:mx-[120px] mx-[60px] my-6 py-4 border-[#F7760E] text-white lg:hidden flex flex-col justify-center font-medium sm:text-lg text-base">
              <div className="flex-row flex justify-center w-full ">
              <p>Tech Stack:</p>
              <img src={React_logo} alt="" className='w-8 h-8 mx-2 hover:scale-95 duration-500' />
              <img src={JS} alt="" className=' w-8 h-8  mx-2 hover:scale-95 duration-500' />
              <img src={HTML} alt="" className=' w-8 h-8 mx-2 hover:scale-95 duration-500' />
              <img src={CSS} alt="" className=' w-8 h-8 mx-2 hover:scale-95 duration-500' />
              <img src={Redux} alt="" className=' w-8 h-8 mx-2 hover:scale-95 duration-500' />
              <img src={Bootstrap} alt="" className='w-8 h-8 mx-2 hover:scale-95 duration-500' />
              <img src={Webpack} alt="" className='w-8 h-8 mx-2 hover:scale-95 duration-500' />
              </div>
                <p className='py-3 px-2'><span className='font-bold text-xl text-[#8dd9f7]'>Organize</span> is a chrome extension designed to enhance your tab management experience and optimize
                              productivity and organization. Implemented intuitive features for effortless tab organization, including
                              quick grouping, fast searching, and more.</p>
                <div className="flex-row flex w-full justify-center">
                {/* <button className='flex mx-3'>
                <span className='border-2 border-[#F7760E] font-semibold rounded hover:bg-[#F7760E] duration-500 text-[#F7760E] xl:px-2 px-6 hover:text-[#121212]'>&nbsp;Send&nbsp;</span>
                </button> */}
                <button className='flex mx-3'>
                <span className='border-2 border-[#F7760E] sm:h-[50px] font-semibold rounded hover:bg-[#F7760E] duration-500 text-[#F7760E] xl:px-2  flex items-center text-xl hover:text-[#121212]'>&nbsp;<FaYoutube />&nbsp;Demo&nbsp;</span>
                </button>
                </div>
            </div>
          </div>

          <div className="lg:flex-row flex-col flex lg:justify-between justify-center items-center lg:mr-8 lg:ml-[80px] mt-7 sm:mt-[80px]">
            <div className="sm:w-[400px] w-[350px] sm:h-[400px] h-[350px]  bg-[#121212] flex-col flex justify-center lg:py-9 items-center rounded-xl hover:scale-105 duration-500 overflow-hidden">
              {/* <p className='text-white h-0 lg:pb-9 pb-[70px] font-light text-sm flex lg:hidden'>Tap to read</p>         */}
              {/* <div className="w-full flex flex-col justify-start mt-5">
                <div className=" bg-white hover:bg-[#0087c1] hover:text-white duration-500 h-9 flex flex-col rounded-br-xl rounded-tr-xl justify-center w-[45px] z-50 ">
                  <a href="https://devpost.com/software/found-b1p3x7" target="_blank"><img src={Devpost} alt="" className='h-[32px] w-[32px] ml-[7px]'/></a>
                </div>
              </div> */}
              {/* <div className="w-full">
                <div className="flex justify-start flex-row">
                  <div className="bg-white hover:bg-[#0087c1] duration-500 h-9 flex rounded-br-xl rounded-tr-xl mt-5 justify-center flex-col w-[45px] z-50 "> */}
                    {/* <a href="https://devpost.com/software/found-b1p3x7" target="_blank"><img src={Devpost} alt="" className='h-[32px] w-[32px] ml-[7px]'/></a> */}
                  {/* </div> */}
                  <img src={Trove} alt="" className='h-[250px] w-[250px] rounded-2xl'/>
                {/* </div> */}
              {/* </div> */}
              <p className='text-white text-2xl p-2'>Trove: The Lost & Found App</p>
            </div>
            <div className="border-b-2 border-t-2 sm:mx-[120px] mx-[60px] my-6 py-4 border-[#F7760E] text-white lg:hidden flex flex-col justify-center font-medium sm:text-lg text-base">
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
              <p className='py-3'><span className='font-bold text-xl text-[#c2adff]'>Trove</span> is a virtual service platform that allows college students to report lost items and claim lost
              valuables through a student network. Trove was built as a hackathon project with three peers and a time constraint of 24 hours. Our team won the <span className='text-[#FFD700] text-xl font-bold'>Best Overall Beginner Hack Award</span> out of  <span className='text-[#FFD700] text-xl font-bold'>75 teams</span> in
              HackTX 2022 (Freetail Hackers Hackathon).</p>
              <div className="flex-row flex w-full justify-center">
              <button className='flex mx-3'>
                <a href="https://devpost.com/software/found-b1p3x7" target="_blank"><span className='border-2 border-[#F7760E] hover:border-white sm:h-[50px] font-semibold rounded bg-[#F7760E] hover:bg-white duration-500 xl:px-2  flex items-center text-xl text-[#121212]'>&nbsp;<img src={Devpost} alt="" className='h-[25px] w-[25px]'/>&nbsp;Devpost&nbsp;</span></a>
                </button>
                <button className='flex mx-3'>
                  <a href="https://www.youtube.com/watch?v=Zl_hXwML1_o" target="_blank"><span className='border-2 border-[#F7760E] sm:h-[50px] font-semibold rounded hover:bg-[#F7760E] duration-500 text-[#F7760E] xl:px-2  flex items-center text-xl hover:text-[#121212]'>&nbsp;<FaYoutube />&nbsp;Demo&nbsp;</span></a>
                </button>
                </div>
            </div>

            <div className="border-b-2 border-t-2 my-6 py-4 border-[#F7760E] text-white xl:w-[750px] lg:w-[500px] hidden lg:flex flex-col justify-center font-medium xl:text-xl text-lg mr-5">
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
              valuables through a student network. Trove was built as a hackathon project with three peers and a time constraint of 24 hours. Our team won the <span className='text-[#FFD700] text-2xl font-bold'>Best Overall Beginner Hack Award</span> out of  <span className='text-[#FFD700] text-2xl font-bold'>75 teams</span> in
              HackTX 2022 (Freetail Hackers Hackathon).</p>
              <div className="flex-row flex w-full justify-center">
              <button className='flex mx-3'>
                <a href="https://devpost.com/software/found-b1p3x7" target="_blank"><span className='border-2 border-[#F7760E] hover:border-white sm:h-[50px] font-semibold rounded bg-[#F7760E] hover:bg-white duration-500 xl:px-2  flex items-center text-2xl text-[#121212]'>&nbsp;<img src={Devpost} alt="" className='h-[32px] w-[32px]'/>&nbsp;Devpost&nbsp;</span></a>
                </button>
                <button className='flex mx-3' >
                <a href="https://www.youtube.com/watch?v=Zl_hXwML1_o" target="_blank"><span className='border-2 border-[#F7760E] sm:h-[50px] font-semibold rounded hover:bg-[#F7760E] duration-500 text-[#F7760E] xl:px-2  flex items-center text-2xl hover:text-[#121212]'>&nbsp;<FaYoutube />&nbsp;Demo&nbsp;</span></a>
                </button>
                </div>
            </div>
          </div>

          <div className="lg:flex-row flex-col flex lg:justify-between justify-center items-center lg:mr-8 lg:ml-[80px]  mt-7 sm:mt-[80px]">
            
            <div className="border-b-2 border-t-2 my-6 py-4 border-[#F7760E] xl:w-[750px] lg:w-[500px] hidden lg:flex flex-col text-white justify-center font-medium xl:text-xl text-lg ml-5 ">
            <div className="flex-row flex px-2 justify-center items-center w-full">
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
              I watched a video tutorial to develop this project to get a further understanding of RESTful APIs and how data was managed and accessed from the MongoDB database. 
              This was a valuable project experience, helping me deepen my knowledge of the back-end aspect of full-stack development.</p>
              <p className='pb-4 px-2'>Tutorial by <a href="https://www.youtube.com/watch?v=5PdEmeopJVQ" target='_blank' className='hover:text-[#F7760E] underline duration-300'>freeCodeCamp.org</a></p>
              <div className="flex-row flex w-full justify-center">
              <button className='flex mx-3'>
                <a href="https://github.com/akhilbz/moviedb_clone" target='_blank'><span className='border-2 border-[#F7760E] hover:border-white sm:h-[50px] font-semibold rounded hover:bg-white bg-[#F7760E] duration-500  xl:px-2 flex items-center text-2xl text-[#121212]'>&nbsp;<FaGithub />&nbsp;GitHub&nbsp;</span></a>
                </button>
              <button className='flex mx-3'>
              <span className='border-2 border-[#F7760E]  h-[50px] font-semibold rounded hover:bg-[#F7760E] duration-500 text-[#F7760E] xl:px-2 flex items-center text-2xl hover:text-[#121212]'>&nbsp;<FaYoutube />&nbsp;Demo&nbsp;</span>
              </button>
              </div>
            </div>
            <div className="sm:w-[400px] w-[350px] sm:h-[400px] h-[350px] bg-[#121212] flex-col z-10 flex justify-center lg:py-9 items-center rounded-xl hover:scale-105 duration-500 overflow-hidden">
              <img src={MovieDB} alt="" className=' inset-0 w-[375px] h-full rounded-2xl'/>
              <p className='text-white text-2xl flex'>MovieDB Clone</p>
            </div>
            <div className="border-b-2 border-t-2 sm:mx-[120px] mx-[60px] my-6 py-4 border-[#F7760E] text-white lg:hidden flex flex-col justify-center font-medium sm:text-lg text-base">
              <div className="flex-row flex justify-center items-center w-full ">
              <p className='flex'>Tech Stack:</p>
              <img src={React_logo} alt="" className='sm:w-8 w-7 sm:h-8 h-7 mx-2 hover:scale-95 duration-500' />
              <img src={JS} alt="" className=' sm:w-8 w-7 sm:h-8 h-7   mx-2 hover:scale-95 duration-500' />
              <img src={HTML} alt="" className=' sm:w-8 w-7 sm:h-8 h-7  mx-2 hover:scale-95 duration-500' />
              <img src={CSS} alt="" className=' sm:w-8 w-7 sm:h-8 h-7  mx-2 hover:scale-95 duration-500' />
              <img src={Java} alt="" className=' sm:w-8 w-7 sm:h-8 h-7  mx-2 hover:scale-95 duration-500' />
              <img src={Bootstrap} alt="" className='sm:w-8 w-7 sm:h-8 h-7  mx-2 hover:scale-95 duration-500' />
              <img src={MongoDB} alt="" className='sm:w-8 w-7 sm:h-8 h-7  mx-2 hover:scale-95 duration-500' />
              <img src={SpringBoot} alt="" className='sm:w-8 w-7 sm:h-8 h-7  mx-2 hover:scale-95 duration-500' />
              </div>
                <p className='py-3 px-2'><span className='font-bold text-xl text-[#5eefbf]'>MovieDB Clone</span> is a simplified version of MovieDB. 
              The primary objective of this project was to attain a deeper understanding of the back-end infrastructure.
              I watched a video tutorial to develop this project to get a further understanding of RESTful APIs and how data was managed and accessed from the MongoDB database. 
              This was a valuable project experience, helping me deepen my knowledge of the back-end aspect of full-stack development.</p>
              <p className='pb-4 px-2'>Tutorial by <a href="https://www.youtube.com/watch?v=5PdEmeopJVQ" target='_blank' className='text-[#F7760E] underline'>freeCodeCamp.org</a></p>


                <div className="flex-row flex w-full justify-center">
                <button className='flex mx-3'>
                <a href="https://github.com/akhilbz/moviedb_clone" target='_blank'><span className='border-2 border-[#F7760E] hover:border-white sm:h-[50px] font-semibold rounded hover:bg-white bg-[#F7760E] duration-500  xl:px-2 flex items-center text-xl text-[#121212]'>&nbsp;<FaGithub />&nbsp;GitHub&nbsp;</span></a>
                </button>
                <button className='flex mx-3'>
                <span className='border-2 border-[#F7760E] sm:h-[50px] font-semibold rounded hover:bg-[#F7760E] duration-500 text-[#F7760E] xl:px-2  flex items-center text-xl hover:text-[#121212]'>&nbsp;<FaYoutube />&nbsp;Demo&nbsp;</span>
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