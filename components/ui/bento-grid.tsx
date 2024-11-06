import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import Image from "next/image"; 

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  imgclass
}: {
  name: string;
  className: string;
  background: any;
  Icon: any;
  description: string;
  href: string;
  cta: string;
  imgclass:string
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-2xl ",
     
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  > 
    <div className=" absolute inshadow2 inshadow2hover  retro retrohover h-full !bg-red-40  flex items-end w-full bottom-0 !text-white">

    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 origin-left transform-gpu  transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold ">
        {name}
      </h3>
      <p className="max-w-lg ">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
      >
      <button   className="pointer-events-auto ">
        <a href={href} target="_blank" className=" !flex items-center gap-1">
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
      </div>
    <Image className={cn( "w-full h-full  " , imgclass ) } src={background} width={900} height={900} alt="" /> 
    
  </div>
);

export { BentoCard, BentoGrid };