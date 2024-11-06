'use client'
import React, { useRef } from "react"; 
import { useGSAP } from "@gsap/react";
import gsap from "gsap"; 
import img from "@/assets/images";
import Image from "next/image"; 
import { cn } from "@/lib/utils";
import DotPattern from "./ui/dot-pattern";
gsap.registerPlugin(useGSAP);
function HeroNext() {
  const container = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      var t1 = gsap.timeline();
      t1.from(".gd", {
        filter: "blur(15px)",
        opacity: 0,
        duration: 1,
        y: -400,
        x:-400,
        backgroundColor:"#2d53bc00",
        delay: 4.2,
      });
      t1.from(".leftside div  h1 ", {
        y: 500,
        opacity: 0,
        filter: "blur(25px)",
        duration: 2,
        delay: -1.8, 
        stagger: 0.5,
      });
 
    },
    { scope: container }
  );
  return (
    <>
      <div
        ref={container}
        className="mainfont foote r2 relative overflow-hidden pt-5 lg:pt-0 w-full  max-md:h-[78vh] h-screen bg-[#000319 bg-[#080312] flex lg:flex-row flex-col justify-center items-center relative rounded-xl lg:rounded-b-3xl "
        >
   
   <DotPattern
        className={cn(
          "  max-md:[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] [mask-image:radial-gradient(400px_circle_at_center,white,transparent)] w-full h-screen ",
        )}
     /> 

        {/* <div className="gd absolute max-lg:left-[20%] left-[40%] bg-[#ffffff29] h-60  max-lg:h-52 max-lg:w-[200px] w-[350px] rounded-full blur-[100px] max-lg:blur-[70px]"></div> */}
        <div className="gd absolute -right-[10%] bg-[#5d4499] h-[400px]  max-lg:-top-10 -top-32 max-lg:h-52 max-lg:w-[200px] w-[400px] rounded-full blur-[200px blur-[100px] "></div>
    
        <Image className=" icon absolute w-20 left-0 top-20   " src={img.icon1} alt="" />
        <Image className=" icon absolute w-10 left-32 max-lg:left-3   bottom-20 z-20 " src={img.icon2} alt="" />
        <Image className=" icon absolute w-16 max-md:right-[1%]   right-[10%] max-lg:top-[20%] top-[40%] " src={img.icon4} alt="" />
        <Image className=" icon absolute w-16 right-[15%]   max-md:right-[1%] max-md:bottom-10 bottom-[10%] z-20 " src={img.icon3} alt="" />

        <div className=" d-pointer relative flex items-center  w-full h-[90%] bg-zinc-5 justify-center ">
          <div className=" text-[#ffffffc1] flex flex-col justify-center items-center text-center  max-[328px]:text-lg  max-md:text-[45px]  !font-extrabold text-[7vw] leftside absolute max-lg:top-[35%] z-20 ">
            <div className="  overflow-hidden">
              <h1 className="   logo3">Heyy <span className=" animate-gradien tracking-[0.3px]  ">!!</span> I am <span className=" animate-gradient ">Bishal</span> </h1> 
            </div>
            <div className=" overflow-hidden">
              <h1 className="   drop-shadow-xl tracking-[0.3px] "> <span className=" logo3">Full Stack - web</span> <span className=" logo3">devloper</span> 
              </h1>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default HeroNext;
