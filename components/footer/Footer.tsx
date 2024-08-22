"use client";

import React from 'react'
import Logo from '../logo/Logo';
import { navigationLinks } from '@/constants';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdAttachEmail } from 'react-icons/md';
import { ArrowUpRight, LocateFixed, Mail, Phone } from 'lucide-react';
import { LampEffect } from './LampEffect';

function Footer() {
  return (
    <div id="contact" className="w-full h-full bg-black p-6 flex items-center justify-center">
      <div className="bg-black rounded-md w-full h-full p-4 flex flex-col gap-6">
        {/** upper section */}
        <div className='flex items-center justify-between border-b py-2'>
          <Logo />
          <div className='md:flex hidden items-center md:gap-4'>
            {navigationLinks.map((link, index) => {
              return (
                <div key={index}>
                  <Link href={link.to} className="capitalize font-montserrat font-medium text-sm text-white">
                    {link.title}
                  </Link>
                </div>
              )
            })}
          </div>
          <div className='flex items-center gap-2 md:gap-4'>
            <div className='border border-[#5FFB17] cursor-pointer p-1 rounded-lg flex items-center justify-center'>
              <FaLinkedin className='text-[#5FFb17] w-6 h-6' />
            </div>
            <div className='border border-[#5FFB17] cursor-pointer p-1 rounded-lg flex items-center justify-center'>
              <FaGithub className='text-[#5FFb17] w-6 h-6' />
            </div>
            <div className='border border-[#5FFB17] cursor-pointer p-1 rounded-lg flex items-center justify-center'>
              <MdAttachEmail className='text-[#5FFb17] w-6 h-6' />
            </div>
          </div>
        </div>

        {/** mid section */}
        <div className='w-full flex flex-col md:flex-row mt-4 items-center'>
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <div className='flex items-center gap-4 w-full'>
              <Link href='' className='w-1/2 flex items-center justify-center gap-2 bg-black ring-1 ring-white text-white font-montserrat font-medium text-sm rounded-sm px-2 py-1.5 hover:opacity-90'>
                <FaGithub size={15} />
                Github
              </Link>
              <Link href='' className='w-1/2 flex items-center justify-center gap-2 bg-[#5FFB17] text-black font-montserrat font-semibold text-sm rounded-sm px-2 py-1 hover:opacity-90'>
                My Work
                <ArrowUpRight className='bg-black text-[#5FFB17] p-1 rounded-full' />
              </Link>
            </div>

            <div className='flex flex-col gap-1'>
              <h2 className='flex items-center gap-1 font-poppins text-zinc-300 text-sm'>
                <Mail className='text-[#5FFb17]' size={15} /> Email: <span className="font-openSans">sahilahmed466@gmail.com</span>
              </h2>
              <h2 className='flex items-center gap-1 font-poppins text-zinc-300 text-sm'>
                <Phone className='text-[#5FFb17]' size={15} /> Phone: <span className='font-openSans'>+91 87440-91822</span>
              </h2>
              <h2 className='flex items-center gap-1 font-poppins text-zinc-300 text-sm'>
                <LocateFixed className='text-[#5FFb17]' size={15} /> Address: <span className='font-openSans'>Uttam Nagar, West Delhi, Delhi - 110059, India</span>
              </h2>
            </div>
          </div>

          <div className='w-full md:w-1/2 flex items-center justify-center m-4 p-4'>
            <h2 className='text-sm md:text-base font-poppins font-medium text-black bg-[#5FFB17] p-2 text-center rounded-md border-b-4 border-r-4 border-white'>
              A Frontend focussed Web Developer building the Frontend of Websites and Web Applicatins that leads to the success of the overall product.
            </h2>
          </div>
        </div>

        {/** bottom section */}
        <div className='border-t py-2'>
          <h2 className='font-montserrat text-xs text-white'>@2024 Portfolio made by Sahil Ahmed. All Rights Reserved.</h2>
        </div>
      </div>
    </div>
  )
}

export default Footer