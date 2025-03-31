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
    <div className="abtpg relative max-md:h-[90vh] max-md:overflow-x-hidden h-[110vh] mt-12 max-md:mt-20 flex flex-col justify-evenly "  >
         <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={'#ffffff'}
        refresh
      />

          <div className=" shadow-[60px_-11px_11px_40px_#3b0ab461] max-md:shadow-[40px_-11px_21px_40px_#3b0ab461] circlemove max-sm:h-[270px]   max-sm:w-[270px]  max-lg:h-[400px] max-lg:w-[400px] h-[432px] w-[435px] absolute top-[52%] max-md:top-[38%] max-md:left-[10%] left-[26%] blur-[70px] max-md:blur-[30px] rounded-full  bg-[#7b5bc8bf] "></div>
      <h1 className="me ant max-md:text-6xl !max-[385px]:text-2xl max-md:mb-14 text-8xl font-extrabold text-center max-md:pt-4 logo"> About Me</h1>
      <div className="dev ant text-[#ffffffc7] max-lg:text-3xl max-md:text-xl max-[385px]:text-lg max-md:-mt-24 -mt-20 text-center text-[40px] leading-[45px] text-4x w-[85%] h-full flex flex-col items-center justify-center mx-auto font-bold">
     <h1 className='ant uppercase logo'> I am a full-stack developer and DevOps engineer, driven by a passion for writing efficient code, optimizing systems, and building scalable architectures.</h1> 
        <p className="devp ant leading-7 !tracking-[1px] max-md:text-base text-2xl text-gray-400 max-md:pt-8 pt-16 italic max-lg:text-xl">


    I specialize in streamlining development and operations to automate workflows and enhance user experiences. With expertise in Next.js, React, Node.js, MongoDB, PostgreSQL, and MySQL, I focus on building clean, scalable full-stack applications. I prioritize resilient, secure infrastructure that supports seamless growth.

        </p>
        <p className="devp2 ant max-md:text-base text-xl mx-auto w-[80%] max-md:w-[90%] text-gray-400 max-md:pt-8 pt-16 italic max-lg:text-xl">

        I also have experience with Docker for containerization and managing cloud environments, including AWS S3 buckets, EC2 servers, and AWS ECS, to ensure high availability and performance. My goal is to solve complex problems using modern web technologies and DevOps best practices.
        </p>
      </div>
 
    </div>
  );
}

export default AboutPage;