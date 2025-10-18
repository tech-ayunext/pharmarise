
// Add custom CSS for animations
const partnershipAnimationStyles = `
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
    
    /* === MAIN HEADING ADJUSTMENTS === */
    .partnership-heading-tablet {
      font-size: clamp(36px, 4.8vw, 44px) !important;
      line-height: clamp(42px, 5.4vw, 52px) !important;
      margin-left: 1.5rem !important;
      margin-bottom: 1.5rem !important;
    }
    
    /* === SECTION CONTAINER === */
    .partnership-container-tablet {
      padding: 2rem 1.5rem !important;
    }
    
    /* === CONTENT LAYOUT === */
    .partnership-content-tablet {
      padding: 0 1rem !important;
      gap: 2rem !important;
    }
    
    /* === IMAGE ADJUSTMENTS === */
    .partnership-image-tablet {
      max-width: 110% !important;
      height: auto !important;
      margin: 0 auto !important;
      transform: scale(1.1) !important;
    }
    
    /* === TEXT CONTENT SCALING === */
    .partnership-item-heading-tablet {
      font-size: clamp(16px, 2.8vw, 22px) !important;
      line-height: clamp(20px, 3.2vw, 26px) !important;
      margin-bottom: 0.75rem !important;
    }
    
    .partnership-item-text-tablet {
      font-size: clamp(15px, 2.4vw, 19px) !important;
      line-height: clamp(22px, 3vw, 28px) !important;
      margin-bottom: 2rem !important;
    }
    
    /* === ICON ADJUSTMENTS === */
    .partnership-icon-tablet {
      width: clamp(26px, 3.5vw, 30px) !important;
      height: clamp(26px, 3.5vw, 30px) !important;
      margin-right: 0.75rem !important;
    }
    
    /* === SPACING ADJUSTMENTS === */
    .partnership-item-spacing-tablet {
      margin-top: 2.5rem !important;
    }
    
    /* === TABLET PORTRAIT (768px - 900px) === */
    @media (max-width: 900px) and (orientation: portrait) {
      .partnership-heading-tablet {
        font-size: clamp(32px, 4.5vw, 40px) !important;
        line-height: clamp(38px, 5.1vw, 46px) !important;
        margin-left: 1rem !important;
      }
      
      .partnership-item-heading-tablet {
        font-size: clamp(14px, 2.6vw, 20px) !important;
        line-height: clamp(18px, 3vw, 24px) !important;
      }
      
      .partnership-item-text-tablet {
        font-size: clamp(14px, 2.2vw, 17px) !important;
        line-height: clamp(20px, 2.8vw, 24px) !important;
      }
      
      .partnership-container-tablet {
        padding: 1.5rem 1rem !important;
      }
      
      .partnership-item-spacing-tablet {
        margin-top: 2rem !important;
      }
    }
    
    /* === TABLET LANDSCAPE (901px - 1024px) === */
    @media (min-width: 901px) and (orientation: landscape) {
      .partnership-heading-tablet {
        font-size: clamp(40px, 5.2vw, 48px) !important;
        line-height: clamp(46px, 5.8vw, 54px) !important;
        margin-left: 2rem !important;
      }
      
      .partnership-item-heading-tablet {
        font-size: clamp(18px, 3vw, 24px) !important;
        line-height: clamp(22px, 3.4vw, 28px) !important;
      }
      
      .partnership-item-text-tablet {
        font-size: clamp(16px, 2.6vw, 20px) !important;
        line-height: clamp(24px, 3.2vw, 30px) !important;
      }
      
      .partnership-container-tablet {
        padding: 2.5rem 2rem !important;
      }
      
      .partnership-item-spacing-tablet {
        margin-top: 3rem !important;
      }
    }
    
    /* === ANIMATION TIMING ADJUSTMENTS === */
    .animate-fade-in-up,
    .animate-fade-in-left,
    .animate-fade-in-right {
      animation-duration: 0.7s !important;
    }
  }

  @media screen and (min-width: 900px) and (max-width: 1000px) and (min-height: 700px) and (max-height: 760px) {
    #partnership h2 {
      font-size: 32px !important;
      line-height: 38px !important;
    }
    #partnership h3 {
      font-size: 16px !important;
      line-height: 20px !important;
    }
    #partnership p {
      font-size: 14px !important;
      line-height: 18px !important;
    }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = partnershipAnimationStyles;
  document.head.appendChild(styleSheet);
}

const Partnership = () => {
  return (
    <section className="bg-[rgba(217,235,255,1)] flex w-full flex-col items-stretch pt-[31px] px-4 sm:px-8 md:px-10 lg:px-12 partnership-container-tablet max-md:max-w-full max-md:px-5" id="partnership">
      <h2 className="text-[rgba(13,74,141,1)] text-[32px] sm:text-[40px] md:text-[50px] lg:text-6xl partnership-heading-tablet font-medium  tracking-[-1.8px] ml-[20px] sm:ml-[40px] lg:ml-[61px] max-md:max-w-full max-md:text-[40px] animate-fade-in-left transition-transform duration-300 hover:scale-105" style={{ animationDelay: '0.2s' }}>
        Why Partner with PharmaRise
      </h2>

      <div className="mt-[30px] sm:mt-[40px] lg:mt-[45px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch partnership-content-tablet">
          <div className="w-full lg:w-6/12 max-md:w-full max-md:ml-0">
            <img
              src="/images/Partnership benefits illustration.png"
              className="aspect-[1.32] object-contain w-full grow rounded-[0px_0px_0px_0px] partnership-image-tablet max-md:max-w-full max-md:mt-10 animate-fade-in-left transition-transform duration-300 hover:scale-105"
              alt="Partnership benefits illustration"
              style={{ animationDelay: '0.4s' }}
            />
          </div>

          <div className="w-full lg:w-6/12 ml-0 lg:ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col self-stretch items-stretch text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-[rgba(13,74,141,1)] font-semibold tracking-[-1.08px] my-auto max-md:max-w-full max-md:mt-10 px-4 sm:px-6 lg:px-0">

              {/* Box 1 */}
              <div className="flex items-start leading-none ml-[0px] sm:ml-[2px] lg:ml-[4px] max-md:ml-0 animate-fade-in-right" style={{ animationDelay: '0.6s' }}>
                <img
                  src="/images/Box1.svg"
                  alt="Box 1"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-[34.453px] lg:h-[34.453px] partnership-icon-tablet flex-shrink-0 mr-3 sm:mr-4 mt-1 transition-transform duration-300 hover:scale-110"
                  style={{ aspectRatio: '34.45/34.45' }}
                />
                <h3 className="leading-none partnership-item-heading-tablet">Innovative Products</h3>
              </div>
              <p className="text-[rgba(0,52,109,1)] text-[16px] sm:text-[18px] md:text-[19px] lg:text-[21px] partnership-item-text-tablet font-normal leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[31px] tracking-[-0.64px] mt-1.5 max-md:max-w-full animate-fade-in-right" style={{ animationDelay: '0.7s' }}>
                Experienced professionals driving brand growth & deeper market penetration for your products.
              </p>

              {/* Box 2 */}
              <div className="flex items-start leading-none ml-[0px] sm:ml-[2px] lg:ml-[4px] mr-[10px] sm:mr-[15px] lg:mr-[21px] mt-[40px] sm:mt-[50px] lg:mt-[58px] partnership-item-spacing-tablet max-md:max-w-full max-md:mr-2.5 max-md:mt-10 animate-fade-in-right" style={{ animationDelay: '0.8s' }}>
                <img
                  src="/images/Box2.png"
                  alt="Box 2"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-[34.453px] lg:h-[34.453px] partnership-icon-tablet flex-shrink-0 mr-3 sm:mr-4 mt-1 transition-transform duration-300 hover:scale-110"
                  style={{ aspectRatio: '34.45/34.45' }}
                />
                <h3 className="leading-none partnership-item-heading-tablet">Learning & Development Solutions</h3>
              </div>
              <p className="text-[rgba(0,52,109,1)] text-[16px] sm:text-[18px] md:text-[19px] lg:text-[21px] partnership-item-text-tablet font-normal leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[31px] tracking-[-0.64px] max-md:max-w-full animate-fade-in-right" style={{ animationDelay: '0.9s' }}>
                Experienced professionals driving brand growth & deeper market penetration for your products.
              </p>

              {/* Box 3 */}
              <div className="flex items-start leading-none ml-[0px] sm:ml-[2px] lg:ml-[4px] mr-[10px] sm:mr-[15px] lg:mr-[21px] mt-[40px] sm:mt-[50px] lg:mt-[58px] partnership-item-spacing-tablet max-md:max-w-full max-md:mr-2.5 max-md:mt-10 animate-fade-in-right" style={{ animationDelay: '1.0s' }}>
                <img
                  src="/images/Box3.svg"
                  alt="Box 3"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-[34.453px] lg:h-[34.453px] partnership-icon-tablet flex-shrink-0 mr-3 sm:mr-4 mt-1 transition-transform duration-300 hover:scale-110"
                  style={{ aspectRatio: '34.45/34.45' }}
                />
                <h3 className="leading-none partnership-item-heading-tablet">India Formulation & Consultation</h3>
              </div>
              <p className="text-[rgba(0,52,109,1)] text-[16px] sm:text-[18px] md:text-[19px] lg:text-[21px] partnership-item-text-tablet font-normal leading-[28px] sm:leading-[32px] md:leading-[35px] lg:leading-[37px] tracking-[-0.64px] max-md:max-w-full animate-fade-in-right" style={{ animationDelay: '1.1s' }}>
                Our robust logistics and 24/7 service ensure your products reach every corner efficiently.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partnership;
