import React from 'react'
import Trove from '../assets/trove.png';
import Organize from '../assets/organize-logo.png';
import { FaGithub } from 'react-icons/fa';
import Devpost from '../assets/devpost.svg';
const Projects = () => {
  return (
    <div name="projects" className='w-full h-full bg-[#1A1A1A] pt-[75px]'>
      <div className="h-[fit-content] pb-[50px]">
        <div className="w-full flex justify-center lg:justify-start">
          <div className="bg-[#121212] lg:ml-[80px]  w-[fit-content] p-3 rounded-xl">
            <h1 className='title-name text-8xl text-[#F7760E] font-bold pb-1'>Projects</h1>
          </div>
        </div>
        <div className="flex-col mt-[90px] ">
          <div className="lg:flex-row flex-col flex lg:justify-between justify-center items-center lg:mr-8 lg:ml-[80px]">
            
            <div className="border-b-2 border-t-2 my-6 py-4 border-[#F7760E] xl:w-[750px] lg:w-[500px] hidden lg:flex flex-col text-white justify-center font-medium xl:text-xl text-lg ml-5 ">
              <p className='pb-5'>&#8226; Developed a Chrome extension designed to enhance your tab management experience and optimize
                            productivity and organization. Implemented intuitive features for effortless tab organization, including
                            quick grouping, fast searching, and more.</p>
              <p className='pb-5'>&#8226; Self-taught React, HTML, and CSS to develop both front-end and back-end skills. Utilized Chrome
                 Developer APIs ‘tabs’ and ‘tabGroups’ to manage tabs based on state.</p>
              <p>&#8226; Tech Stack: JavaScript, React, Redux, HTML, CSS3, BootStrap 5, Webpack</p>
            </div>
            <div className="sm:w-[400px] w-[350px] sm:h-[400px] h-[350px] bg-[#121212] flex-col z-10 flex justify-center lg:py-9 items-center rounded-xl hover:scale-105 duration-500 overflow-hidden">
              {/* <p id='tap-read' className='text-white h-0 lg:pb-9 pb-[70px] font-light text-sm flex lg:hidden'>Tap to read</p>*/}
              {/* <div className="w-full flex justify-end ml-[90px] overflow-hidden">
                <div className=" bg-white hover:bg-black hover:text-white duration-500 h-9 flex flex-col rounded-bl-xl rounded-tl-xl justify-center w-[90px] z-50 ">
                  <a href="https://github.com/akhilbz/Organize" target='_blank'><FaGithub size={30} className='ml-2'/></a>
                </div>
              </div> */}
              <img src={Organize} alt="" className='h-[250px] w-[250px] rounded-2xl'/>
              <p className='text-white text-2xl'>Organize Chrome Extension</p>
            </div>
            <div className="border-b-2 border-t-2 sm:mx-[120px] mx-[60px] my-6 py-4 border-[#F7760E] text-white lg:hidden flex flex-col justify-center font-medium sm:text-lg text-base">
              <p className='pb-5'>&#8226; Developed a Chrome extension designed to enhance your tab management experience and optimize
                            productivity and organization. Implemented intuitive features for effortless tab organization, including
                            quick grouping, fast searching, and more.</p>
              <p className='pb-5'>&#8226; Self-taught React, HTML, and CSS to develop both front-end and back-end skills. Utilized Chrome
                 Developer APIs ‘tabs’ and ‘tabGroups’ to manage tabs based on state.</p>
              <p>&#8226; Tech Stack: JavaScript, React, Redux, HTML, CSS3, BootStrap 5, Webpack</p>
            </div>
          </div>

          <div className="lg:flex-row flex-col flex lg:justify-between justify-center items-center lg:mr-8 lg:ml-[80px] mt-7 sm:mt-[80px]">
            <div className="sm:w-[400px] w-[350px] sm:h-[400px] h-[350px]  bg-[#121212] flex-col flex justify-center lg:py-9 items-center rounded-xl hover:scale-105 duration-500 overflow-hidden">
              {/* <p className='text-white h-0 lg:pb-9 pb-[70px] font-light text-sm flex lg:hidden'>Tap to read</p>         */}
              <div className="w-full flex flex-col justify-start mt-5">
                <div className=" bg-white hover:bg-[#0087c1] hover:text-white duration-500 h-9 flex flex-col rounded-br-xl rounded-tr-xl justify-center w-[45px] z-50 ">
                  <a href="https://devpost.com/software/found-b1p3x7" target="_blank"><img src={Devpost} alt="" className='h-[32px] w-[32px] ml-[7px]'/></a>
                </div>
              </div>
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
              <p className='pb-5'>&#8226; Developed a virtual service platform that allows college students to report lost items and claim lost
              valuables through a student network.</p>
              <div className='pb-5'>&#8226; Built within 24 hours with three peers and won Best Overall on Beginner’s Track Award out of 75 teams in
              HackTX 2022 (Freetail Hackers Hackathon)</div>
              <p>&#8226; Tech Stack: Java, JavaScript, Spring Framework, React Native, MongoDB, Figma</p>
            </div>
            <div className="border-b-2 border-t-2 my-6 py-4 border-[#F7760E] text-white xl:w-[750px] lg:w-[500px] hidden lg:flex flex-col justify-center font-medium xl:text-xl text-lg mr-5">
              <p className='pb-5'>&#8226; Developed a virtual service platform that allows college students to report lost items and claim lost
              valuables through a student network.</p>
              <div className='pb-5'>&#8226; Built within 24 hours with three peers and won Best Overall on Beginner’s Track Award out of 75 teams in
              HackTX 2022 (Freetail Hackers Hackathon)</div>
              <p>&#8226; Tech Stack: Java, JavaScript, Spring Framework, React Native, MongoDB, Figma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;