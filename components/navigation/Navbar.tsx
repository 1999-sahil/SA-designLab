"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

import { BiMenuAltLeft } from "react-icons/bi";
import { X } from "lucide-react";

import { navigationLinks } from "@/constants";
import { containerVars, menuVars } from "@/constants/motion";

import { ModeToggle } from "@/components/mode-toggle";
import Logo from "@/components/logo/Logo";
import MobileNavLink from "@/components/navigation/MobileNavLink";
import CustomButton from "@/components/custom-button";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const router = useRouter();

  const currentPath = usePathname(); // Get the current pathname

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || ""; // Get the hash from the URL
      setActiveSection(hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Initial check on load

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [currentPath]);

  const handleClick = (to: string) => {
    const element = document.querySelector(to);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      router.push(`${currentPath}${to}`); // Update URL with hash
    }
  };
  
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <header className="fixed top-0 z-[99999] bg-white dark:bg-[#0d121c] border-b w-full flex items-center justify-between px-4 md:px-12 py-2">
      {/** logo */}
      <div className="flex items-center gap-12 w-1/2">
        <Logo />
        {/** nav links */}
        <div className="hidden md:flex gap-3">
          {navigationLinks.map((link, index) => {
            const isActive = activeSection === link.to;
            
            return (
              <div
                key={index}
                onClick={() => handleClick(link.to)}
                className={`flex capitalize cursor-pointer text-sm px-3 py-1.5 rounded-md font-poppins transition-all duration-200,
                  ${isActive ? "bg-[#5FFB17] dark:bg-[#122650] hover:bg-none text-white" : "text-zinc-800 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-[#142037]"}
                `}>
                <a href={link.to}>{link.title}</a>
              </div>
            );
          })}
        </div>
      </div>

      {/** resume */}
      <div className="hidden md:flex items-center justify-center gap-4">
        <ModeToggle />
        <CustomButton text="Resume" />
      </div>

      {/** mobile mode */}
      <div className="md:hidden flex items-center justify-center gap-3">
        <ModeToggle />
        <div onClick={toggleMenu} className="cursor-pointer">
          <BiMenuAltLeft className="w-8 h-8" />
        </div>
      </div>

      {/** mobile navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed z-50 left-0 top-0 bg-zinc-100 dark:bg-[#0d121c] w-full h-screen origin-top"
          >
            {/** logo and close button */}
            <div className="flex items-center justify-between px-10 pt-6">
              <Logo />
              <div onClick={toggleMenu} className="cursor-pointer">
                <X className="w-7 h-7" />
              </div>
            </div>

            {/** mobile links */}
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              onClick={toggleMenu}
              className="flex flex-col h-full justify-center items-center gap-3"
            >
              {navigationLinks.map((link, index) => {
                return (
                  <div key={index} className="overflow-hidden w-3/4">
                    <MobileNavLink title={link.title} to={link.to} />
                  </div>
                );
              })}

              {/** resume button */}
              <CustomButton text="Resume" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
