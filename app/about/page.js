import Link from "next/link";
import React from 'react'

const Page = () => {
  return (
    <div className=' w-full min-h-screen p-6 gap-6  shadow-2xl rounded-3xl flex flex-col'>
      <div className="heading font-semibold text-2xl text-blue-500">
        Hey I&apos;m Lokesh Naidu SP ....
      </div>
      <div>
        <div className='flex flex-col gap-2 w-3/4'>
          <div className="heading2  font-md text-xl text-blue-400 ">
            Who am I?
          </div>
          <div>
            I am a driven and ambitious student currently pursuing my 3rd year at Vasavi College of Engineering . With a strong foundation in computer science and an insatiable curiosity for cutting-edge technologies, I am eager to embark on a journey of continuous learning and professional growth.I have an unyielding thirst for new challenges and opportunities to further elevate my skill set. I firmly believe in the value of hands-on experience as it is the key to refining my abilities and expanding my knowledge
          </div>
          <div className="heading2  font-md text-xl text-blue-400 ">
            My Education
          </div>
        </div>
        <div className="items rounded-2xl bg-gray-200 mt-4 drop-shadow-md w-3/4 p-4 min-h-1/2 flex  flex-col gap-3 ">
          <div className="item flex justify-between ">
            <div className="heading flex flex-col">
              <span > Vasavi College of Engineering, HYD </span>
              <span className="text-gray-600"> B.E Computer Science and Engineering</span>
            </div>
            <div className='flex flex-col'>
              <span >(2022-Present)</span>
              <span className="text-gray-600 font-semibold">CGPA : 9.63</span>
            </div>
          </div>
          <div className="item flex justify-between ">
            <div className="heading flex flex-col">
              <span >Jawahar Navodaya Vidyalaya </span>
              <span className="text-gray-600"> Higher Secondary School</span>
            </div>
            <div className='flex flex-col'>
              <span >(2020-2020)</span>
              <span className="text-gray-600 font-semibold">CBSE : 92%</span>
            </div>
          </div>
          <div className="item flex justify-between ">
            <div className="heading flex flex-col">
              <span >Jawahar Navodaya Vidyalaya </span>
              <span className="text-gray-600"> Secondary School</span>
            </div>
            <div className='flex flex-col'>
              <span >(2016-2020)</span>
              <span className="text-gray-600 font-semibold">CBSE : 92.6%</span>
            </div>
          </div>



        </div>
      </div>

      <div className='flex flex-col gap-3 '>
        <div className="heading2  font-md text-xl text-blue-400 ">
          My Achievments and Certifications
        </div>
        <div className=" p-4 w-3/4 bg-gray-200 rounded-2xl min-h-52 flex flex-col justify-between ">
          <div className="flex justify-between">
            <span>Problem Solving Through Programming in C </span>
            <Link href='https://drive.google.com/file/d/1GQlJAsZkqQwxvCBlxxqTIDhpLvWYzniG/view?usp=drivesdk ' className=" flex gap-3 text-gray-600" > <span> IIT Kharagpur, April 2023, Top 5%</span> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" /></svg> </Link >
          </div>
          <div className="flex justify-between">
            <span>The Joy of Computing Using Python </span>
            <Link href='https://drive.google.com/file/d/1GQlJAsZkqQwxvCBlxxqTIDhpLvWYzniG/view?usp=drivesdk ' className=" flex gap-3 text-gray-600" > <span>  IIT Madras, July 2023, Top 2%</span> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" /></svg> </Link >
          </div>
          <div className="flex justify-between">
            <span>Basics of Python </span>
            <Link href='' className=" flex gap-3 text-gray-600" > <span> Infosys, 2023</span> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" /></svg> </Link >
          </div>
          <div className="flex justify-between">
            <span>Programming Using Java </span>
            <Link href='' className=" flex gap-3 text-gray-600" > <span> Infosys Springboard 2024</span> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5985E1"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" /></svg> </Link >
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-3 '>
        <div className="heading2  font-md text-xl text-blue-400 ">
          Organizations
        </div>
        <div className=" p-4 w-3/4 bg-gray-200 rounded-2xl min flex flex-col gap-3">
         <span>Member of NSS (National Service Scheme)</span>
         <span> Member of CSI (Computer Society of India)</span>
        </div>
      </div>
      <div className='flex flex-col gap-3 '>
        <div className="heading2  font-md text-xl text-blue-400 ">
          My Experience
        </div>
        <div className="block w-3/4 bg-gray-200 rounded-2xl min-h-52 ">

        </div>
      </div>


    </div>
  )
}

export default Page
