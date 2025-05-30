
'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import img from '@/assets/images';
import Image from 'next/image';
import Particles from './ui/particles';

function Skil() { 
  const ref = useRef(null);
  useGSAP(() => {
    gsap.from(".con div", {
      y:-80,  
      delay:3, 
      duration:10,
      stagger:1, 
      opacity:0,
        scrollTrigger:{
            trigger:".skils", 
            start:"top 37%",
            end:"bottom 86%",
            scrub:3, 
        }
    });
  });
 
  return (
    <div>
        <div ref={ref} className="skils  relative min-h-[110vh] w-full capitalize overflow-hidden max-lg:pb-10    text-[white]">
 
          <Particles   className="absolute inset-0" quantity={100} ease={80} color={'#ffffff'} refresh />

          <h1 className=' ant logo text-center capitalize pt-6 font-bold text-[35px] max-md:text-[25px] p-[2vh] bg-transparent text-gray-300'>Things I m good at skills. </h1>
          <div className="skillwrapper defect1 h-[99%] w-full flex lg:items-center  justify-center ">
            <div className=' con flex flex-wrap w-full gap-8 lg:gap-14 mb-24 lg:mb-20 lg:w-[90%] justify-evenly lg:justify-center  '>

            <div className="skilsimgh border-[#ffffff10] inshadow shadow-2xl shadow-[black] w-[150px]  h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px] ">
        
              <Image loading="lazy"  className='drop-shadow-[0_15px_30px_#a855f7] h-[58%] w-[55%] ' src={img.python} alt=""  width={300} height={400}/>
              <h2 className=' mt-[10px] text-center font-[18px] bg-transparent'>python</h2>
            </div>
            <div className="skilsimgh border-[#ffffff1b] inshadow shadow-xl shadow-[black] w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1">
              <Image loading="lazy"  className='drop-shadow-[0_15px_30px_#a855f7] h-[50%] w-[50%] rounded-xl ' src={img.js} alt=""  width={300} height={400}/>
              <h2 className=' mt-[10px] text-center font-[18px] bg-transparent'>Javascript</h2>
            </div>
            <div className="skilsimgh border-[#ffffff1b] inshadow shadow-xl shadow-[black] w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]   react  ">
              <Image loading="lazy"  className='drop-shadow-[0_15px_30px_#a855f7] h-[58%] w-[60%] ' src={img.react} alt=""  width={300} height={400}/>
              <h2 className=' mt-[10px] text-center font-[18px] bg-transparent'> react</h2>
            </div>
            <div className="skilsimgh border-[#ffffff1b] inshadow shadow-xl shadow-[black] w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1">
              <Image loading="lazy"  className='drop-shadow-[0_15px_30px_#a855f7] h-[60%] w-[80%] ' src={img.node} alt=""  width={300} height={400}/>
              <h2 className=' mt-[10px] text-center font-[18px] bg-transparent'>node JS</h2>
            </div>

            <div className="skilsimgh border-[#ffffff1b] inshadow shadow-xl shadow-[black] w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1 mrg ps">
              <Image loading="lazy"  className='drop-shadow-[0_15px_30px_#a855f7] h-[52%] w-[55%] ' src={img.ts} alt=""  width={300} height={400}/>
              <h2 className=' mt-[10px] text-center font-[18px] bg-transparent'>Typescript</h2>
            </div>
            
            <div className="skilsimgh border-[#ffffff1b] inshadow shadow-xl shadow-[black] w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1 mrg ps">
              <Image loading="lazy"  className='drop-shadow-[0_15px_30px_#a855f7] h-[58%] w-[80%] ' src={img.nj} alt=""  width={300} height={400}/>
              <h2 className=' mt-[10px] text-center font-[18px] bg-transparent'>Next js</h2>
            </div>

            <div className="skilsimgh border-[#ffffff1b] inshadow shadow-xl shadow-[black] w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1">
              <Image loading="lazy"  className='drop-shadow-[0_15px_30px_#a855f7] h-[68%] w-[60%] ' src={img.java} alt=""  width={300} height={400}/>
              <h2 className=' mt-[10px] text-center font-[18px] bg-transparent'>Java</h2>
            </div>
            <div className="skilsimgh border-[#ffffff1b] inshadow shadow-xl shadow-[black] w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1">
              <Image loading="lazy"  className='drop-shadow-[0_15px_30px_#a855f7] h-[58%] w-[60%] ' src={img.c} alt=""  width={300} height={400}/>
              <h2 className=' mt-[10px] text-center font-[18px] bg-transparent'>C++</h2>
            </div>
            <div className="skilsimgh border-[#ffffff1b] inshadow shadow-xl shadow-[black] w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1">
              <Image loading="lazy"  className='drop-shadow-[0_15px_30px_#a855f7] h-[58%] w-[50%] ' src={img.mongo} alt='' width={300} height={400} />
              <h2 className=' mt-[10px] text-center font-[18px] bg-transparent'>Mongo DB</h2>
            </div>
            <div className="skilsimgh border-[#ffffff1b] inshadow shadow-xl shadow-[black] w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1 mrg ps">
              <Image loading="lazy"  className='drop-shadow-[0_15px_30px_#a855f7] h-[58%] w-[50%] ' src={img.ps} alt=""  width={300} height={400}/>
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>Photoshop</h1>
            </div>

            <div className="skilsimgh border-[#ffffff1b] inshadow shadow-xl shadow-[black] w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1 mrg ps">
              <Image loading="lazy"  className='drop-shadow-[0_15px_30px_#a855f7] h-[58%] w-[50%] ' src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png' alt=""  width={300} height={400}/>
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>Docker</h1>
            </div>

            <div className="skilsimgh border-[#ffffff1b] inshadow shadow-xl shadow-[black] w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1 mrg ps">
              <Image loading="lazy"  className='drop-shadow-[0_15px_30px_#a855f7] h-[58%] w-[50%] ' src={img.mysql} alt=""  width={300} height={400}/>
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>Mysql</h1>
            </div>

            <div className="skilsimgh border-[#ffffff1b] inshadow shadow-xl shadow-[black] w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1 mrg ps">
              <Image loading="lazy"  className='drop-shadow-[0_15px_30px_#a855f7] h-[58%] w-[75%] ' src={img.supabase} alt=""  width={300} height={400}/>
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>Firebase</h1>
            </div>
            <div className="skilsimgh border-[#ffffff1b] inshadow shadow-xl shadow-[black] w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1 mrg ps">
              <Image loading="lazy"  className='drop-shadow-[0_15px_30px_#a855f7] h-[58%] w-[50%] ' src={img.prisma} alt=""  width={300} height={400}/>
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>Prisma</h1>
            </div>
            <div className="skilsimgh border-[#ffffff1b] inshadow shadow-xl shadow-[black] w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1 mrg ps">
              <Image loading="lazy"  className='drop-shadow-[0_15px_30px_#a855f7] h-[68%] w-[86%] ' src={img.postgress} alt=""  width={300} height={400}/>
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>postgress</h1>
            </div>
            <div className="skilsimgh border-[#ffffff1b] inshadow shadow-xl shadow-[black] w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1 mrg ps">
              <Image loading="lazy"  className='drop-shadow-[0_15px_30px_#a855f7] h-[50%] w-[60%] ' src={img.appwriter} alt=""  width={300} height={400}/>
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>Appwrite</h1>
            </div>
            <div className="skilsimgh border-[#ffffff1b] inshadow shadow-xl shadow-[black] w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1 mrg ps">
              <Image loading="lazy"  className='drop-shadow-[0_15px_30px_#a855f7] h-[58%] w-[75%] ' src={img.gsap} alt=""  width={300} height={400}/>
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>Gsap</h1>
            </div>
 
            <div className="skilsimgh border-[#ffffff1b] inshadow shadow-xl shadow-[black] w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  mrg ht">
              <Image loading="lazy"  className='drop-shadow-[0_15px_30px_#a855f7] h-[50%] w-[70%] ' src={img.html} alt=""  width={300} height={400}/>
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>Html css</h1>
            </div>

            <div className="skilsimgh border-[#ffffff1b] inshadow shadow-xl shadow-[black] w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  mrg ht">
              <Image loading="lazy"  className='drop-shadow-[0_15px_30px_#a855f7] h-[58%] w-[61%] ' src={img.quary} alt=""  width={300} height={400}/>
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>tanstack query </h1>
            </div>
            <div className="skilsimgh border-[#ffffff1b] inshadow shadow-xl shadow-[black] w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  mrg ht">
              <Image loading="lazy"  className='drop-shadow-[0_15px_30px_#a855f7] h-[58%] w-[85%] ' src={img.redit} alt=""  width={300} height={400}/>
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>redis</h1>
            </div>


            <div className="skilsimgh border-[#ffffff1b] inshadow shadow-xl shadow-[black] w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  mrg ht">
              <Image loading="lazy"  className='drop-shadow-[0_15px_30px_#a855f7] h-[62%] w-[58%] ' src={img.expo} alt=""  width={300} height={400}/>
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>expo</h1>
            </div>
            <div className="skilsimgh border-[#ffffff1b] inshadow shadow-xl shadow-[black] w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  mrg ht">
              <Image loading="lazy"  className='drop-shadow-[0_15px_30px_#a855f7] h-[63%] w-[65%] ' src={img.rnative} alt=""  width={300} height={400}/>
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>React native</h1>
            </div>
            <div className="skilsimgh border-[#ffffff1b] inshadow shadow-xl shadow-[black] w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  mrg ht">
              <Image loading="lazy"  className='drop-shadow-[0_15px_30px_#a855f7] h-[63%] w-[85%] '  src={img.bullmq} alt=""  width={300} height={400}/>
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>BullMQ</h1>
            </div>

            <div className="skilsimgh border-[#ffffff1b] inshadow shadow-xl shadow-[black] w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  mrg ht">
              <Image loading="lazy"  className='drop-shadow-[0_15px_30px_#a855f7] h-[58%] w-[85%] ' src={img.nginx} alt=""  width={300} height={400}/>
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>Nginx</h1>
            </div>
            <div className="skilsimgh border-[#ffffff1b] inshadow shadow-xl shadow-[black] w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  mrg ht">
              <Image loading="lazy"  className='drop-shadow-[0_15px_30px_#a855f7] h-[40%] w-[60%] ' src={img.aws} alt=""  width={300} height={400}/>
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>AWS</h1>
            </div>


          </div>
          </div>
            
        </div>
 
    </div>
  )
}

export default Skil