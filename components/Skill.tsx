
'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import img from '@/assets/images';
import Image from 'next/image';
import GradientSection from './ui/GradientSection';
import Work from './work';

function Skills() {
  return (
    <div>
      <Skill />
      <Work /> 
    </div>
  )
}


function Skill() {
  const ref = useRef(null);
   
useGSAP(() => {
  const ctx = gsap.context(() => {

 
    gsap.from(".skilsimgh", {
      y: 60,
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".con",
        start: "top 80%",
        scrub: 0.2,
      },
    });

  }, ref);

  return () => ctx.revert();

}, []);

  return (


    <div className='bg-[#FDFBEC] skilcontainer relative'>

      <GradientSection rotate={'0'} />

      <div ref={ref} className="skils  relative min-h-[110vh] w-full capitalize overflow-hidden max-lg:pb-5 -mt-20 text-[white]">


        {/* <h1 className=' ant logo text-center capitalize py-6 mb-16  font-bold text-[35px] max-md:text-[25px] p-[2vh] bg-transparent text-gray-300'>Things I'm good at skills. </h1> */}

          <h2 className="text-center capitalize py-6 mb-16 font-bold max-md:text-4xl text-5xl logo followtext">
            Things I'm<br />
            <span className="highlight followtext">good at.</span>
          </h2>

          
        <div className="skillwrapper defect1 h-[99%] w-full flex lg:items-center  justify-center ">
          <div className=' con flex flex-wrap w-full gap-8 lg:gap-14 mb-24 lg:mb-20 lg:w-[90%] justify-evenly lg:justify-center  '>

            <div className=" border-orange-700/30 border skilsimgh bg-gradient-to-br from-orange-900/20 to-transparent  w-[150px]  h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px] ">

              <Image loading="lazy" className=' h-[58%] w-[55%] ' src={img.python} alt="" width={300} height={400} />
              <h2 className=' mt-[10px] text-center font-[18px] bg-transparent'>python</h2>
            </div>
            <div className=" border-orange-700/30 border skilsimgh bg-gradient-to-br from-orange-900/20 to-transparent  w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1">
              <Image loading="lazy" className=' h-[50%] w-[50%] rounded-xl ' src={img.js} alt="" width={300} height={400} />
              <h2 className=' mt-[10px] text-center font-[18px] bg-transparent'>Javascript</h2>
            </div>
            <div className=" border-orange-700/30 border skilsimgh bg-gradient-to-br from-orange-900/20 to-transparent  w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]   react  ">
              <Image loading="lazy" className=' h-[58%] w-[60%] ' src={img.react} alt="" width={300} height={400} />
              <h2 className=' mt-[10px] text-center font-[18px] bg-transparent'> react</h2>
            </div>
            <div className=" border-orange-700/30 border skilsimgh bg-gradient-to-br from-orange-900/20 to-transparent  w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1">
              <Image loading="lazy" className=' h-[60%] w-[80%] ' src={img.node} alt="" width={300} height={400} />
              <h2 className=' mt-[10px] text-center font-[18px] bg-transparent'>node JS</h2>
            </div>

            <div className=" border-orange-700/30 border skilsimgh bg-gradient-to-br from-orange-900/20 to-transparent  w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1 mrg ps">
              <Image loading="lazy" className=' h-[52%] w-[55%] ' src={img.ts} alt="" width={300} height={400} />
              <h2 className=' mt-[10px] text-center font-[18px] bg-transparent'>Typescript</h2>
            </div>

            <div className=" border-orange-700/30 border skilsimgh bg-gradient-to-br from-orange-900/20 to-transparent  w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1 mrg ps">
              <Image loading="lazy" className=' h-[58%] w-[80%] ' src={img.nj} alt="" width={300} height={400} />
              <h2 className=' mt-[10px] text-center font-[18px] bg-transparent'>Next js</h2>
            </div>

            <div className=" border-orange-700/30 border skilsimgh bg-gradient-to-br from-orange-900/20 to-transparent  w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1">
              <Image loading="lazy" className=' h-[68%] w-[60%] ' src={img.java} alt="" width={300} height={400} />
              <h2 className=' mt-[10px] text-center font-[18px] bg-transparent'>Java</h2>
            </div>
            <div className=" border-orange-700/30 border skilsimgh bg-gradient-to-br from-orange-900/20 to-transparent  w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1">
              <Image loading="lazy" className=' h-[58%] w-[60%] ' src={img.c} alt="" width={300} height={400} />
              <h2 className=' mt-[10px] text-center font-[18px] bg-transparent'>C++</h2>
            </div>
            <div className=" border-orange-700/30 border skilsimgh bg-gradient-to-br from-orange-900/20 to-transparent  w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1">
              <Image loading="lazy" className=' h-[58%] w-[50%] ' src={img.mongo} alt='' width={300} height={400} />
              <h2 className=' mt-[10px] text-center font-[18px] bg-transparent'>Mongo DB</h2>
            </div>
            <div className=" border-orange-700/30 border skilsimgh bg-gradient-to-br from-orange-900/20 to-transparent  w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1 mrg ps">
              <Image loading="lazy" className=' h-[58%] w-[50%] ' src={img.ps} alt="" width={300} height={400} />
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>Photoshop</h1>
            </div>

            <div className=" border-orange-700/30 border skilsimgh bg-gradient-to-br from-orange-900/20 to-transparent  w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1 mrg ps">
              <Image loading="lazy" className=' h-[58%] w-[50%] ' src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png' alt="" width={300} height={400} />
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>Docker</h1>
            </div>

            <div className=" border-orange-700/30 border skilsimgh bg-gradient-to-br from-orange-900/20 to-transparent  w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1 mrg ps">
              <Image loading="lazy" className=' h-[58%] w-[50%] ' src={img.mysql} alt="" width={300} height={400} />
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>Mysql</h1>
            </div>

            <div className=" border-orange-700/30 border skilsimgh bg-gradient-to-br from-orange-900/20 to-transparent  w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1 mrg ps">
              <Image loading="lazy" className=' h-[58%] w-[75%] ' src={img.supabase} alt="" width={300} height={400} />
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>Firebase</h1>
            </div>
            <div className=" border-orange-700/30 border skilsimgh bg-gradient-to-br from-orange-900/20 to-transparent  w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1 mrg ps">
              <Image loading="lazy" className=' h-[58%] w-[50%] ' src={img.prisma} alt="" width={300} height={400} />
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>Prisma</h1>
            </div>
            <div className=" border-orange-700/30 border skilsimgh bg-gradient-to-br from-orange-900/20 to-transparent  w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1 mrg ps">
              <Image loading="lazy" className=' h-[68%] w-[86%] ' src={img.postgress} alt="" width={300} height={400} />
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>postgress</h1>
            </div>

            <div className=" border-orange-700/30 border skilsimgh bg-gradient-to-br from-orange-900/20 to-transparent  w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  defect1 mrg ps">
              <Image loading="lazy" className=' h-[58%] w-[75%] ' src={img.gsap} alt="" width={300} height={400} />
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>Gsap</h1>
            </div>

            <div className=" border-orange-700/30 border skilsimgh bg-gradient-to-br from-orange-900/20 to-transparent  w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  mrg ht">
              <Image loading="lazy" className=' h-[50%] w-[70%] ' src={img.html} alt="" width={300} height={400} />
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>Html css</h1>
            </div>

            <div className=" border-orange-700/30 border skilsimgh bg-gradient-to-br from-orange-900/20 to-transparent  w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  mrg ht">
              <Image loading="lazy" className=' h-[58%] w-[61%] ' src={img.quary} alt="" width={300} height={400} />
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>tanstack query </h1>
            </div>
            <div className=" border-orange-700/30 border skilsimgh bg-gradient-to-br from-orange-900/20 to-transparent  w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  mrg ht">
              <Image loading="lazy" className=' h-[58%] w-[85%] ' src={img.redit} alt="" width={300} height={400} />
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>redis</h1>
            </div>


            <div className=" border-orange-700/30 border skilsimgh bg-gradient-to-br from-orange-900/20 to-transparent  w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  mrg ht">
              <Image loading="lazy" className=' h-[62%] w-[58%] ' src={img.expo} alt="" width={300} height={400} />
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>expo</h1>
            </div>
            <div className=" border-orange-700/30 border skilsimgh bg-gradient-to-br from-orange-900/20 to-transparent  w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  mrg ht">
              <Image loading="lazy" className=' h-[63%] w-[65%] ' src={img.rnative} alt="" width={300} height={400} />
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>React native</h1>
            </div>
            <div className=" border-orange-700/30 border skilsimgh bg-gradient-to-br from-orange-900/20 to-transparent  w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  mrg ht">
              <Image loading="lazy" className=' h-[63%] w-[85%] ' src={img.bullmq} alt="" width={300} height={400} />
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>BullMQ</h1>
            </div>

            <div className=" border-orange-700/30 border skilsimgh bg-gradient-to-br from-orange-900/20 to-transparent  w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  mrg ht">
              <Image loading="lazy" className=' h-[58%] w-[85%] ' src={img.nginx} alt="" width={300} height={400} />
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>Nginx</h1>
            </div>
            <div className=" border-orange-700/30 border skilsimgh bg-gradient-to-br from-orange-900/20 to-transparent  w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-[30px] lg:mx-[50px] backdrop-blur-[5px]  mrg ht">
              <Image loading="lazy" className=' h-[40%] w-[60%] ' src={img.aws} alt="" width={300} height={400} />
              <h1 className=' mt-[10px] text-center font-[18px] bg-transparent'>AWS</h1>
            </div>


          </div>
        </div>

      </div>


    </div>
  )
}



