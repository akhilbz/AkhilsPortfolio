import React from 'react'
import Trove from '../assets/trove.png';
import Organize from '../assets/organize-logo.png';

const Projects = () => {
  return (
    <div name="projects" className='w-full h-full  bg-[#6fc]'>
      <div className="h-[fit-content] pb-[300px]">
        <div className="bg-[#140021] ml-[80px] inline-block w-[fit-content] p-3 rounded mt-[75px]">
          <h1 className='title-name text-8xl text-[#6fc] font-bold pb-1'>Projects</h1>
        </div>
        <div className="flex-col mt-[125px] ">
          <div className="flex-row flex lg:justify-between justify-center lg:mr-8 lg:ml-[80px]">
            
            <div className="border-b-2 border-t-2 my-6 border-[#140021] xl:w-[750px] lg:w-[500px] hidden lg:flex flex-col justify-center font-medium text-xl lg:text-lg ml-5 ">
              <p className='pb-5'>&#8226; Developed a Chrome extension designed to enhance your tab management experience and optimize
                            productivity and organization. Implemented intuitive features for effortless tab organization, including
                            quick grouping, fast searching, and more.</p>
              <p className='pb-5'>&#8226; Self-taught React, HTML, and CSS to develop both front-end and back-end skills. Utilized Chrome
                 Developer APIs ‘tabs’ and ‘tabGroups’ to handle tabs based on state.</p>
              <p>&#8226; Tech Stack: JavaScript, React, Redux, HTML, CSS3, BootStrap 5, Webpack</p>
            </div>
            <div className="w-[400px] h-[400px] bg-[#140021] flex-col flex lg:justify-between justify-start lg:py-9 items-center rounded hover:scale-105 duration-500 ">
            <p id='tap-read' className='text-white h-0 lg:pb-9 pb-[70px] font-light text-sm flex lg:hidden '>Tap to read</p>        
              <img src={Organize} alt="" className='h-[250px] w-[250px] rounded-2xl' />
              <p className='text-white text-2xl'>Organize Chrome Extension</p>
            </div>
          </div>

          <div className="flex-row flex lg:justify-between justify-center lg:mr-8 lg:ml-[80px] mt-[50px] ">
            <div className="w-[400px] h-[400px]  bg-[#140021] flex-col flex lg:justify-between justify-start lg:py-9 items-center rounded hover:scale-105 duration-500">
              <p className='text-white h-0 lg:pb-9 pb-[70px] font-light text-sm flex lg:hidden '>Tap to read</p>        
              <img src={Trove} alt="" className='h-[250px] w-[250px] rounded-2xl'/>
              <p className='text-white text-2xl'>Trove: The Lost & Found App</p>
            </div>
            <div className="border-b-2 border-t-2 my-6 border-[#140021] xl:w-[750px] lg:w-[500px] hidden lg:flex flex-col justify-center font-medium text-xl lg:text-lg mr-5">
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