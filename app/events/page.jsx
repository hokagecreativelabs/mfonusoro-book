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
      date: "Mar 12, 2025",
      image: "/event2.png",
    },
    {
      title: "In-Person Book Signing",
      date: "Mar 12, 2025",
      image: "/event2.png",
    },
    {
      title: "In-Person Book Signing",
      date: "Mar 12, 2025",
      image: "/event2.png",
    },
    {
      title: "In-Person Book Signing",
      date: "Mar 12, 2025",
      image: "/event2.png",
    },
  ];
  
  const EventsPage = () => {
    return (
      <main className="mt-[64px] text-white min-h-screen">
        {/* Header */}
        <header className="pt-16 px-4 md:px-16 text-center">
          <h2 className="text-4xl md:text-5xl font-normal text-[#1B1816]">Upcoming Events</h2>
        </header>
  
        {/* Events Grid */}
        <section className="px-4 md:px-16 py-8">
          <div className="grid md:grid-cols-3">
            {events.map((event, index) => (
              <div key={index} className="overflow-hidden">
                {/* Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-[400px] object-cover"
                />
                
                {/* Event Details */}
                <div className="p-4">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#FFA947] rounded-full mt-4"></span>
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
      </main>
    );
  };
  
  export default EventsPage;
  