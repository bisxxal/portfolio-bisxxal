//@ts-nocheck
'use client'
import VanillaTilt from 'vanilla-tilt';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";  
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const container = useRef<HTMLDivElement>(null); 
  const element = useRef<HTMLDivElement>(null);

  
  useGSAP(() => {
    gsap.from(".secondftr h2", {
      y:-500,  
      delay:2,
      duration:36,
      stagger:2,
      opacity:0,
      filter: "blur(25px)",
        scrollTrigger:{
            trigger:".footer", 
            start:"top 47%",
            end:"top 46%",
            scrub:3
        }
    });
  });
  
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.tilt')) as HTMLElement[];
    VanillaTilt.init(elements, {
      max: 6,
      speed: 1000,
      perspective: 800,
      glare: true,
      "max-glare": 0.5,
      easing: "cubic-bezier(.03,.98,.52,.99)",
    });
 
    return () => {
      elements.forEach(element => {
        if ((element as any).vanillaTilt) {
          (element as any).vanillaTilt.destroy();
        }
      });
    };
  }, []);
 
  return (
    <div  ref={container} className=' footer bg-[#121925 w-full overflow-hidden footer flex flex-col justify-around h-[78vh] lg:h-screen '>
      <div className=" flex flex-col justify-center items-center    text-center font-bold ">
        <Link href={'/contact'} className= 'secondftr text-[110px] opacity-100 flex  overflow-hidden max-md:text-[90px] lg:text-[250px] leading-none'>
          <h2>C</h2><h2>O</h2><h2>N</h2><h2>T</h2><h2>A</h2>
          <h2>C</h2><h2>T</h2>
        </Link>
        <h1 className=' w-[80%]  text-gray-500 lg:w-[27%] mx-auto rounded-full  text-[30px]'>
        Me,  I am avalivale for Work
        </h1>
      </div>

<div className=' flex items-center max-md:flex-wrap max-md:w-[90%] max-md:gap-5 max-md:mx-auto justify-around'>

   <a href="https://github.com/bisxxal" ref={element} className= " inshadow  frame d-pointer h-52 max-md:h-36  w-44 max-md:w-[140px] lg:w-52 bg-[#0D121B] rounded-3xl  lg:rounded-[40px] hover:bg-black flex items-center justify-center tilt " data-tilt data-tilt-max="50" data-tilt-speed="1000" data-tilt-perspective="500">
      <div className=' tilt-child flex items-center justify-center flex-col text-xl capitalize gap-3' >
          <FaGithub />
          <h1 >git hub</h1>
        </div>
      </a>
   <a href='https://www.linkedin.com/in/vishal-b-1ab8bb26a/' ref={element} className= " inshadow  frame d-pointer h-52 max-md:h-36  w-44 max-md:w-[140px] lg:w-52 bg-[#0D121B] rounded-3xl  lg:rounded-[40px] hover:bg-[#0A66C2] flex items-center justify-center tilt " data-tilt data-tilt-max="50" data-tilt-speed="1000" data-tilt-perspective="500">
      <div className=' tilt-child flex items-center justify-center flex-col text-xl capitalize gap-3' >
          <CiLinkedin />
          <h1 >linked in</h1>
        </div>
      </a>
   <a href='https://instagram.com/bisxxal' ref={element} className= "z inshadow  frame d-pointer h-52 max-md:h-36  w-44 max-md:w-[140px] lg:w-52 bg-[#0D121B] rounded-3xl  lg:rounded-[40px] ins flex items-center justify-center tilt " data-tilt data-tilt-max="50" data-tilt-speed="1000" data-tilt-perspective="500">
      <div className=' tilt-child flex items-center justify-center flex-col text-xl capitalize gap-3' >
          <FaInstagram />
          <h1 >instagram</h1>
       
        </div>
      </a>
   <a href='mailto:bishalkandi859494@gmail.com' ref={element} className= " inshadow  frame d-pointer h-52 max-md:h-36  w-44 max-md:w-[140px] lg:w-52 bg-[#0D121B] rounded-3xl   lg:rounded-[40px]   flex items-center justify-center tilt mail" data-tilt data-tilt-max="50" data-tilt-speed="1000" data-tilt-perspective="500">
      <div className=' tilt-child flex items-center justify-center flex-col text-xl capitalize gap-3' >
            <SiGmail />
          <h1 >Mail</h1> 
        </div>
      </a>
</div>
<div className="logo3 text-gray-500  flex items-center  justify-center text-[34px] lowercase ">
    <h1 className=' text-base mx-3'>Made By</h1>  <h2 className='animate-gradient max-lg:text-[25px] '>Bishal</h2> <h1 className=' mx-3 text-base'>With ❤️ </h1>
    </div> 
    </div>
  );
}

export default Footer;
