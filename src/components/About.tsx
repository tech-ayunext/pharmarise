import React from "react";
import { Link } from "react-router-dom";

// Add custom CSS for animations
const aboutAnimationStyles = `
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

  /* 🎯 TABLET RESPONSIVENESS (768px - 1024px) - All Tablet Sizes */
  @media (min-width: 768px) and (max-width: 1024px) {
    
    /* === LAYOUT ADJUSTMENTS === */
    .about-container-tablet {
      padding-left: 2rem !important;
      padding-right: 1.5rem !important;
    }
    
    .about-content-tablet {
      padding: 0 1.5rem !important;
      max-width: 100% !important;
    }
    
    /* Layout split adjustments for tablet - Natural height like mobile */
    .about-section-tablet {
      flex-direction: column !important;
    }
    
    .about-text-section-tablet {
      width: 100% !important;
    }
    
    .about-image-section-tablet {
      width: 40% !important;
      margin-left: auto !important;
      margin-right: 0.5rem !important;
      align-self: flex-end !important;
    }
    
    /* === TYPOGRAPHY SCALING === */
    .about-heading {
      font-size: clamp(28px, 3.8vw, 36px) !important;
      line-height: clamp(32px, 4.2vw, 42px) !important;
      margin-bottom: 1.5rem !important;
      text-align: left !important;
      white-space: nowrap !important;
      overflow: visible !important;
    }
    
    .about-label-tablet {
      font-size: clamp(16px, 2.2vw, 20px) !important;
      margin-bottom: 0.5rem !important;
    }
    
    /* Red underline adjustments for tablet */
    .about-red-underline-tablet {
      width: 12px !important;
      height: 2px !important;
    }
    
    .about-subtext-tablet {
      font-size: clamp(14px, 1.8vw, 16px) !important;
      line-height: clamp(20px, 2.4vw, 24px) !important;
      margin-bottom: 1rem !important;
    }
    
    .about-description-tablet {
      font-size: clamp(12px, 1.6vw, 14px) !important;
      line-height: clamp(18px, 2.2vw, 22px) !important;
      margin-bottom: 1.5rem !important;
    }
    
    .about-button-tablet {
      font-size: clamp(10px, 1.2vw, 12px) !important;
      padding: 0.4rem 0.8rem !important;
      margin-bottom: 1rem !important;
    }
    
    /* === IMAGE ADJUSTMENTS === */
    .about-bg-img {
      object-fit: contain !important;
      height: 140% !important;
      width: 140% !important;
      top: 4% !important;
      right: -16% !important;
      left: auto !important;
      transform: translateX(2%) scale(2.02) !important;
      margin-bottom: 5rem !important;
    }
    
    .about-person-img {
      width: 98% !important;
      max-width: 560px !important;
      margin-top: -35px !important;
      margin-right: -4rem !important;
      margin-left: auto !important;
      scale: 1 !important;
      transform: translateX(55%) scale(2.02) !important;
      position: relative !important;
      right: -2rem !important;
      margin-bottom: 6rem !important;
    }
    
    .about-image-container-tablet {
      min-height: 450px !important;
      padding: 0.3rem !important;
      max-width: 420px !important;
    }
    
    /* === SPACING ADJUSTMENTS === */
    .about-section-tablet {
      gap: 1rem !important;
    }
    
   
    /* === TABLET LANDSCAPE (901px - 1023px) === */
    @media (min-width: 901px) and (orientation: landscape) {
      .about-heading {
        font-size: clamp(32px, 4.2vw, 40px) !important;
        line-height: clamp(36px, 4.6vw, 46px) !important;
        white-space: nowrap !important;
        overflow: visible !important;
      }
      
      .about-label-tablet {
        font-size: clamp(18px, 2.2vw, 22px) !important;
        margin-bottom: 0.5rem !important;
      }
      
      .about-red-underline-tablet {
        width: 14px !important;
        height: 2px !important;
      }
      
      .about-subtext-tablet {
        font-size: clamp(15px, 1.9vw, 18px) !important;
        line-height: clamp(22px, 2.6vw, 26px) !important;
        margin-bottom: 1rem !important;
      }
      
      .about-description-tablet {
        font-size: clamp(13px, 1.7vw, 16px) !important;
        line-height: clamp(20px, 2.4vw, 24px) !important;
        margin-bottom: 1.2rem !important;
      }
      
      .about-button-tablet {
        font-size: clamp(11px, 1.3vw, 13px) !important;
        padding: 0.5rem 1rem !important;
        margin-bottom: 1rem !important;
      }
      
      .about-person-img {
        width: 220% !important;
        margin-right: -5rem !important;
        margin-left: auto !important;
        scale: 2.2 !important;
        margin-top: -50px !important;
        transform: translateX(4rem) !important;
        position: relative !important;
        right: -3rem !important;
      }
      
      .about-bg-img {
        object-fit: contain !important;
        height: 145% !important;
        width: 155% !important;
        top: -17% !important;
        right: -30% !important;
        left: auto !important;
      }
      
      .about-image-container-tablet {
        min-height: 480px !important;
        max-width: 450px !important;
      }
      
      .about-text-section-tablet {
        width: 100% !important;
      }
      
      .about-image-section-tablet {
        width: 45% !important;
        margin-left: auto !important;
        margin-right: 0.5rem !important;
        align-self: flex-end !important;
      }
      
      .about-section-tablet {
        flex-direction: column !important;
      }
      
      .about-container-tablet {
        padding-left: 2rem !important;
        padding-right: 2rem !important;
      }
    }
    
    /* === ANIMATION TIMING ADJUSTMENTS === */
    .animate-fade-in-up,
    .animate-fade-in-left,
    .animate-fade-in-right {
      animation-duration: 0.7s !important;
    }
  }

  /* 🎯 SPECIFIC RESOLUTION 1024x600 */
  @media (min-width: 1024px) and (max-width: 1024px) and (min-height: 600px) and (max-height: 600px) {
    .about-person-img-large-tablet {
      width: 80% !important;
      margin-top: -25px !important;
      margin-left: 1.5rem !important;
      scale: 0.85 !important;
    }
    
    .about-image-container-large-tablet {
      min-height: 350px !important;
      max-width: 300px !important;
    }
  }

  /* 🎯 SPECIFIC RESOLUTION 1024x670 - Fix oversized person image */
  @media (min-width: 1024px) and (max-width: 1024px) and (min-height: 670px) and (max-height: 670px) {
    .about-bg-img {
      object-fit: contain !important;
      height: 120% !important;
      width: 130% !important;
      top: 2% !important;
      right: -18% !important;
      left: auto !important;
      transform: translateX(1%) scale(1.8) !important;
      margin-bottom: 3rem !important;
    }
    
    .about-person-img {
      width: 85% !important;
      max-width: 480px !important;
      margin-top: -25px !important;
      margin-right: -2rem !important;
      margin-left: auto !important;
      scale: 1 !important;
      transform: translateX(45%) scale(1.6) !important;
      position: relative !important;
      right: -1rem !important;
      margin-bottom: 4rem !important;
    }
    
    .about-image-container-tablet {
      min-height: 420px !important;
      max-width: 380px !important;
      padding: 0.5rem !important;
    }
    
    /* Adjust text section for better balance */
    .about-text-section-tablet {
      width: 65% !important;
      padding-right: 1rem !important;
    }
    
    .about-image-section-tablet {
      width: 35% !important;
      margin-left: auto !important;
      margin-right: 0.5rem !important;
      align-self: flex-end !important;
    }
    
    /* Make layout horizontal for this resolution */
    .about-section-tablet {
      flex-direction: row !important;
      align-items: flex-start !important;
      gap: 1.5rem !important;
    }
  }

  /* 🎯 LARGE TABLET LANDSCAPE (1024px - 1366px) */
  @media (min-width: 1024px) and (max-width: 1366px) {
    
    /* === CONTAINER & LAYOUT === */
    .about-container-large-tablet {
      padding-left: 2.5rem !important;
      padding-right: 2rem !important;
      max-width: 100% !important;
    }
    
    .about-content-large-tablet {
      padding: 0 2rem !important;
      max-width: 100% !important;
    }
    
    .about-section-large-tablet {
      gap: 1rem !important;
    }
    
    /* === TYPOGRAPHY SCALING === */
    .about-heading-large-tablet {
      font-size: clamp(30px, 3.8vw, 40px) !important;
      line-height: clamp(42px, 4.4vw, 50px) !important;
      margin-bottom: 1.5rem !important;
      text-align: left !important;
    }
    
    .about-label-large-tablet {
      font-size: clamp(30px, 2.2vw, 30px) !important;
      margin-bottom: 1.5rem !important;
    }
    
    .about-subtext-large-tablet {
      font-size: clamp(18px, 2.2vw, 26px) !important;
      line-height: clamp(26px, 2.8vw, 30px) !important;
      margin-bottom: 1.5rem !important;
    }
    
    .about-description-large-tablet {
      font-size: clamp(16px, 2vw, 20px) !important;
      line-height: clamp(24px, 2.6vw, 28px) !important;
      margin-bottom: 1.8rem !important;
    }
    
    .about-button-large-tablet {
      font-size: clamp(16px, 1.8vw, 18px) !important;
      padding: 0.7rem 1.5rem !important;
    }
    
    /* === IMAGE ADJUSTMENTS === */
    .about-bg-img-large-tablet {
      object-fit: contain !important;
      height: 150% !important;
      width: 110% !important;  
      top: -21% !important;
      right: -35% !important;
      left: auto 
    
    .about-person-img-large-tablet {
      width: 200% !important;
      margin-top: -50px !important;
      margin-right: -4rem !important;
      margin-left: auto !important;
      scale: 2.0 !important;
      transform: translateX(3rem) !important;
      position: relative !important;
      right: -2rem !important;
    }
    
    .about-image-container-large-tablet {
      min-height: 480px !important;
      padding: 1.5rem !important;
    }
    
    /* === RESPONSIVE FINE-TUNING === */
    /* Small Large Tablets (1024px - 1200px) */
    @media (max-width: 1200px) {
      .about-heading-large-tablet {
        font-size: clamp(34px, 3.6vw, 40px) !important;
        line-height: clamp(40px, 4.2vw, 46px) !important;
      }
      
      .about-person-img-large-tablet {
        width: 120% !important;
        margin-right: -10rem !important;
        margin-left: auto !important;
        scale: 2.2 !important;
        margin-top: -80px !important;
        transform: translateX(4rem) !important;
        position: relative !important;
        right: -3rem !important;
      }
      
      .about-image-container-large-tablet {
        min-height: 320px !important;
      }
      
      .about-bg-img-large-tablet {
        object-fit: contain !important;
        height: 125% !important;
        width: 135% !important;
        top: -12% !important;
        left: -18% !important;
      }
    }
    
    /* Large Large Tablets (1200px - 1366px) */
    @media (min-width: 1200px) {
      .about-heading-large-tablet {
        font-size: clamp(38px, 3.8vw, 46px) !important;
        line-height: clamp(44px, 4.4vw, 52px) !important;
      }
      
      .about-person-img-large-tablet {
        width: 240% !important;
        margin-right: -6rem !important;
        margin-left: auto !important;
        scale: 2.4 !important;
        margin-top: -70px !important;
        transform: translateX(5rem) !important;
        position: relative !important;
        right: -4rem !important;
      }
      
      .about-image-container-large-tablet {
        min-height: 280px !important;
      }
      
      .about-container-large-tablet {
        padding-left: 3rem !important;
        padding-right: 2.5rem !important;
      }
      
      .about-bg-img-large-tablet {
        object-fit: contain !important;
        height: 135% !important;
        width: 145% !important;
        top: -17% !important;
        left: -22% !important;
      }
    }
  }

/* 🎯 REFERENCE STYLES FOR 900px-1024px LANDSCAPE - DON'T TOUCH */
@media (min-width: 900px) and (max-width: 1024px) and (orientation: landscape) {
  .about-bg-img,
  .about-bg-img-large-tablet {
    right: -16% !important;
    top: 4% !important;
    width: 140% !important;
    transform: translateX(2%) scale(2.02) !important;
    margin-bottom: 5rem !important;
  }
  
  .about-person-img,
  .about-person-img-large-tablet {
    width: 98% !important;
    max-width: 560px !important;
    margin-top: -35px !important;
    transform: translateX(55%) scale(2.02) !important;
    margin-bottom: 6rem !important;
  }
}

/* 15-inch Laptop — innerHeight ≈ 735 */
@media (min-width: 900px) and (max-width: 1020px), (min-height: 720px) and (max-height: 760px) {
  .about-bg-img {
    object-fit: cover !important;
    top: 0 !important;
    height: 100% !important;
    width: 100% !important;
  }
  .about-person-img {
    margin-top: -30px !important;
    width: 96% !important;
   
    scale: 1 !important;
  }
     .about-heading {
    font-size: 59px !important; /* smaller on 15-inch */
    line-height: 55px !important;
  }
}

/* 16-inch Laptop */
@media (min-width: 850px) and (max-width: 880px) and (min-height: 740px) and (max-height: 760px) {
  .about-bg-img {
    object-fit: cover !important;
    top: 0 !important;
    height: 100% !important;
    width: 100% !important;
  }
  .about-person-img {
    margin-top: -95px !important;
    width: 100% !important;
    left: 121px !important;
    scale: 1.1 !important;
  }
}



`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = aboutAnimationStyles;
  document.head.appendChild(styleSheet);
}

