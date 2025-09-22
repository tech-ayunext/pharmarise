import React from "react";
const About = () => {
  return (
    <section
      className="bg-white w-full pl-4 sm:pl-8 md:pl-12 lg:pl-20 max-md:max-w-full max-md:pl-5"
      id="about"
    >
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-full lg:w-[58%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-start text-[#0D4A8D] font-medium px-4 sm:px-6 md:px-8 lg:px-0">
            {/* About Us Label with red underline */}
            <div className="mb-4 sm:mb-6 relative mt-[20px] sm:mt-[28px] lg:mt-[36px]">
              <p className="text-[18px] sm:text-[20px] md:text-[21px] lg:text-[23px] text-left font-medium">
                About Us
              </p>
              <span className="absolute bottom-0 left-0 w-16 sm:w-20 lg:w-24 h-[3px] bg-[#BE2623] rounded-full"></span>
            </div>

            {/* Heading */}
            <h2 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold leading-[40px] sm:leading-[50px] md:leading-[70px] lg:leading-[90px] tracking-[-1.8px] mb-4 sm:mb-6 max-md:text-4xl">
              PharmaRise Innovations LLP
            </h2>

            {/* Subtext with Mr Rajendra Patkar in red */}
            <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[23px] leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[36px] mb-4 sm:mb-6">
              Pharmarise Innovations has been founded in 2024 by{" "}
              <span className="text-[#BE2623] font-medium">
                Mr Rajendra Patkar
              </span>
              . A pharmacist by qualification and an MBA from Jamnalal Bajaj.
            </p>

            {/* Description */}
            <p className="text-[#0D4A8D] text-justify font-normal leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[35px] tracking-[-0.69px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[23px] font-['Red Hat Text'] mb-4 sm:mb-6">
              He has launched many innovative products and has headed top pharma
              companies like Wockhardt, Jb Chemicals, & RPG where, he led major
              brand innovations. He has a vision to deliver innovative brands
              that lead to better patient outcomes. Many of the brands are first
              time in India showing that small companies can deliver big
              Innovations. We always keep in mind the better patient outcomes in
              all our Innovations.
            </p>

            {/* Button */}
            <button className="bg-[#0D4A8D] text-white text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg hover:bg-opacity-90 transition-all">
              Our Story
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[47%] ml-0 lg:ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col relative min-h-[400px] sm:min-h-[500px] md:min-h-[580px] lg:min-h-[632px] grow px-4 sm:px-6 md:px-8 lg:px-[74px] max-md:max-w-full max-md:mt-[7px]">
            <img
              src="/images/Blue_back.svg"
              className="absolute h-full w-full object-cover inset-0"
              alt="About us background"
            />
            <img
              src="/images/Person.png"
              className="
                  aspect-[0.68] object-contain
                  w-full xs:w-[75%] sm:w-[85%] md:w-full   /* ✅ full width on mobile */
                  scale-100 sm:scale-105 md:scale-110 lg:scale-110
                  z-10
                  mt-[-40px] sm:mt-[-80px] md:mt-[-95px] lg:mt-[-108px]
                  mx-auto lg:ml-[53px]
                  relative left-4 sm:left-0               /* ✅ shift right on mobile only */
                  max-md:max-w-full
                "
              alt="Company representative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
