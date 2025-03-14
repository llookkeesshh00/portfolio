import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const page = () => {
  return (
    <div className=' w-full min-h-screen p-6 flex flex-col gap-6'>
      <div className="container1 gap-6 grid grid-cols-1">
        <div className="header text-3xl font-bold text-blue-500">
          Teck Stack
        </div>
        <div className="stack">
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Mongoose(ORM)</li>
          <li>Mongo DB</li>
          <li>Express</li>
          <li>NodeJS</li>
        </div>
      </div>
      <div className="header text-2xl font-bold text-blue-500 flex flex-col  gap-4">
      <span>  code sandbox link </span>
        <Image src="/sanbox.png" width={50} height={50} alt="" className='transition-transform duration-300 hover:scale-105' />
      </div>
      <div className="container1 gap-6 grid grid-cols-1">
        <div className="header text-3xl font-bold text-blue-500">
          Live Preview..
        </div>

        <div className="link">
          <Link href="https://meatconnect-fe.vercel.app" target='_blank' className='text-blue-400  font-bold underline text-xl' > https://meatconnect-fe.vercel.app</Link>
        </div>
        <iframe
          src="https://meatconnect-fe.vercel.app"  // 🔹 Replace with your actual site URL
          width="100%"
          height="600px"
          className=" rounded-lg shadow-md">
        </iframe>
      </div>
      <div className="conainer2 flex flex-col gap-6">
        <div className="header text-3xl font-bold text-blue-500">
          Picture gallery..
        </div>
        <div className="images flex flex-col gap-16  ">
          <div className="img bordcer rounded-2xl shadow-2xl">
            <Image src="/c1.png" height={1000} width={1000} alt="" />
          </div>
          <div className="img bordcer rounded-2xl shadow-2xl">
            <Image src="/b1.png" height={1000} width={1000} alt="" />
          </div>
          <div className="img bordcer rounded-2xl shadow-2xl">
            <Image src="/b2.png" height={1000} width={1000} alt="" />
          </div>
          <div className="img bordcer rounded-2xl shadow-2xl">
            <Image src="/b3.png" height={1000} width={1000} alt="" />
          </div>
          <div className="img bordcer rounded-2xl shadow-2xl">
            <Image src="/b4.png" height={1000} width={1000} alt="" />
          </div>
          <div className="img bordcer rounded-2xl shadow-2xl">
            <Image src="/b5.png" height={1000} width={1000} alt="" />
          </div>
          <div className="img bordcer rounded-2xl shadow-2xl">
            <Image src="/b5.png" height={1000} width={1000} alt="" />
          </div>
          <div className="img bordcer rounded-2xl shadow-2xl">
            <Image src="/s1.png" height={1000} width={1000} alt="" />
          </div>
          <div className="img bordcer rounded-2xl shadow-2xl">
            <Image src="/s2.png" height={1000} width={1000} alt="" />
          </div>
          <div className="img bordcer rounded-2xl shadow-2xl">
            <Image src="/s3.png" height={1000} width={1000} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
