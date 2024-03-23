import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

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
        <div className='border'>
            <p className='bg-[#FB2963] py-2 text-center tracking-wide text-2xl font-semibold text-white'>{heading}</p>
            <p className='px-4 text-center containerMod'>{para}</p>
            <p className='font-semibold text-white text-center bg-[#002246] py-2 my-6'>SAMPLES</p>
            <Carousel className="flex my-10 w-full lg:max-w-[50%] overflow-hidden md:overflow-visible lg:mx-auto justify-evenly items-center">
                <CarouselContent>
                    {
                        img.map((imageUrl: string, index: number) => {
                            return (
                                <CarouselItem key={index} className="basis-1/3 md:basis-1/2 lg:basis-1/3">
                                    <img src={imageUrl} className='w-36 h-48' alt="" />
                                </CarouselItem>
                            )
                        })
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
    )
}

export default Individual

// className='h-44 w-32 lg:h-60 lg:w-44'