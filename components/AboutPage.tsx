"use client";

import React from "react";

function AboutPage() {
  return (
    <div className=" relative bg-red-00  max-lg:h-screen max-md:overflow-hidden min-h-[110vh] mt-12 max-md:mt-20 flex flex-col justify-evenly "  >
         
          <div className=" shadow-[60px_-11px_11px_40px_#3b0ab461] max-md:shadow-[40px_-11px_21px_20px_#3b0ab461] circlemove max-sm:h-[170px]   max-sm:w-[170px]  max-lg:h-[400px] max-lg:w-[400px] h-[432px] w-[435px] absolute top-[52%] left-[26%] blur-[70px] max-md:blur-[30px] rounded-full  bg-[#7b5bc8bf] "></div>
     
     
      <h1 className=" max-md:text-2x3 text-7xl font-extrabold text-center max-md:pt-10 logo">
        About Me
      </h1>

      <div className=" text-[#ffffffc7] max-lg:text-3xl max-md:text-xl ax-md:-mt-14 -mt-20 text-center text-[40px] leading-[45px] text-4x w-[85%] h-full flex flex-col items-center justify-center mx-auto font-bold">
      I'M A FULL-STACK DEVELOPER AND DEVOPS ENGINEER. MY PASSION FOR EFFICIENT CODE, OPTIMIZED SYSTEMS, AND SCALABLE ARCHITECTURES DRIVES MY WORK.
        <p className=" max-md:text-base text-2xl text-gray-400 max-md:pt-8 pt-16 italic max-lg:text-xl">
        I’m constantly exploring the intersection of development and operations to streamline processes, automate workflows, and improve user experiences. Specializing in Next.js, React, Node.js, MongoDB, PostgreSQL, and MySQL, my focus is on building clean, maintainable, and scalable full-stack applications. I ensure that infrastructure is resilient, secure, and able to handle growth seamlessly.
        </p>
        <p className=" max-md:text-base text-xl mx-auto w-[80%] text-gray-400 max-md:pt-8 pt-16 italic max-lg:text-xl">
        My expertise also extends to containerization with Docker, and managing cloud-based environments for high availability and performance. I'm dedicated to solving complex problems by leveraging modern web technologies and best DevOps practices.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
