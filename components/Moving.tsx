'use client'
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react'; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
function Moveing() {
    const container =  useRef<HTMLDivElement>(null);
    useGSAP( 
        () => {
          gsap.to(".movindtextdiv h1", {
            transform: "translateX(calc(-100% - 2vw - 4px))",
            duration: 10, // 
            // top: '50%',
            ease: "slow(0.2, 0.2, false)",  
            scrollTrigger: {
                trigger: ".movindtextdiv h1", 
                scrub: 0.7, 
            }
        });
    },
        { scope: container }
    );
  return (
    <div ref={container} className="movindtextdiv text-[#ffffffae] max-md:my-7 mt-10 leading-none lg:text-[200px] text-[130px] lg:h-[250px] overflow-hidden mb-[7vh] relative whitespace-nowrap z-[20] w-full ">
        <h1 className=' left-2 font-bold inline-block mr-[10px] logo'>Bishal !! Bishal  !! </h1>
        <h1 className=' left-2 font-bold inline-block mr-[10px] logo'>Bishal !! Bishal  !!</h1>
        <h1 className=' left-2 font-bold inline-block mr-[10px] logo'>Bishal !! Bishal  !!</h1>
        <h1 className=' left-2 font-bold inline-block mr-[10px] logo'>Bishal !! Bishal  !!</h1>
        <h1 className=' left-2 font-bold inline-block mr-[10px] logo'>Bishal !! Bishal  !!</h1> 
        
    </div>
  )
}

export default Moveing