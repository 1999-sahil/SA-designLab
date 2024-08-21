"use client";

import React from "react";
import { WorkCard } from "./WorkCard";

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
    </div>
  )
}

export default Work