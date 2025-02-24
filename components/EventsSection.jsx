"use client";
import Image from "next/image";

const events = [
  {
    title: "Book Launch",
    date: "Mar 1, 2025",
    image: "/event.webp",
  },
  {
    title: "Live Book Launch Webinar",
    date: "Mar 3, 2025",
    image: "/event1.webp",
  },
  {
    title: "In-Person Book Signing",
    date: "Feb 24, 2025",
    image: "/event2.webp",
  },
];

const getEventStatus = (eventDate) => {
  const today = new Date();
  const event = new Date(eventDate);

  // Remove time component for accurate comparison
  today.setHours(0, 0, 0, 0);
  event.setHours(0, 0, 0, 0);

  if (event < today) return { status: "Past Event", color: "#FF4D4D" }; // Past event (Red)
  if (event.toDateString() === today.toDateString())
    return { status: "Happening Now", color: "#4CAF50" }; // Today (Green)
  return { status: "Upcoming", color: "#FFA947" }; // Upcoming event (Amber)
};

const EventsSection = () => {
  return (
    <section className="px-6 md:px-16">
      <div className="text-center flex flex-col items-center space-x-2">
        <span className="font-[Roboto-serif] text-[#1B1816] text-[20px] mt-4 font-semibold tracking-[2%] leading-[23px]">
          News & Events
        </span>
        <h2 className="text-3xl text-[#1B1816] md:text-[40px] leading-[40px] font-normal mt-2">
          Upcoming Events
        </h2>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {events.map((event, index) => {
          const { status, color } = getEventStatus(event.date);
          return (
            <div key={index} className="overflow-hidden shadow-md rounded-lg">
              <div className="relative w-full h-80">
                <Image
                  src={event.image}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center space-x-2">
                  <span
                    className="w-2 h-2 rounded-full mt-4"
                    style={{ backgroundColor: color }}
                  ></span>
                  <span className="font-[Roboto-serif] text-[#1B1816] text-[12px] mt-4 font-medium tracking-[2%] leading-[13px]">
                    {status}
                  </span>
                </div>
                <h3 className="text-[#1B1816] text-[24px] font-normal mt-[16px]">
                  {event.title}
                </h3>
                <p className="text-[14px] font-medium text-[#8C8784] mt-[16px]">
                  {event.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EventsSection;
