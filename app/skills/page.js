import React from 'react'
import Image from 'next/image';



const Page = () => {
  return (
    <div className=' min shadow-2xl-h-screen'>
      <h1 className="header  p-4 text-2xl text-blue-500 font-bold">
        --- My Skills
      </h1>
      <div className='items  gap-y-6  gap-3 p-6 grid grid-cols-3 '>
        <div className="item  bg-gray-200 rounded-3xl shadow-2xl justify-items-center p-2 flex gap-4 flex-col ">
          <div className="image">
            <Image src="/programming.png" alt="" width={50} height={50} />
          </div>
          <div className="heading text-xl font-medium text-blue-500">
            Programming Languages
          </div>
          <div className="lists">
            Python, Java, C, JavaScript,SQL
          </div>
        </div>
        <div className="item bg-gray-200 rounded-3xl shadow-2xl  justify-items-center p-2 flex gap-4 flex-col ">
          <div className="image">
            <Image src="/cs.png" alt="" width={50} height={50} />
          </div>
          <div className="heading text-xl font-medium text-blue-500">
            CS fundamentals
          </div>
          <div className="lists">
            Data Structures Algorithms, OOPS, Database Management System,Computer networks
          </div>
        </div>
        <div className="item bg-gray-200 rounded-3xl shadow-2xl justify-items-center p-2 flex gap-4 flex-col ">
          <div className="image">
            <Image src="/webdev.png" alt="" width={50} height={50} />
          </div>
          <div className="heading text-xl font-medium text-blue-500">
            Web technologies
          </div>
          <div className="lists ">
              HTML , CSS , Java script ,ReactJS , NextJS ,NodeJS , ExpressJS , 
              Tailwind CSS
          </div>
        </div>
        <div className="item bg-gray-200 rounded-3xl shadow-2xl  justify-items-center p-2 flex gap-4 flex-col ">
          <div className="image">
            <Image src="/database.png" alt="" width={50} height={50} />
          </div>
          <div className="heading text-xl font-medium text-blue-500">
            Databases & Query Languages
          </div>
          <div>
                Oracle , Mongo DB , Postgres Sql , Prisma (ORM) , Mongoose(ORM)
          </div>
        </div>
        <div className="item bg-gray-200 rounded-3xl shadow-2xl  justify-items-center p-2 flex gap-4 flex-col ">
          <div className="image">
            <Image src="/cloud.png" alt="" width={50} height={50} />
          </div>
          <div className="heading text-xl font-medium text-blue-500">
            Cloud & DevOps
          </div>
          <div className="lists">
              AWS , Docker , Git , linux 
          </div>
        </div>
        {/* <div className="item bg-gray-200 rounded-3xl shadow-2xl  justify-items-center p-2 flex gap-4 flex-col ">
          <div className="image">
            <Image src="/version.png" alt="" width={50} height={50} />
          </div>
          <div className="heading text-xl font-medium text-blue-500">
            Version Control & Collaboration
          </div>
          <div className="lists">
            HTML, CSS, Bootstrap, React-JS, Tailwind CSS, NextJS
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Page
