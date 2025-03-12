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
            I am a driven and ambitious student currently pursuing my Third year at vasavi College of Engineering . With a strong foundation in computer science and an insatiable curiosity for cutting-edge technologies, I am eager to embark on a journey of continuous learning and professional growth.I have an unyielding thirst for new challenges and opportunities to further elevate my skill set. I firmly believe in the value of hands-on experience as it is the key to refining my abilities and expanding my knowledge
          </div>
          <div className="heading2  font-md text-xl text-blue-400 ">
            My Education
          </div>
        </div>
        <div className="items rounded-2xl bg-gray-200 drop-shadow-md w-3/4 p-4 min-h-1/2 flex  flex-col gap-3 ">
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
        <div className="block w-3/4 bg-gray-200 rounded-2xl min-h-52 ">
         
        </div>
      </div>
      <div className='flex flex-col gap-3 '>
        <div className="heading2  font-md text-xl text-blue-400 ">
         Organizations
        </div>
        <div className="block w-3/4 bg-gray-200 rounded-2xl min-h-52 ">
         
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
