import React from 'react'
import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"


const Individual = ({
    heading,
    img,
    para
}: {
    heading: string,
    para: string,
    img: string[]
}) => {
    return (
        <div className=''>
            <p className='bg-[#FB2963] py-2 text-center tracking-wide text-2xl font-semibold text-white'>{heading}</p>
            <div className="my-4 max-w-[80%] mx-auto">
                <AspectRatio className='border' ratio={16 / 9}>
                    hello
                </AspectRatio>
            </div>
            <p className='px-4'>{para}</p>
            <p className='font-semibold text-white text-center bg-[#002246] py-2 my-6'>SAMPLES</p>
            <div className='flex w-full lg:max-w-[50%] lg:mx-auto overflow-hidden justify-between items-center'>
                <img className='h-44 w-32 lg:h-60 lg:w-44' src={img[0]} alt="" />
                <img className='h-56 w-36 lg:h-64 lg:w-56' src={img[1]} alt="" />
                <img className='h-44 w-32 lg:h-60 lg:w-44' src={img[2]} alt="" />
            </div>
        </div>
    )
}

export default Individual