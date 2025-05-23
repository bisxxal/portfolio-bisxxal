'use client';
import { FaLink } from "react-icons/fa6";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { IoAnalyticsOutline } from "react-icons/io5";
import { AiFillMerge } from "react-icons/ai";
import img from '@/assets/images';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'; 
import { FaLaptopCode } from "react-icons/fa"; 
import Particles from "./ui/particles";
gsap.registerPlugin(useGSAP);
 
const features = [
  {
    Icon: FaLink,
    name: "College Hub",
    description: "A comprehensive platform for college students",
    href: "https://collagehub.vercel.app/",
    cta: "GO Live",
    className: "col-span-3 lg:col-span-1",
    background: img.w8,
    imgclass:" object-cover  "
  },
  {
    Icon: FaLaptopCode,
    name: "Blured UI",
    description: "UI components builder for developers",
    href: "https://blured-ui.vercel.app/",
    cta: "GO Live",
    className: "col-span-3 lg:col-span-2",
    background: img.w4,
    imgclass:"object-cover max-md:object-contain "
  },
  {
    Icon: AiFillMerge,
    name: "Ai ticket booking",
    description: "Book your tickets with AI",
    href: "https://yourtickets.vercel.app/",
    cta: "GO Live",
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
    cta: "GO Live",
    background: img.w5 ,  
    imgclass:" object-cover "
  },
];

 
export function AnimatedGridPatternDemo() {
  return (
    <div className="relative  min-h-screen bg-transparent p-20 max-md:px-5 md:shadow-xl ">
 <Particles className="absolute inset-0" quantity={100} ease={80} color={'#ffffff'} refresh />
      <div className="  bg">
     <h1 className="me ant max-md:text-4xl mb-5  !max-[385px]:text-3xl text-5xl font-extrabold text-center logo2">Top-Projects </h1>  
      </div>
     <div className=" w-full flex items-center justify-center overflow-hidden rounded-lg ">
     <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
      </div>
    </div>
  );
}
