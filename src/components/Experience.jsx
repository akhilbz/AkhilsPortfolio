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
const Experience = () => {
  return (
    <div className='bg-[#140021]'>
        <div className="flex flex-col justify-center w-full h-full pb-6">
            <div className="items-center flex flex-col justify-center">
                <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold title-name flex justify-center text-[#a18fd8] '>Experience</h1>
            </div>
            <div className="">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold title-name text-[#FFFFE6] pt-3 sm:pl-[80px] flex justify-center sm:justify-start ml-2" style={{textDecoration: 'underline'}}>Internships</h2>

            </div>
            <div className="">
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
  );
};

export default Experience;