import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import HeroNext from "./hero";
import Globe from "./ui/globe";

import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";

// import { cn } from "@/lib/utils"; 
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import DotPattern from "./ui/dot-pattern";
 

const files = [ 
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
    //   <Marquee
    //     pauseOnHover
    //     className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
    //   >
    //     {files.map((f, idx) => (
    //       <figure
    //         key={idx}
    //         className={cn(
    //           "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
    //           "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
    //           "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
    //           "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
    //         )}
    //       >
    //         <div className="flex flex-row items-center gap-2">
    //           <div className="flex flex-col">
    //             <figcaption className="text-sm font-medium dark:text-white ">
    //               {f.name}
    //             </figcaption>
    //           </div>
    //         </div>
    //         <blockquote className="mt-2 text-xs">{f.body}</blockquote>
    //       </figure>
    //     ))}
    //   </Marquee>

    <div>
        hello
    </div>
    ),
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
    //   <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    <div>
    hello
</div>    
),
  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
    //   <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    <div>
    hello
</div>    
),
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
        <div>
    hello
</div>    
),
  },
];

 
export function AnimatedGridPatternDemo() {
  return (
    <div className="relative flex h-[500px h-screen w-full items-center justify-center overflow-hidden rounded-lg   bg-transparent p-20 md:shadow-xl">
     
      {/* <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      /> */}

<DotPattern
        className={cn(
          "  max-md:[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] [mask-image:radial-gradient(400px_circle_at_center,white,transparent)] w-full h-screen ",
        )}
      />

{/* <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      /> */}
      {/* <HeroNext/> */}

     
    </div>
  );
}
