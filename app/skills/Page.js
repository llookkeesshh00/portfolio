import React from 'react'

const Page = () => {
  return (
    <div className='border min-h-screen'>
      <h1 className="header border p-4 text-2xl text-blue-500 font-bold">
        --- My Skills
      </h1>
      <div className='items border gap-y-6  gap-3 p-6 grid grid-cols-3 '>
        <div className="item border justify-items-center p-2 flex gap-4 flex-col ">
          <div className="image">
            <img src="/programming.png" alt="" />
          </div>
          <div className="heading text-xl font-medium text-blue-500">
            Programming Languages
          </div>
          <div className="lists">
            HTML, CSS, Bootstrap, React-JS, Tailwind CSS, NextJS
          </div>
        </div>
        <div className="item border  justify-items-center p-2 flex gap-4 flex-col ">
          <div className="image">
           <img src="/cs.png" alt="" />
           </div>
          <div className="heading text-xl font-medium text-blue-500">
            CS fundamentals
          </div>
          <div className="lists">
            HTML, CSS, Bootstrap, React-JS, Tailwind CSS, NextJS
          </div>
        </div>
        <div className="item border justify-items-center p-2 flex gap-4 flex-col ">
          <div className="image">
            <img src="/webdev.png" alt="" />
          </div>
          <div className="heading text-xl font-medium text-blue-500">
            Web technologies
          </div>
          <div className="lists flex flex-col">
           <span><b> Frontend:</b> HTML, CSS, JavaScript, ReactJS,NextJs</span>
            <span><b> Backend: </b>  Node.js, Express.js  </span>
          </div>
        </div>
        <div className="item border  justify-items-center p-2 flex gap-4 flex-col ">
          <div className="image">
            <img src="/database.png" alt="" />
          </div>
          <div className="heading text-xl font-medium text-blue-500">
          Databases & Query Languages
          </div>
          <div className="lists">
            HTML, CSS, Bootstrap, React-JS, Tailwind CSS, NextJS
          </div>
        </div>
        <div className="item border  justify-items-center p-2 flex gap-4 flex-col ">
         <div className="image">
          <img src="/cloud.png" alt="" />
         </div>
          <div className="heading text-xl font-medium text-blue-500">
          Cloud & DevOps
          </div>
          <div className="lists">
            HTML, CSS, Bootstrap, React-JS, Tailwind CSS, NextJS
          </div>
        </div>
        <div className="item border  justify-items-center p-2 flex gap-4 flex-col ">
          <div className="image">
            <img src="/version.png " alt="" />
          </div>
          <div className="heading text-xl font-medium text-blue-500">
            Version Control & Collaboration
          </div>
          <div className="lists">
            HTML, CSS, Bootstrap, React-JS, Tailwind CSS, NextJS
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
