'use client'
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
function Loader() {
    useGSAP(() => {
        var t1 = gsap.timeline(); 
        t1.from(".load h1 span", {
          opacity:1,
          filter: 'blur(6px)',
        });
        t1.from(".load h1 span", {
            x:7,   
            stagger:.3,
            opacity:1,
        });
        t1.to(".load h1 span", {
            x:-20,
            stagger:.3,
            opacity:0,
            // display:'hidden',
            filter: 'blur(4px)',
        });
        t1.to(".load h2", {  
          opacity:1,
          delay:0.3,
          duration:2,
           fontSize: '700rem',
        });
 
        t1.to(".load", {
          delay:-1,
          duration:2,
          opacity:0,
          display:"none"
        });
      });
  return (
    <div className='load bg-[#080312] w-full flex items-center justify-center text-white h-screen fixed top-0 left-0 z-[100]  opacity-1'>
        <h1 className=' text-xl '> <span className=' opacity-0  inline-block'> &lt;</span>  <span className=' opacity-0 text-xl inline-block'>   Just</span> <span className=' opacity-0 text-xl inline-block'>Coaded</span> <span className=' opacity-0 text-xl inline-block'> Things</span>  <span className=' opacity-0 text-xl inline-block'> / &gt;</span> </h1>
      <h2 className=' max-lg:mt-24 opacity-0 text-[#ffffffc7] text-xl font-bold '>B</h2>
    </div>
  )
}

export default Loader