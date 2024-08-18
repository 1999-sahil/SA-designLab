"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import myLogo from "@/assets/designLabLogo.svg";

function Logo() {
  return (
    <Link href="/" className="">
      <Image
        src={myLogo}
        alt="logo-image"
        width={35}
        height={35}
        className="object-contain"
      />
    </Link>
  )
}

export default Logo
