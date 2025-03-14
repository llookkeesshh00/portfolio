import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "portfolio",
  description: "im lokesh and its my personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased relative`}>
        <div className=" w-full sm:w-3/4  z-50 fixed mx-auto sm:left-[170px]   top-0">
          <Navbar />
        </div>
        <div className="flex flex-col gap-4 p-2 sm:p-6 mt-16  mx-auto w-full sm:w-4/5 max-w-screen-lg bg-gray-50 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
