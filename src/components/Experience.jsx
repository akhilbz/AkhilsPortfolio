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
const Experience = () => {
  return (
    <>
    <div className='bg-[#140021]'>
        <div className="flex flex-col justify-center w-full h-full pb-6">
            <div className="items-center flex flex-col justify-center">
                <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold title-name flex justify-center text-[#a18fd8]'>Experience</h1>
            </div>
            <div className="w-full h-[fit-content] flex-col ">  
                <div className="flex justify-between pr-[125px] pb-[50px] mt-8">
                <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold title-name text-[#FFFFE6] pb-7 sm:pl-[80px] inline-flex sm:justify-start ml-2" style={{textDecoration: 'underline'}}>Internships</h2>
                    <div className='flex flex-col pt-2 justify-start ml-4 w-[400px] h-[400px] bg-[#FFC300] items-center'>
                        <h1 className='tiers-font text-7xl flex py-3'>Tier 1</h1>
                        <img src={Eyes} className='w-[200px] h-[200px] py-2'/>
                        <p className='font-bold p-2 text-lg'>Searching for my next, <span className='text-[#4f4b4b] text-xl'>notable</span> <span className='border-b-2 border-[#ff9717] text-2xl text-slate-50'>Internship.</span></p>
                    </div>
                </div>
                
                <div className="flex justify-end pr-[318px] ">
                    
                    <div className="pr-9 pt-[390px]">
                        <div className='flex justify-center ml-4 w-[20px] h-[20px] bg-[#A63800] items-center'>
                        <p className='tiers-font my-1 text-[#FFFFE6]' style={{ fontSize: '0.6rem'}}>T8</p>
                        </div>
                    </div>
                    <div className="pr-9 pt-[398px]">
                        <div className='flex justify-center ml-4 w-[30px] h-[30px] bg-[#DC6E00] items-center'>
                        <p className='tiers-font my-1 text-[#CCCCCC]' style={{ fontSize: '1rem'}}>T7</p>
                        </div>
                    </div>
                    <div className="pr-9 pt-[386px]">
                        <div className='flex justify-center ml-4 w-[50px] h-[50px] bg-[#E57B00] items-center'>
                        <p className='tiers-font my-1 text-[#b6b4b4] text-2xl'>T6</p>
                        </div>
                    </div>
                    <div className="pr-9 pt-[350px]">
                        <div className='flex justify-center ml-4 w-[75px] h-[75px] bg-[#ED8800] items-center'>
                        <p className='tiers-font my-1 text-[#808080] text-3xl'>T5</p>
                        </div>
                    </div>
                    <div className="pr-9 pt-[310px]">
                        <div className='flex justify-center ml-4 w-[100px] h-[100px] bg-[#F29600] items-center'>
                        <p className='tiers-font my-1 text-[#595959] text-4xl'>T4</p>
                        </div>
                    </div>
                    <div className="pr-9 pt-[210px]">
                        <div className='flex justify-center ml-4 w-[150px] h-[150px] bg-[#F7A500] items-center'>
                        <p className='tiers-font my-1 text-[#333333] text-3xl'>Tier 3</p>
                        </div>
                    </div>
                    <div className='flex justify-center ml-4 w-[300px] h-[300px] bg-[#FAB000] items-end'>
                        {/* <img src={Innobits} alt="" /> */}
                        <p className='tiers-font my-1 text-[#2b2a2a] text-2xl'>Tier 2</p>
                    </div>
                </div>
            </div>
            <div className="pt-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold title-name text-[#FFFFE6] pt-3 sm:pl-[80px] flex justify-center sm:justify-start ml-2" style={{textDecoration: 'underline'}}>My Tech Stack</h2>
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold cns-edu-title text-[#FFA86E] pt-3 sm:pl-[240px] pl-[215px]'><span className='border-b-4 border-spacing-y-6 hover:border-[#FFFFE6] border-spacing-8 duration-500 border-[#140021] px-1 inline'>Proficient</span></h3>
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