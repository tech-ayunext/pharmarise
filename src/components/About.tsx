import React from "react";
const About = () => {
  return (
    <section
      className="bg-white w-full pl-20 max-md:max-w-full max-md:pl-5"
      id="about"
    >
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[58%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-start text-[#0D4A8D] font-medium">
            {/* About Us Label with red underline */}
            <div className="mb-6 relative mt-[36px]">
              <p className="text-[23px] text-left font-medium">About Us</p>
              <span className="absolute bottom-0 left-0 w-24 h-[3px] bg-[#BE2623] rounded-full"></span>
            </div>

            {/* Heading */}
            <h2 className="text-[60px] font-bold leading-[90px] tracking-[-1.8px] mb-6 max-md:text-4xl">
              PharmaRise Innovations LLP
            </h2>

            {/* Subtext with Mr Rajendra Patkar in red */}
            <p className="text-[23px] leading-[36px] mb-6">
              Pharmarise Innovations has been founded in 2024 by{" "}
              <span className="text-[#BE2623] font-medium">
                Mr Rajendra Patkar
              </span>
              . A pharmacist by qualification and an MBA from Jamnalal Bajaj.
            </p>

            {/* Description */}
            <p className="text-[#0D4A8D] text-justify font-normal leading-[35px] tracking-[-0.69px] text-[23px] font-['Red Hat Text'] mb-6">
              He has launched many innovative products and has headed top pharma
              companies like Wockhardt, Jb Chemicals, & RPG where, he led major
              brand innovations. He has a vision to deliver innovative brands
              that lead to better patient outcomes. Many of the brands are first
              time in India showing that small companies can deliver big
              Innovations. We always keep in mind the better patient outcomes in
              all our Innovations.
            </p>

            {/* Button */}
            <button className="bg-[#0D4A8D] text-white text-[19px] px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all">
              Our Story
            </button>
          </div>
        </div>

        <div className="w-[47%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col relative min-h-[632px] grow px-[74px] max-md:max-w-full max-md:mt-[7px]">
            <img
              src="/images/Blue_back.svg"
              className="absolute h-full w-full object-cover inset-0"
              alt="About us background"
            />
            <img
              src="/images/Person.png"
              className="aspect-[0.68] object-contain w-full scale-110 z-10 mt-[-108px] ml-[53px] max-md:max-w-full"
              alt="Company representative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
