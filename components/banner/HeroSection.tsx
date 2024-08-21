"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import HeadingSection from "./HeadingSection";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { ArrowUpRight, Ellipsis } from "lucide-react";
import leftImage from "@/assets/heroSectionImage.jpg";
import rightImage from "@/assets/heroImage.jpg";

function HeroSection() {
  return (
    <div
      id="heroSection"
      className="gridLinesBg pt-10 max-md:px-4 flex flex-col gap-5 items-center justify-center w-full"
    >
      {/** heading and buttons */}
      <div className="flex flex-col gap-5 items-center justify-center">
        <HeadingSection />

        {/** Intro line and buttons */}
        <div className="max-w-lg px-8 md:px-0 flex flex-col items-center justify-center text-center">
          <h2 className="font-poppins font-medium text-black dark:text-zinc-300 text-opacity-90 sm:leading-tight text-sm md:text-base">
            Hey,{" "}
            <span className="font-medium font-montserrat text-[#234b33] dark:text-[#6ecf97] bg-[#6ecf97] dark:bg-[#234b33] p-[2.5px] md:p-1 rounded-md">
              I am Sahil Ahmed
            </span>
            , a versatile individual. With a passion for learning I am dedicated
            to delivering high-quality results and contribute meaningful
            contribution to dev community.
          </h2>
          <div className="flex items-center gap-4 my-8">
            <Link href="">
              <button className="flex items-center py-1.5 md:py-2 px-3 rounded-md gap-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black hover:bg-opacity-90 font-montserrat font-medium text-sm">
                <FaGithub />
                Github
              </button>
            </Link>
            <Link href="">
              <button className="flex items-center py-1.5 md:py-2 px-3 rounded-md gap-3 bg-[#5FFB17] text-black font-montserrat font-medium text-sm hover:bg-opacity-90">
                See my work
                <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/** hero images */}
      <div className="flex flex-col gap-2 w-full pb-8 md:px-8 h-fit md:flex-row items-center justify-center">
        {/** left image */}
        <div className="w-full md:w-3/4 h-[250px] md:h-[350px] relative aspect-square flex items-center justify-center border dark:border-zinc-500 rounded-2xl">
          <Image
            src={leftImage}
            alt="left-image"
            fill
            objectFit="cover"
            className="rounded-2xl border"
          />
        </div>

        {/** right image */}
        <div className="w-full md:w-1/4 flex flex-row md:flex-col items-center gap-2">
          {/** image */}
          <div className="w-1/2 md:w-full h-[200px] md:h-[170px] relative aspect-square flex items-center justify-center">
            <Image
              src={rightImage}
              alt="right-image"
              fill
              objectFit="cover"
              className="rounded-2xl border"
            />
          </div>

          {/** text */}
          <div className="w-1/2 md:w-full h-[200px] md:h-[175px] flex flex-col gap-2 items-center justify-center border p-4 border-black dark:border-white bg-[#5FFB17] rounded-2xl">
            <span className="w-full flex items-center justify-between">
              <Ellipsis className="text-black w-6 h-6" />
              <ArrowUpRight className="bg-black rounded-full p-1 text-[#5FFB17]" />
            </span>
            <span className="text-start text-black font-montserrat font-bold text-xl md:leading-tight">
              Let&apos;s develop something big together
            </span>
            <span className="text-start text-black font-poppins font-medium text-sm md:leading-tight">
              {`First, solve the problem. Then, write the {code}.`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
