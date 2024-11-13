"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
const AdvanceHero = () => {
  const container = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      var t1 = gsap.timeline();
      t1.from(".globe", {
        // filter: "blur(15px)",
        opacity: 0,
        duration: 1.4,
        y: 400,
        delay: 4.2,
        boxShadow: "20px -16px 76px 0px #000000, inset 20px 0px 113px #000000",
      });
      t1.from(".lll div h1", {
        y: 500,
        opacity: 0,
        duration: 1.5,
        delay: -1.5,
        stagger: 0.6,
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className=" w-full overflow-hidden  h-screen max-md:h-[80vh] max-md:flex items-end ">
      <div className="ant lll relative w-full h-full max-md:h-[81%] flex flex-col items-center justify-center overflow-hidden ">
     
     
        <div className="  overflow-hidden ">
          <h1 className="ant text-xl text-zinc-400 ">Hey, i am</h1>
        </div>

        <div className="  overflow-hidden z-10 ">
          <h1 className="ant second  text-[25vw] leading-[350px] max-md:leading-[200px] opacity-100 font-bold overflow-hidden "> <span className="ant inline-flex logof">B</span> <span className="ant inline-flex logos">ISHAL</span>
          </h1>
        </div>

        <div className="  overflow-hidden">
          <h1 className=" ant text-xl mt-5 text-zinc-400 max-md:text-sm">FULL STACK-WEB DEVLOPER / DEVOPS</h1>
        </div>

        <div
          className="absolute globe -bottom-[800px]  rounded-full  h-[1150px] max-md:[800px] w-[1200px] max-md:w-[850px] border-[8px]  border-t  border-l  text-[200px]  blur-[8px] heroshadow   "></div>
      </div>
    </div>
  );
};

export default AdvanceHero;
