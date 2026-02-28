'use client'
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import Particles from './ui/particles';
import ShinyText from './ui/shiny-border';
import Link from 'next/link';
gsap.registerPlugin(useGSAP);
function Follow() {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.from(".page6 div h1", {
        opacity: 0,
        filter: 'blur(2px)',
        stagger: 0.25,
        scrollTrigger: {
          trigger: ".page6 div h1  ",
          scrub: 0.3,
          start: "top 90%",
          end: "top 60%", 
        },
        y: 200,
        duration: 1,
      })
    },
    { scope: container }
  );
  return (

    <div ref={container} className="page6   lg:h-[105vh]  h-[60vh] w-full flex flex-col  relative">
      <Particles className="absolute inset-0" quantity={100} ease={80} color={'#ffffff'} refresh />
      <div className="cusor z-[9] absolute rounded-full flex items-center justify-center font-[18px] opacity-0 h-[50px] w-[50px] bg-[#00bbd4b0] ">hiii</div>

      <div className="textpartpage6 followtext !text-white max-md:-mt-32 capitalize overflow-hidden !uppercase h-full flex flex-col items-center justify-center font-bold followtext">
        <div className='  overflow-hidden  lg:h-[90px] h-[30px] '><h1 className="line-1 text-[#DBDADB]  followtext bg-transparent leading-none lg:text-[150px]  text-[50px]  ">you can get </h1></div>
        <div className='  overflow-hidden lg:-mt-10 -mt-4 lg:h-[140px] h-[70px] text-center flex items-center justify-center'><h1 className=" text-[#DBDADB]  followtext bg-transparent leading-none lg:text-[150px] text-[50px]  secondh2"> <span className=' line-2 '>in touch  </span> <a className='  highlight ' href="mailto:bishalkandi859494@gmail.com" target="_blank"><span className='line-2 highlight '>Via Mail</span></a></h1></div>
        <div className=' bg-red- overflow-hidden  lg:h-[160px] h-[70px] '><h1 className='line-3 text-[#DBDADB]   followtext bg-transparent leading-none lg:text-[150px] text-[50px] '>or <a href="https://instagram.com/bishal_tech" className="inns followtext !transition-all  " target="_blank">Instagram</a> </h1></div>

        <Link className='rounded-full backdrop-blur-[10px]  border border-white/20 bg-white/10' target="_blank" href={'https://www.linkedin.com/in/vishal-b-1ab8bb26a/'}>
          <ShinyText text="Say hii  👋🏻" disabled={false} speed={2} className='   py-2.5 hover:scale-[1.05] transition-all max-md:py-2 max-md:px-6 px-8 text-lg max-md:text-sm   ' />
        </Link>
      </div>
    </div>

  )
}

export default Follow
