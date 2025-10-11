
import { Link } from "react-router-dom";

// Add custom CSS for animations and enhanced responsive breakpoints
const heroAnimationStyles = `
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

  /* Enhanced responsive breakpoints for specific laptop sizes */
  
  /* Tablet Portrait (768px - 1024px) */
  @media (min-width: 768px) and (max-width: 1024px) {
    .hero-title-tablet {
      font-size: clamp(38px, 5vw, 46px) !important;
      line-height: 1.1;
    }
    .hero-tagline-tablet {
      font-size: clamp(22px, 3.5vw, 28px) !important;
    }
    .hero-text-tablet {
      font-size: clamp(16px, 2.2vw, 20px) !important;
      line-height: 1.5;
    }
    .hero-video-tablet {
      max-width: 420px !important;
      height: 380px !important;
    }
  }

  /* 14-inch Laptop (1366px - 1440px) */
  @media (min-width: 1366px) and (max-width: 1440px) {
    .hero-container-14 {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
    .hero-title-14 {
      font-size: clamp(52px, 4vw, 58px) !important;
    }
    .hero-tagline-14 {
      font-size: clamp(28px, 2.5vw, 32px) !important;
    }
    .hero-text-14 {
      font-size: clamp(20px, 1.8vw, 23px) !important;
    }
    .hero-video-14 {
      max-width: 480px !important;
      height: 650px !important;
    }
    .hero-products-14 {
      margin-left: 180px !important;
    }
  }

  /* 15-inch Laptop (1440px - 1600px) */
  @media (min-width: 1440px) and (max-width: 1600px) {
    .hero-container-15 {
      padding-left: 3rem;
      padding-right: 3rem;
    }
    .hero-title-15 {
      font-size: clamp(58px, 4.2vw, 62px) !important;
    }
    .hero-tagline-15 {
      font-size: clamp(30px, 2.8vw, 34px) !important;
    }
    .hero-text-15 {
      font-size: clamp(22px, 2vw, 24px) !important;
    }
    .hero-video-15 {
      max-width: 520px !important;
      height: 720px !important;
    }
    .hero-products-15 {
      margin-left: 220px !important;
    }
  }

  /* Large Tablet Landscape (1024px - 1366px) */
  @media (min-width: 1024px) and (max-width: 1366px) {
    .hero-title-large-tablet {
      font-size: clamp(44px, 4.5vw, 50px) !important;
    }
    .hero-tagline-large-tablet {
      font-size: clamp(24px, 3vw, 30px) !important;
    }
    .hero-text-large-tablet {
      font-size: clamp(18px, 2.3vw, 22px) !important;
    }
    .hero-video-large-tablet {
      max-width: 450px !important;
      height: 500px !important;
    }
  }

  /* 16+ inch Laptops/Desktops (1600px+) */
  @media (min-width: 1600px) {
    .hero-container-16 {
      padding-left: 4rem;
      padding-right: 4rem;
    }
    .hero-title-16 {
      font-size: clamp(62px, 4.5vw, 67px) !important;
    }
    .hero-tagline-16 {
      font-size: clamp(32px, 3vw, 35px) !important;
    }
    .hero-text-16 {
      font-size: clamp(24px, 2.2vw, 25px) !important;
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
      className="min-h-screen w-full relative overflow-x-hidden bg-white -mt-10"
      id="home"
    >


      {/* Products Section Background - Full width behind everything including video */}
      <div className="absolute top-[15%] sm:top-[25%] md:top-[25%] lg:top-[30%] xl:top-[24%] 
                      left-0 right-0 w-full h-[140px] sm:h-[160px] md:h-[170px] lg:h-[189px] 
                      bg-[#0D4A8D] z-5"></div>

      {/* Main container - Enhanced responsive */}
      <div className="flex flex-col lg:flex-row min-h-screen w-full hero-container-14 hero-container-15 hero-container-16 relative z-10" style={{ marginTop: '0', paddingTop: '0' }}>
        {/* Left Content Section - Enhanced responsive padding */}
        <div className="flex-1 flex flex-col justify-start 
                        pt-8 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20 
                        px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 
                        pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-16 w-full
                        relative">

          {/* Main Title - Enhanced responsive typography */}
          <div className="mb-2 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-4 w-full overflow-hidden">
            <h1
              className="text-[#0D4A8D] font-bold leading-[90%] tracking-tight
                         text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px] xl:text-[58px] 2xl:text-[66.98px]
                         hero-title-tablet hero-title-large-tablet hero-title-14 hero-title-15 hero-title-16
                         animate-fade-in-left transition-transform duration-300 hover:scale-105
                         break-words"
              style={{ animationDelay: '0.2s' }}
            >
              PharmaRise Innovations
            </h1>
          </div>

          {/* Tagline - Enhanced responsive typography */}
          <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-3">
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
          <div className="mt-8 sm:mt-6 md:mt-4 lg:mt-2 xl:mt-3 
                          mb-4 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8 relative z-30">
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start lg:items-center items-center 
                            gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 
                            py-4 sm:py-5 md:py-6 lg:py-8 xl:py-9 
                            px-4 sm:px-6 md:px-8 lg:pl-8 lg:pr-16 xl:pl-12 xl:pr-20 2xl:pl-16 2xl:pr-24
                            h-[140px] sm:h-[160px] md:h-[170px] lg:h-[189px]">

              {/* CobalFine Product - Enhanced responsive sizing with 12px border radius */}
              <img
                src="/images/p3.png"
                alt="CobalFine Product"
                className="w-[120px] xs:w-[130px] sm:w-[140px] md:w-[160px] lg:w-[240px] xl:w-[280px] 2xl:w-[320px]
                           h-[120px] xs:h-[85px] sm:h-[90px] md:h-[100px] lg:h-[120px] xl:h-[130px] 2xl:h-[140px]
                            rounded-[12px]
                           lg:mb-4 xl:mb-6
                           lg:ml-[-60px]
                           animate-fade-in-up transition-transform duration-300 hover:scale-110"
                style={{ animationDelay: '0.6s' }}
              />

              {/* Garci Product - Enhanced responsive sizing with 12px border radius and margins on laptop */}
              <img
                src="/images/p1.png"
                alt="Garci Product"
                className="w-[120px] xs:w-[130px] sm:w-[140px] md:w-[160px] lg:w-[240px] xl:w-[280px] 2xl:w-[320px]
                           h-[120px] xs:h-[85px] sm:h-[90px] md:h-[100px] lg:h-[120px] xl:h-[130px] 2xl:h-[140px]
                            rounded-[12px]
                           lg:mr-8 xl:mr-12 2xl:mr-16 lg:mb-4 xl:mb-6
                           animate-fade-in-up transition-transform duration-300 hover:scale-110"
                style={{ animationDelay: '0.8s' }}
              />
            </div>
          </div>

          {/* Introductory Text - Enhanced responsive typography */}
          <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-5 relative z-40">
            <p
              className="text-[#0D4A8D] font-normal w-full max-w-[95%] sm:max-w-[90%] md:max-w-[625px] 
                         text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-[22px] 2xl:text-[25px]
                         hero-text-tablet hero-text-large-tablet hero-text-14 hero-text-15 hero-text-16
                         leading-[140%] sm:leading-[150%] lg:leading-[160%] xl:leading-[39.75px]
                         tracking-normal lg:tracking-wide 
                         font-sans lg:font-['Red_Hat_Text'] 
                         animate-fade-in-left transition-all duration-300 relative z-40"
              style={{ animationDelay: '1.0s' }}
            >
              For the first time in India, PharmaRise proudly introduces two
              unique & innovative products, set to redefine healthcare
              possibilities, improve patient outcomes, & establish benchmarks of
              excellence in the industry.
            </p>
          </div>

          {/* Action Buttons - Enhanced responsive sizing */}
          <div className="mb-6 sm:mb-8 md:mb-0 flex flex-col xs:flex-row gap-3 sm:gap-4 items-start">
            <Link
              to="/new-about"
              className="bg-[#BE2623] text-white font-medium text-center leading-[96.184%] 
                         rounded-md hover:bg-opacity-90 transition-all 
                         px-3 py-2 xs:px-4 xs:py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 
                         text-xs xs:text-sm sm:text-sm md:text-base lg:text-[14.939px]
                         animate-fade-in-up hover:scale-105 hover:shadow-lg transform 
                         inline-flex w-auto whitespace-nowrap"
              style={{ animationDelay: '1.2s' }}
            >
              About Us
            </Link>
          </div>


        </div>

        {/* Right Video Section - Fully enhanced responsive */}
        <div className="w-full xl:w-auto xl:flex-none flex justify-center items-center 
                        p-3 xs:p-4 sm:p-6 md:p-8 lg:p-6 xl:p-12 2xl:p-16
                        h-auto lg:h-[480px] xl:h-[580px] 2xl:h-[680px] 
                        relative lg:ml-0 xl:ml-[-100px] 2xl:ml-[-120px] z-20 ">

          {/* Blue background behind video - Enhanced responsive positioning */}
          {/* <div className="hidden lg:block absolute bg-[#0D4A8D] 
                          w-[350px] h-[120px] 
                          md:w-[400px] md:h-[140px] 
                          lg:w-[450px] lg:h-[160px] 
                          xl:w-[500px] xl:h-[170px] 
                          2xl:w-[545px] 2xl:h-[188.5px] 
                          top-[40%] lg:top-[33%] left-1/2 -translate-x-1/3"></div> */}

          {/* Video container - Fully enhanced responsive sizing */}
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
                       z-10 animate-fade-in-right transition-transform duration-500 hover:scale-105"
            style={{ animationDelay: '0.8s' }}
          >
            <video
              src="/images/PR PRODUCT Hero sec.mp4"
              className="w-full h-auto object-cover transition-transform duration-300
                         max-w-[250px] xs:max-w-[270px] sm:max-w-[340px] md:max-w-[380px] 
                         lg:max-w-[400px] xl:max-w-[440px] 2xl:max-w-[472px]
                         max-h-[220px] xs:max-h-[240px] sm:max-h-[300px] md:max-h-[340px] 
                         lg:max-h-[450px] xl:max-h-[580px] 2xl:max-h-[650px]"
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
