'use client'
import { FaGithub } from "react-icons/fa";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ShinyText from "./ui/shiny-border";

function Navbar({ delay }: any) {
  useGSAP(() => {

    const tl = gsap.timeline();

    tl.fromTo(".nav",
      { width: 0, left: '50%', x: '-50%' },
      {
        width: '90%', left: '50%', x: '-50%',
        delay: delay,
        duration: 1
      }
    )
      .from(".logonew span", {
        y: -40,
        opacity: 0,
        stagger: 0.051,
        // filter: 'blur(9px)',
        duration: 1.4,
      },)
      .from(".rnav", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        filter: 'blur(5px)',
      }, "-=1");
  }, []);

  return (
    <div className="nav h-[60px] w-0 top-5 flex fixed items-center px-4   z-[90] rounded-full   bg-[#ffffff09]  backdrop-blur-lg justify-between">

      <ShinyText text="Bishal." disabled={false} speed={3} className='cbfont ml-3  cursor-pointer  hover:scale-[1.05] transition-all  text-[24px] font-extrabold  ' />

      <div className="rnav">
        <div className='bg-[#5151ffde buttonbg sad px-4 py-2 max-[328px]:text-xs max-[328px]:px-2 capitalize rounded-full'>
          <a target='_blank' href='https://github.com/bisxxal'>
            <h1 className='flex items-center max:md-text-xs !text-base gap-2 '> <FaGithub className='text-lg' /> Give a star ⭐️</h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
