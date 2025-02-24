"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "A solid resource for anyone looking to understand the role of maritime transport in global trade. The discussions on sustainability and technology are particularly relevant in today’s evolving logistics landscape.",
    name: "Alex M.",
    role: "Port Operations Specialist",
  },
  {
    quote:
      "This platform has provided me with deep insights into international shipping regulations and market trends. Highly recommended for professionals in the field.",
    name: "Sarah T.",
    role: "Supply Chain Manager",
  },
  {
    quote:
      "A must-read for anyone involved in the logistics industry. The analysis on current and future trends is both insightful and practical.",
    name: "David R.",
    role: "Maritime Consultant",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="bg-[#FEFBF6] pt-16 px-6 mt-28 h-[500px]">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="max-w-3xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="text-center">
            <div className="border-l-4 border-[#F4A261] pl-4">
              <p className="text-xl md:text-[32px] leading-[35px] font-serif text-[#3D3C42]">
                "{testimonial.quote}"
              </p>
            </div>
            <div className="mt-6 text-[#3D3C42]">
              <h4 className="font-bold">{testimonial.name}</h4>
              <p className="text-sm mb-8">{testimonial.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;
