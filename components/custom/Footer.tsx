import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-sky-950'>
      <div className='w-full containerMod px-4 py-10 flex flex-col justify-center'>
        <h1 className='text-3xl font-medium text-slate-50 mb-6'>CONTACT US:</h1>

        <div className='flex items-center gap-x-2'>
          <img src="/contacts/Email.png" alt="" />
          <h2 className='text-slate-50 font-medium'> rajsuriprintandpack@gmail.com</h2>
        </div>

        <div className='flex items-center gap-x-2'>
          <img src="/contacts/WhatsApp.png" alt="" />
          <h2 className='text-slate-50 font-medium'>9636941272</h2>
        </div>

        <div className='flex items-center gap-x-2'>
          <img src="/contacts/Call.png" alt="" />
          <a className='text-slate-50 font-medium' href="tel:9636941272">9636941272</a>
        </div>

        <div className='flex items-center gap-x-2'>
          <img src="/contacts/Address.png" alt="" />
          <h2 className='text-slate-50 font-medium'>D-347, Sumel business park 6,
            Dudheshwar, Ahmedabad, Gujarat 380004
          </h2>
        </div>


        <div className="w-full mt-9 flex justify-center items-center">
          <div className="bg-slate-50 w-[80%] max-w-[250px] rounded-sm h-16 flex items-center justify-evenly ">
            <Link href='https://www.instagram.com/rajsuriprint.in?igsh=bG5qZGU5dGVjbGNv'>
              <img src="Instagram.svg" className="h-11 w-11 place-self-center" alt="" />
            </Link>
            <Link href={'https://youtube.com/@RajsuriPrint?si=VRhU_YZ783pbcYr4'}>
              <img src="youtube.svg" className="h-11 w-11 place-self-center" alt="" />
            </Link>
            <Link href='https://m.indiamart.com/raj-suri-print-pack/'>
              <img src="indiamart.svg" className="h-11 w-11 place-self-center" alt="" />
            </Link>
            <Link href={'https://wa.me/9636941272'}>
              <img src="whatsapp.svg" className="h-11 w-11 place-self-center" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer