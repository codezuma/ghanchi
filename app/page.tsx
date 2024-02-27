import Image from "next/image";

export default function Home() {
  return (
    <div className="containerMod">
      <div className="containerMod p-4 mt-9">
      
        <img className="w-[100%] maxh-[50vh]" src="/homebanerimg.png" />
        <h1 className=" mt-5 text-center text-3xl font-medium tracking-wider"> Welcome to </h1>
        <h1 className=" mb-7 text-center text-red-800 font-semibold text-3xl tracking-wider"> RAJSURI PRINT & PACK </h1>
        <div className="w-[80%] h-[25vh] border-solid border-2 border-neutral-900 flex items-center justify-center">
          yt
        </div>
        <div className="font-light text-lg text-justify tracking-tight mt-7">
          Rajsuri Print and Pack since 2002,Your one-step destination for premium printing services. Specialization in a wide range of products including
          HospitalFiles, Amantran Patrikas, New Year Calendars, X-ray MRI Covers, Printed Shopping bags, box prints,
          and much more, We are commited to delivering exceptional quality and craftsmanship. With our state-of-the-art-technology and
          skilled team, we ensure that your printing needs are met with precision professionalism. Whether it's for
          personal or business use, trust Rajsuri Print and pack to bring your ideals to life with clarity and fineness.
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2 rounded-md w-[100%] lg:grid-cols-3">

          <div className="p-2 flex flex-col justify-start items-center">
            <div className="bg-rose-500 rounded-md">
              <img src="/20+.svg" className="p-4 h-36 w-36" alt="" />
            </div>
            <div className="font-normal text-center mt-2">Years Of Excellence</div>
          </div>
          <div className="p-2 flex flex-col justify-start items-center">
            <div className="bg-rose-500 rounded-md">
              <img src="/Design.svg" className="object-cover p-4  h-36 w-36" alt="" />
            </div>
            <div className="font-normal text-center mt-2">Modern & Latest Design</div>
          </div>

          <div className=" p-2 flex flex-col justify-start items-center">
            <div className="bg-rose-500 rounded-md">
              <img src="/1000+.svg" className=" p-4 h-36 w-36" alt="" />
            </div>
            <div className="font-normal text-center mt-2">Clients & Network</div>
          </div>
          <div className=" p-2 flex flex-col justify-start items-center">
            <div className="bg-rose-500 rounded-md">
              <img src="/coin-in-hand.png" className="object-cover h-36 w-36" alt="" />
            </div>
            <div className="font-normal text-center mt-2">Most Affordable Prices/Rates</div>
          </div>

          <div className=" p-2 flex flex-col justify-start items-center">
            <div className="p-2 bg-rose-500 rounded-md">
              <img src="/Bestseller.svg" className="object-cover h-36 w-36" alt="" />
            </div>
            <div className="font-normal text-center mt-2">Best Quality Printing</div>
          </div>
          <div className=" p-2 flex flex-col justify-start items-center">
            <div className="bg-rose-500 rounded-md">
              <img src="/Popularman.svg" className="object-cover p-4 h-36 w-36" alt="" />
            </div>
            <div className="font-normal text-center mt-2">Highly Experienced Staff</div>
          </div>

        </div>
      </div>

      {/* products section */}
      
      <div className="mt-2 grid grid-cols-1 gap-2 w-[100%] lg:grid-cols-2">
        <div className=" mt-3 w-full flex flex-col align-middle items-center">
          <div className="flex w-full align-middle justify-center">
          <img src="/item01.svg" className="p-2 z-10 mb-[-2rem] mr-[-6rem] w-48" alt="" />
          <img src="/item02.svg" className="p-2 z-20 w-48" alt="" />
          <img src="/item03.svg" className="p-2 z-10 mb-[-2rem] ml-[-6rem] w-48" alt="" />
          </div>
          <div className="w-[55%] h-14 mt-[-2rem] bg-rose-500 z-30 rounded-md flex justify-center items-center">
            <p className="text-slate-50 text-3xl font-medium">Hospital Files</p>
          </div>
          <p className="text-center mt-3 text-3xl w-[80%] lg:min-h-[20vh]">
             We excel in printing various types of Patient Report Files, including textured,
             embossed and UV Files, Catering to divers preferences and needs.
          </p>
          <div className="w-[30%] h-14 mt-11 bg-sky-950 z-30 rounded-sm flex justify-center items-center">
            <p className="text-slate-50 text-3xl font-normal">SAMPLES</p>
          </div>
        </div>


        <div className=" mt-3 w-full flex flex-col align-middle items-center">
          <div className="flex w-full align-middle justify-center">
          <img src="/item11.svg" className="p-2 z-10 mb-[-2rem] mr-[-6rem] w-48" alt="" />
          <img src="/item12.svg" className="p-2 z-20 w-48" alt="" />
          <img src="/item13.svg" className="p-2 z-10 mb-[-2rem] ml-[-6rem] w-48" alt="" />
          </div>
          <div className="w-[55%] h-14 mt-[-2rem] bg-rose-500 z-30 rounded-md flex justify-center items-center">
            <p className="text-slate-50 text-3xl font-normal">Amantran Patrikas</p>
          </div>
          <p className="text-center mt-5 text-3xl w-[80%] lg:min-h-[20vh]">
          We’re experts in printing Aamantran  Patrikas, especially those for temple
          inaugurations, any social events, etc .
          </p>
          <div className="w-[30%] h-14 mt-9 bg-sky-950 z-30 rounded-sm flex justify-center items-center">
            <p className="text-slate-50 text-3xl font-normal">SAMPLES</p>
          </div>
        </div>



        <div className=" mt-3 w-full flex flex-col align-middle items-center">
          <div className="flex w-full align-middle justify-center">
          <img src="/item21.svg" className="p-2 z-10 mb-[-2rem] mr-[-6rem] w-48" alt="" />
          <img src="/item22.svg" className="p-2 z-20 w-48" alt="" />
          <img src="/item23.svg" className="p-2 z-10 mb-[-2rem] ml-[-6rem] w-48" alt="" />
          </div>
          <div className="w-[55%] h-14 mt-[-2rem] bg-rose-500 z-30 rounded-md flex justify-center items-center">
            <p className="text-slate-50 text-3xl font-normal">X-RAY/ MRI Covers</p>
          </div>
          <p className="text-center mt-5 text-3xl w-[80%] lg:min-h-[20vh]">
          We also specialize in printing X-ray and MRI covers, ensuring quality and 
          precision for medical imaging needs.
          </p>
          <div className="w-[30%] h-14 mt-9 bg-sky-950 z-30 rounded-sm flex justify-center items-center">
            <p className="text-slate-50 text-3xl font-normal">SAMPLES</p>
          </div>
        </div>


        <div className=" mt-3 w-full flex flex-col align-middle items-center">
          <div className="flex w-full align-middle justify-center">
          <img src="/item32.svg" className="p-2 z-10 mb-[-2rem] mr-[-6rem] w-48" alt="" />
          <img src="/item33.svg" className="p-2 z-20 w-48" alt="" />
          <img src="/item31.svg" className="p-2 z-10 mb-[-2rem] ml-[-6rem] w-48" alt="" />
          </div>
          <div className="w-[55%] h-14 mt-[-2rem] bg-rose-500 z-30 rounded-md flex justify-center items-center">
            <p className="text-slate-50 text-3xl font-normal">PRINTED SHOPPING BAGS</p>
          </div>
          <p className="text-center mt-5 text-3xl  w-[80%] lg:min-h-[20vh]">
          We also provide printing services for shopping bags, catering to various 
          business including retail stores, hospitals, and brands looking to promote their
          products and services.
          </p>
          <div className="w-[30%] h-14 mt-9 bg-sky-950 z-30 rounded-sm flex justify-center items-center">
            <p className="text-slate-50 text-3xl font-normal">SAMPLES</p>
          </div>
        </div>



        <div className=" mt-3 w-full flex flex-col align-middle items-center">
          <div className="flex w-full align-middle justify-center">
          <img src="/item01.svg" className="p-2 z-10 mb-[-2rem] mr-[-6rem] w-48" alt="" />
          <img src="/item02.svg" className="p-2 z-20 w-48" alt="" />
          <img src="/item03.svg" className="p-2 z-10 mb-[-2rem] ml-[-6rem] w-48" alt="" />
          </div>
          <div className="w-[55%] h-14 mt-[-2rem] bg-rose-500 z-30 rounded-md flex justify-center items-center">
            <p className="text-slate-50 text-3xl font-medium">Hospital Files</p>
          </div>
          <p className="text-center mt-3 text-3xl w-[80%] lg:min-h-[20vh]">
             We excel in printing various types of Patient Report Files, including textured,
             embossed and UV Files, Catering to divers preferences and needs.
          </p>
          <div className="w-[30%] h-14 mt-9 mb-5 bg-sky-950 z-30 rounded-sm flex justify-center items-center">
            <p className="text-slate-50 text-3xl font-normal">SAMPLES</p>
          </div>
        </div>


        <div className=" mt-3 w-full flex flex-col align-middle items-center">
          <div className="flex w-full align-middle justify-center">
          <img src="/item52.svg" className="p-2 z-10 mb-[-2rem] mr-[-6rem] w-48" alt="" />
          <img src="/item53.svg" className="p-2 z-20 w-48" alt="" />
          <img src="/item51.svg" className="p-2 z-10 mb-[-2rem] ml-[-6rem] w-48" alt="" />
          </div>
          <div className="w-[55%] h-14 mt-[-2rem] bg-rose-500 z-30 rounded-md flex justify-center items-center">
            <p className="text-slate-50 text-3xl font-normal">Printing Calendars</p>
          </div>
          <p className="text-center mt-5 text-3xl w-[80%] lg:min-h-[20vh]">
          We also handle printing of Calendars, offering customized solutions to meet the banding and packaging needs
          of our clients.
          </p>
          <div className="w-[30%] h-14 mt-9 mb-5 bg-sky-950 z-30 rounded-sm flex justify-center items-center">
            <p className="text-slate-50 text-3xl font-normal">SAMPLES</p>
          </div>
        </div>
      
      </div>

      
 

      
     
      


      {/* client review pink section */}


      <div className="bg-rose-500  w-[100%] mt-20 flex flex-col justify-start items-center">
        <h1 className="mt-10 text-3xl text-slate-50 font-semibold">What our clients are saying?</h1>
        <img src="/teamwork.png" className="object-cover h-64 w-72" alt="" />
        <h3 className="mt-1 text-lg text-center text-slate-50 font-normal">
          “Rajsuri Print has been our go-to for all printing needs at Choudhary Bhupendra Hospital. From hospital files to CT MRI
          covers and marketing materials, their quality and reliability have been outstanding. Highly Recommended!
        </h3>
        <h2 className="mt-7 text-lg text-center text-slate-50 font-normal">
          -Dhukaram Choudhary
          (Managing Director of CBH Hospital, Bhinmal)
        </h2>
      </div>

    </div>
  );
}
