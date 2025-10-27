'use client'
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ShinyText from './ui/shiny-border';
gsap.registerPlugin(useGSAP);
function Loader() {
  useGSAP(() => {
    var t1 = gsap.timeline();
     gsap.from(".bghole", {
        y: 50,
        x: -50,
        z:100,
        opacity:0,
        duration:2,
        // filter: 'blur(400px)',
    });
    gsap.from(".globe2", {
      y: -550,
      x: -550,
      z: 100,
      opacity: 0,
      duration: 2,
      // filter: 'blur(400px)',
    });

    t1.from(".load h1 span", {
      opacity: 1,
      filter: 'blur(6px)',
    });
    t1.from(".load h1 span", {
      x: 7,
      stagger: .3,
      opacity: 1,
    });

    t1.to(".load h1 span", {
      x: -20,
      stagger: .3,
      opacity: 0,
      filter: 'blur(4px)',
    });

    // t1.to(".bghole", {
    //   y: 50,
    //   x: 50,
    //   z: 100,
    //   opacity: 0,
    //   duration: 1,
    //   filter: 'blur(200px)',
    // });

    t1.to(".globe2", {
      y: 1050,
      x: 1050,
      z: 400,
      opacity: 0,
      duration: 1,
      filter: 'blur(400px)',
    }, "-=1");

    t1.to(".load", {
      duration:2,
      opacity:0,
      display:"none"
    }, "-=1" );


    });

  return (
    <div className='load  bg-[#080312] w-full flex items-center justify-center flex-col text-white h-screen fixed top-0 left-0 z-[100]  opacity-1'>

      <div className="absolute rounded-full globe globe2 -top-[100px] max-md:-top-[50px] max-md:-left-[360px] -left-[500px] max-md:w-[600px] max-md:h-[600px] h-[1300px] w-[1300px]  border-[8px]  blur-[18px] border-[#ffffff] heroshadow2 bg-[#daa66f17]"></div>
      {/* <div className="absolute rounded-full globe globe2 -top-[100px] max-md:top-[150px] max-md:left-[150px] -left-[500px] max-md:w-[200px] max-md:h-[200px] h-[1300px] w-[1300px]  border-[8px]  blur-[18px] heroshadow2 "></div> */}

      {/* <div className="bghole opacity-1 shadow-[37px_0px_61px_50px_#ff7300] max-md:shadow-[31px_4px_40px_34px_#ff7300]  max-sm:h-[270px] w-[370px] h-[370px] max-sm:w-[270px]  max-lg:h-[400px] max-lg:w-[400px]     top-[52%] max-md:top-[38%] max-md:left-[10%] left-[26%]
       blur-[40px] max-md:blur-[30px] rounded-full bg-[#eda97b] ">
        <div className='blackbar flex items-center justify-center shadow-[8px_-9px_90px_23px_#BC1103] bg-[#c94016] rounded-[30px] max-md:w-[230%] w-[280%] max-md:h-[60px] h-[100px] blur-[ 20px] max-md:blur-[5px] absolute top-[110px] max-md:top-[70px] max-md:-left-[160px] -left-[260px] -rotate-12'> </div>
        <div className=' h-[300px] w-[300px] max-md:h-[180px] max-md:w-[180px] z-[0] bg-black absolute top-[4px] left-[10px] rounded-full w-[300 px] max-md:mt-[11px]  ml-[14px] mt-[-4px] '></div>
      </div> */}

      <h1 className='ant !text-3xl flex gap-2 items-center '>
        <span className='font-bold opacity-0  inline-block'>  <ShinyText text="&lt;" disabled={false} speed={2} className='   hover:scale-[1.05] transition-all font-bold  ' /></span>
        <span className='ant  opacity-0 text-2xl  inline-block'><ShinyText text="Just " disabled={false} speed={2} className='ant  hover:scale-[1.05] transition-all font-bold  ' />   </span>
        <span className='ant  opacity-0 text-2xl inline-block'><ShinyText text="Coaded" disabled={false} speed={2} className='ant  hover:scale-[1.05] transition-all font-bold  ' />  </span>
        <span className='  ant opacity-0 text-2xl inline-block'><ShinyText text="Things" disabled={false} speed={2} className='ant  hover:scale-[1.05] transition-all font-bold  ' /> </span>
        <span className=' opacity-0 text-xl inline-block  font-bold'> <ShinyText text="/ &gt;" disabled={false} speed={2} className='   hover:scale-[1.05] transition-all font-bold  ' />  </span>
      </h1>

    </div>
  )
}

export default Loader