export default Skills;


// "use client";
// import { useEffect, useRef } from "react";

// const skills = [
//   { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
//   { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
//   { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
//   { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
//   { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
//   { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#ffffff" },
//   { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#ED8B00" },
//   { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "#00599C" },
//   { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
//   { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
//   { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
//   { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "#FFCA28" },
//   { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", color: "#2D3748" },
//   { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#4169E1" },
//   { name: "GSAP", icon: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg", color: "#88CE02" },
//   { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
//   { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", color: "#DC382D" },
//   { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
//   { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", color: "#FF9900" },
//   { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", color: "#009639" },
// ];

// export default function Skills() {
//   const containerRef = useRef(null);
//   const titleRef = useRef(null);
//   const gridRef = useRef(null);
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     // Inject styles
//     const style = document.createElement("style");
//     style.textContent = `
//       @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

//       * { box-sizing: border-box; margin: 0; padding: 0; }

//       .skills-root {
//         background: #050508;
//         min-height: 100vh;
//         padding: 120px 40px;
//         position: relative;
//         overflow: hidden;
//         font-family: 'Syne', sans-serif;
//       }

//       /* Ambient orbs */
//       .orb {
//         position: absolute;
//         border-radius: 50%;
//         filter: blur(120px);
//         opacity: 0.15;
//         pointer-events: none;
//         animation: orbFloat 8s ease-in-out infinite alternate;
//       }
//       .orb-1 { width: 600px; height: 600px; background: radial-gradient(circle, #ff6b35, transparent); top: -100px; left: -200px; animation-delay: 0s; }
//       .orb-2 { width: 500px; height: 500px; background: radial-gradient(circle, #7c3aed, transparent); bottom: -100px; right: -150px; animation-delay: -3s; }
//       .orb-3 { width: 300px; height: 300px; background: radial-gradient(circle, #06b6d4, transparent); top: 40%; left: 50%; animation-delay: -5s; }

