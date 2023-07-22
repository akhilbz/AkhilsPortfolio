import React, { useCallback, useState } from 'react'
import HTML from '../assets/stack-icons/html.png';
import CSS from '../assets/stack-icons/css.png';
import React_logo from '../assets/stack-icons/react.png';
import Java from '../assets/stack-icons/java.png';
import JS from '../assets/stack-icons/javascript.png';
import C from '../assets/stack-icons/C.png';
import Bootstrap from '../assets/stack-icons/bootstrap.png';
import Redux from '../assets/stack-icons/redux.svg';
import Flutter from '../assets/stack-icons/flutter.png';
import Dart from '../assets/stack-icons/Dart_logo.png';
import MySQL from '../assets/stack-icons/MySQL.png';
import MongoDB from '../assets/stack-icons/mongo.png';
import Node from '../assets/stack-icons/node.png';
import Webpack from '../assets/stack-icons/webpack.png';
import Ruby from '../assets/stack-icons/ruby.png';
import Rails from '../assets/stack-icons/rails.png';
import Tailwind from '../assets/stack-icons/tailwind.png';
import Eyes from '../assets/cloud-eyes.gif';
import Medal from '../assets/medal.png';
import { loadSlim } from "tsparticles-slim";
import { AiOutlineClose } from 'react-icons/ai';

