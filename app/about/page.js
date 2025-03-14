import Link from "next/link";
import React from 'react'
import Image from "next/image";

const Page = () => {
  return (
    <div className='w-full min-h-screen p-6 gap-6 shadow-2xl rounded-3xl flex flex-col'>
      <div className="heading font-semibold text-2xl text-blue-500">
        Hey I&apos;m Lokesh Naidu SP ....
      </div>
      
      <div>
        <div className='flex flex-col gap-2 w-full md:w-3/4'>
          <div className="heading2 font-md text-lg md:text-xl text-blue-400">
            Who am I?
          </div>
          <div className="break-words overflow-hidden">
            I am a driven and ambitious student currently pursuing my 3rd year at Vasavi College of Engineering. With a strong foundation in computer science and an insatiable curiosity for cutting-edge technologies, I am eager to embark on a journey of continuous learning and professional growth. I have an unyielding thirst for new challenges and opportunities to further elevate my skill set. I firmly believe in the value of hands-on experience as it is the key to refining my abilities and expanding my knowledge.
          </div>
          <div className="heading2 font-md text-lg md:text-xl text-blue-400">
            My Education
          </div>
        </div>

        <div className="items rounded-2xl bg-gray-200 mt-4 drop-shadow-md w-full md:w-3/4 p-4 flex flex-col gap-3">
          <div className="item flex flex-col sm:flex-row justify-between">
            <div className="heading flex flex-col">
              <span>Vasavi College of Engineering, HYD</span>
              <span className="text-gray-600 text-sm">B.E Computer Science and Engineering</span>
            </div>
            <div className='flex flex-col'>
              <span>(2022-Present)</span>
              <span className="text-gray-600 font-semibold">CGPA : 9.63</span>
            </div>
          </div>
          <div className="item flex flex-col sm:flex-row justify-between">
            <div className="heading flex flex-col">
              <span>Jawahar Navodaya Vidyalaya</span>
              <span className="text-gray-600 text-sm">Higher Secondary School</span>
            </div>
            <div className='flex flex-col'>
              <span>(2020-2020)</span>
              <span className="text-gray-600 font-semibold">CBSE : 92%</span>
            </div>
          </div>
          <div className="item flex flex-col sm:flex-row justify-between">
            <div className="heading flex flex-col">
              <span>Jawahar Navodaya Vidyalaya</span>
              <span className="text-gray-600 text-sm">Secondary School</span>
            </div>
            <div className='flex flex-col'>
              <span>(2016-2020)</span>
              <span className="text-gray-600 font-semibold">CBSE : 92.6%</span>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <div className="heading2 font-md text-lg md:text-xl text-blue-400">
          My Achievements and Certifications
        </div>
        <div className="p-4 w-full md:w-3/4 bg-gray-200 rounded-2xl flex flex-col gap-3">
          {[
            { title: "Problem Solving Through Programming in C", link: "https://drive.google.com/file/d/1GQlJAsZkqQwxvCBlxxqTIDhpLvWYzniG/view?usp=drivesdk", org: "IIT Kharagpur, April 2023, Top 5%" },
            { title: "The Joy of Computing Using Python", link: "https://drive.google.com/file/d/1GQlJAsZkqQwxvCBlxxqTIDhpLvWYzniG/view?usp=drivesdk", org: "IIT Madras, July 2023, Top 2%" },
            { title: "Basics of Python", link: "", org: "Infosys, 2023" },
            { title: "Programming Using Java", link: "", org: "Infosys Springboard 2024" }
          ].map((cert, index) => (
            <div key={index} className="flex flex-col sm:flex-row justify-between gap-2">
              <span>{cert.title}</span>
              <Link href={cert.link} className="text-blue-500 text-sm underline">
                {cert.org}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <div className="heading2 font-md text-lg md:text-xl text-blue-400">
          Organizations
        </div>
        <div className="p-4 w-full md:w-3/4 bg-gray-200 rounded-2xl flex flex-col gap-2">
          <span>Member of NSS (National Service Scheme)</span>
          <span>Member of CSI (Computer Society of India)</span>
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <div className="heading2 font-md text-lg md:text-xl text-blue-400">
          My resume
        </div>
        <div className="w-full flex items-center md:w-3/4 bg-gray-200 rounded-2xl  p-4">
           <Image src="/resumesvg.png"  height={50} width={50} alt="" />
          <Link href="/resume.pdf" target="_blank" className="underline  transition-transform duration-300 hover:scale-105"> click here to view</Link>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <div className="heading2 font-md text-lg md:text-xl text-blue-400">
          My Experience
        </div>
        <div className="w-full md:w-3/4 bg-gray-200 rounded-2xl min-h-52 p-4">
         
        </div>
      </div>
    </div>
  )
}

export default Page;
