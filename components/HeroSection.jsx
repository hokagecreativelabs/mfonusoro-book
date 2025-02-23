"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Using Next.js Image component, replace with regular if not needed

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0); // State to track the active slide

  const slides = [
    "/mfon-usoro-book-cover.webp", 
    "/mfon-usoro-book-cover-2.webp"
  ];

  // Change the active slide index
  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length); // Loop back to the first slide
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length); // Loop back to the last slide
  };

  return (
    <section className="w-[100%] mt-[50px] md:mt-[50px] flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-16 bg-gradient-to-br from-[#FAE4DA] via-[#FDF7F3] to-[#a3c9c7]">
      {/* Left Side - Swiper Book Cover */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="w-[317px] h-[471px] md:w-[576px] md:h-[90vh] flex items-center justify-center md:pt-0 pt-10 relative"
      >
        {/* Slide Image */}
        <Image
          src={slides[activeSlide]}
          alt={`Book Cover ${activeSlide + 1}`}
          width={400}
          height={571}
          className="object-cover"
        />
        
        {/* Navigation Buttons */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
        >
          &lt;
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
        >
          &gt;
        </button>
      </motion.div>

      {/* Right Side - Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full md:w-[640px] text-left mt-4 md:mt-0 md:px-0"
      >
        <h1 className="pt-6 text-[#1B1816] text-[30px] md:text-[64px] leading-[40px] md:leading-[70px] font-normal">
          International Trade and Carriage of Goods by Sea
        </h1>
        <p className="text-[#1B1816] text-[16px] md:leading-[22.4px] mt-6 max-w-[600px]">
          This book provides a comprehensive insight into the intricacies of international trade 
          and the carriage of goods by sea. Covering key aspects such as maritime law, shipping 
          regulations, and global trade logistics, it serves as an essential guide for professionals, 
          students, and policymakers navigating the complexities of the shipping industry.
        </p>
        <button className="bg-[#FFD4A3] text-[#5C3100] text-[14px] font-semibold leading-[128%] px-[24px] py-[32px] mt-8 hover:shadow-lg transition-all">
          FIND OUT MORE
        </button>
      </motion.div>
    </section>
  );
}
