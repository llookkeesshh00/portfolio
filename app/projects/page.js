import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <div className=' w-full min-h-screen p-4 flex gap-4 flex-col shadow-2xs'>
      <div className="heading font-semibold text-2xl  text-blue-500">
        My Latest Projects....
      </div>
      <div className="items flex flex-col gap-8 s ">
        <div className="item drop-shadow-md rounded-3xl p-6 place-items-center bg-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-6  ">
          <div className="image ">
            <Image src="/meatconnect.png" alt="" height={500} width={500} />
          </div>
          <div className="content flex flex-col items-center justify-center gap-3">
            <div className="h2 font-semibold text-xl  text-blue-500 ">
              Meat Supply Pro <span className='text-blue-500 opacity-50'> (2024)</span>
            </div>
            <div className="data text-sm">
              A B2B web application that facilitates efficient interactions between meat suppliers and buyers (restaurants and hotels), enabling seamless contract negotiations, contract management, order tracking, and communication. Initially deployed on a serverless architecture on Vercel for improved efficiency, it was later deployed on an S3 bucket and connected with a CloudFront distribution on AWS. The backend is hosted on an EC2 instance with Nginx for reverse proxy and load balancing.
            </div>
            <div className='sm:flex sm:flex-row sm:justify-between gap-4 flex flex-col   w-full'>
              <button className="bg-blue-500 rounded-3xl px-4 py-2 font-semibold text-white hover:bg-blue-600 sm:w-1/2 transition-transform duration-300 hover:scale-105">
                <Link href="https://github.com/llookkeesshh00/meatconnectFE" target='_blank'>  Git hub</Link>
              </button>
              <button className=" transition-transform duration-300 hover:scale-105 bg-blue-500 rounded-3xl px-4 py-2 font-semibold text-white hover:bg-blue-600 sm:w-1/2 ">
                <Link href="/pages/proj1"> Find more..</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="item drop-shadow-md rounded-3xl p-6 place-items-center bg-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-3 ">
          <div className="image ">
            <Image src="/passwordmanager.png" alt="" height={500} width={500} />
          </div>
          <div className="content flex flex-col items-center justify-center gap-3">
            <div className="h2 font-semibold text-xl  text-blue-500 ">
              Password Manager  <span className='text-blue-500 opacity-50'> (2023)</span>
            </div>
            <div className="data text-sm">
              Created a secure password manager using the MERN stack (ReactJS, Tailwind CSS, MongoDB, and Express).
              This application enables users to store, edit, delete, copy, and save website credentials, ensuring secure password
              management
            </div>
            <div className='sm:flex sm:flex-row sm:justify-between gap-4 flex flex-col   w-full'>
              <button className="bg-blue-500 rounded-3xl px-4 py-2 font-semibold text-white hover:bg-blue-600 sm:w-1/2 transition-transform duration-300 hover:scale-105">
                <Link href="https://github.com/llookkeesshh00/Password-manager" target='_blank'>  Git hub</Link>
              </button>
              <button className="bg-blue-500 rounded-3xl px-4 py-2 font-semibold text-white hover:bg-blue-600 sm:w-1/2 transition-transform duration-300 hover:scale-105">
              <Link href="/pages/proj2"> Find more..</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="item drop-shadow-md rounded-3xl p-6 place-items-center bg-gray-100 grid grid-cols-1 sm:grid-cols-2  gap-3 ">
          <div className="image ">
            <Image src="/route2.png" alt="" height={500} width={500} />
          </div>
          <div className="content flex flex-col items-center justify-center gap-3">
            <div className="h2 font-semibold text-xl  text-blue-500 ">
              Bus route finder II <span className='text-blue-500 opacity-50'> (2022)</span>
            </div>
            <div className="data text-sm">
              Designed and implemented a Java-based bus route management system that efficiently finds the shortest paths between bus stops using graph traversal algorithms. The system represents bus routes as an adjacency matrix, enabling quick lookup of direct and via-route connections. It reads stop names from mydata.txt and route data from routes.txt, dynamically mapping them to numbered vertices for processing. Using DFS, it finds all possible paths between a source and destination, calculates total travel distance, and determines fare based on predefined distance slabs. The project showcases expertise in Java, file handling, data structures, and algorithmic problem-solving for real-world transportation systems.
            </div>
            <div className='sm:flex sm:flex-row sm:justify-between gap-4 flex flex-col   w-full  '>
              <button className="bg-blue-500 rounded-3xl px-4 py-2 font-semibold text-white hover:bg-blue-600 sm:w-1/2 transition-transform duration-300 hover:scale-105">

                <Link href="https://github.com/llookkeesshh00/busRouteFinder2" target="_blank" >  Git hub</Link>
              </button>
              <button className="bg-blue-500 rounded-3xl px-4 py-2 font-semibold text-white hover:bg-blue-600 sm:w-1/2 transition-transform duration-300 hover:scale-105">
              <Link href="/pages/proj3"> Find more..</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="item drop-shadow-md rounded-3xl p-6 place-items-center bg-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-3 ">
          <div className="image ">
            <Image src="/route1.png" alt="" height={500} width={500} />
          </div>
          <div className="content flex flex-col items-center justify-center gap-3">
            <div className="h2 font-semibold text-xl  text-blue-500 ">
              Bus Route Finder I <span className='text-blue-500 opacity-50'> (2022)</span>
            </div>
            <div className="data text-sm">
              I developed a Python-based bus route finder that helps users identify bus routes between two locations, including an optional via-route feature. The system reads data from CSV files and a text file (busroute.txt), which contains routes such as BUSNAMEECILXROADS, and BUSNAMEUPPAL, covering major locations like mehdipatnam, langerhouse, vidyanagar, and more. Using Pandas, the program processes and displays relevant bus details dynamically
            </div>
            <div className='flex flex-col sm:flex sm:flex-row sm:justify-between gap-4 w-full '>
              <button className="bg-blue-500 rounded-3xl px-4 py-2 font-semibold text-white hover:bg-blue-600 w-full sm:w-1/2 transition-transform duration-300 hover:scale-105">
                <Link href="https://github.com/llookkeesshh00/busRouteFinder1" target="_blank" >  Git hub</Link>
              </button>
              <button className="bg-blue-500 rounded-3xl px-4 py-2 font-semibold text-white hover:bg-blue-600 w-full sm:w-1/2 transition-transform duration-300 hover:scale-105">
              <Link href="/pages/proj4"> Find more..</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