//       @keyframes orbFloat {
//         from { transform: translate(0, 0) scale(1); }
//         to { transform: translate(30px, -40px) scale(1.08); }
//       }

//       /* Grid noise overlay */
//       .skills-root::before {
//         content: '';
//         position: absolute;
//         inset: 0;
//         background-image: 
//           linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
//           linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
//         background-size: 60px 60px;
//         pointer-events: none;
//       }

//       .skills-inner {
//         max-width: 1300px;
//         margin: 0 auto;
//         position: relative;
//         z-index: 2;
//       }

//       /* Header */
//       .skills-header {
//         margin-bottom: 80px;
//         opacity: 0;
//         transform: translateY(40px);
//         transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
//       }
//       .skills-header.visible { opacity: 1; transform: translateY(0); }

//       .skills-eyebrow {
//         font-family: 'DM Mono', monospace;
//         font-size: 12px;
//         letter-spacing: 0.3em;
//         text-transform: uppercase;
//         color: #ff6b35;
//         margin-bottom: 16px;
//         display: flex;
//         align-items: center;
//         gap: 12px;
//       }
//       .skills-eyebrow::before {
//         content: '';
//         display: block;
//         width: 32px;
//         height: 1px;
//         background: #ff6b35;
//       }

//       .skills-title {
//         font-size: clamp(42px, 7vw, 96px);
//         font-weight: 800;
//         line-height: 0.95;
//         letter-spacing: -0.03em;
//         color: #f0ede8;
//       }
//       .skills-title .accent {
//         background: linear-gradient(135deg, #ff6b35 0%, #ff9a5c 50%, #ffd700 100%);
//         -webkit-background-clip: text;
//         -webkit-text-fill-color: transparent;
//         background-clip: text;
//       }

