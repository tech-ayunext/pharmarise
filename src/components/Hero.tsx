
import { Link } from "react-router-dom";

// Add custom CSS for animations
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
      className="min-h-screen w-full relative overflow-x-hidden bg-white"
      id="home"
    >
      {/* Main container*/}
      <div className="flex flex-col lg:flex-row min-h-screen w-full">
        {/* Left Content Section */}
        <div className="flex-1 flex flex-col justify-start pt-4 sm:pt-8 lg:pt-16 px-4 sm:px-8 lg:px-12 pb-6 sm:pb-8 lg:pb-12 w-full">
          {/* Main Title */}
          <div className="mb-2 sm:mb-4 lg:mb-4 w-full overflow-hidden">
            <h1
              className="text-[#0D4A8D] font-bold leading-[90%] tracking-tight whitespace-nowrap
             text-[28px] sm:text-[42px] md:text-[50px] lg:text-[66.98px] animate-fade-in-left transition-transform duration-300 hover:scale-105"
              style={{ animationDelay: '0.2s' }}
            >
              PharmaRise Innovations
            </h1>
          </div>

          {/* Tag line */}
          <div className="mb-3 sm:mb-6 lg:mb-3">
            <p
              className="text-[#0D4A8D] font-normal leading-[126%] w-full max-w-[600px] 
             text-[18px] sm:text-[24px] md:text-[28px] lg:text-[35px] animate-fade-in-left transition-all duration-300 whitespace-nowrap"
              style={{ animationDelay: '0.4s' }}
            >
              Innovations for a healthy life
            </p>
          </div>

          {/* Products Section */}
          <div className="mt-2 sm:mt-4 lg:mt-[10px] mb-3 sm:mb-6 lg:mb-5">
            {/* Full-width background wrapper */}
            <div className="bg-[#0D4A8D] w-screen relative left-1/2 -ml-[50vw]">
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-6 lg:gap-10 py-6 sm:py-8 lg:h-[189px] px-4 sm:px-8 lg:px-12 max-w-[1512px] mx-auto">
                {/* CobalFine Product */}
                <img
                  src="/images/CobalFine.png"
                  alt="CobalFine Product"
                  className="w-[150px] sm:w-[200px] lg:w-auto h-auto object-contain rounded-[12px] lg:ml-[250px] animate-fade-in-up transition-transform duration-300 hover:scale-110"
                  style={{ maxHeight: "100px", animationDelay: '0.6s' }}
                />

                {/* Garci Product */}
                <img
                  src="/images/Garci.png"
                  alt="Garci Product"
                  className="w-[150px] sm:w-[200px] lg:w-auto h-auto object-contain rounded-[12px] animate-fade-in-up transition-transform duration-300 hover:scale-110"
                  style={{ maxHeight: "100px", animationDelay: '0.8s' }}
                />
              </div>
            </div>
          </div>

          {/* Introductory Text */}
          <div className="mb-4 sm:mb-6 lg:mb-12">
            <p
              className="text-[#0D4A8D] font-normal w-full max-w-[625px] 
               text-sm sm:text-base lg:text-[25px] 
               sm:leading-[150%] lg:leading-[39.75px] 
               sm:tracking-normal lg:tracking-wide 
               sm:font-sans lg:font-['Red_Hat_Text'] 
               animate-fade-in-left transition-all duration-300"
              style={{ animationDelay: '1.0s' }}
            >
              For the first time in India, PharmaRise proudly introduces two
              unique & innovative products, set to redefine healthcare
              possibilities, improve patient outcomes, & establish benchmarks of
              excellence in the industry.
            </p>
          </div>
          {/* Action Buttons */}
          <div className="mb-6 sm:mb-0 flex flex-col sm:flex-row gap-4 items-start">
            <Link
              to="/new-about"
              className="bg-[#BE2623] text-white font-medium text-center leading-[96.184%] rounded-md hover:bg-opacity-90 transition-all px-4 py-2 sm:px-6 sm:py-3 text-sm lg:text-[14.939px] animate-fade-in-up hover:scale-105 hover:shadow-lg transform inline-flex w-auto whitespace-nowrap"
              style={{ animationDelay: '1.2s' }}
            >
              About Us
            </Link>

          </div>


        </div>

        {/* Right Video Section */}
        <div className="w-500px lg:flex-3 lg:flex-none flex justify-center items-center p-4 sm:p-8 lg:p-12 h-auto lg:h-[480px] relative lg:ml-[-100px]">
          {/* Blue background behind video - Hidden on mobile for a cleaner look */}
          <div className="hidden lg:block absolute bg-[#0D4A8D] w-[545px] h-[188.5px] top-[43%] left-1/2 -translate-x-1/3"></div>

          {/* Video container */}
          <div
            className="bg-white flex justify-center items-center relative overflow-hidden 
              w-[full] max-w-[320px] h-[300px] 
              sm:max-w-[500px] sm:h-[400px] 
              lg:h-[882px] 
              rounded-b-[150px] lg:rounded-b-[250px]
              shadow-[0_4px_27px_1px_rgba(0,0,0,0.25)] z-10 animate-fade-in-right transition-transform duration-500 hover:scale-105"
            style={{ animationDelay: '0.8s' }}
          >
            <video
              src="/images/PR PRODUCT Hero sec.mp4"
              className="w-full max-w-[280px] h-auto sm:max-w-[472px] sm:h-[333px] object-cover transition-transform duration-300"
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
