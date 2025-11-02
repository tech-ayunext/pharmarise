import { Link } from "react-router-dom";

// Clean CSS for single combined image
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

  /* 🎯 FLUID RESPONSIVE SECTION STYLING */
  section#about {
    margin: 0 !important;
    position: relative;
    z-index: 1;
    padding-top: clamp(1rem, 3vw, 3rem) !important;
    padding-bottom: clamp(1rem, 3vw, 3rem) !important;
    min-height: auto !important;
    background: white !important;
    overflow: visible;
    width: 100%;
    box-sizing: border-box;
  }

  /* 🎯 FLUID LAYOUT CONTAINER */
  .about-section {
    display: flex;
    align-items: center;
    gap: clamp(1rem, 4vw, 4rem);
    width: 100%;
    max-width: 100%;
  }

  /* 🎯 FLUID TEXT SECTION */
  .about-text-section {
    flex: 1;
    min-width: 0;
    padding-right: clamp(1rem, 2vw, 2rem);
  }

  /* 🎯 FLUID IMAGE SECTION */
  .about-image-section {
    flex: 0 0 auto;
    width: clamp(300px, 40vw, 500px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* 🎯 IMAGE CONTAINER - Fluid responsive container */
  .about-image-container {
    position: relative;
    z-index: 2;
    overflow: visible;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
  }

  /* 🎯 COMBINED IMAGE - Fully responsive image */
  .about-combined-img {
    width: 100%;
    height: auto;
    max-width: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: clamp(8px, 1vw, 20px);
    box-shadow: 0 clamp(5px, 1vw, 15px) clamp(15px, 3vw, 40px) rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .about-combined-img:hover {
    transform: scale(1.02);
    box-shadow: 0 clamp(8px, 1.5vw, 20px) clamp(25px, 4vw, 60px) rgba(0, 0, 0, 0.15);
  }

  /* 🎯 FLUID TYPOGRAPHY */
  .about-title {
    font-size: clamp(1.5rem, 4vw, 3rem);
    line-height: 1.2;
    margin-bottom: clamp(1rem, 2vw, 2rem);
  }

  .about-subtitle {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    line-height: 1.4;
    margin-bottom: clamp(1rem, 2vw, 2rem);
  }

  .about-description {
    font-size: clamp(0.875rem, 2vw, 1.125rem);
    line-height: 1.6;
    margin-bottom: clamp(1rem, 2vw, 2rem);
  }

  .about-button {
    font-size: clamp(0.875rem, 1.5vw, 1.125rem);
    padding: clamp(0.5rem, 1vw, 0.75rem) clamp(1rem, 2vw, 2rem);
    border-radius: clamp(6px, 0.5vw, 12px);
  }

  /* 🎯 MOBILE-FIRST RESPONSIVE BREAKPOINTS */
  @media (max-width: 768px) {
    section#about {
      padding-left: 1rem !important;
      padding-right: 1rem !important;
      padding-top: 2rem !important;
      padding-bottom: 2rem !important;
    }
    
    .about-section {
      flex-direction: column;
      text-align: center;
      gap: 1.5rem;
    }
    
    .about-text-section {
      order: 1;
      padding-right: 0;
      text-align: left;
      width: 100%;
    }
    
    .about-image-section {
      order: 2;
      width: 100%;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
    
    .about-combined-img {
      border-radius: clamp(8px, 2vw, 16px);
      max-width: 100%;
      height: auto;
    }
    
    .about-title {
      font-size: clamp(1.25rem, 5vw, 2rem);
      line-height: 1.3;
      margin-bottom: 1rem;
    }
    
    .about-subtitle {
      font-size: clamp(0.9rem, 3.5vw, 1.1rem);
      line-height: 1.5;
      margin-bottom: 1rem;
    }
    
    .about-description {
      font-size: clamp(0.8rem, 3vw, 1rem);
      line-height: 1.6;
      margin-bottom: 1.5rem;
      text-align: justify;
    }
    
    .about-button {
      font-size: clamp(0.8rem, 3vw, 1rem);
      padding: 0.75rem 1.5rem;
      display: inline-block;
      text-align: center;
    }
  }

  /* 🎯 TABLET AND SMALL DESKTOP */
  @media (min-width: 769px) and (max-width: 1024px) {
    .about-section {
      flex-direction: row;
      align-items: flex-start;
    }
    
    .about-text-section {
      flex: 1 1 60%;
    }
    
    .about-image-section {
      flex: 0 0 40%;
      width: clamp(300px, 35vw, 400px);
    }
  }

  /* 🎯 LARGE SCREENS */
  @media (min-width: 1025px) {
    .about-section {
      flex-direction: row;
      align-items: center;
    }
    
    .about-text-section {
      flex: 1 1 55%;
    }
    
    .about-image-section {
      flex: 0 0 45%;
      width: clamp(350px, 40vw, 550px);
    }
  }

  /* 🎯 ULTRA-WIDE SCREENS */
  @media (min-width: 1600px) {
    .about-section {
      max-width: 1400px;
      margin: 0 auto;
    }
    
    .about-image-section {
      width: clamp(400px, 35vw, 600px);
    }
  }

  /* 🎯 EXTRA SMALL MOBILE DEVICES */
  @media (max-width: 480px) {
    section#about {
      padding-left: 0.75rem !important;
      padding-right: 0.75rem !important;
    }
    
    .about-image-section {
      margin-bottom: 5.5rem;
    }
    
    .about-title {
      font-size: 1.5rem;
      line-height: 1.2;
    }
    
    .about-subtitle {
      font-size: 1rem;
      line-height: 1.4;
    }
    
    .about-description {
      font-size: 0.875rem;
      line-height: 1.5;
      text-align: left;
    }
    
    .about-button {
      font-size: 0.875rem;
      padding: 0.625rem 1.25rem;
      width: auto;
      display: inline-block;
    }
  }

  /* 🎯 CONTAINER QUERIES FOR MODERN BROWSERS */
  @container (max-width: 768px) {
    .about-section {
      flex-direction: column;
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
      className="bg-white w-full py-0 pl-4 sm:pl-8 md:pl-12 lg:pl-20 pr-4 sm:pr-8 md:pr-12 lg:pr-0"
      id="about"
    >
      <div className="flex about-section">
        <div className="about-text-section">
          <div className="flex flex-col items-start text-[#0D4A8D] font-medium">
            {/* About Us Label with red underline */}
            <div className="mb-6 relative animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg sm:text-xl md:text-2xl font-medium">
                About Us
              </p>
              <span className="absolute bottom-0 left-0 w-16 sm:w-20 lg:w-24 h-[3px] bg-[#BE2623] rounded-full"></span>
            </div>

            {/* Heading */}
            <h2 className="about-title text-[#0D4A8D] text-left font-['Red_Hat_Text'] font-semibold leading-tight tracking-tight animate-fade-in-left transition-transform duration-300 hover:scale-105" style={{ animationDelay: '0.4s' }}>
              PharmaRise Innovations LLP
            </h2>

            {/* Subtext with Mr Rajendra Patkar in red */}
            <p className="about-subtitle text-[#0D4A8D] font-['Red_Hat_Text'] font-medium leading-relaxed animate-fade-in-left" style={{ animationDelay: '0.6s' }}>
              Pharmarise Innovations has been founded in 2024 by<br />
              <span className="text-[#BE2623] font-['Red_Hat_Text'] font-medium">
                Mr Rajendra Patkar
              </span>
              . A pharmacist by qualification and an MBA from Jamnalal Bajaj.
            </p>

            {/* Description */}
            <p className="about-description text-[#0D4A8D] text-justify font-normal leading-relaxed animate-fade-in-left" style={{ animationDelay: '0.8s' }}>
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
              className="about-button bg-[#0D4A8D] text-white hover:bg-opacity-90 transition-all animate-fade-in-up hover:scale-105 hover:shadow-lg transform inline-block"
              style={{ animationDelay: '1.0s' }}
            >
              Our Story
            </Link>
          </div>
        </div>

        <div className="about-image-section">
          <div className="about-image-container">
            <img
              src="/images/Blue_back.png"
              className="about-combined-img animate-fade-in-right"
              alt="About us - Mr Rajendra Patkar"
              style={{ animationDelay: '0.4s' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;