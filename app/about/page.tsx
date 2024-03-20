import React from 'react'
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const Individual = () => {
  return (
    <div className=''>
      <p className='bg-[#FB2963] py-2 text-center tracking-wide text-2xl font-semibold text-white'>ABOUT US</p>
      <div className="my-4 w-full max-w-[80%] lg:containerMod mx-auto">
        {/* <AspectRatio className='border' ratio={16 / 9}>
          hello
        </AspectRatio> */}
      </div>
      <p className='px-4 containerMod'>
        Rajsuri Print and Pack, established in 2002, has become the premier destination for premium printing services. Our extensive range of offerings includes Hospital Files, Invitations, Calendars, X-ray MRI Covers, Shopping Bags, Box Prints, and much more. Committed to excellence, we guarantee exceptional quality and meticulous craftsmanship. Backed by state-of-the-art technology and a skilled workforce, we ensure precise and professional results for every project. Whether catering to personal or business needs, trust Rajsuri Print and Pack to transform your ideas into reality with unparalleled clarity and sophistication.
      </p>
      <div className='w-full flex-col py-10 flex justify-center items-center bg-[#FB2963]'>
        <div className='h-48 w-40 my-4 rounded-lg overflow-hidden shadow-lg'>
          <img src="/founder.jpg" className='object-cover' alt="" />
        </div>
        <p className='text-xl font-semibold my-2 tracking-widest text-white'>DINESH CHOUHAN</p>
        <p className='font-medium text-white'>Founder & CEO</p>
        <p className='font-medium text-white'>RAJSURI PRINT AND PACK</p>
      </div>
    </div>
  )
}

export default Individual