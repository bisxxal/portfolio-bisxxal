'use client'



import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import img from '../assets/images';
import { useGSAP } from '@gsap/react';
import img from '@/assets/images';
import Image from 'next/image';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const container = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef(null);

  useGSAP(() => {
    const paragraph = paragraphRef.current;

    if (paragraph) {
      const text = new SplitType(paragraph, { types: 'chars' });

      gsap.from(text.chars, {
        color: '#515151',
        x: 1,
        duration: 8,
        filter: 'blur(0.9px)',
        scrollTrigger: {
          trigger: paragraph,
          scrub: 0.7,
        start: 'top bottom',  
        end: 'top top', 
        },
        stagger: 0.6,
      });
    }
  }, {scope:container});
 


  return (
    <div ref={container} className="h-[90vh] w-full relative flex items-center justify-evenly py-2 flex-col aboutpart overflow-hidden">
      <Image
        className="absolute w-full h-full blur-sm object-cover brightness-[53%]"
        loading="lazy"
        src={img.whatsapp}
        alt=""
        width={1920}
      />
      <div className="gradient absolute"></div>

      <h1 className="z-[21] max-md:top-[7%] top-[15%] text-[40px] font-bold">
        Hey there!!
      </h1>

      <div className="abouttextpart lg:text-[22px] z-[21] max-md:px-7 px-10 lg:px-24 text-xl lg:leading-[40px] leading-[30px] w-full">
        <p ref={paragraphRef}>
          I am Bishal! Full-stack development is an exciting and versatile field. It's impressive that you're skilled in both front-end and back-end technologies, including HTML, CSS, JavaScript, Node.js, MongoDB, Firebase, Supabase, and Next.js. Your expertise in creating sleek interfaces and robust back-end solutions must lead to some fantastic projects. I'd be interested in taking a look at your portfolio. Can you share a link or some examples of the projects you've worked on recently? I'm keen to explore the innovative work you've been doing in the realm of full-stack development.
        </p>
      </div>
      <button className="bg-[#83afef] sad px-5 py-3 z-[30] rounded-3xl top-[89%]">
        <a href="https://instagram.com/bisxxal" target="_blank" rel="noopener noreferrer">
          Say hii 👋👋
        </a>
      </button>
    </div>
  );
}

export default AboutSection;
