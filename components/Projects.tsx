'use client'
import React from 'react' 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'; 
import img from '@/assets/images';
import Image from 'next/image';
gsap.registerPlugin(useGSAP);
function Projects() {

  useGSAP(() => {
    gsap.from(".pg7div h1", {
      x:-300,  
      delay:2,
      duration:16,
      stagger:2,
      opacity:0,
        scrollTrigger:{
            trigger:".project", 
            start:"top 47%",
            end:"top 56%",
            scrub:3, 
        }
    });
  });

  return (
    <>
    <div className='w-full footer project overflow-hidden h-[70vh] lg:h-screen  bg-transparent z-[2]  '>
        <div className="page7 relative h-[70vh] lg:h-screen flex items-center flex-col bg-[#7E8389 ">
          <div className="pg7div">
            <h1 className='logo2 absolute leading-none  max-md:top-1/4 text-[#ffffff66]  w-full left-0 lg:left-[46px] font-bold lg:text-[290px] text-[100px] mt-10  '>
            My Work Samples</h1>

          </div>
          <div className="myworkdiv max-lg:flex-co h-[700px] lg:h-[85vh] mt-[20px] flex items-center gap-2 lg:gap-4  justify-center rounded- overflow-hidden z-[2]">
            <Image loading="lazy" className=' inshadow blur-[2px] hover:blur-none hover:opacity-[1] rounded-xl h-[57%] object-cover w-[10vw] border border-[#ffffff8c] hover:w-[55%] hover:rounded-3xl lg:hover:w-[59%] hover:h-[30%] lg:hover:h-[60%]' src={img.w1} alt=""/>
            <Image loading="lazy" className=' inshadow blur-[2px] hover:blur-none hover:opacity-[1] rounded-xl h-[57%] object-cover w-[10vw] border border-[#ffffff8c] hover:w-[55%] hover:rounded-3xl lg:hover:w-[59%] hover:h-[30%] lg:hover:h-[60%]' src={img.w2} alt=""/>
            <Image loading="lazy" className=' inshadow blur-[2px] hover:blur-none hover:opacity-[1] rounded-xl h-[57%] object-cover w-[10vw] border border-[#ffffff8c] hover:w-[55%] hover:rounded-3xl lg:hover:w-[59%] hover:h-[30%] lg:hover:h-[60%]' src={img.w3} alt=""/>
            <Image loading="lazy" className=' inshadow blur-[2px] hover:blur-none hover:opacity-[1] rounded-xl h-[57%] object-cover w-[10vw] border border-[#ffffff8c] hover:w-[60%] hover:rounded-3xl lg:hover:w-[59%] hover:h-[30%] lg:hover:h-[60%]' src={img.w4} alt=""/>
            <Image loading="lazy" className=' inshadow blur-[2px] hover:blur-none hover:opacity-[1] rounded-xl h-[57%] object-cover w-[10vw] border border-[#ffffff8c] hover:w-[60%] hover:rounded-3xl lg:hover:w-[59%] hover:h-[30%] lg:hover:h-[60%]' src={img.w5} alt=""/>
          </div>
          <a  className=' z-10' target='_blank' href='https://github.com/bisxxal'> 
          <h1 className=' text-[40px] font-bold pb-10 text-gray-400 ' >See all my works </h1>
          </a>
          
        </div>
    </div>
    </>
  )
}

export default Projects