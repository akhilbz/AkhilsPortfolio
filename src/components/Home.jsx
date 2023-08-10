import React from "react";
import KUTE from 'kute.js';

import { useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
    useEffect(() => {
        const tween = KUTE.fromTo(
          '#blob1',
          { path: '#blob1' },
          { path: '#blob2' },
          { repeat: 999, duration: 3000, yoyo: true }
        );
        tween.start();
      }, []); 
      useEffect(() => {
        const tween2 = KUTE.fromTo(
          '#blob3',
          { path: '#blob3' },
          { path: '#blob4' },
          { repeat: 999, duration: 3000, yoyo: true }
        );
        tween2.start();
      }, []); 
      useEffect(() => {
        const tween3 = KUTE.fromTo(
          '#blob5',
          { path: '#blob5' },
          { path: '#blob6' },
          { repeat: 999, duration: 3000, yoyo: true }
        );
        tween3.start();
      }, []); 
      useEffect(() => {
        const tween4 = KUTE.fromTo(
          '#blob7',
          { path: '#blob7' },
          { path: '#blob8' },
          { repeat: 999, duration: 3000, yoyo: true }
        );
        tween4.start();
      }, []); 
    return (
        <>
        <div name="home" className="w-screen h-screen bg-[#121212] z-10 px-8 sm:px-0 flex justify-center">
            <div className="w-fit lg:mx-auto sm:ml-9 ml-0 px-4 flex flex-col justify-center h-[750px] ">
                <div className="flex">
                <p className="text-[#87CEFA] text-2xl sm:text-3xl font-light z-50">Welcome!&nbsp;</p>
                <p className="text-[#87CEFA] text-2xl sm:text-3xl font-light z-50">My name is </p>
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl text-white sm:font-semibold title-name z-50">Akhilesh Bitla</h1>
                <div className="parallelogram-top my-2 lg:w-[800px] md:w-[700px] w-[350px] h-[45px] sm:w-[580px] sm:h-[60px] lg:h-[85px] z-10 overflow-hidden"><h2 className="text-3xl sm:text-5xl lg:text-7xl sm:h-[65px] pt-1 sm:pr-0 md:pr-3 text-[#333333] sm:font-bold title-name text-center z-10">CS Student @ UT Austin</h2></div>
                <div className="parallelogram-btm my-1 md:my-3 md:mx-[-10px] w-[325px] h-[125px] lg:w-[750px] md:w-[650px] lg:h-[85px] md:h-[100px] sm:w-[550px] z-10 overflow-hidden"><p className="py-2 px-4 text-base sm:text-xl mx-[10px] text-white font-medium max-w-[750px] z-10">I'm passionate about designing and developing software applications that have a tangible 
                and meaningful <span className="highlight-impact top-2 font-[Anton] text-2xl text-white" style={{ position: 'relative', top: '2px' }}>IMPACT</span> on people's everyday lives.</p></div>
                <section className="grey-blob lg:flex hidden">
                <svg className="blob-motion" id="visual" viewBox="0 0 1000 800" width="1000" height="800" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                    <g transform="translate(515.2660999381692 354.31824078722696)"><path id="blob1" d="M153.1 -184.3C199.1 -143.9 237.4 -96.3 263.7 -33.7C290.1 28.9 304.4 106.5 279 171.1C253.6 235.7 188.5 287.5 112.7 319.3C36.8 351.1 -49.8 363 -128.1 339.8C-206.4 316.6 -276.4 258.3 -305.7 186.6C-335 115 -323.6 30 -294.8 -37.8C-266 -105.6 -219.8 -156.2 -167.7 -195.6C-115.7 -234.9 -57.9 -262.9 -2.1 -260.4C53.6 -257.8 107.1 -224.7 153.1 -184.3" fill="#212020"></path></g>
                    <g transform="translate(499.9060553465455 403.6677237895907)" style={{visibility: "hidden"}}><path id="blob2" d="M169 -181.1C230.9 -149.5 301.1 -107.5 331.9 -42.3C362.7 22.9 354.1 111.2 308.5 166.9C263 222.6 180.4 245.7 106.4 257.5C32.4 269.4 -33.1 270 -94.3 251.1C-155.4 232.3 -212.4 193.9 -261.6 137.2C-310.9 80.5 -352.4 5.5 -349.8 -70.8C-347.2 -147.2 -300.6 -224.9 -234.9 -255.8C-169.3 -286.7 -84.6 -270.9 -15.5 -252.4C53.6 -233.8 107.1 -212.7 169 -181.1" fill="#212020"></path></g>
                </svg>
                </section>
                <section className="grey-blob-2 lg:hidden md:flex hidden">
                <svg className="blob-motion2 overflow-hidden" id="visual" viewBox="0 0 1000 700" width="1000" height="700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                    <g transform="translate(529.9627184967378 323.1564818521249)"><path id="blob3" d="M134.6 -157.6C175.5 -126.1 210.4 -84.7 232.5 -30.4C254.7 23.8 264.2 90.9 236.4 134.1C208.7 177.4 143.7 196.8 78.7 223.5C13.8 250.3 -51.1 284.4 -111.4 275.6C-171.7 266.9 -227.4 215.2 -265.6 152C-303.7 88.7 -324.2 14 -307.7 -49.9C-291.3 -113.8 -237.9 -166.8 -180.4 -195.4C-123 -223.9 -61.5 -228 -7.3 -219.2C46.9 -210.5 93.7 -189.1 134.6 -157.6" fill="#212020"></path></g>
                    <g transform="translate(481.60641089235617 315.768074843149)" style={{visibility: "hidden"}}><path id="blob4" d="M162.9 -173.9C220.3 -145.9 282.5 -103.3 304.6 -43.9C326.8 15.5 308.9 91.7 271.3 156.4C233.7 221 176.3 274 115.4 280.3C54.4 286.5 -10.2 246 -72.6 216.1C-135 186.2 -195.3 166.9 -233.7 123.6C-272.1 80.4 -288.7 13.3 -269.5 -39.1C-250.2 -91.6 -195.2 -129.3 -144.3 -158.5C-93.4 -187.7 -46.7 -208.3 3 -211.9C52.7 -215.5 105.4 -202 162.9 -173.9" fill="#212020"></path></g>
                    </svg>
                </section>
                <section className="grey-blob-4 md:hidden sm:flex hidden">
                <svg className="blob-motion4" id="visual" viewBox="0 0 640 600" width="640" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                    <g transform="translate(294.2016216777573 330.4574790555331)"><path id="blob7" d="M173.5 -207.7C222 -166.2 256.2 -108.7 253.7 -54.8C251.1 -1 211.7 49.3 174 87.2C136.3 125.1 100.2 150.6 56.9 174C13.7 197.3 -36.8 218.5 -81.7 208.9C-126.6 199.2 -165.9 158.9 -185.3 112.9C-204.8 67 -204.3 15.5 -199.3 -38.9C-194.2 -93.4 -184.5 -150.9 -150.5 -194.9C-116.6 -238.9 -58.3 -269.5 2.1 -272C62.6 -274.6 125.1 -249.1 173.5 -207.7" fill="#212020"></path></g>
                    <g transform="translate(301.86845747028667 305.9124353166503)" style={{visibility: "hidden"}}><path id="blob8" d="M132.6 -170.8C165.7 -130.2 182.3 -82.6 200.8 -28C219.2 26.6 239.5 88.3 221.9 136.9C204.3 185.5 148.9 221 94.1 227.3C39.4 233.7 -14.5 210.8 -59.6 185.1C-104.8 159.5 -141.2 131 -164.6 93.5C-187.9 56.1 -198.4 9.6 -188.9 -31.4C-179.4 -72.4 -149.9 -108 -115.1 -148.4C-80.4 -188.8 -40.2 -233.9 4.8 -239.6C49.7 -245.2 99.4 -211.5 132.6 -170.8" fill="#212020"></path></g>
                </svg>
                </section>
                <section className="grey-blob-3 sm:hidden flex">
                <svg className="blob-motion3" id="visual" viewBox="0 0 470 470" width="470" height="470" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                    <g transform="translate(209.9342386654212 266.29499212247936)"><path id="blob5" d="M144.3 -148.9C177.8 -110.8 189.4 -55.4 189 -0.4C188.7 54.7 176.4 109.4 142.9 129C109.4 148.5 54.7 133 11.7 121.4C-31.3 109.7 -62.7 101.9 -88.9 82.3C-115 62.7 -136 31.3 -138.6 -2.6C-141.2 -36.5 -125.4 -73.1 -99.2 -111.2C-73.1 -149.4 -36.5 -189.2 9.4 -198.6C55.4 -208.1 110.8 -187.1 144.3 -148.9" fill="#212020"></path></g>
                    <g transform="translate(268.46841595525086 204.94216363067758)" style={{visibility: "hidden"}}><path id="blob6" d="M118.5 -116.2C140.3 -96.6 135.7 -48.3 134.7 -0.9C133.8 46.4 136.5 92.9 114.7 130.2C92.9 167.5 46.4 195.8 3.3 192.5C-39.8 189.2 -79.7 154.3 -118.8 117C-158 79.7 -196.5 39.8 -202 -5.5C-207.6 -50.9 -180.2 -101.8 -141 -121.4C-101.8 -141 -50.9 -129.3 -1.3 -128C48.3 -126.7 96.6 -135.8 118.5 -116.2" fill="#212020"></path></g>
                </svg>
                </section>
            </div>
        </div>
        <div className="home-about-spacer home-about-layer"></div>
        </>
    )
}

export default Home;