import React from "react";

const Hero = () => {
  return (
    <section
      className="min-h-screen w-full relative overflow-x-hidden bg-white"
      id="home"
    >
      {/* Main container */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Content Section */}
        <div className="flex-1 flex flex-col justify-center p-6 sm:p-8 lg:p-12 xl:p-16">
          {/* Main Title */}
          <div className="mb-6 sm:mb-8 lg:mb-10">
            <h1
              className="text-[#0D4A8D] font-['Red_Hat_Text'] font-bold leading-[90%] tracking-tight lg:tracking-[-2.009px] w-full max-w-[832px] 
             text-[42px] sm:text-[50px] lg:text-[66.98px]"
            >
              PharmaRise Innovations
            </h1>
          </div>

          {/* Tagline */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <p
              className="text-[#0D4A8D] font-['Red_Hat_Text'] font-normal leading-[126%] w-full max-w-[506px] 
             text-[24px] sm:text-[28px] lg:text-[35px]"
            >
              Innovations for a healthy life
            </p>
          </div>

          {/* Products Section */}
          <div className="mt-[-20px] lg:mt-[-40px] mb-8 sm:mb-12 lg:mb-16">
            {/* Full-width background wrapper */}
            <div className="bg-[#0D4A8D] w-screen relative left-1/2 -mx-[50vw]">
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6 sm:gap-8 lg:gap-10 h-auto py-8 lg:h-[189px] px-6 sm:px-8 lg:px-12 max-w-[1512px] mx-auto">
                {/* CobalFine Product */}
                <img
                  src="/images/CobalFine.png"
                  alt="CobalFine Product"
                  className="w-[200px] sm:w-auto h-auto object-contain rounded-[12px] lg:ml-[520px]"
                  style={{ maxHeight: "102px" }}
                />

                {/* Garci Product */}
                <img
                  src="/images/Garci.png"
                  alt="Garci Product"
                  className="w-[200px] sm:w-auto h-auto object-contain rounded-[12px]"
                  style={{ maxHeight: "102px" }}
                />
              </div>
            </div>
          </div>

          {/* Introductory Text */}
          <div className="mb-6 sm:mb-8 lg:mb-10">
            <p
              className="text-[#0D4A8D] font-['Red_Hat_Text'] font-normal leading-[159%] w-full max-w-[625px] 
             text-base sm:text-[18px] lg:text-[23px]"
            >
              For the first time in India, PharmaRise proudly introduces two
              unique & innovative products, set to redefine healthcare
              possibilities, improve patient outcomes, & establish benchmarks of
              excellence in the industry.
            </p>
          </div>

          {/* About Us Button */}
          <div>
            <button className="bg-[#BE2623] text-white font-['Red_Hat_Text'] font-medium text-center leading-[96.184%] rounded-md hover:bg-opacity-90 transition-all px-6 py-3 text-sm lg:text-[14.939px]">
              About Us
            </button>
          </div>
        </div>

        {/* Right Video Section */}
        <div className="w-full lg:flex-1 lg:flex-none flex justify-center items-center p-4 sm:p-8 lg:p-12 h-auto lg:h-[662px] relative lg:ml-[-100px]">
          {/* Blue background behind video - Hidden on mobile for a cleaner look */}
          <div className="hidden lg:block absolute bg-[#0D4A8D] w-[940px] h-[188px] top-[51%] left-1/2 -translate-x-1/3"></div>

          {/* Video container */}
          <div
            className="bg-white flex justify-center items-center relative overflow-hidden 
              w-[full] max-w-[320px] h-[300px] 
              sm:max-w-[500px] sm:h-[400px] 
              lg:h-[882px] 
              rounded-b-[150px] lg:rounded-b-[250px]
              shadow-[0_4px_27px_1px_rgba(0,0,0,0.25)] z-10"
          >
            <video
              src="/images/PR PRODUCT all.mp4"
              className="w-full max-w-[280px] h-auto sm:max-w-[472px] sm:h-[333px] object-cover"
              autoPlay
              muted
              loop
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
