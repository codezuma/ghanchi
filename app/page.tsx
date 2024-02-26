import Image from "next/image";

export default function Home() {
  return (
    <div className="containerMod">
      <div className="containerMod mt-9">
        <h1 className="text-teal-500">hellow</h1>
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
        <div className="mt-5 grid grid-cols-2 gap-2 rounded-md h-[90vh] w-[100%]">

          <div className="p-2 flex flex-col justify-start items-center">
            <div className="bg-rose-500 size-[13rem] rounded-md"></div>
            <div className="font-normal text-xl text-center mt-2">Years Of Excellence</div>
          </div>
          <div className="p-2 flex flex-col justify-start items-center">
            <div className="bg-rose-500 size-[13rem] rounded-md"></div>
            <div className="font-normal text-xl text-center mt-2">Modern & Latest Design</div>
          </div>

          <div className=" p-2 flex flex-col justify-start items-center">
            <div className="bg-rose-500 size-[13rem] rounded-md"></div>
            <div className="font-normal text-xl text-center mt-2">Clients & Network</div>
          </div>
          <div className=" p-2 flex flex-col justify-start items-center">
            <div className="bg-rose-500 size-[13rem] rounded-md"></div>
            <div className="font-normal text-xl text-center mt-2">Most Affordable Prices/Rates</div>
          </div>

          <div className="p-2">
            <div className="bg-rose-500 size-[13rem] rounded-md"></div>
            <div className="font-normal text-xl text-center mt-2">Best Quality Printing</div>
          </div>
          <div className=" p-2">
            <div className="bg-rose-500 size-[13rem] rounded-md"></div>
            <div className="font-normal text-xl text-center mt-2">Highly Experienced Staff</div>
          </div>

        </div>
      </div>
      {/* products section */}
      <div className="container">
        <div className="bg-amber-200 mt-14 h-[30vh]">hgg</div>
      </div>

      {/* client review pink section */}


      <div className="bg-rose-500 p-2 w-[100%] mt-5 flex flex-col justify-start items-center">
        <h1 className="mt-10 text-3xl text-slate-50 font-semibold">What our clients are saying?</h1>
        <h3 className="mt-10 text-lg text-center text-slate-50 font-normal">
          “Rajsuri Print has been our go-to for all printing needs at Choudhary Bhupendra Hospital. From hospital files to CT MRI
          covers and marketing materials, their quality and reliability have been outstanding. Highly Recommended!
        </h3>
        <h2 className="mt-10 text-lg text-center text-slate-50 font-normal">
          -Dhukaram Choudhary
          (Managing Director of CBH Hospital, Bhinmal)
        </h2>
      </div>

    </div>
  );
}
