"use client";
import { useState, useEffect, lazy, Suspense } from "react";
import { motion } from "framer-motion";

const LazyImage = lazy(() => import("next/image")); // Lazy-load Image component

export default function Hero() {
  const slides = [
    "/mfon-usoro-book-cover.webp",
    "/mfon-usoro-book-cover.webp",
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-play slider every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full pt-[90px] flex flex-col md:flex-row items-center justify-around min-h-screen px-4 md:px-16 bg-gradient-to-br from-[#FAE4DA] via-[#FDF7F3] to-[#a3c9c7]">
      {/* Left Side - Book Cover Slider */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-[317px] h-[471px] md:w-[376px] md:h-[70vh] flex items-center justify-center relative overflow-hidden"
      >
        {/* Lazy Load Image */}
        <Suspense fallback={<div className="w-full h-full bg-gray-200" />}>
          <LazyImage
            key={activeSlide} // Ensure key updates with state
            src={slides[activeSlide]}
            alt={`Book Cover ${activeSlide + 1}`}
            width={500}
            height={571}
            className="absolute inset-0 object-contain transition-opacity duration-700"
            priority // Preload images
          />
        </Suspense>

        {/* Navigation Buttons */}
        <button
          onClick={() =>
            setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
          aria-label="Previous Slide"
        >
          &lt;
        </button>
        <button
          onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
          aria-label="Next Slide"
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
        <p className="text-[#1B1816] font-normal text-[16px] md:leading-[22.4px] mt-6 max-w-[600px]">
          This book provides a comprehensive insight into the intricacies of
          international trade and the carriage of goods by sea. Covering key
          aspects such as maritime law, shipping regulations, and global trade
          logistics, it serves as an essential guide for professionals,
          students, and policymakers navigating the complexities of the shipping
          industry.
        </p>
        <button className="bg-[#FFD4A3] text-[#5C3100] text-[14px] font-semibold leading-[128%] px-[24px] py-[32px] mt-8 hover:shadow-lg transition-all">
          <a href="/books/international-trade-carriage">FIND OUT MORE</a>
        </button>
      </motion.div>
    </section>
  );
}
