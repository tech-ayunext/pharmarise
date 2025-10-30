import { Link } from "react-router-dom";

const heroAnimationStyles = `
  /* 🎯 OPTIMIZED FLUID RESPONSIVE HERO STYLES */
  
  /* Animations */
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
  
  /* 🎯 FLUID HERO CONTAINER */
  .hero-fluid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: clamp(1rem, 4vw, 3rem);
    min-height: 100vh;
    padding: clamp(1rem, 4vw, 5rem);
    padding-top: clamp(8rem, 12vh, 12rem);
    align-items: start;
    max-width: 100vw;
    overflow-x: hidden;
  }
  
  /* 🎯 RESPONSIVE GRID LAYOUT */
  @media (min-width: 1024px) {
    .hero-fluid-container {
      grid-template-columns: 1fr 0.8fr;
      grid-template-rows: 1fr;
      gap: clamp(2rem, 5vw, 4rem);
      align-items: center;
    }
  }
  
  /* 🎯 FLUID TYPOGRAPHY */
  .hero-title-fluid {
    font-size: clamp(1.75rem, 6vw, 4.2rem);
    line-height: clamp(2rem, 6.5vw, 4.5rem);
    margin-bottom: clamp(0.5rem, 2vw, 1rem);
    font-weight: 700;
    color: #0D4A8D;
    letter-spacing: -0.02em;
  }
  
  .hero-tagline-fluid {
    font-size: clamp(1.125rem, 3.5vw, 2.2rem);
    line-height: clamp(1.375rem, 4vw, 2.6rem);
    margin-bottom: clamp(1rem, 3vw, 2rem);
    color: #0D4A8D;
    font-weight: 400;
  }
  
  .hero-text-fluid {
    font-size: clamp(0.875rem, 2.5vw, 1.5rem);
    line-height: clamp(1.25rem, 3.5vw, 2.25rem);
    margin-bottom: clamp(1rem, 2vw, 2rem);
    color: #0D4A8D;
    font-weight: 400;
  }
  
  .hero-button-fluid {
    font-size: clamp(0.875rem, 2vw, 1.125rem);
    padding: clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 3vw, 2rem);
    border-radius: clamp(0.375rem, 1vw, 0.5rem);
  }
  
  /* 🎯 FLUID PRODUCTS SECTION */
  .hero-products-fluid {
    position: relative;
    margin: clamp(1rem, 3vw, 2rem) 0;
    z-index: 10;
  }
  
  .hero-products-bg-fluid {
    position: absolute;
    top: 0;
    left: calc(-1 * clamp(1rem, 4vw, 5rem));
    right: calc(-1 * clamp(1rem, 4vw, 5rem));
    width: calc(100% + 2 * clamp(1rem, 4vw, 5rem));
    height: clamp(7.5rem, 15vh, 12rem);
    background-color: #0D4A8D;
    z-index: 1;
  }
  
  .hero-products-container-fluid {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: clamp(1rem, 3vw, 2.5rem);
    padding: clamp(1rem, 3vw, 2rem);
    height: clamp(7.5rem, 15vh, 12rem);
  }
  
  @media (min-width: 1024px) {
    .hero-products-container-fluid {
      justify-content: flex-start;
      padding-left: clamp(2rem, 4vw, 3rem);
    }
  }
  
  /* 🎯 ENHANCED LEFT MARGIN FOR 125% ZOOM AND LARGER SCREENS */
  @media (min-width: 1280px) {
    .hero-products-container-fluid {
      padding-left: clamp(3rem, 6vw, 5rem);
      margin-left: clamp(1rem, 3vw, 2rem);
    }
  }
  
  .hero-products-container-fluid img {
    width: clamp(7rem, 20vw, 20rem);
    height: clamp(5rem, 12vw, 8.75rem);
    object-fit: contain;
    border-radius: clamp(0.5rem, 1vw, 0.75rem);
    transition: transform 0.3s ease;
  }
  
  .hero-products-container-fluid img:hover {
    transform: scale(1.05);
  }
  
  /* 🎯 FLUID VIDEO SECTION */
  .hero-video-fluid {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  
  .hero-video-container-fluid {
    position: relative;
    width: clamp(17.5rem, 40vw, 32.5rem);
    height: clamp(15rem, 45vw, 45rem);
    background: white;
    border-radius: 0 0 clamp(6rem, 12vw, 15rem) clamp(6rem, 12vw, 15rem);
    box-shadow: 0 clamp(0.125rem, 0.5vw, 0.25rem) clamp(0.9375rem, 3vw, 1.6875rem) clamp(0.0625rem, 0.2vw, 0.0625rem) rgba(0,0,0,0.15);
    overflow: hidden;
    transition: transform 0.5s ease;
  }
  
  .hero-video-container-fluid:hover {
    transform: scale(1.02);
  }
  
  .hero-video-container-fluid video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  /* 🎯 ACCESSIBILITY & PERFORMANCE */
  @media (prefers-reduced-motion: reduce) {
    .animate-fade-in-up,
    .animate-fade-in-left,
    .animate-fade-in-right {
      animation: none;
      opacity: 1;
    }
    
    .hero-video-container-fluid:hover,
    .hero-products-container-fluid img:hover {
      transform: none;
    }
  }
  
  /* 🎯 HIGH DPI DISPLAYS */
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .hero-video-container-fluid {
      image-rendering: -webkit-optimize-contrast;
      image-rendering: crisp-edges;
    }
  }
  
  /* 🎯 PRINT STYLES */
  @media print {
    .hero-video-fluid {
      display: none;
    }
    
    .hero-products-bg-fluid {
      background: none;
      border: 2px solid #0D4A8D;
    }
  }
  
  /* 🎯 CENTER PRODUCT IMAGES ONLY ABOVE 125% ZOOM (1600px+) */
  @media (min-width: 1600px) {
    .hero-products-mobile {
      justify-content: center !important;
      padding-left: clamp(1rem, 3vw, 2rem) !important;
      padding-right: clamp(1rem, 3vw, 2rem) !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
    
    /* Remove any negative margins from individual images */
    .hero-products-mobile img {
      margin-left: 0 !important;
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
      className="min-h-screen w-full relative overflow-x-hidden bg-white pt-[120px] "
      id="home"
    >

      <div className="flex flex-col xl:flex-row hero-container-mid min-h-screen w-full hero-container-14 hero-container-15 hero-container-16 relative z-10">
        {/* Left Content Section - Enhanced responsive padding */}
        <div className="flex-1 flex flex-col justify-start hero-content-mid
                        pt-0 sm:pt-10 md:pt-12 lg:pt-6 xl:pt-20 
                        px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 
                        pb-2 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-16 w-full
                        relative">

          {/* Main Title - Enhanced responsive typography */}
          <div className="mb-2 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-2 hero-title-large-margin w-full overflow-hidden mt-4 ">
            <h1
              className="text-[#0D4A8D] font-bold leading-[90%] tracking-tight hero-title-mobile
                         text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px] xl:text-[58px] 2xl:text-[66.98px]
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
                         text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[35px]
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
            <div
              className="absolute top-0 left-0 z-0 w-[calc(100vw+200px)] -ml-[200px] 
               bg-[#0D4A8D] 
               h-[120px] sm:h-[150px] md:h-[170px] lg:h-[189px] xl:h-[180px] 2xl:h-[189px]"
            ></div>

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
          <div className="mb-2 sm:mb-4 md:mb-8 lg:mb-10 xl:mb-2  relative z-70 hero-intro-mobile hero-intro-mid hero-intro-pre-large mt-2 sm:mt-8 md:mt-6">
            <p
              className="bigpara text-[#0D4A8D] font-normal w-full max-w-[95%] sm:max-w-[90%] md:max-w-[625px] 
                         text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-[22px] 2xl:text-[25px]
                         hero-text-tablet hero-text-large-tablet hero-text-14 hero-text-15 hero-text-16
                         leading-[140%] sm:leading-[150%] lg:leading-[160%] xl:leading-[39.75px]
                         tracking-normal lg:tracking-wide 
                         font-sans lg:font-['Red_Hat_Text'] 
                         animate-fade-in-left transition-all duration-300 relative z-70
                         block md:block lg:block xl:block 2xl:block"
              style={{ animationDelay: '1.0s' }}
            >
              For the first time in India, PharmaRise proudly introduces two
              unique & innovative products, set to redefine healthcare
              possibilities, improve patient outcomes, & establish benchmarks of
              excellence in the industry.
            </p>
          </div>
          <div className="mb-2 sm:mb-8 md:mb-0 hero-button-mobile flex flex-col xs:flex-row gap-3 sm:gap-4 items-start">
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
        <div className="w-full xl:w-auto xl:flex-none flex justify-center items-center hero-video-mid hero-video-mobile
                        p-1 xs:p-2 sm:p-6 md:p-8 lg:p-6 xl:p-12 2xl:p-16
                        h-auto lg:h-[480px] xl:h-[580px] 2xl:h-[680px] 
                        relative lg:ml-0 xl:ml-[-100px] 2xl:ml-[-120px] z-20 -mt-4 xs:-mt-2 sm:mt-0">
          <div
            className="bg-white flex justify-center items-center relative overflow-hidden 
                       w-full max-w-[280px] h-[250px]
                       xs:max-w-[300px] xs:h-[270px]
                       sm:max-w-[380px] sm:h-[340px] 
                       md:max-w-[420px] md:h-[380px]
                       lg:max-w-[400px] lg:h-[400px]
                       xl:max-w-[480px] xl:h-[650px]
                       2xl:max-w-[520px] 2xl:h-[720px]
                       hero-video-tablet hero-video-large-tablet hero-video-14 hero-video-15
                       rounded-b-[100px] sm:rounded-b-[120px] md:rounded-b-[140px] 
                       lg:rounded-b-[180px] xl:rounded-b-[220px] 2xl:rounded-b-[250px]
                       shadow-[0_2px_15px_1px_rgba(0,0,0,0.15)] sm:shadow-[0_3px_20px_1px_rgba(0,0,0,0.2)] 
                       lg:shadow-[0_4px_27px_1px_rgba(0,0,0,0.25)] 
                       z-60 animate-fade-in-right transition-transform duration-500 hover:scale-105"
            style={{ animationDelay: '0.8s' }}
          >
            <video
              src="/images/PR PRODUCT Hero sec.mp4"
              className="w-full h-auto object-cover transition-transform duration-300
                         max-w-[250px] xs:max-w-[270px] sm:max-w-[340px] md:max-w-[380px] 
                         lg:max-w-[400px] xl:max-w-[440px] 2xl:max-w-[472px]
                         max-h-[220px] xs:max-h-[240px] sm:max-h-[300px] md:max-h-[340px] 
                         lg:max-h-[450px] xl:max-h-[580px] 2xl:max-h-[650px]  "
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