const About = () => {
  return (
    <section
      className="bg-white w-full pl-4 sm:pl-8 md:pl-12 lg:pl-20 max-md:max-w-full max-md:pl-5 about-container-tablet about-container-large-tablet"
      id="about"
    >
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch about-section-tablet about-section-large-tablet">
        <div className="w-full lg:w-[58%] max-md:w-full max-md:ml-0 about-text-section-tablet">
          <div className="flex flex-col items-start text-[#0D4A8D] font-medium px-4 sm:px-6 md:px-8 lg:px-0 about-content-tablet about-content-large-tablet">
            {/* About Us Label with red underline */}
            <div className="mb-4 sm:mb-6 relative mt-[20px] sm:mt-[28px] lg:mt-[36px] animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
              <p className="text-[18px] sm:text-[20px] md:text-[21px] lg:text-[23px] about-label-tablet about-label-large-tablet text-left font-medium">
                About Us
              </p>
              <span className="absolute bottom-0 left-0 w-16 sm:w-20 lg:w-24 h-[3px] bg-[#BE2623] rounded-full about-red-underline-tablet"></span>
            </div>

            {/* Heading */}
            <h2 className=" about-heading about-heading-large-tablet text-[#0D4A8D] text-left font-['Red_Hat_Text'] text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-semibold leading-[40px] sm:leading-[50px] md:leading-[70px] lg:leading-[90px] tracking-[-1.8px] mb-4 sm:mb-6 max-md:text-4xl animate-fade-in-left transition-transform duration-300 hover:scale-105" style={{ animationDelay: '0.4s' }}>
              PharmaRise Innovations LLP
            </h2>

            {/* Subtext with Mr Rajendra Patkar in red */}
            <p className="text-[#0D4A8D] font-['Red_Hat_Text'] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[23px] about-subtext-tablet about-subtext-large-tablet font-medium leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[36px] mb-4 sm:mb-6 animate-fade-in-left" style={{ animationDelay: '0.6s' }}>
              Pharmarise Innovations has been founded in 2024 by{" "}
              <span className="text-[#BE2623] font-['Red_Hat_Text'] font-medium">
                Mr Rajendra Patkar
              </span>
              . A pharmacist by qualification and an MBA from Jamnalal Bajaj.
            </p>

            {/* Description */}
            <p className="text-[#0D4A8D] text-justify font-normal leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[35px] tracking-[-0.69px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[23px] about-description-tablet about-description-large-tablet mb-4 sm:mb-6 animate-fade-in-left" style={{ animationDelay: '0.8s' }}>
              He has launched many innovative products and has headed top pharma
              companies like Wockhardt, Jb Chemicals, & RPG where, he led major
              brand innovations. He has a vision to deliver innovative brands
              that lead to better patient outcomes. Many of the brands are first
              time in India showing that small companies can deliver big
              Innovations. We always keep in mind the better patient outcomes in
              all our Innovations.
            </p>

            {/* Button */}
            <Link
              to="/new-about"
              className="bg-[#0D4A8D] text-white text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] about-button-tablet about-button-large-tablet px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg hover:bg-opacity-90 transition-all animate-fade-in-up hover:scale-105 hover:shadow-lg transform inline-block"
              style={{ animationDelay: '1.0s' }}
            >
              Our Story
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-[47%]  ml-0 lg:ml-5 max-md:w-full max-md:ml-0 about-image-section-tablet">
          <div className="flex flex-col relative min-h-[400px] sm:min-h-[500px] md:min-h-[580px] lg:min-h-[632px] about-image-container-tablet about-image-container-large-tablet grow px-4 sm:px-6 md:px-8 lg:px-[74px] max-md:max-w-full max-md:mt-[7px]">
            <img
              src="/images/Blue_back.svg"
              className="
              about-bg-img about-bg-img-large-tablet
              absolute inset-0
              object-cover
              w-full h-full 
              animate-fade-in-right
               max-md:h-[500px] max-md:object-contain max-md:mr-10
            "
              alt="About us background"
              style={{ animationDelay: '0.4s' }}
            />

            <img
              src="/images/Person.png"
              className="
              about-person-img about-person-img-large-tablet
              aspect-[0.68] object-contain
              z-10 w-[96%]
              
              relative
              transition-transform duration-300 hover:scale-110
              mx-auto ml-[94px]  
            "
              alt="Company representative"
              style={{ animationDelay: '0.6s' }}
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
