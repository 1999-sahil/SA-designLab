"use client";

import React from "react";
import { ModeToggle } from "../mode-toggle";
import Logo from "../logo/Logo";

function Navbar() {
    return (
        <div className="sticky flex items-center justify-between bg-red-700 px-12 py-2">
            {/** logo */}
            <div>
                <Logo />
            </div>

            {/** nav links */}
            <div>links</div>

            {/** resume */}
            <div>
                <ModeToggle />
                Resume
            </div>
        </div>
  )
}

export default Navbar