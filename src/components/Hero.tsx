import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen w-full relative overflow-hidden" id="home">
      {/* Main container with responsive grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[982px_1fr] gap-0 min-h-screen">
        {/* Left section with background */}
        <div className="relative w-full lg:w-[982px] h-[500px] sm:h-[600px] lg:h-[738px] z-10">
          <img
            src="/images/Hero_background.png"
            className="absolute inset-0 h-full w-full object-cover"
            alt="Hero background"
          />

          {/* Content container with responsive padding */}
          <div className="relative z-20 h-full p-4 sm:p-8 lg:p-[54px] flex flex-col justify-between">
            {/* Top section */}
            <div className="space-y-4 sm:space-y-6">
              {/* PharmaRise Innovations (heading) */}
              <h1 className="text-white text-[28px] sm:text-[40px] md:text-[50px] lg:text-[66.98px] font-bold leading-[0.9] tracking-[-2.01px] font-['Red_Hat_Text']">
                PharmaRise Innovations
              </h1>

              {/* Innovations for a healthy life (subheading) */}
              <p className="text-white text-[18px] sm:text-[24px] md:text-[28px] lg:text-[35px] font-normal leading-none font-['Red_Hat_Text']">
                Innovations for a healthy life
              </p>
            </div>

            {/* Middle section with products */}
            {/* Middle section with products */}
            <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4 sm:gap-8 w-full">
              {/* Product 1 */}
              <img
                src="/images/CobalFine.png"
                alt="Product 1"
                className="w-[200px] h-[80px] sm:w-[220px] sm:h-[85px] md:w-[230px] md:h-[90px] lg:w-[250px] lg:h-[102px] rounded-2xl object-cover"
              />

              {/* Product 2 */}
              <img
                src="/images/Garci.png"
                alt="Product 2"
                className="w-[200px] h-[80px] sm:w-[220px] sm:h-[85px] md:w-[230px] md:h-[90px] lg:w-[250px] lg:h-[102px] rounded-2xl object-cover"
              />
            </div>

            {/* Bottom section */}
            <div className="space-y-6">
              {/* Description text */}
              <p className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[23px] leading-[1.4] sm:leading-[1.5] lg:leading-[37px] max-w-full lg:max-w-[625px]">
                For the first time in India, PharmaRise proudly introduces two
                unique & innovative products, set to redefine healthcare
                possibilities, improve patient outcomes, & establish benchmarks
                of excellence in the industry.
              </p>

              {/* About Us Button */}
              <button className="bg-[#BE2623] text-white font-medium text-center leading-none rounded-md hover:bg-opacity-90 transition-all w-[109px] h-[44.43px] text-sm sm:text-base">
                About Us
              </button>
            </div>
          </div>
        </div>

        {/* Right section with video */}
        <div className="w-full lg:w-auto h-[300px] sm:h-[400px] lg:h-[501px] lg:absolute lg:right-[13px] lg:top-[188px] lg:bottom-[49px] lg:w-[709px] lg:translate-x-[80px]">
          <video
            src="/images/PR PRODUCT all.mp4"
            className="w-full h-full object-cover rounded-xl"
            autoPlay
            muted
            loop
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
