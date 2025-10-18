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

  /* 🎯 REMOVE GAPS BETWEEN SECTIONS */
  section {
    margin: 0 !important;
    padding-top: 3rem !important;
    padding-bottom: 0 !important;
  }
  
  section#about {
    margin-top: -4rem !important;
    position: relative;
    z-index: 10;
    padding-top: 4rem !important;
    padding-bottom: 4rem !important;
    min-height: 600px !important;
  }

  /* 🎯 IMAGE CONTAINER - Higher z-index for visibility and overlap */
  .about-image-container {
    position: relative;
    z-index: 15;
    overflow: visible;
    margin-top: -60px;
  }

  /* 🎯 COMBINED IMAGE - Scaled larger to prevent hair cutoff */
  .about-combined-img {
    position: absolute;
    top: -40px;
    left: 5%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }

  /* 🎯 MOBILE (320px - 767px) */
  @media (max-width: 767px) {
    section#about {
      margin-top: -5rem !important;
    }
    
    .about-image-container {
      min-height: 420px;
      max-height: 600px;
      margin: 0 auto;
      overflow: visible;
    }
    
    .about-combined-img {
      top: -70px;
      left: 2;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
    }
    
    .about-section {
      flex-direction: column;
      gap: 0;
      padding-bottom: -3rem;
      min-height: 700px !important;
    }
    
    section#about {
      min-height: 650px !important;
      padding-top: 3rem !important;
      padding-bottom: 0rem !important;
    }
    
    .about-text-section {
      width: 100%;
      order: 1;
      margin-bottom: 1rem;
    }
    
    .about-image-section {
      width: 100%;
      order: 2;
      margin: 0;
      margin-bottom: -9.5rem !important;
      min-height: 500px !important;
    }
    
    /* Remove bottom padding from section */
    section {
      padding-bottom: 0 !important;
      margin-bottom: 0 !important;
    }
    
    .about-image-container {
      margin-bottom: 6 !important;
    }
  }

  /* 🎯 TABLET (768px - 1024px) - Same layout as mobile */
  @media (min-width: 768px) and (max-width: 1024px) {
    section#about {
      margin-top: -4rem !important;
    }
    
    .about-image-container {
      min-height: 600px;
      max-height: 400px;
      border-radius: 12px;
      margin: 0 auto;
      overflow: visible;
      max-width: 500px;
    }
    
    .about-combined-img {
      top: -120px;
      left: 53%;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
    }
    
    .about-section {
      flex-direction: column;
      align-items: center;
      gap: 0;
      padding-bottom: 4rem;
      min-height: 600px;
    }
    
    section#about {
      min-height: 650px !important;
      padding-top: 4rem !important;
      padding-bottom: 4rem !important;
    }
    
    .about-text-section {
      width: 100%;
      order: 1;
      margin-bottom: 1.5rem;
      text-align: left;
    }
    
    .about-image-section {
      width: 100%;
      order: 2;
      max-width: 500px;
      margin: 0;
      margin-bottom: 0 !important;
    }
    
    /* Remove bottom padding from section */
    section {
      padding-bottom: 0 !important;
      margin-bottom: 0 !important;
    }
    
    .about-image-container {
      margin-bottom: 0 !important;
    }
  }

  /* 🎯 SMALL TABLETS (600px - 767px) */
  @media (min-width: 600px) and (max-width: 767px) {
    .about-image-container {
      min-height: 580px;
      max-height: 480px;
      margin: 0 auto;
      overflow: visible;
    }
    
    .about-combined-img {
      top: -50px;
      left: 33%;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
    }
    
    .about-section {
      flex-direction: column;
      gap: 0;
      padding-bottom: 3rem;
      min-height: 550px;
    }
    
    section#about {
      min-height: 600px !important;
      padding-top: 3.5rem !important;
      padding-bottom: 3.5rem !important;
    }
    
    .about-text-section {
      width: 100%;
      order: 1;
      margin-bottom: 1rem;
    }
    
    .about-image-section {
      width: 100%;
      order: 2;
      margin: 0;
      margin-bottom: -4.5rem !important;
    }
    
    .about-image-container {
      margin-bottom: -18% !important;
    }
    
    section {
      padding-bottom: 0 !important;
      margin-bottom: 0 !important;
    }
  }

  /* 🎯 SPECIFIC RESOLUTION 1241px */
  @media (min-width: 1241px) and (max-width: 1241px) {
    .about-image-container {
      min-height: 520px;
      max-height: 620px;
      border-radius: 16px;
      margin-top: -80px;
      margin-bottom: 2rem;
      overflow: visible;
    }
    
    .about-combined-img {
      top: -50px;
      left: 0;
      width: 130%;
      height: 130%;
      object-fit: cover;
      object-position: center top;
    }
    
    .about-section {
      flex-direction: row;
      align-items: center;
      gap: 2.5rem;
      margin-bottom: 0;
      min-height: 650px;
      padding-bottom: 4rem;
    }
    
    section#about {
      min-height: 700px !important;
      padding-top: 4rem !important;
      padding-bottom: 4rem !important;
    }
    
    .about-text-section {
      width: 60%;
      flex-shrink: 0;
    }
    
    .about-image-section {
      width: 40%;
      flex-shrink: 0;
    }
  }

  /* 🎯 DESKTOP (1025px+) */
  @media (min-width: 1025px) {
    section#about {
      margin-top: -3rem !important;
    }
    
    .about-image-container {
      min-height: 550px;
      max-height: 650px;
      border-radius: 16px;
      margin-top: -100px;
      margin-bottom: 2rem;
      overflow: visible;
    }
    
    .about-combined-img {
      top: -135px;
      width: 140%;
      height: 137%;
      left:6%;
      object-fit: cover;
      object-position: center top;
    }
    
    .about-section {
      flex-direction: row;
      align-items: center;
      gap: 3rem;
      margin-bottom: 0;
      min-height: 500px;
      padding-bottom: 1rem;
    }
    
    section#about {
      min-height: 750px !important;
      padding-top: 5rem !important;
      padding-bottom: 5rem !important;
    }
    
    .about-text-section {
      width: 58%;
      flex-shrink: 0;
    }
    
    .about-image-section {
      width: 42%;
      flex-shrink: 0;
    }
    
    section {
      padding-bottom: 0 !important;
      margin-bottom: 0 !important;
    }
  }

  /* 🎯 LARGE DESKTOP (1440px+) */
  @media (min-width: 1440px) {
   .about-combined-img {
    margin-bottom:11rem;
   }
    .about-image-container {
      min-height: 470px;
      margin-top: -180px;
    }
    .about-section {
      gap: 4rem;
      min-height: 500px;
      padding-bottom: 1em;
    }
    
    section#about {
      min-height: 450px !important;
      padding-top: 1rem !important;
      padding-bottom: 1rem !important;
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
      className="bg-white w-full py-0 px-4 sm:px-8 md:px-12 lg:px-20"
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
            <h2 className="text-[#0D4A8D] text-left font-['Red_Hat_Text'] text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6 animate-fade-in-left transition-transform duration-300 hover:scale-105" style={{ animationDelay: '0.4s' }}>
              PharmaRise Innovations LLP
            </h2>

            {/* Subtext with Mr Rajendra Patkar in red */}
            <p className="text-[#0D4A8D] font-['Red_Hat_Text'] text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed mb-6 animate-fade-in-left" style={{ animationDelay: '0.6s' }}>
              Pharmarise Innovations has been founded in 2024 by{" "}
              <span className="text-[#BE2623] font-['Red_Hat_Text'] font-medium">
                Mr Rajendra Patkar
              </span>
              . A pharmacist by qualification and an MBA from Jamnalal Bajaj.
            </p>

            {/* Description */}
            <p className="text-[#0D4A8D] text-justify font-normal leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl mb-6 animate-fade-in-left" style={{ animationDelay: '0.8s' }}>
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
              className="bg-[#0D4A8D] text-white text-sm sm:text-base md:text-lg px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all animate-fade-in-up hover:scale-105 hover:shadow-lg transform inline-block"
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