"use client";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";

const Image = lazy(() => import("next/image"));

export default function About() {
  return (
    <section className="h-[300px] flex flex-col-reverse md:flex-row items-center justify-between px-4 pt-12 pb-4 relative bg-[#FDF7F3]">
      {/* Left Side - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 text-left md:p-10 rounded-lg"
      >
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-[#FFA947] rounded-full mt-4"></span>
          <span className="font-[Roboto-serif] text-[#1B1816] text-[20px] mt-4 font-semibold tracking-[2%] leading-[23px]">
            Meet The Author
          </span>
        </div>
        <p className="text-[#54504D] text-[16px] leading-[23px] mt-4 max-w-[500px]">
          Mfon, an internationally acclaimed expert in transport laws and project finance, is the Managing Partner of the firm. Her deep knowledge of transaction and commercial practice makes her highly recommended by both domestic and international organisations. She leads the firm’s team in maritime, aviation, project finance, and energy matters actively participating in complex domestic and cross-border transactions. Under her supervision, the firm’s transaction team provides first-in-class legal advisory services to satisfied clients in the private and public sectors cutting across diverse areas.
        </p>
        <button className="bg-[#FFD4A3] text-[#5C3100] text-[14px] font-semibold leading-[128%] px-[24px] py-[32px] mt-8 hover:shadow-lg transition-all">
          FIND OUT MORE
        </button>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <Suspense fallback={<div className="w-[750px] h-[500px] bg-gray-200" />}>
          <Image
            src="/mfon-ekong-usoro.webp"
            alt="Mfon Usoro"
            width={750}
            height={600}
            className="object-contain"
          />
        </Suspense>
      </motion.div>
    </section>
  );
}
