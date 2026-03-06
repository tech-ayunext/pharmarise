import { Link } from "react-router-dom";

const heroAnimationStyles = `
  /* 🎯 MODERN FULLY RESPONSIVE HERO STYLES */
  
  /* Reset and base styles */
  * {
    box-sizing: border-box;
  }
  
  /* Smooth animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(clamp(20px, 3vw, 30px));
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(clamp(-20px, -3vw, -30px));
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(clamp(20px, 3vw, 30px));
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
  
  /* 🎯 MODERN HERO CONTAINER */
  .hero-modern-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: clamp(2rem, 5vw, 4rem);
    min-height: 100vh;
    padding: clamp(1rem, 4vw, 5rem);
    padding-top: clamp(8rem, 15vh, 10rem);
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
  }
  
  /* Desktop layout */
  @media (min-width: 1024px) {
    .hero-modern-container {
      grid-template-columns: 1.2fr 1fr;
      align-items: center;
      gap: clamp(3rem, 6vw, 5rem);
    }
  }
  
  /* 🎯 MODERN TYPOGRAPHY */
  .hero-title-modern {
    font-size: clamp(2rem, 7vw, 4.5rem);
    line-height: clamp(2.2rem, 7.5vw, 5rem);
    font-weight: 700;
    color: #0D4A8D;
    margin-bottom: clamp(0.75rem, 2vw, 1.25rem);
    letter-spacing: -0.02em;
  }
  
  .hero-tagline-modern {
    font-size: clamp(1.25rem, 4vw, 2.5rem);
    line-height: clamp(1.5rem, 4.5vw, 3rem);
    color: #0D4A8D;
    font-weight: 400;
    margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
  }
  
  .hero-text-modern {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    line-height: clamp(1.5rem, 3.5vw, 1.875rem);
    color: #0D4A8D;
    margin-bottom: clamp(1.5rem, 3vw, 2.5rem);
    max-width: 90%;
  }
  
  .hero-button-modern {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(1rem, 2vw, 1.125rem);
    font-weight: 500;
    padding: clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem);
    background-color: #BE2623;
    color: white;
    border-radius: clamp(0.5rem, 1vw, 0.75rem);
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 clamp(2px, 0.5vw, 4px) clamp(8px, 2vw, 16px) rgba(190, 38, 35, 0.2);
  }
  
  .hero-button-modern:hover {
    background-color: #a01f1c;
    transform: translateY(-2px);
    box-shadow: 0 clamp(4px, 1vw, 8px) clamp(16px, 4vw, 32px) rgba(190, 38, 35, 0.3);
  }
  
  /* 🎯 MODERN PRODUCTS SECTION */
  .hero-products-modern {
    position: relative;
    margin: clamp(2rem, 4vw, 3rem) 0;
    padding: clamp(1.5rem, 3vw, 2.5rem) 0;
    background: linear-gradient(135deg, #0D4A8D 0%, #1a5ba3 100%);
    border-radius: clamp(1rem, 2vw, 1.5rem);
    overflow: hidden;
  }
  
  .hero-products-modern::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%);
    pointer-events: none;
  }
  
  .hero-products-container-modern {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: clamp(1.5rem, 4vw, 3rem);
    padding: clamp(1rem, 3vw, 2rem);
    position: relative;
    z-index: 2;
  }
  
  @media (min-width: 1024px) {
    .hero-products-container-modern {
      justify-content: flex-start;
      padding-left: clamp(2rem, 4vw, 3rem);
    }
  }
  
  .hero-products-container-modern img {
    width: clamp(8rem, 22vw, 18rem);
    height: clamp(6rem, 16vw, 12rem);
    object-fit: contain;
    border-radius: clamp(0.75rem, 1.5vw, 1rem);
    transition: all 0.3s ease;
    filter: drop-shadow(0 clamp(4px, 1vw, 8px) clamp(12px, 3vw, 24px) rgba(0,0,0,0.2));
  }
  
  .hero-products-container-modern img:hover {
    transform: translateY(-4px) scale(1.05);
    filter: drop-shadow(0 clamp(8px, 2vw, 16px) clamp(24px, 6vw, 48px) rgba(0,0,0,0.3));
  }
  
  /* 🎯 MODERN IMAGE/VIDEO SECTION */
  .hero-media-modern {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  
  .hero-media-container-modern {
    position: relative;
    width: 100%;
    max-width: clamp(20rem, 50vw, 35rem);
    aspect-ratio: 16/20;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    border-radius: clamp(1rem, 2vw, 1.5rem);
    overflow: hidden;
    box-shadow: 0 clamp(8px, 2vw, 16px) clamp(32px, 8vw, 64px) rgba(13, 74, 141, 0.15);
    transition: all 0.5s ease;
  }
  
  .hero-media-container-modern:hover {
    transform: translateY(-8px);
    box-shadow: 0 clamp(16px, 4vw, 32px) clamp(64px, 16vw, 128px) rgba(13, 74, 141, 0.25);
  }
  
  .hero-media-container-modern video,
  .hero-media-container-modern img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .hero-media-container-modern:hover video,
  .hero-media-container-modern:hover img {
    transform: scale(1.02);
  }
  
  /* 🎯 RESPONSIVE ADJUSTMENTS */
  @media (max-width: 768px) {
    .hero-modern-container {
      text-align: center;
      padding-top: clamp(6rem, 12vh, 8rem);
    }
    
    .hero-text-modern {
      max-width: 100%;
    }
    
    .hero-products-container-modern {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  
  @media (min-width: 1600px) {
    .hero-products-container-modern {
      justify-content: center;
    }
  }
  
  /* 🎯 ACCESSIBILITY */
  @media (prefers-reduced-motion: reduce) {
    .animate-fade-in-up,
    .animate-fade-in-left,
    .animate-fade-in-right {
      animation: none;
      opacity: 1;
    }
    
    .hero-media-container-modern:hover,
    .hero-products-container-modern img:hover,
    .hero-button-modern:hover {
      transform: none;
    }
  }
  
  /* 🎯 PRINT STYLES */
  @media print {
    .hero-media-modern {
      display: none;
    }
    
    .hero-products-modern {
      background: none;
      border: 2px solid #0D4A8D;
    }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = heroAnimationStyles;
  document.head.appendChild(styleSheet);
}

const Hero = () => {
  return (
    <section
      className="min-h-screen w-full relative overflow-x-hidden pt-[80px]"
      style={{ backgroundColor: 'rgba(217, 235, 255, 1)' }}
      id="home"
    >
      {/* White inner container */}
      <div className="bg-white mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 2xl:mx-20 my-8 sm:my-12 md:my-16 lg:my-20 xl:my-24 2xl:my-28 rounded-2xl sm:rounded-3xl lg:rounded-[2rem] xl:rounded-[2.5rem] shadow-sm">
        <div className="flex flex-col xl:flex-row hero-container-mid w-full hero-container-14 hero-container-15 hero-container-16 relative z-10">
          {/* Left Content Section - Enhanced responsive padding */}
          <div className="flex-1 flex flex-col justify-start hero-content-mid
                        pt-0 sm:pt-10 md:pt-12 lg:pt-6 xl:pt-20 
                        px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 
                        pb-1 sm:pb-4 md:pb-6 lg:pb-8 xl:pb-10 w-full
                        relative">

            {/* Main Title - Enhanced responsive typography */}
            <div className="mb-2 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-2 hero-title-large-margin w-full overflow-hidden mt-7 lg:mt-1 xl:mt-1">
              <h1
                className="text-[#0D4A8D] font-bold leading-[90%] tracking-tight hero-title-mobile
                         text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[50px] 2xl:text-[58px]
                         hero-title-tablet hero-title-large-tablet hero-title-12 hero-title-14 hero-title-15 hero-title-16 hero-title-13
                         animate-fade-in-left transition-transform duration-300 hover:scale-105
                         break-words"
                style={{ animationDelay: '0.2s' }}
              >
                PharmaRise Innovations
              </h1>
            </div>

            {/* Tagline - Enhanced responsive typography */}
            <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-4 hero-tagline-large-margin">
              <p
                className="text-[#0D4A8D] font-normal leading-[126%] w-full max-w-[90%] md:max-w-[600px]
                         text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]
                         hero-tagline-tablet hero-tagline-large-tablet hero-tagline-14 hero-tagline-15 hero-tagline-16
                         animate-fade-in-left transition-all duration-300
                         break-words"
                style={{ animationDelay: '0.4s' }}
              >
                Innovations for a healthy life
              </p>
            </div>

            {/* Products Section - Images positioned over the full-width background */}
            {/* Hero products section */}
            <div className="hero-products-mid relative z-10 2xl:mb-10">
              {/* Full-width blue background */}


              {/* Inner content with padding */}
              <div
                className="relative z-10 flex hero-products-mobile sm:flex-row justify-center lg:justify-start items-center
               gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10
               py-4 sm:py-5 md:py-6 lg:py-8 xl:py-9
               px-4 sm:px-6 md:px-8 lg:pl-8 lg:pr-16 xl:pl-12 xl:pr-20 2xl:pl-16 2xl:pr-24
               h-[120px] sm:h-[150px] md:h-[170px] lg:h-[189px] xl:h-[180px] 2xl:h-[189px]"
              >
                {/* CobalFine Product */}
                <img
                  src="/images/Product1.png"
                  alt="CobalFine Product"
                  className="w-[115px] h-[85px] sm:w-[140px] sm:h-[90px] md:w-[160px] md:h-[100px] lg:w-[240px] lg:h-[120px] xl:w-[280px] xl:h-[130px] 2xl:w-[320px] 2xl:h-[140px]
                 rounded-[12px] object-contain lg:ml-[-80px]
                 animate-fade-in-up transition-transform duration-300 hover:scale-110"
                  style={{ animationDelay: '0.6s' }}
                />

                {/* Garci Product */}
                <img
                  src="/images/Product2.png"
                  alt="Garci Product"
                  className="w-[115px] h-[85px] sm:w-[140px] sm:h-[90px] md:w-[160px] md:h-[100px] lg:w-[240px] lg:h-[120px] xl:w-[280px] xl:h-[130px] 2xl:w-[320px] 2xl:h-[140px]
                 rounded-[12px] object-contain 
                 animate-fade-in-up transition-transform duration-300 hover:scale-110"
                  style={{ animationDelay: '0.8s' }}
                />
              </div>
            </div>

            {/* Introductory Text - Always visible, positioned after blue div + images */}
            <div className="mb-2 sm:mb-4 md:mb-8 lg:mb-10 xl:mb-2  relative z-70 hero-intro-mobile hero-intro-mid hero-intro-pre-large mt-1 sm:mt-4 md:mt-3 lg:mt-2 xl:mt-1">
              <p
                className="bigpara text-[#0D4A8D] font-normal w-full max-w-[95%] sm:max-w-[90%] md:max-w-[625px] 
                         text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[22px]
                         hero-text-tablet hero-text-large-tablet hero-text-14 hero-text-15 hero-text-16
                         leading-[140%] sm:leading-[150%] lg:leading-[160%] xl:leading-[39.75px]
                         tracking-normal lg:tracking-wide 
                         font-sans lg:font-['Red_Hat_Text'] 
                         animate-fade-in-left transition-all duration-300 relative z-70
                         block md:block lg:block xl:block 2xl:block"
                style={{ animationDelay: '1.0s' }}
              >
                For the first time in India, PharmaRise proudly introduces two
                unique and innovative products, set to redefine healthcare
                possibilities, improve patient outcomes, and establish benchmarks of
                excellence in the industry.
              </p>
            </div>
            <div className="mb-1 sm:mb-4 md:mb-0 hero-button-mobile flex flex-col xs:flex-row gap-3 sm:gap-4 items-start">
              <Link
                to="/new-about"
                className="bg-[#BE2623] text-white font-medium text-center leading-[96.184%] 
                         rounded-md hover:bg-opacity-90 transition-all 
                         px-3 py-2 xs:px-4 xs:py-2 sm:px-5 sm:py-2 md:px-6 md:py-2   
                         text-xs xs:text-sm sm:text-sm md:text-base lg:text-[14.939px]
                         animate-fade-in-up hover:scale-105 hover:shadow-lg transform 
                         inline-flex w-auto whitespace-nowrap"
                style={{ animationDelay: '1.2s' }}
              >
                About Us
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-auto xl:flex-none flex justify-center items-start hero-video-mid hero-video-mobile
                        p-1 xs:p-2 sm:p-6 md:p-8 lg:p-6 xl:p-12 2xl:p-16
                        h-auto lg:h-[480px] xl:h-[580px] 2xl:h-[680px] 
                        relative lg:ml-0 xl:ml-[-100px] 2xl:ml-[-120px] z-20 -mt-18 sm:-mt-12 md:-mt-16 lg:-mt-20 xl:-mt-4 2xl:-mt-16">

            <video
              src="/images/PH Product U shape 2.mp4"
              className="w-full h-auto object-cover transition-transform duration-300
                         max-w-[250px] xs:max-w-[270px] sm:max-w-[340px] md:max-w-[380px] 
                         lg:max-w-[400px] xl:max-w-[440px] 2xl:max-w-[472px]
                         max-h-[220px] xs:max-h-[240px] sm:max-h-[300px] md:max-h-[340px] 
                         lg:max-h-[450px] xl:max-h-[580px] 2xl:max-h-[650px]"
              autoPlay
              muted
              loop
              controls={false}
              disablePictureInPicture
              controlsList="nodownload nofullscreen noremoteplayback"
              style={{ pointerEvents: 'none' }}
            />

          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;