'use client'

import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import Link from 'next/link'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"



const Nav = () => {

    const [isPopOverOpen, setIsPopOverOpen] = useState(false)
    const [isPopOverOpenDesktop, setIsPopOverOpenDesktop] = useState(false)

    return (
        <div className='bg-[#002246] px-4'>
            <div className='flex px-2 py-4 items-center justify-between bg-[#002246] p-3 z-50 containerMod'>
                <Link href={'/'}>
                    <img src="/logo.png" className='w-28' alt="" />
                </Link>

                <div className='hidden md:block'>
                    <ul className='flex items-center gap-3'>
                        <li className='flex items-center text-white gap-3'>
                            <img src="/Home.png" className='size-7' alt="" /> <Link href={'/'}><p>Home</p></Link>
                        </li>
                        <li className='flex items-center text-white gap-3'>
                            <img src="/products.png" className='size-7' alt="" />
                            <Popover open={isPopOverOpenDesktop} onOpenChange={setIsPopOverOpenDesktop}>
                                <PopoverTrigger>
                                    <p>Our Products</p>
                                </PopoverTrigger>
                                <PopoverContent className='flex flex-col'>
                                    <Link onClick={() => setIsPopOverOpenDesktop(false)} className='text-xl' href={'/hospitals'}>- Hospital files</Link>
                                    <Link onClick={() => setIsPopOverOpenDesktop(false)} className='text-xl' href='/amantran'>- Aamantran Patrikas</Link>
                                    <Link onClick={() => setIsPopOverOpenDesktop(false)} className='text-xl' href={'/x-ray'}>- X-ray, MRI Covers</Link>
                                    <Link onClick={() => setIsPopOverOpenDesktop(false)} className='text-xl' href={'/printing'}>- Printed Shopping Bags</Link>
                                    <Link onClick={() => setIsPopOverOpenDesktop(false)} className='text-xl' href={'/printing-box'}>- Packing Box Printing</Link>
                                    <Link onClick={() => setIsPopOverOpenDesktop(false)} className='text-xl' href={'/calendars'} >- Calendars</Link>
                                </PopoverContent>
                            </Popover>

                        </li>
                        <li onClick={() => setIsPopOverOpen(!isPopOverOpen)} className='flex items-center text-white gap-3'>
                            <img src="/About.png" className='size-7' alt="" /> <Link className='text-xl' href='/about'>About Us</Link>
                        </li>
                    </ul>
                </div>
                <div className='md:hidden'>
                    <Dialog open={isPopOverOpen} onOpenChange={setIsPopOverOpen}>
                        <DialogTrigger>
                            <img src="/ham.png" className='w-7 h-5' alt="" />
                        </DialogTrigger>
                        <DialogContent className='md:hidden bg-[#002246] text-white pt-10'>
                            <div>
                                <ul>
                                    <li onClick={() => setIsPopOverOpen(!isPopOverOpen)} className='flex items-center'><img src="/Home.png" className='mr-3 size-6' alt="" /><p className='text-2xl'>Home</p></li>
                                    <li className='flex items-center'>
                                        <Accordion className='inline' type="single" collapsible>
                                            <AccordionItem value="item-1">
                                                <AccordionTrigger className='flex justify-start'><img src="/products.png" className='mr-3 size-6 text-3xl font-semibold' alt="" /><p className='text-2xl'>Our Products</p></AccordionTrigger>
                                                <AccordionContent className='flex flex-col ml-8'>
                                                    <Link onClick={() => setIsPopOverOpen(!isPopOverOpen)} className='text-lg' href={'/hospitals'}>- Hospital files</Link>
                                                    <Link onClick={() => setIsPopOverOpen(!isPopOverOpen)} className='text-lg' href='/amantran'>- Aamantran Patrikas</Link>
                                                    <Link onClick={() => setIsPopOverOpen(!isPopOverOpen)} className='text-lg' href={'/x-ray'}>- X-ray, MRI Covers</Link>
                                                    <Link onClick={() => setIsPopOverOpen(!isPopOverOpen)} className='text-lg' href={'/printing'}>- Printed Shopping Bags</Link>
                                                    <Link onClick={() => setIsPopOverOpen(!isPopOverOpen)} className='text-lg' href={'/printing-box'}>- Packing Box Printing</Link>
                                                    <Link onClick={() => setIsPopOverOpen(!isPopOverOpen)} className='text-lg' href={'/calendars'} >- Calendars</Link>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </li>
                                    <li onClick={() => setIsPopOverOpen(!isPopOverOpen)} className='flex items-center'><img src="/About.png" className='mr-3 text-3xl font-semibold size-6' alt="" />
                                        <Link className='text-3xl' href='/about'>About Us</Link></li>
                                </ul>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}

export default Nav