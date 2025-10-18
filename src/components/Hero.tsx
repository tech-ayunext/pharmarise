import { Link } from "react-router-dom";
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

  /* Mobile-specific adjustments (<640px) */
  @media (max-width: 639px) {
    .hero-title-mobile {
      margin-top: 0.5rem !important;
    }
    .hero-products-mobile {
      flex-direction: row !important;
      justify-content: center !important;
      align-items: center !important;
      gap: 1rem !important;
      height: auto !important;
      padding: 1.5rem 1rem !important;
    }
    .hero-products-mobile img {
      width: 169px !important;
      height: 85px !important;
      object-fit: contain !important;
    }
    .hero-bg-mobile {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      top: 17% !important;
      left: 0 !important;
      right: 0 !important;
      width: 100% !important;
      height: 140px !important;
      // z-index: 5 !important;
      position: absolute !important;
    }
    .hero-intro-mobile {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      text-align: center !important;
      margin-top: 1.2rem !important;
      // z-index: 70 !important;
    }
    
    /* Reduce gap between About Us button and video on mobile */
    .hero-button-mobile {
      margin-bottom: 0rem !important; /* Remove bottom margin completely */
    }
    
    .hero-video-mobile {
      margin-top: -1rem !important; /* Very aggressive pull - doubled from -2rem */
      padding-top: 0rem !important; /* Remove top padding completely */
      padding: 0.5rem !important; /* Override all Tailwind padding classes */
    }
    
    /* More specific targeting to override Tailwind classes */
    div.hero-button-mobile.mb-6 {
      margin-bottom: 0rem !important;
    }
    
    div.hero-button-mobile.sm\\:mb-8 {
      margin-bottom: 0rem !important;
    }
  }

  /* Mid-range viewport fixes (640px - 1200px) */
  @media (min-width: 640px) and (max-width: 1199px) {
    .hero-container-mid {
      flex-direction: column !important;
    }
    .hero-content-mid {
      order: 1;
      // z-index: 50;
      padding: 1rem !important;
      padding-bottom: 2rem !important;
    }
    .hero-video-mid {
      order: 2;
      margin-top: 2rem !important;
      margin-left: 0 !important;
    }
    .hero-bg-mid {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      top: 35% !important;
      left: 0 !important;
      right: 0 !important;
      width: 100% !important;
      height: 140px !important;
      // z-index: 5 !important;
      position: absolute !important;
    }
    
    .hero-intro-mid {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      margin-top: 0.5rem !important;
      // z-index: 60 !important;
      padding: 0 1rem !important;
    }
       .hero-products-mobile img {
      width: 199px !important;
      height: 85px !important;
      object-fit: contain !important;
    }
  }
  
  /* Specific adjustments for different mid-range breakpoints */
  @media (min-width: 640px) and (max-width: 767px) {
    .hero-container-15 {
      padding-top: 3rem;!important;
      padding-left: 3rem;
      padding-right: 3rem;
    }
    .hero-bg-mid {
      top: 15% !important;
      height: 140px !important;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .hero-bg-mid {
      top: 17% !important;
      height: 160px !important;
    }
         .hero-products-mobile img {
      width: 299px !important;
      height: 115px !important;
      object-fit: contain !important;
    }

  }

  @media (min-width: 1024px) and (max-width: 1199px) {
    .hero-bg-mid {
      top: 14% !important;
      height: 170px !important;
    }
      
  }

  /* 🎯 TABLET SPECIFIC MEDIA QUERIES (768px - 1024px) */
  @media (min-width: 768px) and (max-width: 1024px) {
    
    /* Container adjustments for tablets */
    .hero-container-15 {
      padding-top: 1.5rem !important;
      padding-left: 2.5rem !important;
      padding-right: 2.5rem !important;
    }
    
    /* Main container layout for tablets */
    .hero-container-mid {
      flex-direction: column !important;
      min-height: 95vh !important;
    }
    
    /* Content section adjustments */
    .hero-content-mid {
      order: 1 !important;
      padding: 0 1.5rem 1.5rem 1.5rem !important;
    }
    
    /* Video section adjustments */
    .hero-video-mid {
      order: 2 !important;
      margin-top: 1rem !important;
      margin-left: 0 !important;
      padding: 1rem !important;
    }
    
    /* Blue background positioning for tablets */
    .hero-bg-mid {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      top: 20% !important;
      left: 0 !important;
      right: 0 !important;
      width: 100% !important;
      height: 160px !important;
      position: absolute !important;
    }
    
    /* Typography adjustments for tablets */
    .hero-title-tablet {
      font-size: clamp(42px, 5.2vw, 48px) !important;
      line-height: 1.1 !important;
      margin-bottom: 0.75rem !important;
    }
    
    .hero-tagline-tablet {
      font-size: clamp(24px, 3.8vw, 30px) !important;
      line-height: 1.25 !important;
      margin-bottom: 1.25rem !important;
    }
    
    .hero-text-tablet {
      font-size: clamp(18px, 2.4vw, 22px) !important;
      line-height: 1.6 !important;
      margin-bottom: 1.5rem !important;
    }
    
    /* Video container for tablets - reduced height */
    .hero-video-tablet {
      max-width: 250px !important;
      height: 260px !important; /* Reduced from 400px */
      margin: 0 auto !important;
    }
    
    /* Products section for tablets */
    .hero-products-mobile {
      height: 160px !important;
      padding: 2rem 1.5rem !important;
      gap: 2rem !important;
      justify-content: center !important;
    }
    
    /* Product images - slightly reduced height */
    .hero-products-mobile img {
      width: 240px !important;
      height: 110px !important; /* Reduced from 120px */
      object-fit: contain !important;
    }
    
    /* About Us button - remove top margin for tablets */
    .hero-text-tablet + div {
      margin-top: 0.5rem !important; /* Reduced from default margin */
    }
    
    /* Intro text for tablets */
    .hero-intro-mid {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      margin-top: 1rem !important;
      padding: 0 1.5rem !important;
    }
    
    /* Full-width background adjustment for tablets */
    .hero-products-mid .absolute {
      height: 160px !important;
    }
    
    /* Tablet Portrait specific (768px - 900px) */
    @media (max-width: 900px) and (orientation: portrait) {
      .hero-title-tablet {
        font-size: clamp(40px, 5vw, 45px) !important;
      }
      .hero-video-tablet {
        max-width: 400px !important;
        height: 320px !important; /* Further reduced for portrait */
      }
      .hero-products-mobile img {
        width: 220px !important;
        height: 100px !important; /* Slightly reduced */
      }
    }
    
    /* Tablet Landscape specific (901px - 1024px) */
    @media (min-width: 901px) and (orientation: landscape) {
      .hero-container-mid {
        flex-direction: row !important;
        align-items: flex-start !important;
      }
      .hero-content-mid {
        flex: 1 1 55% !important;
        padding-right: 2rem !important;
      }
      .hero-video-mid {
        flex: 1 1 45% !important;
        margin-top: 0 !important;
      }
      .hero-bg-mid {
        top: 25% !important;
      }
      .hero-products-mobile {
        justify-content: flex-start !important;
        padding-left: 2rem !important;
      }
    }
  }

  /* Large Tablet Landscape (1024px - 1279px) */
  @media (min-width: 1024px) and (max-width: 1280px) {
    .hero-title-14{
      margin-top: 1rem !important;
    }
  .hero-container-15 {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  .hero-container-mid {
  
    flex-direction: row !important; /* row instead of column */
    flex-wrap: wrap;                /* wrap if necessary */
    align-items: flex-start;   
    
  }
    .hero-content-mid {
    flex: 1 1 50%;                  /* left content takes half width */
    order: 1 !important;            /* keep left content first */
    padding-bottom: 1rem !important;
    
  }

  .hero-video-mid {
    flex: 1 1 50%;                  /* video takes half width */
    order: 2 !important;
    margin-top: -50px !important;       /* remove gap pushing video down */
    display: flex;
    justify-content: center;
    align-items: flex-start;
     margin-left: 0 !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
  }
   .hero-bg-mid {
      top: 27.5% !important;
      height: 160px !important;
    }
   
  .hero-title-large-tablet {
      font-size: clamp(38px, 5vw, 19px) !important;
      line-height: 1.1;
    }
    .hero-tagline-large-tablet {
      font-size: clamp(24px, 3vw, 10px) !important;
    }
    .hero-text-large-tablet {
      font-size: clamp(18px, 2.3vw, 15px) !important;
    }
    .hero-video-large-tablet {
      max-width: 400px !important;
      height: 490px !important;
    }
  }

  /* PRESERVE ALL LARGE SCREEN STYLES (≥1280px) - MINIMAL ADJUSTMENTS ONLY */
  
  /* Large screens margin adjustments */
  
  @media (min-width: 1280px)and (max-width: 1365px) {
    .hero-title-large-margin {
      margin-top:-1rem  !important;
      margin-bottom: 0.5rem !important;
     
    }
      .hero-title-13{
       font-size: clamp(43px, 3.2vw, 52px) !important;
      }
    .hero-tagline-large-margin {
      margin-bottom: 1rem !important;
    }
    .hero-bg-mid {
      top: 33.5% !important;
      height: 160px !important;
    }
       .hero-video-mid {
      margin-top:-100px  !important;
      margin-left:0 !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
      .hero-video-15 {
      margin-left:6rem;
      max-width: 420px !important;
      height: 480px !important;
    }
  }
  
  /* 14-inch Laptop (1366px - 1440px) */
  @media (min-width: 1366px) and (max-width: 1440px) {
  .hero-text {
      font-size: clamp(18px, 2.3vw, 22px) !important;
    }
    .hero-container-14 {
    padding-top:0;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
    .hero-bg-mid {
      top: 21.5% !important;
      height: 160px !important;
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
      height: 450px !important;
    }
    .hero-products-14 {
      margin-left: 180px !important;
    }
  }

 /* 🎯 15-inch Laptop — Full HD 1920x1080 
   Typically reports innerWidth ≈ 9801000, devicePixelRatio ≈ 1.0
*/
@media (min-width: 1400px) and (max-width: 1600px),
       (min-width: 900px) and (max-width: 1020px) and (min-device-pixel-ratio: 1) {
  .hero-container-15 {
    margin-top: -40px !important;
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .hero-bg-mid {
    top: 20% !important;
    height: 160px !important;
  }
  .hero-title-15 {
    font-size: clamp(56px, 4.1vw, 60px) !important;
  }
  .hero-tagline-15 {
    font-size: clamp(28px, 2.7vw, 32px) !important;
  }
  .hero-text-15 {
    font-size: clamp(21px, 1.9vw, 23px) !important;
  }
  .hero-video-15 {
    margin-top: -90px;
    max-width: 480px !important;
    height: 620px !important;
  }
  .hero-products-15 {
    margin-left: 180px !important;
  }
  .bigpara {
    margin-top: -3rem !important;
    font-size: clamp(21px, 1.9vw, 22px) !important;
  }
}

/* 💻 16-inch Laptop — WUXGA 1920x1200 
   Typically reports innerWidth ≈ 850-880, devicePixelRatio ≈ 1.25
*/
@media (min-width: 1280px) and (max-width: 1440px),
       (min-width: 800px) and (max-width: 900px) and (min-device-pixel-ratio: 1.25) {
  .hero-container-16 {
    margin-top: -10px !important;
    padding-left: 4rem;
    padding-right: 4rem;
  }
 
  .hero-title-16 {
    font-size: clamp(60px, 4.5vw, 65px) !important;
  }
  .hero-tagline-16 {
    font-size: clamp(30px, 2.9vw, 34px) !important;
  }
  .hero-text-16 {
    font-size: clamp(22px, 2.1vw, 25px) !important;
  }
  .hero-video-16 {
    margin-top: -100px;
    max-width: 530px !important;
    height: 690px !important;
  }
  .hero-products-16 {
    margin-left: 230px !important;
  }
  .bigpara {
    margin-top: -2.5rem !important;
    font-size: clamp(22px, 2vw, 24px) !important;
  }
}

/* 15-inch laptop */
@media (min-height: 720px) and (max-height: 760px) {
  .hero-bg-mid {
    top: 26% !important;
    height: 160px !important;
  }
}

/* 16-inch laptop */
@media (min-width: 860px) and (max-width: 880px) 
       and (min-height: 740px) and (max-height: 760px) 
       and (min-resolution: 192dpi) {  /* DPR 2 ≈ 192dpi */
  .hero-bg-mid {
    top: 21% !important;
    height: 180px !important;
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