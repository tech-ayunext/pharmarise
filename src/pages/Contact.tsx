import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactPageForm from "../components/ContactPageForm";

// Add custom CSS for animations
const contactPageAnimationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
  }
  
  .animate-fade-in-left {
    animation: fadeInLeft 0.8s ease-out forwards;
    opacity: 0;
  }
  
  .animate-fade-in-right {
    animation: fadeInRight 0.8s ease-out forwards;
    opacity: 0;
  }
  
  .animate-fade-in-scale {
    animation: fadeInScale 0.8s ease-out forwards;
    opacity: 0;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = contactPageAnimationStyles;
  document.head.appendChild(styleSheet);
}

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative bg-[#0d4a8d] py-16 md:py-24" style={{ backgroundImage: "url('/images/Get in touch.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d4a8d]/100 from-25% to-[#0d4a8d]/25"></div>
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in transform transition-all duration-700 hover:scale-105">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Company Information Section */}
      <div className="relative w-full bg-[#d9eaff] py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#0d4a8d] mb-8 tracking-tight animate-fade-in-up transition-transform duration-300 hover:scale-105" style={{ animationDelay: '0.2s' }}>
              Company Information
            </h2>
            <div className="w-full h-px bg-[#0d4a8d] mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}></div>

            <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
              <div className="flex-shrink-0 w-full lg:w-auto animate-fade-in-left" style={{ animationDelay: '0.4s' }}>
                <div
                  className="w-full h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[521px] lg:h-[521px] mx-auto lg:mx-0 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=PharmaRise+Innovations+LLP+Office+No.+3(403),+4th+Floor,+E-+Wing,+Tandice+69,+CTS+No.+250(1-6),+251(1-7),+AK+Road,+Gundavali,+Andheri+(East),+Mumbai+-+400059,+Maharashtra,+India', '_blank')}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8!2d72.8777!3d19.1136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzQ5LjAiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin&q=Office+No.+3(403),+4th+Floor,+E-+Wing,+Tandice+69,+CTS+No.+250(1-6),+251(1-7),+AK+Road,+Gundavali,+Andheri+(East),+Mumbai+-+400059,+Maharashtra,+India"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="PharmaRise Innovations LLP Location"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-12">
                <div className="animate-fade-in-right" style={{ animationDelay: '0.5s' }}>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#0d4a8d] mb-2 tracking-tight transition-transform duration-300 hover:scale-105">
                    Email
                  </h3>
                  <a
                    href="mailto:support@pharmarise.com"
                    className="text-xl md:text-2xl text-[#0d4a8d] font-normal hover:text-[#BE2623] transition-colors duration-300 cursor-pointer underline-offset-4 hover:underline"
                  >
                    support@pharmarise.com
                  </a>
                </div>

                <div className="animate-fade-in-right" style={{ animationDelay: '0.6s' }}>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#0d4a8d] mb-2 tracking-tight transition-transform duration-300 hover:scale-105">
                    Phone No.
                  </h3>
                  <a
                    href="tel:+919526526485"
                    className="text-xl md:text-2xl text-[#0d4a8d] font-normal hover:text-[#BE2623] transition-colors duration-300 cursor-pointer underline-offset-4 hover:underline"
                  >
                    +91 95265 26485
                  </a>
                </div>

                <div className="animate-fade-in-right" style={{ animationDelay: '0.7s' }}>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#0d4a8d] mb-2 tracking-tight transition-transform duration-300 hover:scale-105">
                    Registered Office
                  </h3>
                  <p className="text-xl md:text-2xl text-[#0d4a8d] font-normal leading-relaxed">
                    Plot 17, Flat 604, Floor-6, Ganangiri Avenue, Samta Nagar, Pokhran Road, Thane West, Thane, Maharashtra, India - 400604
                  </p>
                </div>

                <div className="animate-fade-in-right" style={{ animationDelay: '0.8s' }}>
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#0d4a8d] mb-2 tracking-tight transition-transform duration-300 hover:scale-105">
                    LLPIN
                  </h3>
                  <p className="text-xl md:text-2xl text-[#0d4a8d] font-normal">
                    ACH-4818
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full bg-white">
        <div className="w-full ">
          {/* Group 191 Image */}
          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Blue Background with Text and Group 190 Image */}
            <div className="lg:w-1/2 flex flex-col justify-center text-white relative overflow-hidden animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt="Group 190"
                src="/images/Group 190.png"
                style={{ transform: 'scale(1.2)', transformOrigin: 'center' }}
              />
              <div className="relative z-10 p-12 lg:p-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight animate-fade-in-up transition-transform duration-300 hover:scale-105" style={{ animationDelay: '0.4s' }}>
                  Bridging Innovation and Healthcare Excellence
                </h2>
                <p className="text-lg lg:text-xl opacity-90 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  At PharmaRise Innovations LLP, we're committed to transforming pharmaceutical marketing with innovation and trust.
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:w-1/2 bg-gray-50 p-12 lg:p-16 flex flex-col justify-center animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
              <ContactPageForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;