const About = () => {
  return (
    <section className="text-[#54504D] pt-16 px-4 md:px-16">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 mt-[60px]">Meet The Author</h2>

      {/* Image on Top */}
      <img
        src="/mfon-ekong-usoro.png" // Replace with actual image path
        alt="Mfon Ekong Usoro"
        className="w-[760px] h-[400px] object-cover rounded-lg shadow-lg mx-auto"
      />

      {/* Text Below */}
      <div className="mt-8 max-w-4xl mx-auto text-justify space-y-6">
        <p>
          Mfon Ekong Usoro has extensive experience as a shipping lawyer and a maritime administrator 
          with an avid interest in research, trade law, supply chain, and transport, and speaking at 
          international and domestic conferences. She is the pioneer and past Director General of the 
          Nigerian Maritime Administration and Safety Agency and the immediate past Secretary General 
          of the Memorandum of Understanding on Port State Control for West and Central Africa.
        </p>
        <p>
          Usoro is a member of the Governing Board of the International Maritime Institute of Nigeria, 
          set up by the Nigerian Navy, and is an Independent Non-Executive Director of First City 
          Monument Bank, Nigeria, and The Infrastructure Bank. Mfon Usoro is the Vice-Chair of the 
          International Bar Association Bar Issues Committee on International Trade in Legal Services.
        </p>
        <p>
          Usoro obtained her LL.M in Maritime Law from the University College London, BL from the 
          Nigerian Law School, LL.B (Hons) from the University of Buckingham, United Kingdom, and 
          B.Sc (Hons) Sociology from the University of Calabar, Nigeria. She is a recipient of 
          national honours - Chevalier de l'Ordre du Mérite Maritime...
        </p>
      </div>
    </section>
  );
};

export default About;
