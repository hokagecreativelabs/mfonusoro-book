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
      <div className="mt-[450px] md:mt-20">
        <AboutSection />
      </div>
      <div>    
        <TestimonialSlider />
      </div>
      <div>
        <ComingSoon />
      </div>
      <div className="mt-[450px] md:mt-28">
        <EventsSection />
      </div>
    </div>
  );
}
