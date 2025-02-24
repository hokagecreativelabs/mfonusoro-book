import Locations from "./OurLocations";

const ComingSoon = () => {
    return (
      <section className="flex flex-col md:flex-row w-full h-[400px]">
        {/* Left - Coming Soon with Background Image */}
        <div
          className="w-full h-[00px] md:w-1/2 flex items-center justify-center text-white text-4xl font-serif font-bold bg-cover bg-center"
          style={{
            backgroundImage: "url('/coming.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
            <span>Coming Soon</span>
          </div> */}
        </div>
  
        {/* Right - Where to Find Our Books */}
        <Locations />
      </section>
    );
  };
  
  export default ComingSoon;
  