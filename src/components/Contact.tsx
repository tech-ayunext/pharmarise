import React from "react";
import ContactForm from "./ui/ContactForm";

const Contact = () => {
  return (
    <section
      className="bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe] py-8 sm:py-12 lg:py-16"
      id="contact"
    >
      <div className="container mx-auto max-w-[1200px] px-4">
        <h2 className="text-[#0D4A8D] text-[28px] sm:text-[36px] md:text-[44px] lg:text-5xl font-bold mb-8 sm:mb-10 lg:mb-12 text-left">
          Connect With Us
        </h2>

        <div className="relative w-full overflow-hidden rounded-[66.265px] bg-[#D9EBFF] p-[32.3px]">
          {/* Top section with background image */}
          <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[378.659px] overflow-hidden rounded-t-[33.965px] border-2 border-[#D9EBFF]">
            {/* Background image */}
            <img
              src="/images/Get in touch.png"
              alt="Get in touch background"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                width: "100%",
                maxWidth: "1174.788px",
                height: "100%",
                flexShrink: 0,
              }}
            />

            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content overlay */}
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between h-full p-4 sm:p-6 md:p-8 lg:p-12">
              {/* Left side - Get in touch text */}
              <div className="text-white mb-4 sm:mb-0 sm:pr-8">
                <h3 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-5xl font-bold mb-2 sm:mb-4">
                  Get in touch
                </h3>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-lg font-light text-white/90">
                  Partner with PharmaRise today and take
                </p>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-lg font-light text-white/90">
                  your products to new heights.
                </p>
              </div>

              {/* Right side - Message textarea */}
              <div className="w-full sm:w-auto relative  ">
                {/* Blurred background / border effect */}
                <div
                  className="absolute 
                    top-[-8px] sm:top-[-15px] 
                    left-[-8px] sm:left-[-15px] 
                    right-[-1px] sm:right-[-15px] 
                    bottom-[-1px] sm:bottom-[-15px] 
                    rounded-[13px] sm:rounded-[30px]"
                  style={{
                    border: "0.947px solid rgba(255, 255, 255, 0.25)",
                    background: "rgba(255, 255, 255, 0.36)",
                    backdropFilter: "blur(14px)",
                    pointerEvents: "none",
                  }}
                />

                {/* Actual textarea */}
                <textarea
                  placeholder="Message....."
                  className="w-[95%] sm:w-[300px] md:w-[400px] lg:w-[496px]
                  h-[45px] sm:h-[100px] lg:h-[115px]
                  
                  p-2 sm:p-4 text-[13px] sm:text-[16px] placeholder-gray-500
                  resize-none border-none outline-none relative z-10
                  max-md:backdrop-blur-sm"
                  style={{
                    borderRadius: "22px",
                    background: "white",
                    backdropFilter: "blur(12px)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Bottom section with form fields */}
          <div className="p-4 sm:p-6 md:p-8 lg:p-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
