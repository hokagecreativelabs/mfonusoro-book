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
      <div className="mt-[500px] mb-[-100px] md:mt-20 pb-[-100px]">
        <AboutSection />
      </div>
      <div className="md:mt-52 mb-[-100px]">    
        <TestimonialSlider />
      </div>
      <div className="mt-[100px] mb-[-100px]">
        <ComingSoon />
      </div>
      <div className="mt-[350px] md:mt-48 mb-[-100px]">
        <EventsSection />
      </div>
    </div>
  );
}
