import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import React_logo from '../assets/react.png';
import Java from '../assets/java.png';
import JS from '../assets/javascript.png';
import C from '../assets/C.png';
import Bootstrap from '../assets/bootstrap.png';
import Redux from '../assets/redux.svg';
import Flutter from '../assets/flutter.png';
import Dart from '../assets/Dart_logo.png';
import MySQL from '../assets/MySQL.png';
import MongoDB from '../assets/mongo.png';
import Node from '../assets/node.png';
import Webpack from '../assets/webpack.png';
import Ruby from '../assets/ruby.png';
import Rails from '../assets/rails.png';
import Tailwind from '../assets/tailwind.png';
import Eyes from '../assets/cloud-eyes.gif';
// import Innobits from '../assets/innobits.jpeg';
import Bitsila from '../assets/bitsila.png';
const Experience = () => {
  return (
    <>
    <div className='bg-[#140021]'>
        <div className="flex flex-col justify-center w-full h-full pb-6">
            <div className="items-center flex flex-col justify-center">
                <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold title-name flex justify-center text-[#a18fd8]'>Experience</h1>
            </div>
            <div className="w-full h-[fit-content] flex-col ">  
                <div className="flex md:justify-between justify-center sm:pr-[125px] pb-[50px] mt-8">
                <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold title-name text-[#FFFFE6] pb-7 sm:pl-[80px] sm:inline-flex flex sm:justify-start justify-center sm:ml-2" style={{textDecoration: 'underline'}}>Internships</h2>
                    <div className='md:flex hidden flex-col justify-start ml-4 w-[400px] h-[400px] bg-[#FFC300] items-center hover:scale-110 duration-500' style={{boxShadow: '0px 8px 32px rgba(255, 195, 0, 0.6)'}}>
                        <h1 className='tiers-font text-7xl flex pr-3 py-3'>#1</h1>
                        <img src={Eyes} className='w-[200px] h-[200px] py-2'/>
                        <div className="bg-[#333333] pl-3 p-3" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }}>
                        <p className='font-bold -2 text-lg text-[#a19c9c]'>Searching for my next, <span className='text-[#ff9717] text-xl'>notable</span> &nbsp; <span className='border-b-2 border-[#ff9717] hover:scale-110 inline-flex duration-500 text-2xl text-slate-50'>Internship.</span></p>
                        </div>
                    </div>
                </div>
                
                <div className=" justify-end pr-[318px] md:flex hidden">
                    
                    <div className="pr-9 pt-[390px]">
                        <div className='flex flex-col justify-center ml-4 w-[20px] h-[20px] bg-[#A63800] items-center hover:scale-110 duration-500' style={{ boxShadow: '0px 2px 16px rgba(166, 56, 0, 0.6)' }}>
                        <p className='tiers-font my-1 text-[#FFFFE6]' style={{ fontSize: '0.6rem'}}>#8</p>
                        </div>
                    </div>
                    <div className="pr-9 pt-[398px]">
                        <div className='flex flex-col justify-center ml-4 w-[30px] h-[30px] bg-[#DC6E00] items-center hover:scale-110 duration-500' style={{ boxShadow: '0px 2px 16px rgba(220, 110, 0, 0.6)' }}>
                        <p className='tiers-font my-1 text-[#CCCCCC]' style={{ fontSize: '1rem'}}>#7</p>
                        </div>
                    </div>
                    <div className="pr-9 pt-[386px]">
                        <div className='flex flex-col justify-center ml-4 w-[50px] h-[50px] bg-[#E57B00] items-center hover:scale-110 duration-500' style={{ boxShadow: '0px 2px 16px rgba(229, 123, 0, 0.6)' }}>
                        <p className='tiers-font my-1 text-[#b6b4b4] text-2xl'>#6</p>
                        {/* <div className="bg-[#333333] w-full h-[5px]"></div> */}
                        </div>
                    </div>
                    <div className="pr-9 pt-[350px]">
                        <div className='flex flex-col justify-center ml-4 w-[75px] h-[75px] bg-[#ED8800] items-center hover:scale-110 duration-500' style={{ boxShadow: '0px 2px 16px rgba(237, 136, 0, 0.6)' }}>
                        <p className='tiers-font my-1 text-[#808080] text-4xl'>#5</p>
                        {/* <div className="bg-[#333333] w-full h-[10px] mt-2"></div> */}
                        </div>
                    </div>
                    <div className="pr-9 pt-[310px]">
                        <div className='flex flex-col justify-center ml-4 w-[100px] h-[100px] bg-[#F29600] items-center hover:scale-110 duration-500' style={{ boxShadow: '0px 2px 16px rgba(242, 150, 0, 0.6)' }}>
                        <p className='tiers-font my-1 text-[#595959] text-5xl'>#4</p>
                        {/* <div className="bg-[#333333] w-full h-[18px] mt-3"></div> */}
                        </div>
                    </div>
                    <div className="pr-9 pt-[210px]">
                        <div className='flex flex-col justify-center ml-4 w-[150px] h-[150px] bg-[#F7A500] items-center hover:scale-110 duration-500' style={{ boxShadow: '0px 2px 16px rgba(247, 165, 0, 0.6)' }}>
                        <p className='tiers-font my-1 text-[#333333] text-6xl py-3 '>#3</p>
                        <div className="bg-[#333333] w-full h-[30px] mt-1  items-start flex-col px-1" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }}><div className="border-b-[1px] flex p-2 border-[#ff9717]"></div></div>

                        </div>
                    </div>
                    <div className='flex flex-col ml-4 w-[300px] h-[300px] bg-[#FAB000] items-center hover:scale-110 duration-500' style={{ boxShadow:'2px 0px 26px rgba(250, 176, 0, 0.6)'}}>
                    <p className='tiers-font my-1 text-[#2b2a2a] text-4xl flex pb-1'>#2</p>
                    <a href='https://www.bitsila.com/' target="_blank">
                        <div className="rounded-2xl flex-col flex justify-center items-center    bg-slate-50 h-[135px] click w-[230px] mb-2" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }}>
                            <img src={Bitsila} alt="" className='h-[75px] w-[75px]'/>
                           <p className='text-[#fc4c04] font-bold border-b-2 border-spacing-y-6 border-white border-spacing-8 duration-500'>Bitsila</p>
                        </div>
                    </a>
                    <div className="bg-[#333333] pl-3 w-full p-3 mt-4" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.75)' }}>
                        <p className='font-bold text-sm text-[#a19c9c]'><span className=' border-b-2 text-lg  text-slate-50 border-[#ff9717] hover:scale-105 inline-flex duration-500'>Summer Intern</span>  &#8226; Innobits Solutions</p>
                        <p className='font-bold text-sm flex text-[#a19c9c]'>June 2021 - Aug 2021 (Bangalore, India)</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="pt-8">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold title-name text-[#FFFFE6] pt-3 flex justify-center" style={{textDecoration: 'underline'}}>My Tech Stack</h2>
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold cns-edu-title text-[#FFA86E] pt-3 pl-[205px]'><span className='border-b-4 border-spacing-y-6 hover:border-[#FFFFE6] border-spacing-8 duration-500 border-[#140021] px-1 inline'>Proficient</span></h3>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 md:pl-[225px] pl-[90px]">
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
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 md:pl-[225px] pl-[90px]">
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