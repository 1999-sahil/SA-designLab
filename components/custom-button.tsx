import Link from "next/link";
import React from "react";
import { MoveRight } from "lucide-react";

interface CustomButtonProps {
  text: string;
}

function CustomButton({ text }: CustomButtonProps) {
  return (
    <Link href="" className="relative inline-block px-4 py-1.5 font-medium group">
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black dark:bg-zinc-100 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white dark:bg-[#0d121c] border-2 border-black dark:border-zinc-100 group-hover:bg-black"></span>
      <span className="relative flex items-center text-sm font-poppins gap-4 text-black dark:text-white group-hover:text-white">
        {text}
        <MoveRight className="w-5 h-5" />
      </span>
    </Link>
  );
}

export default CustomButton;
