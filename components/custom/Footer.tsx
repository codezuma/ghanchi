import React from 'react'

const Footer = () => {
  return (
    <div className='bg-sky-950'>
      <div className='w-full containerMod px-4 py-10 flex flex-col justify-center'>
        <h1 className='text-3xl font-medium text-slate-50 mb-6'>CONTACT US:</h1>

        <h2 className='text-slate-50 ml-5 font-medium'>rajsuriprintandpack@gmail.com</h2>
        <h2 className='text-slate-50 ml-5 font-medium'>9636941272</h2>
        <h2 className='text-slate-50 ml-5 font-medium'>9636941272</h2>
        <h2 className='text-slate-50 mt-4 ml-3'>
          D-347, Sumel business park 6,
          Dudheshwar, Ahmedabad, Gujarat 380004
        </h2>

        <div className="w-full mt-9 flex justify-center items-center">
          <div className="bg-slate-50 w-[80%] max-w-[250px] rounded-sm h-16 flex items-center justify-evenly ">
            <img src="Facebook.svg" className="h-11 w-11 place-self-center" alt="" />
            <img src="LinkedIn.svg" className="h-11 w-11 place-self-center" alt="" />
            <img src="Pinterest.svg" className="h-11 w-11 place-self-center" alt="" />
            <img src="Twitter.svg" className="h-11 w-11 place-self-center" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer