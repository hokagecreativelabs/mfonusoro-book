const events = [
  {
    title: "Book Launch",
    date: "Mar 1, 2025",
    image: "/event.png",
  },
  {
    title: "Live Book Launch Webinar",
    date: "Mar 3, 2025",
    image: "/event1.png",
  },
  {
    title: "In-Person Book Signing",
    date: "Feb 24, 2025",
    image: "/event2.png",
  },
];

const getStatusColor = (eventDate) => {
  const today = new Date();
  const event = new Date(eventDate);

  // Remove time component for accurate comparison
  today.setHours(0, 0, 0, 0);
  event.setHours(0, 0, 0, 0);

  if (event < today) return "#FF4D4D"; // Past event (Red)
  if (event.toDateString() === today.toDateString()) return "#4CAF50"; // Today (Green)
  return "#FFA947"; // Upcoming event (Amber)
};

const EventsSection = () => {
  return (
    <section className="text-white pt-16 px-6 md:px-16">
      <div className="text-center flex flex-col items-center space-x-2">
        <span className="font-[Roboto-serif] text-[#1B1816] text-[20px] mt-4 font-semibold tracking-[2%] leading-[23px]">
          News & Events
        </span>
        <h2 className="text-3xl text-[#1B1816] md:text-[40px] leading-[40px] font-normal mt-2">
          Upcoming Events
        </h2>
      </div>

      <div className="mt-8 grid md:grid-cols-3">
        {events.map((event, index) => (
          <div key={index} className="overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center space-x-2">
                <span
                  className="w-2 h-2 rounded-full mt-4"
                  style={{ backgroundColor: getStatusColor(event.date) }}
                ></span>
                <span className="font-[Roboto-serif] text-[#1B1816] text-[12px] mt-4 font-medium tracking-[2%] leading-[13px]">
                  Event
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
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
