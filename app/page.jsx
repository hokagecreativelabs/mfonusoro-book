"use client";
import { motion } from "framer-motion";
import AboutSection from "@/components/AboutSection";
import ComingSoon from "@/components/ComingSoon";
import EventsSection from "@/components/EventsSection";
import HeroSection from "@/components/HeroSection";
import TestimonialSlider from "@/components/WhatCriticsSay";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }}
    >
      <HeroSection />
      <div className="mt-[500px] md:mt-20 mb-[-100px]">
        <AboutSection />
      </div>
      <div className="mb-[-100px]">
        <TestimonialSlider />
      </div>
      <div className="mb-[-100px]">
        <ComingSoon />
      </div>
      <div className="mt-[350px] md:mt-28 mb-[-100px]">
        <EventsSection />
      </div>
    </motion.div>
  );
}
