"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Meteors from "./ui/meteors";
import Particles from "./ui/particles";
import ShinyText from "./ui/shiny-border";
import GradientSection from "./ui/GradientSection";
const AdvanceHero = () => {
  const container = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    var t1 = gsap.timeline();
    // t1.from(".upperglow",{
    //     opacity: 0,
    //     duration: 1.4,
    //     y: -400,
    //     delay: 3,
    // })
    t1.from(".globe", {
      opacity: 0,
      duration: 1.4,
      y: 400,
      delay: 3,
    });
    t1.from(".anih1", {
      y: 500,
      opacity: 0,
      duration: 1.09,
      filter: "blur(10px)",
      delay: -1.5,
      stagger: 0.6,
    });

  },
    { scope: container }
  );

  return (
    <div ref={container} className=" w-full overflow-hidden relative  h-screen max-md:h-[80vh] max-md:flex items-end ">
      <div className=" absolute top-0 max-md:-left-16 -left-20 flex h-[500px] w-[110%] flex-col items-center justify-center overflow-hidden bg-transparent">
        <Meteors number={40} />
        <Particles className="absolute inset-0" quantity={50} ease={80} color={'#ffffff'} refresh />

         {/* <div  style={{ transform: `rotate(180deg)` }} className={` upperglow absolute -top-[200px] h-[400px] gradsec  w-full overflow-hidden `}></div> */}

      </div>
      <div className="ant lll relative w-full h-full max-md:h-[96%] flex flex-col items-center justify-center overflow-hidden ">
        <div className=" overflow-hidden flex items-center gap-3">
          <h1 className="ant text-2xl text-zinc-400 mt-10 overflow-hidden relative">Hey I'm !!</h1>
        </div>

        <div className=" overflow-hidden z-10 ">
          {/* <h1 className="ant cursor-default second anih1 max-[430px]:text-[22vw] text-[25vw] whitespace-nowrap leading-[350px] max-md:leading-[200px] opacity-100 font-bold overflow-hidden "> <span className="ant inline-flex logof">B</span><span className="ant inline-flex logos">ISHAL</span></h1> */}

          <ShinyText text="BISHAL" disabled={false} speed={2.2} className='ant anih1 max-[430px]:text-[22vw] text-[25vw] font-bold  ' />  
        </div>

        <div className="  overflow-hidden">
          <h1 className="logo2 ant text-xl mt-5 text-zinc-400 max-md:text-sm">FULL STACK  DEV. && DEVOPS Eng.</h1>
        </div>

        <div className="absolute globe -bottom-[800px] rounded-full  h-[1150px] max-md:[800px] w-[1200px] max-md:w-[850px] border-[8px]  border-t  border-l  hover:blur-[6px] blur-[8px] heroshadow   "></div>
      </div>
    </div>
  );
};

export default AdvanceHero;