//       .skills-count {
//         font-family: 'DM Mono', monospace;
//         font-size: 13px;
//         color: rgba(240,237,232,0.3);
//         margin-top: 20px;
//         letter-spacing: 0.15em;
//       }

//       /* Grid */
//       .skills-grid {
//         display: grid;
//         grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
//         gap: 16px;
//       }

//       /* Card */
//       .skill-card {
//         position: relative;
//         aspect-ratio: 1;
//         border-radius: 20px;
//         border: 1px solid rgba(255,255,255,0.06);
//         background: rgba(255,255,255,0.03);
//         backdrop-filter: blur(8px);
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         gap: 12px;
//         padding: 20px;
//         cursor: pointer;
//         overflow: hidden;
//         opacity: 0;
//         transform: translateY(60px) scale(0.92);
//         transition:
//           opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
//           transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
//           border-color 0.3s ease,
//           background 0.3s ease;
//         will-change: transform, opacity;
//       }

//       .skill-card.visible {
//         opacity: 1;
//         transform: translateY(0) scale(1);
//       }

//       /* Glow on hover */
//       .skill-card::before {
//         content: '';
//         position: absolute;
//         inset: 0;
//         border-radius: 20px;
//         opacity: 0;
//         transition: opacity 0.4s ease;
//         pointer-events: none;
//       }

//       .skill-card:hover {
//         border-color: rgba(255,255,255,0.15);
//         background: rgba(255,255,255,0.06);
//         transform: translateY(-6px) scale(1.03) !important;
//         transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.3s, background 0.3s !important;
//       }

//       .skill-card:hover::before { opacity: 1; }
//       .skill-card:hover .skill-icon { transform: scale(1.1) rotate(-3deg); }
//       .skill-card:hover .skill-name { color: #f0ede8; }
//       .skill-card:hover .skill-dot { transform: scale(1.4); }

//       .skill-icon {
//         width: 52px;
//         height: 52px;
//         object-fit: contain;
//         transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
//         filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));
//       }

//       .skill-name {
//         font-family: 'DM Mono', monospace;
//         font-size: 11px;
//         font-weight: 500;
//         letter-spacing: 0.08em;
//         text-transform: uppercase;
//         color: rgba(240,237,232,0.5);
//         text-align: center;
//         transition: color 0.3s ease;
//         line-height: 1.3;
//       }

