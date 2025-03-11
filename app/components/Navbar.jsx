"use client"; 
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar = () => {
  const pathname = usePathname(); 
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-100 shadow-lg rounded-2xl p-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
       
        <div className="text-xl font-bold text-blue-500">Hii there</div>

    
        <div className="hidden md:flex gap-10">
          <Link href="/">
            <div className={`font-semibold transition-all ${pathname === "/" ? "text-blue-500" : "text-gray-400 hover:text-blue-500"}`}>
              Home
            </div>
          </Link>
          <Link href="/about">
            <div className={`font-semibold transition-all ${pathname === "/about" ? "text-blue-500" : "text-gray-400 hover:text-blue-500"}`}>
              About me
            </div>
          </Link>
          <Link href="/services">
            <div className={`font-semibold transition-all ${pathname === "/services" ? "text-blue-500" : "text-gray-400 hover:text-blue-500"}`}>
              Services
            </div>
          </Link>
          <Link href="/projects">
            <div className={`font-semibold transition-all ${pathname === "/projects" ? "text-blue-500" : "text-gray-400 hover:text-blue-500"}`}>
              Projects
            </div>
          </Link>
        </div>

       
        <div className="hidden md:block">
          <Link href="/contactme">
            <button className="bg-blue-500 rounded-3xl px-4 py-2 font-semibold text-white hover:bg-blue-600 transition">
              Contact me
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Visible Only When `isOpen` is True) */}
      {isOpen && (
        <div className="md:hidden absolute top-16 right-0 w-full bg-gray-100 rounded-2xl shadow-lg p-5 flex flex-col gap-4 items-center">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <div className={`font-bold transition-all ${pathname === "/" ? "text-blue-500" : "text-gray-400 hover:text-blue-500"}`}>
              Home
            </div>
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            <div className={`font-bold transition-all ${pathname === "/about" ? "text-blue-500" : "text-gray-400 hover:text-blue-500"}`}>
              About me
            </div>
          </Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>
            <div className={`font-bold transition-all ${pathname === "/services" ? "text-blue-500" : "text-gray-400 hover:text-blue-500"}`}>
              Services
            </div>
          </Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>
            <div className={`font-bold transition-all ${pathname === "/projects" ? "text-blue-500" : "text-gray-400 hover:text-blue-500"}`}>
              Projects
            </div>
          </Link>
          <Link href="/contactme" onClick={() => setIsOpen(false)}>
            <button className="bg-blue-500 rounded-3xl px-4 py-2 font-semibold text-white hover:bg-blue-800 transition">
              Contact me
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