import Bitsila from '../assets/stack-icons/bitsila.png';
const Experience = () => {
    const [bitsilaDiv, setBitsilaDiv] = useState(true);

    function showContent(paragraphs) {
        const container = document.getElementById("exper-description");
        paragraphs.forEach((paragraph) => {
          container.appendChild(paragraph);
        });
      }

      function clearContent() {
        const container = document.getElementById("exper-description");
        const paragraphs = container.querySelectorAll("p");
        paragraphs.forEach((paragraph) => {
        paragraph.remove();
        });
      }

      const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        console.log(container);
    }, []);

  return (
    <>
    <div id="exper-main" className='bg-[#140021]'>
        <div className="flex flex-col justify-center w-full h-full pb-6">
            <div className="flex flex-col items-center">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold title-name text-[#a18fd8]">Experience</h1>
                <div className="lg:flex hidden justify-end w-full overflow-hidden">
                    <div className="bg-[#ff9717] h-8 flex justify-start items-center pl-1 w-[fit-content] mr-[-300px] hover:mr-[0px] duration-500 rounded-bl-2xl rounded-tl-2xl" style={{boxShadow: '0px 0px 20px rgba(255, 151, 23, 0.6)'}}>
                        <p className='text-xl  ml-2 font-bold '>Note: &nbsp;&nbsp;  Tap <span className='bg-[#333333] text-[#ffc300] rounded-sm py-2'>&nbsp;yellow tiles&nbsp;</span> for description&nbsp;</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[fit-content] flex-col">  
                <div className="flex lg:flex-row flex-col lg:justify-between justify-center lg:items-start items-center xl:pr-[125px] sm:pr-[80px] lg:pb-[50px] mt-8">      
                <h2 className="md:flex lg:hidden text-4xl md:text-6xl lg:text-8xl font-bold title-name text-[#FFFFE6] pb-7 sm:pl-[80px] sm:inline-flex sm:justify-start justify-center" style={{textDecoration: 'underline'}}>Internships</h2>          
                <div className="lg:flex hidden lg:flex-col">
                    <div className="flex-col">
                    <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold title-name text-[#FFFFE6] pb-7  sm:pl-[80px] sm:inline-flex flex sm:justify-start justify-center" style={{textDecoration: 'underline'}}>Internships</h2>
                    
                    <div id='intern-div' className="ml-[80px] h-[300px] xl:w-[700px] lg:w-[600px] bg-[#a18fd8] rounded-2xl flex-row flex">
                        <div className='flex p-1 justify-between flex-row'>
                            <div className="flex-col flex items-center justify-center w-[fit-content] pl-2">
                                <iframe className='rounded-2xl flex justify-center' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.2742994472255!2d-97.73919222421218!3d30.286251874802797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b59c9f7a3771%3A0xa54e5a846367f0c1!2sGates-Dell%20Complex!5e0!3m2!1sen!2sus!4v1690046160116!5m2!1sen!2sus" 
                                width="300" height="260" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className="flex flex-col justify-end xl:w-[400px] lg:w-[300px] p-4 ">
                                <form method='POST' action='https://getform.io/f/c3ee09be-c274-41e2-b2be-4455ff899d6b' className='flex flex-col max-w-[400px] items-center'>
                                    <h1 className='text-xl text-[#FFFFE6] font-semibold border-b-4 border-[#140021] rounded'>Contact Me</h1>
                                    <input className=' mt-3 p-2 m-2 xl:w-[300px] lg:w-[200px] rounded' type='text' placeholder='Name' name='name'/>
                                    <input className=' mt-1 p-2 m-2 xl:w-[300px] lg:w-[200px] rounded' type='text' placeholder='Email' name='email'/>
                                    <textarea name='message' className=' mt-1 p-2 m-2 xl:w-[300px] lg:w-[200px] rounded' placeholder='Quick Message'/>
                                <button className='flex  justify-center text-xl pt-1 xl:ml-[160px] ml-[60px]'>
                                    <span className='border-2 rounded hover:bg-[#FFFFE6] duration-500 text-[#FFFFE6] hover:text-[#333333] hover:font-medium'>&nbsp;Let's Connect&nbsp;</span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div id='exper-div' className="hidden bg-[#333333] ml-[80px] xl:h-[270px] h-[250px] flex-col xl:w-[700px] w-[550px] rounded-2xl">
                        <div className="flex-row flex justify-between w-full p-3 mr-2">
                            <h3 className='text-[#FFFFE6] text-xl font-bold'>Description:</h3>
                            <AiOutlineClose onClick={() => {
                                const experDiv = document.getElementById('exper-div');
                                const internDiv = document.getElementById('intern-div');
                                experDiv.style.display = 'none';
                                internDiv.style.display = 'flex';
                            }} className='hover:text-[#FFFFE6] text-[#7e7e7c] duration-300' size={22}/>
                        </div>

                        <div id='exper-description' className="flex-col p-3 text-[#FFFFE6] text-lg font-bold"></div>
                    </div>
                </div>  

                <div className="lg:hidden flex w-full justify-center items-center">
                    <div className='flex-col sm:ml-[80px] flex justify-start w-[320px] sm:w-[360px] h-[320px] sm:h-[340px] bg-[#FFC300] items-center rounded-2xl hover:scale-110 duration-500 mb-8' style={{boxShadow: '0px 8px 20px rgba(255, 195, 0, 0.6)'}}>
                            <img src={Medal} className='w-[200px] h-[200px] mt-3 mb-1 bg-[#d9d9d9] rounded-2xl' style={{boxShadow: '0px 8px 20px rgba(255, 195, 0, 0.6)'}}/>
                            <div className="bg-[#333333] pl-3 p-3 mt-2 sm:mt-7 h-[fit-content] click w-[full] " style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }}>
                            <p className='font-bold text-md text-[#a19c9c]'>Searching for my next, <span className='text-[#ff9717] text-lg'>notable</span> &nbsp; <span className='border-b-2 border-[#ff9717] hover:scale-110 inline-flex duration-500 text-xl text-slate-50'>Internship.</span></p>
                            </div>
                    </div>
                </div>
                <div className="lg:hidden flex flex-col items-center w-full h-[fit-content] relative">
                    <div id='bitsila-text' className=" text-base flex items-center sm:text-lg sm:w-[550px] md:w-[700px] w-[450px] h-[fit-content] sm:hidden flex-col p-3 mb-3 sm:ml-[80px] text-[#FAB000] bg-[#333333] rounded-2xl duration-500 absolute">
                        <p className='font-bold'>&#8226; Contributed to the development of modules for Order Management & Marketing Promotions by
                            providing ideas and suggestions for the design of the UI/UX of the product Bitsila.</p>
                        <p className='font-bold'>&#8226; Developed backend APIs and implemented UI/UX for web and mobile applications</p>
                        <p className='font-bold'>&#8226; Programming Languages: Dart & Flutter</p>
                    </div>
                    {/* Mobile Version */}
                    <div id='bitsila-div' onClick={() => {
                        var bitsila = document.getElementById("bitsila-div");
                        var bitsilaText = document.getElementById("bitsila-text");
                        var techStack = document.getElementById("tech-stack");
                        var exper_main = document.getElementById("exper-main");
                        var exper_main_width = window.getComputedStyle(exper_main).width.slice(0, -2);
                        console.log(exper_main_width);
                        if (bitsilaDiv) {
                            var techStackHeight = bitsila.offsetHeight;
                            bitsila.style.marginTop = "200px";
                            techStackHeight += 200;   
                            bitsilaText.classList.add("show");
                            techStack.style.marginTop = techStackHeight + 'px';
                            setBitsilaDiv(false); 
                        } else {
                            bitsila.style.marginTop= "0px";
                            bitsilaText.classList.remove("show");
                            var techStackHeight = bitsila.offsetHeight;
                            techStack.style.marginTop = techStackHeight + 'px';
                            setBitsilaDiv(true); 
                        }   
                    }} className='lg:hidden flex flex-col sm:ml-[80px] absolute w-[280px] sm:w-[350px] z-30 h-[250px] sm:h-[280px] hover:intern_description cursor-pointer hover:scale-105 bg-[#FAB000] items-center rounded-2xl duration-500' style={{ boxShadow:'2px 0px 26px rgba(250, 176, 0, 0.6)'}}>    
                            <p id="tap-read" className='text-[#333333] h-0 font-light text-sm'>{bitsilaDiv ? "Tap to read" : "Close"}</p>               
                            <div className="rounded-2xl flex-col flex justify-center items-center mx-7 my-7 z-50 bg-slate-50 h-[135px] sm:h-[165px] click w-[230px] sm:w-[275px] mb-2" >
                            <a href='https://www.bitsila.com/' target="_blank">
                                <img src={Bitsila} alt="" className='h-[75px] sm:h-[125px] w-[75px] sm:w-[125px]'/>
                                <p className='text-[#fc4c04] font-bold hover:underline duration-500 flex justify-center'>Bitsila</p>
                            </a>
                            </div>
                        
                        <div className="bg-[#333333] pl-3 w-full p-2 mt-3" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }}>
                            <p className='font-bold text-xs text-[#a19c9c]'><span className=' border-b-2 text-sm  text-slate-50 border-[#ff9717] hover:scale-105 inline-flex duration-500'>Summer Intern</span>  &#8226; Innobits Solutions</p>
                            <p className='font-bold text-xs flex text-[#a19c9c]'>June 2021 - Aug 2021 (Bangalore, India)</p>
                        </div>
                        </div>
                    </div>   
                    <div className="">
                        <div className=" w-full overflow-hidden inline justify-end xl:pl-[100px] lg:pl-[30px] pt-[90px] xl:pt-0">
                            <div onClick={() => { 
                                clearContent();
                                const experDiv = document.getElementById('exper-div');
                                const internDiv = document.getElementById('intern-div');
                                const description = document.getElementById('exper-description');
                                experDiv.style.display = 'flex';
                                internDiv.style.display = 'none';
                                description.style.transitionDuration = '500ms';
                                const p1 = document.createElement("p");
                                p1.innerHTML = "Searching for SWE internships, particularly in Full Stack development.";
                                const descriptions = [p1];
                                showContent(descriptions);
                                }} className='lg:flex hidden flex-col justify-start ml-8 xl:w-[400px] w-[300px] xl:h-[400px] h-[300px] bg-[#FFC300] items-center hover:scale-110 duration-500 cursor-pointer' style={{boxShadow: '0px 8px 32px rgba(255, 195, 0, 0.6)'}}>
                                <h1 className='tiers-font text-7xl flex pr-3 py-[11px]'>#1</h1>
                                <img src={Medal} className='xl:w-[200px] w-[110px] h-[110px] xl:h-[200px] mb-1 bg-[#d9d9d9] rounded-2xl'/>
                                <div className="bg-[#333333] pl-3 p-3 mt-1" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }}>
                                <p className='font-bold text-sm xl:text-lg text-[#a19c9c]'>Searching for my next, <span className='text-[#ff9717] text-base xl:text-lg'>notable</span> &nbsp; <span className='border-b-2 border-[#ff9717] hover:scale-110 inline-flex duration-500 text-lg xl:text-2xl text-slate-50'>Internship.</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id='two-to-eight' className="w-full flex justify-center">
                <div className="justify-end  pr-[170px] pt-3 lg:flex hidden">
                    <div className="pr-3 pt-[290px]">
                        <div onClick={() => { 
                        clearContent();
                        const experDiv = document.getElementById('exper-div');
                        const description = document.getElementById('exper-description');
                        const internDiv = document.getElementById('intern-div');
                        internDiv.style.display = 'none';
                        experDiv.style.display = 'flex';
                        description.style.transitionDuration = '500ms';
                        const p1 = document.createElement("p");
                        p1.innerHTML = "#8";
                        const descriptions = [p1];
                        showContent(descriptions);
                        }} className='lg:flex hidden flex-col justify-center ml-4 w-[20px] h-[20px] bg-[#A63800] items-center hover:scale-110 duration-500' style={{ boxShadow: '0px 2px 16px rgba(166, 56, 0, 0.6)' }}>
                        <p className='tiers-font my-1 text-[#FFFFE6]' style={{ fontSize: '0.6rem'}}>#8</p>
                        </div>
                    </div>
                    <div className="pr-7 pt-[330px]">
                        <div onClick={() => { 
                        clearContent();
                        const experDiv = document.getElementById('exper-div');
                        const description = document.getElementById('exper-description');
                        const internDiv = document.getElementById('intern-div');
                        internDiv.style.display = 'none';
                        experDiv.style.display = 'flex';
                        description.style.transitionDuration = '500ms';
                        const p1 = document.createElement("p");
                        p1.innerHTML = "#7";
                        const descriptions = [p1];
                        showContent(descriptions);
                        }} className='lg:flex hidden flex-col justify-center ml-4 w-[40px] h-[40px] bg-[#DC6E00] items-center hover:scale-110 duration-500' style={{ boxShadow: '0px 2px 16px rgba(220, 110, 0, 0.6)' }}>
                        <p className='tiers-font my-1 text-[#CCCCCC]' style={{ fontSize: '1rem'}}>#7</p>
                        </div>
                    </div>
                    <div className="pr-[35px] pt-[370px]">
                        <div onClick={() => { 
                        clearContent();
                        const experDiv = document.getElementById('exper-div');
                        const description = document.getElementById('exper-description');
                        const internDiv = document.getElementById('intern-div');
                        internDiv.style.display = 'none';
                        experDiv.style.display = 'flex';
                        description.style.transitionDuration = '500ms';
                        const p1 = document.createElement("p");
                        p1.innerHTML = "#6";
                        const descriptions = [p1];
                        showContent(descriptions);
                        }} className='lg:flex hidden flex-col justify-center ml-4 w-[60px] h-[60px] bg-[#E57B00] items-center hover:scale-110 duration-500' style={{ boxShadow: '0px 2px 16px rgba(229, 123, 0, 0.6)' }}>
                        <p className='tiers-font my-1 text-[#b6b4b4] text-2xl'>#6</p>
                        </div>
                    </div>
                    <div className="pr-[35px] pt-[370px]">
                        <div onClick={() => { 
                        clearContent();
                        const experDiv = document.getElementById('exper-div');
                        const description = document.getElementById('exper-description');
                        const internDiv = document.getElementById('intern-div');
                        internDiv.style.display = 'none';
                        experDiv.style.display = 'flex';
                        description.style.transitionDuration = '500ms';
                        const p1 = document.createElement("p");
                        p1.innerHTML = "#5";
                        const descriptions = [p1];
                        showContent(descriptions);
                        }} className='lg:flex hidden flex-col justify-center ml-4 w-[75px] h-[75px] bg-[#ED8800] items-center hover:scale-110 duration-500' style={{ boxShadow: '0px 2px 16px rgba(237, 136, 0, 0.6)' }}>
                        <p className='tiers-font my-1 text-[#808080] text-4xl'>#5</p>
                        </div>
                    </div>
                    <div className="pr-[55px] pt-[330px]">
                        <div onClick={() => { 
                        clearContent();
                        const experDiv = document.getElementById('exper-div');
                        const description = document.getElementById('exper-description');
                        const internDiv = document.getElementById('intern-div');
                        internDiv.style.display = 'none';
                        experDiv.style.display = 'flex';
                        description.style.transitionDuration = '500ms';
                        const p1 = document.createElement("p");
                        p1.innerHTML = "#4";
                        const descriptions = [p1];
                        showContent(descriptions);
                        }} className='flex flex-col justify-center ml-4 w-[100px] h-[100px] bg-[#F29600] items-center hover:scale-110 duration-500' style={{ boxShadow: '0px 2px 16px rgba(242, 150, 0, 0.6)' }}>
                        <p className='tiers-font my-1 text-[#595959] text-5xl'>#4</p>
                        </div>
                    </div>
                    <div className="pr-[60px] pt-[240px]">
                        <div onClick={() => { 
                        clearContent();
                        const experDiv = document.getElementById('exper-div');
                        const description = document.getElementById('exper-description');
                        const internDiv = document.getElementById('intern-div');
                        internDiv.style.display = 'none';
                        experDiv.style.display = 'flex';
                        description.style.transitionDuration = '500ms';
                        const p1 = document.createElement("p");
                        p1.innerHTML = "#3";
                        const descriptions = [p1];
                        showContent(descriptions);
                        }} className='flex flex-col justify-center w-[150px] h-[150px] bg-[#F7A500] items-center hover:scale-110 duration-500' style={{ boxShadow: '0px 2px 16px rgba(247, 165, 0, 0.6)' }}>
                        <p className='tiers-font my-1 text-[#333333] text-6xl py-3 '>#3</p>
                        <div className="bg-[#333333] w-full h-[30px] mt-1  items-start flex-col px-1" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }}><div className="border-b-[1px] flex p-2 border-[#ff9717]"></div></div>
                    </div>
                    </div>
                    <div onClick={() => { 
                        clearContent();
                        const experDiv = document.getElementById('exper-div');
                        const description = document.getElementById('exper-description');
                        const internDiv = document.getElementById('intern-div');
                        internDiv.style.display = 'none';
                        experDiv.style.display = 'flex';
                        description.style.transitionDuration = '500ms';
                        const p1 = document.createElement("p");
                        p1.innerHTML = "&#8226; Contributed to the development of modules for Order Management & Marketing Promotions by providing ideas and suggestions for the design of the UI/UX of the product Bitsila.";
                        const p2 = document.createElement("p");
                        p2.innerHTML = "  &#8226; Developed backend APIs and implemented UI/UX for web and mobile applications";
                        const p3 = document.createElement("p");
                        p3.innerHTML = "&#8226; Programming Languages: Dart & Flutter";
                        const descriptions = [p1, p2, p3];
                        showContent(descriptions);
                        }} className='flex flex-col xl:w-[300px] w-[250px] xl:h-[300px] h-[250px] bg-[#FAB000] items-center hover:scale-110 duration-500 ' style={{ boxShadow:'2px 0px 26px rgba(250, 176, 0, 0.6)'}}>
                    <p className='tiers-font my-1 text-[#2b2a2a] text-4xl flex pb-1'>#2</p>
                    <a href='https://www.bitsila.com/' target="_blank">
                        <div className="rounded-2xl flex-col flex justify-center items-center bg-slate-50 xl:h-[135px] xl:w-[230px] h-[100px] w-[180px]  mb-2" >
                            <img src={Bitsila} alt="" className='xl:h-[75px] xl:w-[75px] h-[50px] w-[50px]'/>
                           <p className='text-[#fc4c04] font-bold hover:underline duration-500'>Bitsila</p>
                        </div>
                    </a>
                    <div className="bg-[#333333] pl-3 w-full p-3 mt-4" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }}>
                        <p className='font-bold text-sm text-[#a19c9c]'><span className=' border-b-2 xl:text-lg text-md text-slate-50 border-[#ff9717] hover:scale-105 inline-flex duration-500'>Summer Intern</span>  &#8226; Innobits Solutions</p>
                        <p className='font-bold xl:text-sm text-xs flex text-[#a19c9c]'>June 2021 - Aug 2021 (Bangalore, India)</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div id="tech-stack" className="mt-[240px] lg:mt-[40px] pt-[50px] relative">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold title-name text-[#FFFFE6] pt-3 flex justify-center" style={{textDecoration: 'underline'}}>My Tech Stack</h2>
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold cns-edu-title text-[#FFA86E] pt-3 pl-[205px]'><span className='border-b-4 border-spacing-y-6 hover:border-[#FFFFE6] border-spacing-8 duration-500 border-[#140021] px-1 inline'>Proficient</span></h3>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 xl:pl-[225px] lg:pl-[70px] md:pl-[30px] sm:pl-[20px] pl-[90px]">
                    <div className="shadow-sm hover:font-bold hover:scale-110 hover:shadow-[#FFFFE6] w-[fit-content] h-[fit-content] duration-500 rounded-2xl p-1">
                        <img src={Java} alt="Java-icon" className='w-20 mx-4 pt-2' />
                        <p className='text-[#FAF0E6] my-2'>Java</p>
                    </div>
                    <div className="shadow-sm hover:font-bold hover:scale-110 hover:shadow-[#FFFFE6] w-[fit-content] h-[fit-content] duration-500 rounded-2xl p-1">
                        <img src={JS} alt="JS-icon" className='w-20 mx-4 pt-2' />
                        <p className='text-[#FAF0E6] my-2'>JavaScript</p>
                    </div>
                    <div className="shadow-sm hover:font-bold hover:scale-110 hover:shadow-[#FFFFE6] w-[fit-content] h-[fit-content] duration-500 rounded-2xl p-1">
                        <img src={React_logo} alt="React-icon" className='w-20 mx-4 pt-2' />
                        <p className='text-[#FAF0E6] my-2'>React</p>
                    </div>
                    <div className="shadow-sm hover:font-bold hover:scale-110 hover:shadow-[#FFFFE6] w-[fit-content] h-[fit-content] duration-500 rounded-2xl p-1">
                        <img src={C} alt="C-icon" className='w-20 mx-4 pt-2' />
                        <p className='text-[#FAF0E6] my-2 '>C Programming</p>
                    </div>
                    <div className="shadow-sm hover:font-bold hover:scale-110 hover:shadow-[#FFFFE6] w-[fit-content] h-[fit-content] duration-500 rounded-2xl p-1">
                        <img src={HTML} alt="HTML-icon" className='w-20 mx-4 pt-2' />
                        <p className='text-[#FAF0E6] my-2'>HTML</p>
                    </div>
                    <div className="shadow-sm hover:font-bold hover:scale-110 hover:shadow-[#FFFFE6] w-[fit-content] h-[fit-content] duration-500 rounded-2xl p-1">
                        <img src={CSS} alt="CSS-icon" className='w-20 mx-4 pt-2' />
                        <p className='text-[#FAF0E6] my-2'>CSS</p>
                    </div>
                    <div className="shadow-sm hover:font-bold hover:scale-110 hover:shadow-[#FFFFE6] w-[fit-content] h-[fit-content] duration-500 rounded-2xl p-1">
                        <img src={Bootstrap} alt="Bootstrap-icon" className='w-20 mx-4 pt-2' />
                        <p className='text-[#FAF0E6] my-2 pt-3'>Bootstrap</p>
                    </div>
                    <div className="shadow-sm hover:font-bold hover:scale-110 hover:shadow-[#FFFFE6] w-[fit-content] h-[fit-content] duration-500 rounded-2xl p-1">
                        <img src={Tailwind} alt="Tailwind-icon" className='w-20 mx-4 pt-2' />
                        <p className='text-[#FAF0E6] my-2 text-sm px-1'>Tailwind CSS</p>
                    </div>
                </div>
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold cns-edu-title text-[#6fc2b0] pt-3 pl-[205px]'><span className='border-b-4 border-spacing-y-6 hover:border-[#FFFFE6] border-spacing-8 duration-500 border-[#140021] px-1 inline'>Developing</span></h3>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 xl:pl-[225px] lg:pl-[70px] md:pl-[30px] sm:pl-[20px] pl-[90px]">
                    <div className="shadow-sm hover:font-bold hover:scale-110 hover:shadow-[#FFFFE6] w-[fit-content] h-[fit-content] duration-500 rounded-2xl p-1 ">
                        <img src={Redux} alt="Redux-icon" className='w-20 mx-4 pt-2' />
                        <p className='text-[#FAF0E6]  my-2'>Redux</p>
                    </div>
                    <div className="shadow-sm hover:font-bold hover:scale-110 hover:shadow-[#FFFFE6] w-[fit-content] h-[fit-content] duration-500 rounded-2xl p-1">
                        <img src={React_logo} alt="React-native-icon" className='w-20 mx-4 pt-2' />
                        <p className='text-[#FAF0E6] my-2 px-1'>React Native</p>
                    </div>
                    <div className="shadow-sm hover:font-bold hover:scale-110 hover:shadow-[#FFFFE6] w-[fit-content] h-[fit-content] duration-500 rounded-2xl p-1">
                        <img src={MySQL} alt="MySQL-icon" className='w-20 mx-4 pt-2' />
                        <p className='text-[#FAF0E6] my-2 px-1'>MySQL</p>
                    </div>
                    <div className="shadow-sm hover:font-bold hover:scale-110 hover:shadow-[#FFFFE6] w-[fit-content] h-[fit-content] duration-500 rounded-2xl p-1">
                        <img src={MongoDB} alt="MongoDB-icon" className='w-20 mx-4 pt-2' />
                        <p className='text-[#FAF0E6] my-2 px-1'>MongoDB</p>
                    </div>
                    <div className="shadow-sm hover:font-bold hover:scale-110 hover:shadow-[#FFFFE6] w-[fit-content] h-[fit-content] duration-500 rounded-2xl p-1">
                        <img src={Webpack} alt="Webpack-icon" className='w-20 mx-4 pt-2' />
                        <p className='text-[#FAF0E6] my-2 px-1'>Webpack</p>
                    </div>
                    <div className="shadow-sm hover:font-bold hover:scale-110 hover:shadow-[#FFFFE6] w-[fit-content] h-[fit-content] duration-500 rounded-2xl p-1">
                        <img src={Ruby} alt="Ruby-icon" className='w-20 mx-4 pt-2' />
                        <p className='text-[#FAF0E6] my-2 px-1'>Ruby</p>
                    </div>
                    <div className="shadow-sm hover:font-bold hover:scale-110 hover:shadow-[#FFFFE6] w-[fit-content] h-[fit-content] duration-500 rounded-2xl p-1">
                        <img src={Rails} alt="Rails-icon" className='w-20 mx-4 pt-2' />
                        <p className='text-[#FAF0E6]  my-2 px-1'>Ruby on Rails</p>
                    </div>
                    <div className="shadow-sm hover:font-bold hover:scale-110 hover:shadow-[#FFFFE6] w-[fit-content] h-[fit-content] duration-500 rounded-2xl p-1">
                        <img src={Flutter} alt="Flutter-icon" className='w-[70px] mx-4 pt-2' />
                        <p className='text-[#FAF0E6] my-2 px-1'>Flutter</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="exper-prjs-spacer exper-prjs-layer"></div>
    </>
  );
};

export default Experience;