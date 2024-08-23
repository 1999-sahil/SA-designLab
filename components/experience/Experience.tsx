import Image from 'next/image'
import React from 'react'
import Cta from '@/assets/cta-image.png';
import College from '@/assets/college.png';
import Profile from '@/assets/myProfile.png';
import { LocateIcon, School } from 'lucide-react';
import { GiGraduateCap } from 'react-icons/gi';
import { FaRegCalendarTimes } from 'react-icons/fa';
import { RiNumbersFill } from 'react-icons/ri';

function Experience() {
  return (
    <div className='w-full h-full md:px-20 mb-5'>
      <div className='flex flex-col pb-6'>
        {/** upper */}
        <div className='w-full flex items-center justify-between bg-zinc-100'>
          <div className='w-1/2 flex items-center justify-center'>
            <h2 className='text-2xl font-poppins font-semibold bg-[#5FFB17] p-1 rounded'>
              Academic Background
            </h2>
          </div>

          <div className='w-1/2 flex items-center justify-center'>
            <Image
              src={Cta}
              alt='cta-image'
              width={150}
              height={150}
            />
          </div>
        </div>

        {/** lower */}
        <div className='flex flex-col md:flex-row w-full items-center gap-4 justify-center bg-[#5FFB17] p-4'>
          {/** left */}
          <div className='w-full md:w-3/4 flex flex-col gap-4'>
            <div className='flex items-center h-[120px] md:h-[150px] gap-2 justify-center bg-black md:mx-8 rounded-md p-2'>
              <Image
                src={College}
                alt='college'
                width={60}
                height={60}
                className='border-2 border-[#5FFB17] bg-white p-1 rounded-full'
              />
              <div className='flex flex-col gap-1'>
                <h2 className='font-montserrat font-bold text-base md:text-lg text-white'>Dr. Akhilesh Das Gupta Institute of Technology and Management</h2>
                <h2 className='font-openSans text-xs md:text-sm text-white'>Bachelor&apos;s of Technology in Electronics and Electrical Engineering</h2>
              </div>
            </div>

            <div className='bg-blue-600 h-[120px] md:h-[150px] rounded-md p-2 md:mx-8'>
              <h2 className='font-montserrat font-bold text-lg'>Some text</h2>
            </div>
          </div>

          {/** right */}
          <div className='w-full md:w-1/4 md:mr-8'>
            <div className='flex h-[150px] md:h-[316px] p-3 flex-row md:flex-col gap-4 md:gap-0 items-center justify-between bg-black rounded-md'>
              <Image
                src={Profile}
                alt='my-profile'
                width={70}
                height={70}
                className='border border-[#5FFB17] p-1 rounded-full'
              />
              <div className='flex flex-col text-white'>
                <h2 className='font-montserrat font-bold text-sm ms:text-lg text-center'>Sahil Ahmed</h2>
                <div className='flex flex-row md:flex-col gap-2'>
                  <div className='md:flex flex-col gap-1 hidden'>
                    <h2 className='flex items-center gap-1 font-openSans text-xs md:text-sm font-normal'>
                      <GiGraduateCap className='w-5 h-5 text-[#5FFB17]' /> Degree: <span>B.Tech (EEE)</span>
                    </h2>
                    <h2 className='flex items-center gap-1 font-openSans text-xs md:text-sm font-normal'>
                      <RiNumbersFill className='w-5 h-5 text-[#5FFB17]' /> CGPA: <span>8.6</span>
                    </h2>
                    <h2 className='flex items-center gap-1 font-openSans text-xs md:text-sm font-normal'>
                      <FaRegCalendarTimes className='w-5 h-5 text-[#5FFB17]' /> Batch: <span>2018 - 2022</span>
                    </h2>
                    <h2 className='flex items-center gap-1 font-openSans text-xs md:text-sm font-normal'>
                      <LocateIcon className='w-5 h-5 text-[#5FFB17]' /> Place: <span>New Delhi, Delhi</span>
                    </h2>
                  </div>
                  <div>
                    <h2 className='text-center font-titillium text-sm my-2'>Interested in </h2>
                    <div className='flex flex-wrap gap-2 items-center justify-center'>
                      <h2 className='text-[10px] md:text-xs font-montserrat border rounded-md p-1 border-orange-500'>Frontend</h2>
                      <h2 className='text-[10px] md:text-xs font-montserrat border rounded-md p-1 border-purple-600'>Backend</h2>
                      <h2 className='text-[10px] md:text-xs font-montserrat border rounded-md p-1 border-emerald-500'>Fullstack</h2>
                      <h2 className='text-[10px] md:text-xs font-montserrat border rounded-md p-1 border-pink-600'>User Interface</h2>
                      <h2 className='text-[10px] md:text-xs font-montserrat border rounded-md p-1 border-[#5FFb17]'>Design</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience