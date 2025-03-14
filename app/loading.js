import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center  z-10 ">
      <Image src="/loading1.gif" alt="Loading..." height={100} width={100} />
    </div>
  );
}