//       .skill-dot {
//         position: absolute;
//         top: 14px;
//         right: 14px;
//         width: 6px;
//         height: 6px;
//         border-radius: 50%;
//         transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
//       }

//       /* Shimmer line */
//       .skill-card::after {
//         content: '';
//         position: absolute;
//         top: 0;
//         left: -100%;
//         width: 100%;
//         height: 100%;
//         background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent);
//         transition: left 0.6s ease;
//         pointer-events: none;
//       }
//       .skill-card:hover::after { left: 100%; }

//       @media (max-width: 640px) {
//         .skills-root { padding: 80px 20px; }
//         .skills-grid { grid-template-columns: repeat(3, 1fr); gap: 10px; }
//         .skill-card { border-radius: 14px; }
//         .skill-icon { width: 38px; height: 38px; }
//         .skill-name { font-size: 9px; }
//       }
//     `;
//     document.head.appendChild(style);

//     // Intersection observer for scroll animations
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//           }
//         });
//       },
//       { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
//     );

//     if (titleRef.current) observer.observe(titleRef.current);

//     // Stagger cards
//     cardsRef.current.forEach((card, i) => {
//       if (!card) return;
//       setTimeout(() => {
//         const cardObserver = new IntersectionObserver(
//           (entries) => {
//             entries.forEach((entry) => {
//               if (entry.isIntersecting) {
//                 entry.target.classList.add("visible");
//                 cardObserver.unobserve(entry.target);
//               }
//             });
//           },
//           { threshold: 0.05 }
//         );
//         cardObserver.observe(card);
//       }, i * 40);
//     });

//     // Magnetic hover effect
//     const handleMouseMove = (e, card, color) => {
//       const rect = card.getBoundingClientRect();
//       const cx = rect.left + rect.width / 2;
//       const cy = rect.top + rect.height / 2;
//       const dx = (e.clientX - cx) / (rect.width / 2);
//       const dy = (e.clientY - cy) / (rect.height / 2);
//       card.style.transform = `translateY(-6px) scale(1.03) rotateX(${-dy * 8}deg) rotateY(${dx * 8}deg)`;
//       card.style.boxShadow = `0 20px 60px ${color}30, 0 8px 24px rgba(0,0,0,0.4)`;
//     };

//     const handleMouseLeave = (card) => {
//       card.style.transform = "";
//       card.style.boxShadow = "";
//     };

//     cardsRef.current.forEach((card, i) => {
//       if (!card) return;
//       const color = skills[i]?.color || "#ff6b35";
//       card.addEventListener("mousemove", (e) => handleMouseMove(e, card, color));
//       card.addEventListener("mouseleave", () => handleMouseLeave(card));
//     });

//     return () => {
//       document.head.removeChild(style);
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <div className="skills-root  !bg-[#FDFBEC] " ref={containerRef}>
//       <div className="orb orb-1" />
//       <div className="orb orb-2" />
//       <div className="orb orb-3" />

//       <div className="skills-inner">
//         <div className="skills-header" ref={titleRef}>
//           <div className="skills-eyebrow">Arsenal</div>
         
//           <p className="skills-count">// {skills.length} technologies & counting</p>
//         </div>

//         <div className="skills-grid" ref={gridRef}>
//           {skills.map((skill, i) => (
//             <div
//               key={skill.name}
//               className="skill-card"
//               ref={(el) => (cardsRef.current[i] = el)}
//               style={{ transitionDelay: `${(i % 8) * 0.05}s` }}
//             >
//               {/* Dynamic glow behind card */}
//               <div
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   borderRadius: "20px",
//                   background: `radial-gradient(ellipse at 50% 120%, ${skill.color}18 0%, transparent 70%)`,
//                   pointerEvents: "none",
//                 }}
//               />
//               <div
//                 className="skill-dot"
//                 style={{ background: skill.color, boxShadow: `0 0 6px ${skill.color}` }}
//               />
//               <img className="skill-icon" src={skill.icon} alt={skill.name} loading="lazy" />
//               <span className="skill-name">{skill.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }