import { ArrowRightIcon } from '@radix-ui/react-icons'
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Link from 'next/link'


export default function Home() {
  return (
    <>
      <div className="containerMod p-4 mb-10">

        <img className="w-full lg:w-[50%] mx-auto my-10" src="/homebanerimg.png" />
        <h1 className="text-center text-2xl font-semibold tracking-wider"> Welcome to </h1>
        <h1 className="text-center text-red-800 font-semibold text-2xl tracking-wider mb-10"> RAJSURI PRINT & PACK </h1>
        <div className="my-4 max-w-[90%] mx-auto">
          <AspectRatio className='border' ratio={16 / 9}>
            <iframe className='w-full h-full' src="https://www.youtube.com/embed/SHNQwkjSZTM" title="Rajsuri Print and Pack, Ahmedabad (Gujarat)" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </AspectRatio>
        </div>
        <div className="text-justify font-medium tracking-tight lg:max-w-[70%] w-full mx-auto">
          {
            `Rajsuri Print and Pack since 2002,Your one-step destination for premium printing services. Specialization in a wide range of products including
          HospitalFiles, Amantran Patrikas, New Year Calendars, X-ray MRI Covers, Printed Shopping bags, box prints,
          and much more, We are commited to delivering exceptional quality and craftsmanship. With our state-of-the-art-technology and
          skilled team, we ensure that your printing needs are met with precision professionalism. Whether it's for
          personal or business use, trust Rajsuri Print and pack to bring your ideals to life with clarity and fineness.`
          }
        </div>
        <div className="mt-5 grid px-2 grid-cols-2 gap-x-2 gap-y-2 rounded-md w-full md:grid-cols-3">

          <div className="flex flex-col justify-start items-center">
            <div className="bg-rose-500 grid size-32 rounded-md p-2 shadow-lg">
              <img src="/20+.svg" className="place-self-center h-20 w-20" alt="" />
            </div>
            <p className="font-medium text-center mt-2">Years Of Excellence</p>
          </div>
          <div className="flex flex-col justify-start items-center">
            <div className="bg-rose-500 rounded-md p-2 size-32 grid shadow-lg">
              <img src="/Design.svg" className="h-20 w-20 place-self-center" alt="" />
            </div>
            <p className="font-medium text-center mt-2 w-20">Modern & Latest Design</p>
          </div>

          <div className="flex flex-col justify-start items-center">
            <div className="bg-rose-500 rounded-md p-2 size-32 grid shadow-lg">
              <img src="/1000+.svg" className="h-20 w-20 place-self-center" alt="" />
            </div>
            <p className="font-medium text-center mt-2 w-20">Clients & Network</p>
          </div>
          <div className="flex flex-col justify-start items-center">
            <div className="bg-rose-500 rounded-md p-2 grid size-32 shadow-lg">
              <img src="/coin-in-hand.png" className="h-20 w-20 place-self-center" alt="" />
            </div>
            <p className="font-medium text-center mt-2 w-20">Most Affordable Prices/Rates</p>
          </div>

          <div className="flex flex-col justify-start items-center">
            <div className="bg-rose-500 rounded-md p-2 si grid size-32 shadow-lg">
              <img src="/Bestseller.svg" className="h-20 w-20 place-self-center" alt="" />
            </div>
            <p className="font-medium text-center mt-2 w-20">Best Quality Printing</p>
          </div>
          <div className="flex flex-col justify-start items-center">
            <div className="bg-rose-500 rounded-md p-2 grid size-32 shadow-lg">
              <img src="/Popularman.svg" className="h-20 w-20 place-self-center" alt="" />
            </div>
            <p className="font-medium text-center mt-2 w-20">Highly Experienced Staff</p>
          </div>

        </div>
      </div>

      {/* products section */}
      <div className='containerMod mb-10'>
        <p className="font-semibold text-center">WE PROVIDE</p>
        <p className="font-bold text-center text-[#880026]">OUR PRODUCTS</p>

        <div className="mt-2 grid grid-cols-1 px-5 gap-2 w-full md:grid-cols-2 lg:grid-cols-3">

          <div className="mt-3 w-full flex flex-col align-middle items-center">
            <div className="flex w-56 place-self-center">
              <img src="/item01.svg" className="z-10 mb-[-2rem] mr-[-6rem] w-48" alt="" />
              <img src="/item02.svg" className="z-20 w-48" alt="" />
              <img src="/item03.svg" className="z-10 mb-[-2rem] ml-[-6rem] w-48" alt="" />
            </div>
            <div className="py-2 mt-[-2rem] bg-rose-500 w-56 z-30 rounded-md flex justify-center items-center">
              <p className="text-slate-50 text-lg font-semibold text-center">Hospital Files</p>
            </div>
            <p className="text-center mt-3 font-medium max-w-96">
              We excel in printing various types of Patient Report Files, including textured,
              embossed and UV Files, Catering to divers preferences and needs.
            </p>
            <Link className='text-xl' href={'/hospitals'}>
              <div className="py-2 px-5 mt-11 bg-sky-950 z-30 rounded-sm flex justify-center items-center gap-1">
                <p className="text-slate-50 font-medium">SAMPLES </p> <img src="/arro.png" alt="" />
              </div>
            </Link>

          </div>

          <div className="mt-3 w-full flex flex-col align-middle items-center">
            <div className="flex w-56 place-self-center">
              <img src="/item11.svg" className="z-10 mb-[-2rem] mr-[-6rem] w-48" alt="" />
              <img src="/item12.svg" className="z-20 w-48" alt="" />
              <img src="/item13.svg" className="z-10 mb-[-2rem] ml-[-6rem] w-48" alt="" />
            </div>
            <div className="py-2 mt-[-2rem] bg-rose-500 w-56 z-30 rounded-md flex justify-center items-center">
              <p className="text-slate-50 text-lg font-semibold text-center">Amantran Patrikas</p>
            </div>
            <p className="text-center mt-3 font-medium max-w-96">
              We’re experts in printing Aamantran  Patrikas, especially those for temple
              inaugurations, any social events, etc .
            </p>
            <Link href={'/amantran'}>
              <div className="py-2 px-5 mt-11 bg-sky-950 z-30 rounded-sm flex justify-center items-center gap-1">
                <p className="text-slate-50 font-medium">SAMPLES</p> <img src="/arro.png" alt="" />
              </div>
            </Link>

          </div>

          <div className=" mt-3 w-full flex flex-col align-middle items-center">
            <div className="flex w-56 place-self-center">
              <img src="/x-ray.png" className="z-20 w-auto" alt="" />
              {/* <img src="/x-ray/one.jpg" className="z-10 mb-[-2rem] mr-[-6rem] w-48" alt="" />
              <img src="/x-ray/two.jpg" className="z-20 w-48" alt="" />
              <img src="/x-ray/three.jpg" className="z-10 mb-[-2rem] ml-[-6rem] w-48" alt="" /> */}
            </div>
            <div className="py-2 mt-[-2rem] bg-rose-500 w-56 z-30 rounded-md flex justify-center items-center gap-1">
              <p className="text-slate-50 text-lg font-semibold text-center">X-RAY/ MRI Covers</p>
            </div>
            <p className="text-center mt-3 font-medium max-w-96">
              We also specialize in printing X-ray and MRI covers, ensuring quality and
              precision for medical imaging needs.
            </p>
            <Link className='text-xl' href={'/x-ray'}>
              <div className="py-2 px-5 mt-11 bg-sky-950 z-30 rounded-sm flex justify-center items-center gap-1">
                <p className="text-slate-50 font-medium">SAMPLES</p> <img src="/arro.png" alt="" />
              </div>
            </Link>

          </div>


          <div className=" mt-3 w-full flex flex-col align-middle items-center">
            <div className="flex w-56 place-self-center">
              <img src="/item32.svg" className="z-10 mb-[-2rem] mr-[-6rem] w-48" alt="" />
              <img src="/item33.svg" className="z-20 w-48" alt="" />
              <img src="/item31.svg" className="z-10 mb-[-2rem] ml-[-6rem] w-48" alt="" />
            </div>
            <div className="py-2 mt-[-2rem] bg-rose-500 w-[19rem] z-30 rounded-md flex justify-center items-center gap-1">
              <p className="text-slate-50 text-lg font-semibold text-center">PRINTED SHOPPING BAGS</p>
            </div>
            <p className="text-center mt-3 font-medium max-w-96">
              We also provide printing services for shopping bags, catering to various
              business including retail stores, hospitals, and brands looking to promote their
              products and services.
            </p>
            <Link className='text-xl' href={'/printing'}>
              <div className="py-2 px-5 mt-11 bg-sky-950 z-30 rounded-sm flex justify-center items-center gap-1">
                <p className="text-slate-50 font-medium">SAMPLES</p> <img src="/arro.png" alt="" />
              </div>
            </Link>

          </div>



          <div className=" mt-3 w-full flex flex-col align-middle items-center">
            <div className="flex w-56 items-center justify-center">
              <img src="/itemsingle.svg" className="p-2 z-20 w-48" alt="" />
            </div>
            <div className="py-2 mt-[-1rem] bg-rose-500 w-60 z-30 rounded-md flex justify-center items-center">
              <p className="text-slate-50 text-lg font-semibold text-center">Packaging Box Printing</p>
            </div>
            <p className="text-center mt-5 font-medium max-w-96">
              We also handle printing for packaging boxes, of fering customized solutions tomeet the banding and packaging needs
              of our clients.
            </p>
            <Link href='/printing-box'>
              <div className="py-2 px-5 mt-9 bg-sky-950 z-30 rounded-sm flex justify-center items-center gap-1">
                <p className="text-slate-50 font-medium">SAMPLES</p> <img src="/arro.png" alt="" />
              </div>
            </Link>
          </div>


          <div className=" mt-3 w-full flex flex-col align-middle items-center">
            <div className="flex w-56 items-center justify-center">
              <img src="/item52.svg" className="p-2 z-10 mb-[-2rem] mr-[-6rem] w-48" alt="" />
              <img src="/item53.svg" className="p-2 z-20 w-48" alt="" />
              <img src="/item51.svg" className="p-2 z-10 mb-[-2rem] ml-[-6rem] w-48" alt="" />
            </div>
            <div className="py-2 mt-[-2rem] bg-rose-500 w-56 z-30 rounded-md flex justify-center items-center">
              <p className="text-slate-50 text-lg font-semibold text-center">Printing Calendars</p>
            </div>
            <p className="text-center mt-3 font-medium max-w-96">
              We also handle printing of Calendars, offering customized solutions to meet the banding and packaging needs
              of our clients.
            </p>
            <Link className='text-xl' href={'/calendars'}>
              <div className="py-2 px-5 mt-11 bg-sky-950 z-30 rounded-sm flex justify-center items-center gap-1">
                <p className="text-slate-50 font-medium">SAMPLES</p> <img src="/arro.png" alt="" />
              </div>
            </Link>

          </div>

        </div>
      </div>

      {/* client review pink section */}

      <div className="bg-rose-500  w-[100%] mt-20 flex flex-col justify-start items-center py-8">
        <h1 className="mt-10 text-xl text-slate-50 font-semibold">What our clients are saying?</h1>
        <img src="/teamwork.png" className="h-44 w-72" alt="" />
        <Carousel className='w-[80%]'>
          <CarouselContent>
            <CarouselItem>
              <h3 className="mt-1 text-center w-[80%] mx-auto text-slate-50 max-w-[70%]">
                {
                  `Rajsuri Print has been our go-to for all printing needs at Choudhary Bhupendra Hospital. From hospital files to CT MRI
          covers and marketing materials, their quality and reliability have been outstanding. Highly Recommended!`
                }
              </h3>
              <div className="text-white text-center my-2">
                <p className="text-sm font-semibold">-Dhukaram Choudhary</p>
                <p className="text-sm">(Managing Director of CBH Hospital, Bhinmal)</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <h3 className="mt-1 text-center w-[80%] mx-auto text-slate-50 max-w-[70%]">
                {
                  `I am very pleased with the non-woven bag printing services provided by Rajsuri Print for Nutinn Dry Fruits Company. The quality of the prints is excellent, the prices are reasonable, and they deliver on time`
                }
              </h3>
              <div className="text-white text-center my-2">
                <p className="text-sm font-semibold">-Nutinn Dry Fruits</p>
                <p className="text-sm">(Gajanand Cashew)</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <h3 className="mt-1 text-center w-[80%] mx-auto text-slate-50 max-w-[70%]">
                {
                  `We're consistently impressed with the quality and design of our hospital files provided by Rajsuri Print. They not only meet but exceed our expectations with attractive designs and durable materials. Highly satisfied!`
                }
              </h3>
              <div className="text-white text-center my-2">
                <p className="text-sm font-semibold">-Apex Hospital, Jalor (Rajasthan)</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <h3 className="mt-1 text-center w-[80%] mx-auto text-slate-50 max-w-[70%]">
                {
                  `At Vijaya Metro IVF, Ahmedabad, just as we excel in expert deliveries for children, Rajsuri Print mirrors that expertise in their printing service. They deliver on time, without any hiccups, ensuring a seamless experience every time. Highly recommended!`
                }
              </h3>
              <div className="text-white text-center my-2">
                <p className="text-sm font-semibold">Vijaya Metro IVF Hospital, Ahmedabad</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <h3 className="mt-1 text-center w-[80%] mx-auto text-slate-50 max-w-[70%]">
                {
                  `We recently printed our Amantran Patrika with Rajsuri Print, and the experience was excellent. The printing quality, UV finish, latest designs, packaging, and more were all top-notch. All of this at a very reasonable price. Highly impressed.`
                }
              </h3>
              <div className="text-white text-center my-2">
                <p className="text-sm font-semibold">- Ghanchi Samaj Trust, Pune</p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className='px-8 self-end'>
          <ArrowRightIcon color='white' className='self-end' />
        </div>
      </div>

    </>
  );
}
