import AboutSection from "@/components/AboutSection";
import ComingSoon from "@/components/ComingSoon";
import EventsSection from "@/components/EventsSection";
import HeroSection from "@/components/HeroSection";
import TestimonialSlider from "@/components/WhatCriticsSay";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <div className="mt-[500px] md:mt-20 mb-[-100px]">
        <AboutSection />
      </div>
      <div className="mb-[-100px]">    
        <TestimonialSlider />
      </div>
      <div className="mb-[-100px]">
        <ComingSoon />
      </div>
      <div className="mt-[450px] md:mt-28">
        <EventsSection />
      </div>
    </div>
  );
}
