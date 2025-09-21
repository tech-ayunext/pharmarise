import React from "react";

const Hero = () => {
  return (
    <section className="h-full w-full relative overflow-hidden" id="home">
      {/* Left section with background */}
      <div className="relative w-[982px] h-[738px] z-10">
        <img
          src="/images/Hero_background.png"
          className="absolute inset-0 h-full w-full object-cover"
          alt="Hero background"
        />
        {/* PharmaRise Innovations (heading) */}
        <h1
          className="absolute text-white text-[66.98px] font-bold leading-[0.9] tracking-[-2.01px] font-['Red_Hat_Text']"
          style={{ left: "54px", top: "70px" }}
        >
          PharmaRise Innovations
        </h1>

        {/* Innovations for a healthy life (subheading) */}
        <p
          className="absolute text-white text-[35px] font-normal leading-none font-['Red_Hat_Text']"
          style={{ left: "54px", top: "150px" }}
        >
          Innovations for a healthy life
        </p>

        {/* Product 1 */}
        <img
          src="/images/Product1.png"
          alt="Product 1"
          className="absolute w-[250px] h-[102px]"
          style={{ left: "54px", top: "230px" }}
        />

        {/* Product 2 */}
        <img
          src="/images/Product2.png"
          alt="Product 2"
          className="absolute w-[250px] h-[102px]"
          style={{ left: "349px", top: "230px" }}
        />

        {/* Description text */}
        <p
          className="absolute text-white text-[23px]  leading-[37px]"
          style={{
            left: "53px",
            top: "400px",
            width: "625px",
            height: "148px",
          }}
        >
          For the first time in India, PharmaRise proudly introduces two unique
          & innovative products, set to redefine healthcare possibilities,
          improve patient outcomes, & establish benchmarks of excellence in the
          industry.
        </p>

        {/* About Us Button */}
        <button
          className="absolute bg-[#BE2623] text-white font-medium text-center leading-none rounded-md hover:bg-opacity-90 transition-all"
          style={{
            left: "53px",
            top: "610px",
            width: "109px",
            height: "44.43px",
          }}
        >
          About Us
        </button>
      </div>

      {/* Right section with video (absolute positioning) */}
      <div
        className="absolute w-[709px] h-[501px] rounded-xl overflow-hidden "
        style={{ left: "823px", right: "13px", top: "188px", bottom: "49px" }}
      >
        <video
          src="/images/PR PRODUCT all.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
        />
      </div>
    </section>
  );
};

export default Hero;
