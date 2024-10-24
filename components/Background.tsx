 'use client'; 

import { FileTextIcon } from "@radix-ui/react-icons";
import { FaLink } from "react-icons/fa6";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { IoAnalyticsOutline } from "react-icons/io5";
import { AiFillMerge } from "react-icons/ai";
import img from '@/assets/images';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'; 
gsap.registerPlugin(useGSAP);
 
const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: img.w1,
    imgclass:" object-contain "
  },
  {
    Icon: FaLink,
    name: "One Link",
    description: "Share you all links to everyone in one single link.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: img.w4,
    imgclass:"object-cover "
  },
  {
    Icon: AiFillMerge,
    name: "Ai ticket booking",
    description: "Book your tickets with AI",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: img.w6 ,
    imgclass:"object-cover "
  },
  {
    Icon: IoAnalyticsOutline,
    name: "SEO tracker",
    description: "Track your web with SEO tracker",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: img.w5 ,  
    imgclass:" object-cover "
  },
];

 
export function AnimatedGridPatternDemo() {

  // useGSAP(() => {
  //   gsap.from(".ant", {
  //     y :-100,  
  //     delay:1,
  //     // duration:13,
  //     stagger:2,
  //     filter: "blur(25px)",
  //     opacity:0,
  //       scrollTrigger:{
  //           trigger:".bg", 
  //           start:"top 67%",
  //           end:"top 56%",
  //           scrub:3,  
  //       }
  //   });
  // });


  return (
    <div className="relative   min-h-screen bg-transparent p-20 max-md:px-5 md:shadow-xl">

      <div className=" bg">

     <h1 className="me ant max-md:text-4xl mb-5  !max-[385px]:text-3xl text-5xl font-extrabold text-center logo2">Top-Projects </h1>  
      </div>

     {/* <div className="bg "> <h1 className='logo ant text-center max-md:text-4xl mb-5  !max-[385px]:text-3xl text-5xl font-extrabold  '>My Work Samples</h1></div> */}
   
     <div className=" w-full flex  items-center justify-center overflow-hidden rounded-lg ">

     <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
      </div>
    </div>
  );
}
