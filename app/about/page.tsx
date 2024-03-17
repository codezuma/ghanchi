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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsum voluptates a quod architecto placeat culpa obcaecati expedita nobis aspernatur minus id ullam molestias voluptatem amet beatae eius, omnis recusandae in eaque ad modi dolorum illum. Voluptatum quas autem impedit quaerat saepe unde qui repellendus corporis itaque, fugiat culpa molestias odit necessitatibus iusto architecto labore repudiandae ipsum laudantium, nam laboriosam? Ut tenetur amet doloremque impedit officia recusandae, fugiat deleniti atque tempora id voluptatibus nisi velit cupiditate minima sapiente excepturi dicta iusto sequi tempore dignissimos totam neque facere beatae earum? Nemo impedit eos ex quaerat fuga consequatur nobis tempore pariatur suscipit.
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