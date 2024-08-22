"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { WorkCard } from "./WorkCard";
import { ArrowUpRight } from "lucide-react";
import lightImg from "@/assets/lightArrow.svg";
import darkImg from "@/assets/darkArrow.svg";

function Work() {
  return (
    <div id="work" className="w-full h-full">
      <div className="flex flex-col gap-8 items-center justify-center mb-5 px-20">
        <h2 className="text-4xl font-poppins font-bold text-center">Imagination Trumps Knowledge!</h2>
        <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
          <span className="bg-[#5FFB17] text-xl text-black text-center font-montserrat font-semibold p-1 rounded whitespace-nowrap">
            My Recent Work
          </span>
          <span className="text-sm max-md:text-center font-poppins text-[#333] dark:text-[#e3e3e3]">
            Here you will find some of the personal projects which showcase my knowledge related to frontend
            development, full-stack development, UI development.
          </span>
        </div>
      </div>

      <WorkCard />

      <div className="flex flex-col items-center justify-center gap-5 mt-6">
        <div>
          <Image
            src={lightImg}
            alt="light"
            width={150}
            height={150}
            className="flex dark:hidden"
          />
          <Image
            src={darkImg}
            alt="light"
            width={150}
            height={150}
            className="hidden dark:flex"
          />
        </div>

        {/** project button */}
        <Link href="/projects">
          <button className="flex items-center gap-2 bg-[#5FFb17] text-black hover:opacity-95 font-montserrat font-medium text-base rounded p-2">
            see my work
            <ArrowUpRight className="text-[#5FFb17] bg-black rounded-full w-fit p-1" />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Work