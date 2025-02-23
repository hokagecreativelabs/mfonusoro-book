"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <nav className="bg-[#FDF7F3] h-[60px] flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Logo */}
      <h1 className="text-linkText text-[25px] font-normal tracking-wide border border-l-0 border-linkText border-opacity-10 p-[11px] z-50">
        MU
      </h1>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center flex-grow justify-end">
        <div className="flex border border-[#E0E0E0] overflow-hidden w-[600px]">
          {["About", "Books", "Events", "Contact Us"].map((name, index) => (
            <Link
              key={index}
              href={`/${name.toLowerCase().replace(/\s/g, "")}`}
              className="text-linkText text-[14px] font-normal flex-1 text-center py-[20px] border-r border-[#E0E0E0] last:border-r-0 hover:bg-ctaBg hover:text-ctaText transition-all"
            >
              {name}
            </Link>
          ))}
        </div>
        <div className="bg-[#FFD4A3] text-[#5C3100] px-[32px] py-[21px] text-[14px] font-medium leading-[128%] tracking-tight">
          FIND OUT MORE
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="bg-[#FFD4A3] md:hidden text-linkText text-2xl p-3.5 z-50 relative"
        aria-label="Toggle Menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src={isOpen ? "/close.svg" : "/menu.svg"}
          alt={isOpen ? "Close Menu" : "Open Menu"}
          width={32}
          height={32}
          className=""
        />
      </button>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-[75%] bg-[#FDF7F3] shadow-lg flex flex-col items-start pt-24 pl-6 gap-6 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-40`}
      >
        {["About", "Books", "Events", "Contact Us"].map((name, index) => (
          <Link
            key={index}
            href={`/${name.toLowerCase().replace(/\s/g, "")}`}
            className="text-linkText text-[18px] font-medium py-3 w-full border-b border-[#E0E0E0] last:border-b-0"
            onClick={() => setIsOpen(false)}
          >
            {name}
          </Link>
        ))}
        <div className="bg-[#FFD4A3] text-[#5C3100] px-[32px] py-[20px] text-[14px] font-medium leading-[128%]">
          FIND OUT MORE
        </div>
      </div>
    </nav>
  );
}
