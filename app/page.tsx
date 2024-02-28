import { ArrowRightIcon } from '@radix-ui/react-icons'
import { AspectRatio } from "@/components/ui/aspect-ratio"


export default function Home() {
  return (
    <>
      <div className="containerMod p-4">

        <img className="w-full max-w-[50%] mx-auto" src="/homebanerimg.png" />
        <h1 className="text-center text-2xl font-semibold tracking-wider"> Welcome to </h1>
        <h1 className="text-center text-red-800 font-semibold text-2xl tracking-wider"> RAJSURI PRINT & PACK </h1>
        <div className="my-4 w-full max-w-[70%] mx-auto">
          <AspectRatio className='border' ratio={16 / 9}>
            <iframe className='w-full h-full' src="https://www.youtube.com/embed/ihPTNp7370s" title="sumu - apart | Lo-Fi Hip Hop | NCS - Copyright Free Music" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </AspectRatio>
        </div>
        <div className="text-justify font-medium tracking-tight max-w-[70%] w-full mx-auto">
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
            <div className="bg-rose-500 grid size-36 rounded-md p-2">
              <img src="/20+.svg" className="place-self-center h-20 w-20" alt="" />
            </div>
            <p className="font-medium text-center mt-2 w-20">Years Of Excellence</p>
          </div>
          <div className="flex flex-col justify-start items-center">
            <div className="bg-rose-500 rounded-md p-2 size-36 grid">
              <img src="/Design.svg" className="h-20 w-20 place-self-center" alt="" />
            </div>
            <p className="font-medium text-center mt-2 w-20">Modern & Latest Design</p>
          </div>

          <div className="flex flex-col justify-start items-center">
            <div className="bg-rose-500 rounded-md p-2 size-36 grid">
              <img src="/1000+.svg" className="h-20 w-20 place-self-center" alt="" />
            </div>
            <p className="font-medium text-center mt-2 w-20">Clients & Network</p>
          </div>
          <div className="flex flex-col justify-start items-center">
            <div className="bg-rose-500 rounded-md p-2 grid size-36">
              <img src="/coin-in-hand.png" className="h-20 w-20 place-self-center" alt="" />
            </div>
            <p className="font-medium text-center mt-2 w-20">Most Affordable Prices/Rates</p>
          </div>

          <div className="flex flex-col justify-start items-center">
            <div className="bg-rose-500 rounded-md p-2 si grid size-36">
              <img src="/Bestseller.svg" className="h-20 w-20 place-self-center" alt="" />
            </div>
            <p className="font-medium text-center mt-2 w-20">Best Quality Printing</p>
          </div>
          <div className="flex flex-col justify-start items-center">
            <div className="bg-rose-500 rounded-md p-2 grid size-36">
              <img src="/Popularman.svg" className="h-20 w-20 place-self-center" alt="" />
            </div>
            <p className="font-medium text-center mt-2 w-20">Highly Experienced Staff</p>
          </div>

        </div>
      </div>

      {/* products section */}
      <div className='containerMod'>
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
            <div className="py-2 px-5 mt-11 bg-sky-950 z-30 rounded-sm flex justify-center items-center">
              <p className="text-slate-50 font-medium">SAMPLES </p>
            </div>
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
            <div className="py-2 px-5 mt-11 bg-sky-950 z-30 rounded-sm flex justify-center items-center">
              <p className="text-slate-50 font-medium">SAMPLES</p>
            </div>
          </div>

          <div className=" mt-3 w-full flex flex-col align-middle items-center">
            <div className="flex w-56 place-self-center">
              <img src="/item21.svg" className="z-10 mb-[-2rem] mr-[-6rem] w-48" alt="" />
              <img src="/item22.svg" className="z-20 w-48" alt="" />
              <img src="/item23.svg" className="z-10 mb-[-2rem] ml-[-6rem] w-48" alt="" />
            </div>
            <div className="py-2 mt-[-2rem] bg-rose-500 w-56 z-30 rounded-md flex justify-center items-center">
              <p className="text-slate-50 text-lg font-semibold text-center">X-RAY/ MRI Covers</p>
            </div>
            <p className="text-center mt-3 font-medium max-w-96">
              We also specialize in printing X-ray and MRI covers, ensuring quality and
              precision for medical imaging needs.
            </p>
            <div className="py-2 px-5 mt-11 bg-sky-950 z-30 rounded-sm flex justify-center items-center">
              <p className="text-slate-50 font-medium">SAMPLES</p>
            </div>
          </div>


          <div className=" mt-3 w-full flex flex-col align-middle items-center">
            <div className="flex w-56 place-self-center">
              <img src="/item32.svg" className="z-10 mb-[-2rem] mr-[-6rem] w-48" alt="" />
              <img src="/item33.svg" className="z-20 w-48" alt="" />
              <img src="/item31.svg" className="z-10 mb-[-2rem] ml-[-6rem] w-48" alt="" />
            </div>
            <div className="py-2 mt-[-2rem] bg-rose-500 w-56 z-30 rounded-md flex justify-center items-center">
              <p className="text-slate-50 text-lg font-semibold text-center">PRINTED SHOPPING BAGS</p>
            </div>
            <p className="text-center mt-3 font-medium max-w-96">
              We also provide printing services for shopping bags, catering to various
              business including retail stores, hospitals, and brands looking to promote their
              products and services.
            </p>
            <div className="py-2 px-5 mt-11 bg-sky-950 z-30 rounded-sm flex justify-center items-center">
              <p className="text-slate-50 font-medium">SAMPLES</p>
            </div>
          </div>



          <div className=" mt-3 w-full flex flex-col align-middle items-center">
            <div className="flex w-56 place-self-center">
              <img src="/item01.svg" className="p-2 z-10 mb-[-2rem] mr-[-6rem] w-48" alt="" />
              <img src="/item02.svg" className="p-2 z-20 w-48" alt="" />
              <img src="/item03.svg" className="p-2 z-10 mb-[-2rem] ml-[-6rem] w-48" alt="" />
            </div>
            <div className="py-2 mt-[-2rem] bg-rose-500 w-56 z-30 rounded-md flex justify-center items-center">
              <p className="text-slate-50 text-lg font-semibold text-center">Hospital Files</p>
            </div>
            <p className="text-center mt-3 font-medium max-w-96">
              We excel in printing various types of Patient Report Files, including textured,
              embossed and UV Files, Catering to divers preferences and needs.
            </p>
            <div className="py-2 px-5 mt-11 bg-sky-950 z-30 rounded-sm flex justify-center items-center">
              <p className="text-slate-50 font-medium">SAMPLES</p>
            </div>
          </div>


          <div className=" mt-3 w-full flex flex-col align-middle items-center">
            <div className="flex w-56 place-self-center">
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
            <div className="py-2 px-5 mt-11 bg-sky-950 z-30 rounded-sm flex justify-center items-center">
              <p className="text-slate-50 font-medium">SAMPLES</p>
            </div>
          </div>

        </div>
      </div>

      {/* client review pink section */}

      <div className="bg-rose-500  w-[100%] mt-20 flex flex-col justify-start items-center">
        <h1 className="mt-10 text-xl text-slate-50 font-semibold">What our clients are saying?</h1>
        <img src="/teamwork.png" className="h-44 w-72" alt="" />
        <h3 className="mt-1 text-center text-slate-50 max-w-[70%]">
          {
            `Rajsuri Print has been our go-to for all printing needs at Choudhary Bhupendra Hospital. From hospital files to CT MRI
          covers and marketing materials, their quality and reliability have been outstanding. Highly Recommended!`
          }
        </h3>
        <div className="text-white text-center my-2">
          <p className="text-sm font-semibold">-Dhukaram Choudhary</p>
          <p className="text-sm">(Managing Director of CBH Hospital, Bhinmal)</p>
        </div>
      </div>

    </>
  );
}
