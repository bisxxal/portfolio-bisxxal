"use client";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Particles from './ui/particles'; 
gsap.registerPlugin(useGSAP);

function AboutPage() {

  useGSAP(() => {
    var t1 = gsap.timeline();
    
    t1.from(".me", {
      y: -100,
      duration: 6,
      filter: "blur(25px)",
      stagger: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".abtpg",
         start: "top 75%",
      end: "top 30%",
        scrub: 3,
      }
    });
    t1 .from(".me2", {
     y: 100,
    opacity: 0,
    filter: "blur(15px)",
    stagger: 0.15,
    ease: "power3.out",
     scrollTrigger: {
        trigger: ".abtpg",
         start: "top 75%",
      end: "top 30%",
        scrub: 0.3,
      }
  }, "-=0.4");

   t1 .from(".devp", {
     y: -100,
    opacity: 0,
    filter: "blur(15px)",
    stagger: 0.15,
    ease: "power3.out",
     scrollTrigger: {
        trigger: ".abtpg",
         start: "top 75%",
      end: "top 30%",
        scrub: 0.3,
      }
  } );
    
  }); 

  return (
    <div className="abtpg  relative max-md:h-[70vh] max-md:overflow-x-hidden h-[90vh] mt-12 max-md:mt-20 flex flex-col justify-evenly "  >
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={'#ffffff'}
        refresh
      />
      {/* //Blackhole */}
      <div className=" shadow-[37px_0px_61px_50px_#ff7300] max-md:shadow-[31px_4px_40px_30px_#ff7300] circlemove max-sm:h-[240px] w-[370px] h-[370px] max-sm:w-[240px]  max-lg:h-[400px] max-lg:w-[400px]   absolute top-[52%] max-md:top-[38%] max-md:left-[10%] left-[26%]
       blur-[40px] max-md:blur-[30px] rounded-full bg-[#eda97b] ">
        <div className='blackbar flex items-center justify-center shadow-[8px_-9px_90px_23px_#BC1103] bg-[#c94016] rounded-[30px] max-md:w-[250%] w-[280%] max-md:h-[60px] h-[100px] blur-[ 20px] max-md:blur-[5px] absolute top-[110px] max-md:top-[70px] max-md:-left-[160px] -left-[260px] -rotate-12'> </div>
        <div className=' h-[300px] w-[300px] max-md:h-[180px] max-md:w-[180px] z-[0] bg-[#090414] absolute top-[4px] left-[10px] rounded-full w-[300 px] max-md:mt-[11px]  ml-[14px] mt-[-4px] '></div>
      </div>
     
      <h1 className="  me ant max-md:text-6xl  max-md:mt-[0px] mt-[60px] !max-[385px]:text-2xl max-md:mb-14 text-8xl font-extrabold text-center max-md:pt-4 logo ">What i do ?:</h1>
      <div className="z-[10] dev ant text-[#ffffffc7] max-lg:text-3xl max-md:text-xl max-[385px]:text-lg max-md:-mt-24 -mt-20 text-center text-[40px] leading-[45px] text-4x w-[85%] h-full flex flex-col items-center justify-center mx-auto font-bold">
        <h1 className=' me2 ant uppercase highlight2 '>Full-Stack , DevOps & Gen-AI Engineer specializing in high-performance code and scalable architectures</h1>
       
        <p className="z-[10] devp ant leading-7 !tracking-[1px] max-md:text-base text-2xl text-gray-400 max-md:pt-8 pt-16 italic max-lg:text-xl">
I ensure high availability and performance using Docker and AWS . Powered by Redis, Kafka, and BullMQ for seamless data and task management, I apply modern DevOps practices to solve complex scaling challenges.
        </p>
        
      </div> 
    </div>
  );
}

export default AboutPage;