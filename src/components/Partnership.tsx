
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
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = partnershipAnimationStyles;
  document.head.appendChild(styleSheet);
}

const Partnership = () => {
  return (
    <section className="bg-[rgba(217,235,255,1)] flex w-full flex-col items-stretch pt-[31px] px-4 sm:px-8 md:px-10 lg:px-12 max-md:max-w-full max-md:px-5" id="partnership">
      <h2 className="text-[rgba(13,74,141,1)] text-[32px] sm:text-[40px] md:text-[50px] lg:text-6xl font-bold tracking-[-1.8px] ml-[20px] sm:ml-[40px] lg:ml-[61px] max-md:max-w-full max-md:text-[40px] animate-fade-in-left transition-transform duration-300 hover:scale-105" style={{ animationDelay: '0.2s' }}>
        Why Partner with PharmaRise
      </h2>

      <div className="mt-[30px] sm:mt-[40px] lg:mt-[45px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-full lg:w-6/12 max-md:w-full max-md:ml-0">
            <img
              src="/images/Partnership benefits illustration.png"
              className="aspect-[1.32] object-contain w-full grow rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-10 animate-fade-in-left transition-transform duration-300 hover:scale-105"
              alt="Partnership benefits illustration"
              style={{ animationDelay: '0.4s' }}
            />
          </div>

          <div className="w-full lg:w-6/12 ml-0 lg:ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col self-stretch items-stretch text-[24px] sm:text-[28px] md:text-[32px] lg:text-4xl text-[rgba(13,74,141,1)] font-semibold tracking-[-1.08px] my-auto max-md:max-w-full max-md:mt-10 px-4 sm:px-6 lg:px-0">

              {/* Box 1 */}
              <div className="flex items-start leading-none ml-[0px] sm:ml-[2px] lg:ml-[4px] max-md:ml-0 animate-fade-in-right" style={{ animationDelay: '0.6s' }}>
                <img
                  src="/images/Box1.svg"
                  alt="Box 1"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-[34.453px] lg:h-[34.453px] flex-shrink-0 mr-3 sm:mr-4 mt-1 transition-transform duration-300 hover:scale-110"
                  style={{ aspectRatio: '34.45/34.45' }}
                />
                <h3 className="leading-none">Innovative Products</h3>
              </div>
              <p className="text-[rgba(0,52,109,1)] text-[16px] sm:text-[18px] md:text-[19px] lg:text-[21px] font-normal leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[31px] tracking-[-0.64px] mt-1.5 max-md:max-w-full animate-fade-in-right" style={{ animationDelay: '0.7s' }}>
                Experienced professionals driving brand growth & deeper market penetration for your products.
              </p>

              {/* Box 2 */}
              <div className="flex items-start leading-none ml-[0px] sm:ml-[2px] lg:ml-[4px] mr-[10px] sm:mr-[15px] lg:mr-[21px] mt-[40px] sm:mt-[50px] lg:mt-[58px] max-md:max-w-full max-md:mr-2.5 max-md:mt-10 animate-fade-in-right" style={{ animationDelay: '0.8s' }}>
                <img
                  src="/images/Box2.png"
                  alt="Box 2"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-[34.453px] lg:h-[34.453px] flex-shrink-0 mr-3 sm:mr-4 mt-1 transition-transform duration-300 hover:scale-110"
                  style={{ aspectRatio: '34.45/34.45' }}
                />
                <h3 className="leading-none">Learning & Development Solutions</h3>
              </div>
              <p className="text-[rgba(0,52,109,1)] text-[16px] sm:text-[18px] md:text-[19px] lg:text-[21px] font-normal leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[31px] tracking-[-0.64px] max-md:max-w-full animate-fade-in-right" style={{ animationDelay: '0.9s' }}>
                Experienced professionals driving brand growth & deeper market penetration for your products.
              </p>

              {/* Box 3 */}
              <div className="flex items-start leading-none ml-[0px] sm:ml-[2px] lg:ml-[4px] mr-[10px] sm:mr-[15px] lg:mr-[21px] mt-[40px] sm:mt-[50px] lg:mt-[58px] max-md:max-w-full max-md:mr-2.5 max-md:mt-10 animate-fade-in-right" style={{ animationDelay: '1.0s' }}>
                <img
                  src="/images/Box3.svg"
                  alt="Box 3"
                  className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] lg:w-[34.453px] lg:h-[34.453px] flex-shrink-0 mr-3 sm:mr-4 mt-1 transition-transform duration-300 hover:scale-110"
                  style={{ aspectRatio: '34.45/34.45' }}
                />
                <h3 className="leading-none">India Formulation & Consultation</h3>
              </div>
              <p className="text-[rgba(0,52,109,1)] text-[16px] sm:text-[18px] md:text-[19px] lg:text-[21px] font-normal leading-[28px] sm:leading-[32px] md:leading-[35px] lg:leading-[37px] tracking-[-0.64px] max-md:max-w-full animate-fade-in-right" style={{ animationDelay: '1.1s' }}>
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
