"use client"
import React from 'react'
import Link from "next/link";
import { useState } from 'react';
const Page = () => {
    const [formData, setFormData] = useState({
        name: "",
        mail: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            alert(result.message);
        } catch (error) {
            alert("Failed to send message!");
        }
    };
    return (
        <div className='main w-full min-h-screen  flex flex-col sm:flex-row gap-4     '>
            <div className="b1 bg-gray-00 lg:w-1/2 w-full  p-8 flex flex-col rounded-2xl">
                <div className='text-xl font- p-2'>
                    <span className='text-blue-400'>--- </span> Contact us
                </div>
                <span className='text-3xl font- p-2' >
                    Let&apos;s <span className='text-blue-400'>Connect</span> & <span className='text-blue-400'>Collabrate</span>
                </span>
                <span className='p-2'>
                    connect with  <span className='text-blue-400'>me</span> today
                    and check out my details
                </span>
                <div className='bg-gray-100 shadow-2xl rounded-xl h-full  w-full  flex  flex-col justify-center gap-4 p-4'>
                    <div className='flex items-center gap-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                            <path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 18.005859 12.033203 C 18.633859 12.060203 19.210594 12.414031 19.558594 12.957031 C 19.954594 13.575031 20.569141 14.534156 21.369141 15.785156 C 22.099141 16.926156 22.150047 18.399844 21.498047 19.589844 L 20.033203 21.673828 C 19.637203 22.237828 19.558219 22.959703 19.824219 23.595703 C 20.238219 24.585703 21.040797 26.107203 22.466797 27.533203 C 23.892797 28.959203 25.414297 29.761781 26.404297 30.175781 C 27.040297 30.441781 27.762172 30.362797 28.326172 29.966797 L 30.410156 28.501953 C 31.600156 27.849953 33.073844 27.901859 34.214844 28.630859 C 35.465844 29.430859 36.424969 30.045406 37.042969 30.441406 C 37.585969 30.789406 37.939797 31.366141 37.966797 31.994141 C 38.120797 35.558141 35.359641 37.001953 34.556641 37.001953 C 34.000641 37.001953 27.316344 37.761656 19.777344 30.222656 C 12.238344 22.683656 12.998047 15.999359 12.998047 15.443359 C 12.998047 14.640359 14.441859 11.879203 18.005859 12.033203 z"></path>
                        </svg>
                        <span>+91 8919454947 </span>
                    </div>
                    <div className='flex items-center gap-6 text-md     '>
                        <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50" fill="#000000"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
                        <span>  llookkeesshh00@gmail.com  </span>
                    </div>
                    <div className='flex items-center gap-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30">
                            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                        </svg>
                        <Link href="https://www.linkedin.com/in/llookkeesshh00"><span className=' font-medium underline  text-xs sm:text-base     '>https://www.linkedin.com/in/llookkeesshh00</span></Link>
                    </div>
                    <div className='flex items-center gap-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                            <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                        </svg>
                        <Link href="https://github.com/llookkeesshh00"><span className='underline font-medium text-xs sm:text-base'>https://github.com/llookkeesshh00</span></Link>
                    </div>
                    <div className='flex items-center gap-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50" fill="#000000"><path d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z" /></svg>
                        <span className='text-xs sm:text-base'>Uppal,Hyderabad,Telangana,IND</span>
                    </div>

                </div>
            </div>
            <div className="b1 bg-gray-00 w-full lg:w-1/2 p-8 flex flex-col gap-5 rounded-2xl justify-center">

                <input className="bg-gray-200 rounded-2xl p-5 w-full drop-shadow-md focus:outline-none"
                    type="text" name="name" placeholder="Name *" value={formData.name} onChange={handleChange} />
                <input className="bg-gray-200 rounded-2xl p-5 w-full drop-shadow-md focus:outline-none"
                    type="text" name="mail" placeholder="Mail *" value={formData.mail} onChange={handleChange} />
                <input className="bg-gray-200 rounded-2xl p-5 w-full drop-shadow-md focus:outline-none"
                    type="text" name="subject" placeholder="Subject *" value={formData.subject} onChange={handleChange} />
                <textarea className="bg-gray-200 w-full p-5 drop-shadow-md h-[200px] rounded-2xl focus:outline-none"
                    name="message" placeholder="Message *" value={formData.message} onChange={handleChange} />
                <div className="flex justify-center items-center">
                    <button onClick={handleSubmit} className="bg-blue-500 rounded-3xl px-4 py-2 font-semibold text-white hover:bg-blue-800 transition-all">
                        Send message
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Page
