import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
        <Link href="https://codesandbox.io/p/github/llookkeesshh00/Password-manager/draft/ancient-meadow" target="_blank">
          <Image src="/sanbox.png" width={50} height={50} alt="" className='transition-transform duration-300 hover:scale-105' />
        </Link>

      </div>
      <div className="images flex flex-col gap-16  ">
        <div className="header text-3xl font-bold text-blue-500">
          Picture gallery..
        </div>
        <div className="img bordcer rounded-2xl shadow-2xl">
          <Image src="/passwordmanager.png" height={1000} width={1000} alt="" />
        </div>


      </div>

    </div>
  )
}

export default page
