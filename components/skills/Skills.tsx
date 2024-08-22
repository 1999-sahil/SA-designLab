import { ArrowUpRight } from "lucide-react";
import React from "react";
import Image from "next/image";

import { AiFillCode } from "react-icons/ai";
import { FaReact, FaCodeBranch } from "react-icons/fa";
import Frontend from "@/assets/frontend.png";
import Fullstack from "@/assets/fullstack.png";
import Design from "@/assets/design.png";
import Program from "@/assets/program.png";

function Skills() {
  return (
    <div className="w-full h-full flex flex-col gap-5 max-md:px-4 px-20">
      {/** text */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
        <span className="bg-[#5FFB17] text-xl text-black text-center font-montserrat font-semibold p-1 rounded whitespace-nowrap">
          Technical Skills
        </span>
        <span className="text-sm max-md:text-center font-poppins text-[#333] dark:text-[#e3e3e3]">
          My technical skills which consist practices of Full-Stack Development,
          Database Management, Responsive Design, Theme Management, Component
          Architecture, SVG and Image Optimization, Error Handling, Modern Web
          Technologies.
        </span>
      </div>
      <div className="w-full h-full mt-8">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>
    </div>
  );
}

function CardOne() {
  return (
    <div className="w-full h-full p-4 border-b-4 border-b-black flex justify-between bg-[#e3e3e3] border border-[#333] rounded-lg">
      {/** text */}
      <div className="w-1/2 flex flex-col justify-between items-start">
        <span className="flex flex-col font-poppins font-bold text-lg md:text-xl text-black px-[2px]">
          <h2 className="bg-[#5FFB17] w-fit text-start">Frontend</h2>
          <h2 className="bg-[#5FFB17] w-fit text-start">Development</h2>
        </span>
        <span className="flex items-center gap-2">
          <ArrowUpRight className="text-[#5FFb17] bg-black rounded-full w-fit p-1" />
          <h2 className="text-xs md:text-sm font-montserrat font-medium text-black">
            Learn more...
          </h2>
        </span>
      </div>

      {/** icon */}
      <div className="w-1/2 flex items-center justify-end">
        <Image
            src={Frontend}
            alt="frontend-image"
            width={200}
            height={200}
        />
      </div>
    </div>
  );
}

function CardTwo() {
  return (
    <div className="w-full h-full p-4 border-b-4 border-b-black flex justify-between bg-[#5FFB17] border border-[#333] rounded-lg">
      {/** text */}
      <div className="w-1/2 flex flex-col justify-between items-start">
        <span className="flex flex-col font-poppins font-bold text-lg md:text-xl text-black px-[2px]">
          <h2 className="bg-white w-fit text-start">Full Stack</h2>
          <h2 className="bg-white w-fit text-start">Development</h2>
        </span>
        <span className="flex items-center gap-2">
          <ArrowUpRight className="text-[#5FFb17] bg-black rounded-full w-fit p-1" />
          <h2 className="text-xs md:text-sm font-montserrat font-medium text-black">
            Learn more...
          </h2>
        </span>
      </div>

      {/** icon */}
      <div className="w-1/2 flex items-center justify-end">
        <Image
            src={Fullstack}
            alt="frontend-image"
            width={200}
            height={200}
        />
      </div>
    </div>
  );
}

function CardThree() {
  return (
    <div className="w-full h-full p-4 flex justify-between bg-black border border-[#333] rounded-lg mt-6">
      {/** text */}
      <div className="w-1/2 flex flex-col justify-between items-start">
        <span className="flex flex-col font-poppins font-bold text-lg md:text-xl text-black px-[2px]">
          <h2 className="bg-white w-fit px-6 text-start">Design &</h2>
          <h2 className="bg-white w-fit px-3 ml-2 text-start">Creative</h2>
        </span>
        <span className="flex items-center gap-2">
          <ArrowUpRight className="text-black bg-white rounded-full w-fit p-1" />
          <h2 className="text-xs md:text-sm font-montserrat font-medium text-white">
            Learn more...
          </h2>
        </span>
      </div>

      {/** icon */}
      <div className="w-1/2 flex items-center justify-end">
      <Image
            src={Design}
            alt="frontend-image"
            width={200}
            height={200}
        />
      </div>
    </div>
  );
}

function CardFour() {
  return (
    <div className="w-full h-full p-4 border-b-4 border-b-black flex justify-between bg-[#e3e3e3] border border-[#333] rounded-lg">
      {/** text */}
      <div className="w-1/2 flex flex-col justify-between items-start">
        <span className="flex flex-col font-poppins font-bold text-lg md:text-xl text-black px-[2px]">
          <h2 className="bg-[#5FFB17] w-fit text-start">Programming and</h2>
          <h2 className="bg-[#5FFB17] w-fit text-start">Coding</h2>
        </span>
        <span className="flex items-center gap-2">
          <ArrowUpRight className="text-[#5FFb17] bg-black rounded-full w-fit p-1" />
          <h2 className="text-xs md:text-sm font-montserrat font-medium text-black">
            Learn more...
          </h2>
        </span>
      </div>

      {/** icon */}
      <div className="w-1/2 flex items-center justify-end">
        <Image
            src={Program}
            alt="frontend-image"
            width={200}
            height={200}
        />
      </div>
    </div>
  );
}

export default Skills;
