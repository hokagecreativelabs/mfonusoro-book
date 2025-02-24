"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Optimize performance by using useCallback
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Accessibility: Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <nav className="bg-[#FDF7F3] h-[61px] flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Logo */}
      <Link
        href="/"
        className="text-linkText text-[25px] font-normal tracking-wide border border-l-0 border-linkText border-opacity-10 p-[11px] z-50"
        aria-label="Home"
      >
        MU
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center flex-grow justify-end">
        <nav className="flex border border-[#E0E0E0] overflow-hidden w-[600px]">
          {["About", "Books", "Events", "Contact"].map((name) => (
            <Link
              key={name}
              href={`/${name.toLowerCase().replace(/\s/g, "")}`}
              className="text-linkText text-[14px] font-normal flex-1 text-center py-[20px] border-r border-[#E0E0E0] last:border-r-0 hover:bg-ctaBg hover:text-ctaText transition-all"
            >
              {name}
            </Link>
          ))}
        </nav>
        <Link
          href="/more-info"
          className="bg-[#FFD4A3] text-[#5C3100] px-[32px] py-[21px] text-[14px] font-medium leading-[128%] tracking-tight"
        >
          FIND OUT MORE
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="bg-[#FFD4A3] md:hidden text-linkText text-2xl p-3.5 z-50 relative"
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        onClick={toggleMenu}
      >
        {isOpen ? <HiX size={32} aria-hidden="true" /> : <HiOutlineMenu size={32} aria-hidden="true" />}
      </button>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-[75%] bg-[#FDF7F3] shadow-lg flex flex-col items-start pt-24 gap-6 transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } z-40`}
      >
        <nav role="menu" className="w-full">
          {["About", "Books", "Events", "Contact"].map((name) => (
            <Link
              key={name}
              href={`/${name.toLowerCase().replace(/\s/g, "")}`}
              className="text-linkText text-[18px] font-medium py-6 w-full block border-b border-[#E0E0E0] last:border-b-0 px-6"
              onClick={() => setIsOpen(false)}
              role="menuitem"
            >
              {name}
            </Link>
          ))}
        </nav>
        <Link
          href="/more-info"
          className="bg-[#FFD4A3] text-[#5C3100] px-[32px] py-[20px] text-[14px] font-medium leading-[128%] w-full text-center"
          onClick={() => setIsOpen(false)}
        >
          FIND OUT MORE
        </Link>
      </div>
    </nav>
  );
}
