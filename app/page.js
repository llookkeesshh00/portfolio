import Image from "next/image";


export default function Home() {
  return (

    <div className=" bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#2b7fff_100%)] hero   border-blue-200  w-full min-h-screen p-6 gap-6 rounded-2xl shadow-2xl flex flex-col items-center ">
      <div className="p flex flex-col gap-2 ">
        <div className="text-base  text-center">
          Hello...
        </div>
        <div className="main text-4xl text-center">
          I&apos;m  <span className="text-blue-500 underline">Lokesh Naidu SP</span>
        </div>
        <div>
          I am a web developer passionate about creating amazing web experiences.
        </div>
      </div>

      <div className=" text-center flex  justify-items-start">
        <Image className="" src="/myimg.jpg" height={200} width={200} alt="" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3  gap-2 ">
        <div className="item p-4 rounded-3xl shadow-2xl justify-items-center  flex gap-4 flex-col  transition-transform duration-300 hover:scale-105 ">
          <div className="image">
            <Image src="/what.png" alt="" width={50} height={50} />
          </div>
          <div className="heading text-xl font-medium text-blue-800">
            What i Do?
          </div>
          <div className="lists">
            I design and develop beautiful and functional websites and web applications.
          </div>
        </div>
        <div className="item  transition-transform duration-300 hover:scale-105 p-4 rounded-3xl shadow-2xl justify-items-center  flex gap-4 flex-col ">
          <div className="image">
            <Image src="/expertise.png" alt="" width={50} height={50} />
          </div>
          <div className="heading text-xl font-medium text-blue-800">
            My Expertise
          </div>
          <div className="lists">
            I specialize in MERN Stack,DSA,SQL and Java Language and more....
          </div>
        </div>
        <div className="item  transition-transform duration-300 hover:scale-105  rounded-3xl p-4 shadow-2xl justify-items-center  flex gap-4 flex-col ">
          <div className="image">
            <Image src="/contact.png" alt="" width={50} height={50} />
          </div>
          <div className="heading text-xl font-medium text-blue-800">
            Get in Touch
          </div>
          <div className="lists">
            Feel free to contact me for any inquiries or collaborations.
          </div>
        </div>

      </div>
    </div>

  );

}
