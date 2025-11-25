import { useEffect } from "react";
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
  // Handle scrolling to contact form when page loads with hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#contact-form') {
      setTimeout(() => {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
          contactForm.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 500); 
    }
  }, []);




  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative bg-[#0d4a8d] pt-[120px] pb-8 md:pb-12 min-h-[200px] md:min-h-[250px] flex items-center" style={{ backgroundImage: "url('/images/Get in touch.png')", backgroundSize: 'cover', backgroundPosition: 'center top' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d4a8d]/100 from-25% to-[#0d4a8d]/25"></div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 w-full mt-[20px] lg:mt-[40px]">
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in transform transition-all duration-700 hover:scale-105">
            Contact Us
          </h1>
        </div>
      </div> 



      {/* Company Information Section */}
      <div className="relative w-full bg-[#d9eaff] py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Contact Information Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {/* Email Section */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[#0d4a8d]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#0d4a8d] mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:salesoffice@pharmarise.in"
                    className="text-base md:text-lg text-[#6b7280] hover:text-[#0d4a8d] transition-colors duration-300 cursor-pointer"
                  >
                    salesoffice@pharmarise.in
                  </a>
                </div>
              </div>

              {/* Divider Line */}
              <div className="w-full h-px bg-[#0D4A8D80] mb-6"></div>

              {/* Office Address Section */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[#0d4a8d]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-[#0d4a8d] mb-2">
                    Office Address
                  </h3>
                  <p className="text-base md:text-lg text-[#6b7280] leading-relaxed">
                    Office No. 3(403), 4th Floor, E- Wing, Tandice 69, 4V95+4GQ, Gundavali, Andheri East, Mumbai, Maharashtra 400093, India.
                  </p>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div
                className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] cursor-pointer hover:opacity-90 transition-opacity duration-300"
                onClick={() => window.open('https://www.google.com/maps/place/Tandice+69,+4V95%2B4GQ,+Gundavali,+Andheri+East,+Mumbai,+Maharashtra+400093/@19.1179955,72.8555337,17z', '_blank')}
              >
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d870.9195988124038!2d72.85840526737995!3d19.117943787863663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9f3abfa2117%3A0x2b45ec0cddff7af7!2sTandice%2069!5e1!3m2!1sen!2sin!4v1762448046764!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d870.9195988124038!2d72.85840526737995!3d19.117943787863663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9f3abfa2117%3A0x2b45ec0cddff7af7!2sTandice%2069!5e1!3m2!1sen!2sin!4v1762448046764!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tandice 69 - 4V95+4GQ, Gundavali, Andheri East, Mumbai"
                />
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
            <div id="contact-form" className="lg:w-1/2 bg-gray-50 p-12 lg:p-16 flex flex-col justify-center animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
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