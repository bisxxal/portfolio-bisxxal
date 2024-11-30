'use client'
import React from 'react' 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'; 
import { useRef } from 'react';
import { RainbowButton } from './ui/rainbow-button';
import Particles from './ui/particles';
gsap.registerPlugin(useGSAP);

function Follow() {

  const container = useRef<HTMLDivElement>(null);
  useGSAP(
      () => {
        gsap.from(".page6 div h1", {
          opacity: 0, 
          filter: 'blur(2px)',
          stagger: 2,
          delay:1,
          scrollTrigger: {
            trigger: ".page6 div h1  ",
            scrub:3, 
            end:"top 50%"
          },
          y: 200,
          duration:1000,
        })
      },
      { scope: container }
  );
  return (
 
           <div ref={container} className="page6 max-md:h-[60vh] lg:h-[105vh] h-[70vh] w-full flex flex-col  relative">
        <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={'#ffffff'}
        refresh
      />
          <div className="cusor z-[9] absolute rounded-full flex items-center justify-center font-[18px] opacity-0 h-[50px] w-[50px] bg-[#00bbd4b0] ">hiii</div>
          <div className="textpartpage6 capitalize overflow-hidden h-full flex flex-col items-center justify-center font-bold ">

            <div className='  overflow-hidden  lg:h-[150px] h-[70px] '><h1 className=" text-[#ffffff91] logo bg-transparent leading-none lg:text-[150px]  text-[50px] fisth1">you can get in </h1></div>
            <div className='  overflow-hidden  lg:h-[150px] h-0px] text-center '><h1 className=" text-[#ffffff91]   bg-transparent leading-none lg:text-[150px] text-[50px] secondh2"> <span className=' logo'>touch with me</span> <a className=' maill !transition-all hover:font-extrabold ' href="mailto:bishalkandi859494@gmail.com" target="_blank"><span className='logo'>Mail</span></a></h1></div>
            <div className=' bg-red- overflow-hidden  lg:h-[160px] h-[70px] '><h1 className=' text-[#ffffff91] logo bg-transparent leading-none lg:text-[150px] text-[50px] '>or <a href="https://instagram.com/bisxxal?igshid=OGQ5ZDc2ODk2ZA==" className="inns !transition-all hover:font-extrabold"  target="_blank">Instagram</a> </h1></div>
         
  <RainbowButton className=' inshadow rounded-full font-semibold  px-10 !bg-transparent '>  <a href="https://www.linkedin.com/in/vishal-b-1ab8bb26a/" className="inns !transition-all hover:font-extrabold"  target="_blank">Say hii 👋</a></RainbowButton>
          </div>

        
         </div>
 
  )
}

export default Follow