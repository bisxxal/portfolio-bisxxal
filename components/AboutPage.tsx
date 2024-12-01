 
"use client";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react'; 
import Particles from './ui/particles';
gsap.registerPlugin(useGSAP);

function AboutPage() {

  useGSAP(() => {
    var t1 = gsap.timeline();
    t1.from(".circlemove", {
      y:-100,  
      x:200,
      delay:2,
      duration:6,
      filter: "blur(55px)",
      stagger:2,
      opacity:0,
        scrollTrigger:{
            trigger:".abtpg", 
            start:"top 47%",
            end:"top 56%",
            scrub:3, 
        }
    });
    t1.from(".me", {
      y:-100,  
      delay:2,
      duration:6,
      filter: "blur(25px)",
      stagger:2,
      opacity:0,
        scrollTrigger:{
            trigger:".abtpg", 
            start:"top 47%",
            end:"top 56%",
            scrub:3, 
        }
    });
    t1.from(".dev h1", {
      // x:-300
      delay:2,
      duration:2,
      filter: "blur(25px)",
      stagger:2,
      opacity:0,
        scrollTrigger:{
            trigger:".abtpg", 
            start:"top 47%",
            end:"top 56%",
            scrub:3, 
        }
    });
    t1.from(".devp", {
      // x:-300,  
      delay:2,
      duration:2,
      filter: "blur(25px)",
      stagger:2,
      opacity:0,
        scrollTrigger:{
            trigger:".abtpg", 
            start:"top 47%",
            end:"top 56%",
            scrub:3, 
        }
    });
    t1.from(".devp2", {
      // x:-300,  
      delay:2,
      duration:2,
      filter: "blur(25px)",
      stagger:2,
      opacity:0,
        scrollTrigger:{
            trigger:".abtpg", 
            start:"top 47%",
            end:"top 56%",
            scrub:3, 
        }
    });
  });

  return (
    <div className="abtpg relative   max-md:h-[90vh] max-md:overflow-x-hidden h-[110vh] mt-12 max-md:mt-20 flex flex-col justify-evenly "  >
         <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={'#ffffff'}
        refresh
      />

          <div className=" shadow-[60px_-11px_11px_40px_#3b0ab461] max-md:shadow-[40px_-11px_21px_40px_#3b0ab461] circlemove max-sm:h-[270px]   max-sm:w-[270px]  max-lg:h-[400px] max-lg:w-[400px] h-[432px] w-[435px] absolute top-[52%] max-md:top-[38%] max-md:left-[10%] left-[26%] blur-[70px] max-md:blur-[30px] rounded-full  bg-[#7b5bc8bf] "></div>
      <h1 className="me ant max-md:text-6xl !max-[385px]:text-3xl max-md:mb-8 text-8xl font-extrabold text-center max-md:pt-10 logo"> About Me</h1>
      <div className="dev ant text-[#ffffffc7] max-lg:text-3xl max-md:text-xl max-md:-mt-24 -mt-20 text-center text-[40px] leading-[45px] text-4x w-[85%] h-full flex flex-col items-center justify-center mx-auto font-bold">
     <h1 className='ant logo'> I M A FULL-STACK DEVELOPER AND DEVOPS ENGINEER. MY PASSION FOR EFFICIENT CODE, OPTIMIZED SYSTEMS, AND SCALABLE ARCHITECTURES DRIVES MY WORK.</h1> 
        <p className="devp ant leading-7 !tracking-[1px] max-md:text-base text-2xl text-gray-400 max-md:pt-8 pt-16 italic max-lg:text-xl">
        I’m constantly exploring the intersection of development and operations to streamline processes, automate workflows, and improve user experiences. Specializing in Next.js, React, Node.js, MongoDB, PostgreSQL, and MySQL, my focus is on building clean, maintainable, and scalable full-stack applications. I ensure that infrastructure is resilient, secure, and able to handle growth seamlessly.
        </p>
        <p className="devp2 ant max-md:text-base text-xl mx-auto w-[80%] max-md:w-[90%] text-gray-400 max-md:pt-8 pt-16 italic max-lg:text-xl">
        My expertise also extends to containerization with Docker  and managing cloud-based environments for high availability and performance. I m dedicated to solving complex problems by leveraging modern web technologies and best DevOps practices.
        </p>
      </div>

      {/* <button className=" mx-auto lbtn w-fit  bg-[#ffffff1a px-5 py-2 border-white border rounded-full ">
          Dowload cv -&gt;
          <div className="hoverEffect">
            <div></div>
          </div>
        </button> */}
    </div>
  );
}

export default AboutPage;