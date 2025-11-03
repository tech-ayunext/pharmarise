import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// Add custom CSS for animations
const newAboutAnimationStyles = `
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
  
  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
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
  
  .animate-fade-in-scale {
    animation: fadeInScale 0.8s ease-out forwards;
    opacity: 0;
  }

  /* 🎯 REMOVE GAP BETWEEN HEADER AND HERO SECTION - ALL DEVICES */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0 !important;
    padding: 0 !important;
  }
  
  .hero-section {
    margin-top: -2rem !important;
    position: relative;
    z-index: 10;
  }
  
  /* Mobile specific gap removal */
  @media (max-width: 767px) {
    .hero-section {
      margin-top: -1rem !important;
    }
  }
  
  /* Tablet specific gap removal */
  @media (min-width: 768px) and (max-width: 1024px) {
    .hero-section {
      margin-top: -4rem !important;
    }
  }
  
  /* Desktop specific gap removal */
  @media (min-width: 1025px) {
    .hero-section {
      margin-top: 0rem !important;
    }
  }

  /* 🎯 ENHANCED TABLET RESPONSIVENESS (768px - 1024px) */
  
  /* Comprehensive Tablet Support (768px - 1024px) */
  @media (min-width: 768px) and (max-width: 1024px) {
    
    /* === CONTAINER & LAYOUT === */
    .about-container-tablet {
      padding-left: 1.5rem !important;
      padding-right: 1.5rem !important;
      max-width: 100% !important;
    }
    
    /* === HERO SECTION === */
    .about-hero-tablet {
      padding: 3rem 1.5rem !important;
      min-height: 250px !important;
    }
    
    .about-hero-title-tablet {
      font-size: clamp(36px, 5.2vw, 44px) !important;
      line-height: clamp(42px, 5.8vw, 50px) !important;
      margin-bottom: 1rem !important;
    }
    
    /* === MAIN ABOUT SECTION === */
    .about-main-title-tablet {
      font-size: clamp(38px, 4.8vw, 46px) !important;
      line-height: clamp(44px, 5.4vw, 52px) !important;
      margin-bottom: 2rem !important;
    }
    
    .about-main-text-tablet {
      font-size: clamp(18px, 2.6vw, 22px) !important;
      line-height: clamp(26px, 3.4vw, 32px) !important;
      margin-bottom: 1.5rem !important;
    }
    
    /* === IMAGE SECTION === */
    .about-image-container-tablet {
      max-width: 50% !important;
      margin: 0 auto !important;
      padding: 1rem !important;
    }
      .Blue_bg{
       max-width: 85% !important;
        max-height: 70% !important;
      }
    
    .about-person-image-tablet {
      width: 85% !important;
      height: auto !important;
      margin-left: 1rem !important;
    }
    
    .about-badge-tablet {
      width: 140px !important;
      height: 140px !important;
      font-size: 2.5rem !important;
    }
    
    /* === FEATURES GRID === */
    .about-features-tablet {
      gap: 1.5rem !important;
      margin: 2rem 0 !important;
    }
    
    .about-feature-card-tablet {
      padding: 1.5rem 1rem !important;
      min-height: 140px !important;
      font-size: clamp(14px, 2.2vw, 18px) !important;
    }
    
    /* === WHY CHOOSE SECTION === */
    .about-why-choose-title-tablet {
      font-size: clamp(38px, 4.8vw, 46px) !important;
      line-height: clamp(44px, 5.4vw, 52px) !important;
      margin-bottom: 2rem !important;
    }
    
    .about-why-choose-section-tablet {
      padding: 2rem 1rem !important;
      max-width: 95% !important;
      margin: 0 auto !important;
    }
    
    .about-why-choose-card-tablet {
      height: 420px !important;
      padding: 2rem 1.5rem !important;
    }
    
    .about-why-choose-card-title-tablet {
      font-size: clamp(22px, 3.2vw, 28px) !important;
      line-height: clamp(26px, 3.6vw, 32px) !important;
    }
    
    .about-why-choose-card-text-tablet {
      font-size: clamp(16px, 2.4vw, 20px) !important;
      line-height: clamp(22px, 3vw, 26px) !important;
    }
    
    /* === VISION & MISSION SECTION === */
    .about-vision-mission-tablet {
      padding: 3rem 1.5rem !important;
    }
    
    .about-vision-mission-title-tablet {
      font-size: clamp(36px, 4.6vw, 44px) !important;
      line-height: clamp(42px, 5.2vw, 50px) !important;
    }
    
    .about-vision-mission-container-tablet {
      gap: 2rem !important;
      margin-top: 1rem !important;
    }
    
    .about-vision-mission-left-title-tablet {
      margin-bottom: 1rem !important;
      width: 250px !important;
    }
    
    .about-vision-mission-heading-tablet {
      font-size: clamp(32px, 4.2vw, 40px) !important;
      line-height: clamp(38px, 4.8vw, 46px) !important;
      margin-bottom: 1rem !important;
    }
    
    .about-vision-mission-text-tablet {
      font-size: clamp(16px, 2.2vw, 20px) !important;
      line-height: clamp(22px, 2.8vw, 26px) !important;
    }
    
    /* === TABLET PORTRAIT SPECIFIC (768px - 900px) === */
    @media (max-width: 900px) and (orientation: portrait) {
      .about-main-title-tablet {
        font-size: clamp(34px, 4.5vw, 42px) !important;
        line-height: clamp(40px, 5.1vw, 48px) !important;
      }
      
      .about-image-container-tablet {
        max-width: 95% !important;
        padding: 0.5rem !important;
      }
      
      .about-person-image-tablet {
        width: 90% !important;
        margin-left: 0.5rem !important;
      }
      
      .about-why-choose-section-tablet {
        padding: 1.5rem 0.5rem !important;
        max-width: 98% !important;
      }
      
      .about-why-choose-card-tablet {
        height: 380px !important;
        padding: 1.5rem 1rem !important;
      }
    }
    
    /* 🎯 CARD TEXT SIZE REDUCTION FOR TABLETS */
    .about-why-choose-card-title-tablet {
      font-size: clamp(18px, 2.6vw, 24px) !important;
      line-height: clamp(22px, 3vw, 28px) !important;
      margin-bottom: 1rem !important;
      letter-spacing: -0.3px !important;
    }
    
    .about-why-choose-card-text-tablet {
      font-size: clamp(13px, 2vw, 17px) !important;
      line-height: clamp(18px, 2.6vw, 22px) !important;
      letter-spacing: 0.1px !important;
      margin-top: 0.5rem !important;
    }
    
    .about-why-choose-card-icon-tablet {
      width: clamp(55px, 7.5vw, 70px) !important;
      height: clamp(65px, 8.5vw, 80px) !important;
      margin: 0.8rem 0 0.3rem 0 !important;
    }
    
    /* === CARD SPACING ADJUSTMENTS === */
    .about-why-choose-card-content-tablet {
      gap: 0.8rem !important;
      padding: 0.3rem !important;
    }

    /* 🎯 VISION & MISSION GAP REDUCTION FOR TABLETS */
    .about-vision-mission-gap-fix-tablet {
      gap: 1.5rem !important;
      margin-top: -1rem !important;
    }
    
    .about-vision-mission-left-compact-tablet {
      width: 200px !important;
      margin-bottom: 0rem !important;
      margin-right: 1rem !important;
    }
    
    .about-vision-mission-title-compact-tablet {
      font-size: clamp(32px, 4.2vw, 40px) !important;
      line-height: clamp(36px, 4.6vw, 44px) !important;
      margin-bottom: 0rem !important;
    }
    
    .about-vision-mission-content-compact-tablet {
      gap: 1rem !important;
      margin-top: -0.5rem !important;
    }
    
    .about-vision-mission-heading-compact-tablet {
      font-size: clamp(28px, 3.8vw, 36px) !important;
      line-height: clamp(32px, 4.2vw, 40px) !important;
      margin-bottom: 0.8rem !important;
      margin-top: 0rem !important;
    }
    
    .about-vision-mission-text-compact-tablet {
      font-size: clamp(14px, 2vw, 18px) !important;
      line-height: clamp(20px, 2.4vw, 24px) !important;
      margin-top: 0rem !important;
    }
    
    .about-vision-mission-section-compact-tablet {
      padding: 2.5rem 1rem !important;
    }

    /* 🎯 FEATURES GRID OPTIMIZATION FOR TABLETS */
    .about-features-grid-tablet {
      gap: 1rem !important;
      margin-top: 1rem !important;
      padding: 0 0.5rem !important;
    }
    
    .about-features-card-tablet {
      min-height: 120px !important;
      padding: 1rem 0.8rem !important;
      max-width: 100% !important;
      margin: 0 auto !important;
    }
    
    .about-features-icon-tablet {
      width: 2.5rem !important;
      height: 2.5rem !important;
      margin-bottom: 0.5rem !important;
    }
    
    .about-features-text-tablet {
      font-size: clamp(12px, 2vw, 16px) !important;
      line-height: 1.3 !important;
      padding: 0 0.3rem !important;
    }
    
    .about-features-container-tablet {
      padding: 0.5rem 1rem !important;
    }

    /* === TABLET LANDSCAPE SPECIFIC (901px - 1024px) === */
    @media (min-width: 901px) and (orientation: landscape) {
      .about-main-title-tablet {
        font-size: clamp(42px, 5.2vw, 50px) !important;
        line-height: clamp(48px, 5.8vw, 56px) !important;
      }
      
      .about-container-tablet {
        padding-left: 2rem !important;
        padding-right: 2rem !important;
      }
      
      .about-why-choose-section-tablet {
        padding: 2rem 1rem !important;
        max-width: 96% !important;
      }
      
      .about-why-choose-card-tablet {
        height: 440px !important;
        padding: 2.5rem 2rem !important;
      }
      
      .about-vision-mission-tablet {
        padding: 4rem 2rem !important;
      }
      
      .about-vision-mission-container-tablet {
        gap: 3rem !important;
        margin-top: 0.5rem !important;
      }
    }
    
    /* === ANIMATION TIMING === */
    .animate-fade-in-up,
    .animate-fade-in-left,
    .animate-fade-in-right,
    .animate-fade-in-scale {
      animation-duration: 0.7s !important;
    }
  }

  /* Large Tablet Landscape (1024px - 1366px) */
  @media (min-width: 1024px) and (max-width: 1366px) {
    .about-container-large-tablet {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
    .about-title-large-tablet {
      font-size: clamp(38px, 4.5vw, 40px) !important;
    }
    .about-text-large-tablet {
      margin-left: -2rem;
      font-size: clamp(15px, 2vw, 12px) !important;
      letter-spacing: 0.2px;       /* reduce spacing between letters */
      line-height: 1.8;            /* reduce vertical spacing between lines */
    }
    .about-why-choose-card-tablet {
        height: 550px !important;
        padding: 2.5rem 2rem !important;
      }

  }

  /* 14-inch Laptop (1366px - 1440px) */
  @media (min-width: 1366px) and (max-width: 1440px) {
    .about-container-14 {
      padding-left: 3rem;
      padding-right: 3rem;
      max-width: 1280px;
      margin: 0 auto;
    }
    .about-title-14 {
      font-size: clamp(50px, 4vw, 54px) !important;
    }
    .about-text-14 {
      font-size: clamp(18px, 2vw, 18px) !important;
    }
  }

  /* 15-inch Laptop (1440px - 1600px) */
  @media (min-width: 1440px) and (max-width: 1600px) {
    .about-container-15 {
      padding-left: 1rem;
      padding-right: 1rem;
      max-width: 1400px;
      margin: 0 auto;
    }
    .about-title-15 {
      font-size: clamp(42px, 4.2vw, 56px) !important;
    }
    .about-text-15 {
      font-size: clamp(23px, 2.2vw, 25px) !important;
    }
  }

  /* 16+ inch Laptops/Desktops (1600px+) */
  @media (min-width: 1600px) {
    .about-container-16 {
      padding-left: 4rem;
      padding-right: 4rem;
      max-width: 1536px;
      margin: 0 auto;
    }
    .about-title-16 {
      font-size: clamp(55px, 4.5vw, 67px) !important;
    }
    .about-text-16 {
      font-size: clamp(24px, 2.5vw, 30px) !important;
    }
  }

  /* Card Grid Media Queries */
  
  /* Default grid layout */
  .cards-grid {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    max-width: 1300px;
    margin: 0 auto;
  }
  
  .card-item {
    width: 100% !important;
    height: 450px !important;
    padding: 3rem 2rem !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    align-items: center !important;
  }
  
  /* Mobile (up to 640px) - 2 cards per row */
  @media (max-width: 639px) {
    .cards-grid {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, auto);
      gap: 1rem;
    }
    .card-item {
      width: 100% !important;
      height: 360px !important;
      padding: 1rem !important;
      display: flex !important;
      flex-direction: column !important;
      justify-content: space-between !important;
      align-items: center !important;
    }
    
    /* Reduce margin-top for card icons in mobile */
    .about-why-choose-card-icon-tablet {
      margin-top: 0.5rem !important;
      margin-bottom: -0.5rem !important;
    }
    
    /* Reduce margin-top for card titles in mobile */
    .about-why-choose-card-title-tablet {
      margin-top: 0 !important;
      margin-bottom: 0.5rem !important;
    }
  }

  /* Small tablets (640px - 768px) - 2 columns, 2 rows (vertical layout) */
  @media (min-width: 640px) and (max-width: 767px) {
    .cards-grid {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, auto);
      gap: 1.875rem;
    }
    .card-item {
      width: 100% !important;
      height: 390px !important;
      padding: 1.5rem !important;
    }
  }

  /* Medium tablets (768px - 1024px) - 2 columns, 2 rows (vertical layout) */
  @media (min-width: 768px) and (max-width: 1023px) {
    .cards-grid {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, auto);
      gap: 2rem;
    }
    .card-item {
      width: 100% !important;
      height: 400px !important;
      padding: 2rem 1.5rem !important;
    }
  }

  /* Laptops (1024px - 1366px) - 4 cards in single row (HORIZONTAL LAYOUT) */
  @media (min-width: 1024px) and (max-width: 1366px) {
    .cards-grid {
      display: grid !important;
      grid-template-columns: repeat(4, 1fr) !important;
      grid-template-rows: 1fr !important;
      gap: 1.5rem !important;
      max-width: 1250px !important;
      margin: 0 auto !important;
    }
    .card-item {
      width: 100% !important;
      height: 430px !important;
      padding: 2.2rem 1.7rem !important;
    }
  }
@media (max-width: 1024px) {
  /* Ensure the image container centers its content vertically */
  .about-image-container-tablet {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 0.5rem !important;
    min-height: 40px !important; /* slightly smaller than desktop */
    position: relative !important;
    overflow: visible !important;
  }

  /* Blue background (Blue_back.svg) behaviour on tablets:
     - keep it covering the area but don't push content off-screen
     - position slightly to the right so badge/shape remains visible */
  .about-bg-img,
  .about-bg-img-large-tablet {
    position: absolute !important;
    top: 0 !important;
    right: -12% !important;        /* pull background a bit off to right */
    left: auto !important;
    width: 130% !important;        /* extra width for visual shape without overflow */
    height: auto !important;       /* allow natural height */
    max-height: calc(100% + 60px) !important; /* allow some overflow for decorative shape */
    object-fit: cover !important;
    transform: translateY(0) !important;
    z-index: 1 !important;
  }

  /* Person image sizing and centering on tablets:
     - moderate scaling (no huge scale)
     - centered vertically and horizontally inside image container
     - prevent huge margin-left that was pushing off-screen */
  .about-person-img,
  .about-person-img-large-tablet {
    position: relative !important;
    z-index: 2 !important;
    width: 80% !important;            /* responsive width on tablet */
    max-width: 420px !important;      /* cap width so it doesn't get too big */
    height: auto !important;
    margin: 0 auto !important;        /* center horizontally */
    margin-top: -10px !important;     /* small upward lift for overlap */
    transform: translateX(0) scale(1) !important; /* reset previous transforms */
    left: auto !important;
    right: auto !important;
  }

  /* If you want slightly different placement for landscape tablets,
     keep it subtle so layout remains stable */
  @media (min-width: 900px) and (max-width: 1024px) and (orientation: landscape) {
    .about-bg-img,
    .about-bg-img-large-tablet {
      right: -16% !important;
      top:1%!important;
      width: 150% !important;
      transform: translateX(28%) scale(1.8) !important;
      margin-bottom:5rem!important;
    }
    .about-person-img,
    .about-person-img-large-tablet {
      width: 58% !important;
      max-width: 560px !important;
      margin-top:6px !important;
      transform: translateX(99%) scale(3.2) !important;
      margin-bottom:8.4rem!important;
    }
  }
}

/* ------------------------------
   SMALL TABLETS / LARGE PHONES
   Target: <= 768px (do not break existing mobile rules)
   ------------------------------ */
@media (max-width: 768px) {
  /* keep the mobile-friendly behavior: image contained and smaller */
  .about-image-container-tablet {
    min-height: 330px !important;
    padding: 0.5rem !important;
    display: block !important; /* revert to default flow for small devices */
  }

  .about-bg-img,
  .about-bg-img-large-tablet {
    position: absolute !important;
    top: 0 !important;
    right: -6% !important;
    left: auto !important;
    width: 115% !important;
    height: auto !important;
    max-height: calc(100% + 40px) !important;
    object-fit: contain !important; /* keep artwork visible without cropping */
    transform: none !important;
    z-index: 0 !important;
  }

  .about-person-img,
  .about-person-img-large-tablet {
    width: 112% !important;
    max-width: 320px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    margin-top: -8px !important;
    transform: none !important;
    scale: 1 !important;
    z-index: 2 !important;
    position: relative !important;
  }
}
  /* Large Laptops (1366px - 1536px) - 4 cards in single row (HORIZONTAL LAYOUT) */
  @media (min-width: 1366px) and (max-width: 1535px) {
    .cards-grid {
      display: grid !important;
      grid-template-columns: repeat(4, 1fr) !important;
      grid-template-rows: 1fr !important;
      gap: 2rem !important;
      max-width: 1250px !important;
      margin: 0 auto !important;
    }
    .card-item {
      width: 100% !important;
      height: 450px !important;
      padding: 2.7rem 1.9rem !important;
    }
  }

  /* Extra Large Desktops (1536px+) - 4 cards per row (horizontal layout) */
  @media (min-width: 1536px) {
    .cards-grid {
      display: grid !important;
      grid-template-columns: repeat(4, 1fr) !important;
      grid-template-rows: 1fr !important;
      gap: 3.375rem !important;
      max-width: 1450px !important;
      margin: 0 auto !important;
    }
    .card-item {
      width: 100% !important;
      height: 480px !important;
      padding: 3.5rem 2rem !important;
    }
  }
@media (min-width: 1440px) and (max-width: 1600px) {
  .about-text-15 {
    font-size: 22px !important;
    line-height: 36px !important;
    
  }
  .about-container-15 img {
    max-width: 850px !important;
  }
}

/* 🎯 CLEAN RESPONSIVE IMAGE STYLES */

/* Base container styles */
.about-image-container {
  position: relative;
  z-index: 15;
  width: 100%;
  max-width: 545px;
  margin: 0 auto;
  overflow: visible;
  flex-shrink: 0;
}

/* 🎯 UNIVERSAL ANTI-OVERLAP RULES */
@media (min-width: 768px) {
  .about-image-container {
    margin-right: 2rem !important;
    flex-shrink: 0 !important;
  }
  
  .about-text-large-tablet {
    margin-left: 1rem !important;
    padding-left: 1rem !important;
    flex: 1 !important;
    min-width: 0 !important;
    word-wrap: break-word !important;
    overflow-wrap: break-word !important;
  }
}

/* Base image styles */
.about-responsive-image {
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
  transition: transform 0.3s ease;
}

.about-responsive-image:hover {
  transform: scale(1.05);
}

/* 📱 MOBILE (≤640px) */
@media (max-width: 640px) {
  .about-image-container {
    max-width: 100%;
    margin: 0 auto;
    margin-bottom: 0rem !important;
    padding: 1rem;
    position: relative;
    z-index: 1;
  }
  
  .about-responsive-image {
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
    display: block;
    position: relative;
  }
  
  /* Force text section to stay below image */
  .about-text-large-tablet {
    margin-top: 0rem !important;
    padding-top: 0.5rem !important;
    position: relative;
    z-index: 2;
  }
}

/* 💻 TABLET (641px - 1024px) */
@media (min-width: 641px) and (max-width: 1024px) {
  .about-image-container {
    max-width: 450px;
    margin: 0 auto;
    margin-bottom: 3rem;
    padding: 1rem;
    position: relative;
  }
  
  .about-responsive-image {
    width: 100%;
    max-width: 380px;
    margin: 0 auto;
    display: block;
    position: relative;
  }
  
  /* Ensure text section has proper spacing on tablets */
  .about-text-large-tablet {
    margin-top: 1.5rem !important;
    padding-left: 1.5rem !important;
  }
}

/* 🖥️ LAPTOP/DESKTOP (1025px - 1366px) */
@media (min-width: 1025px) and (max-width: 1366px) {
  .about-image-container {
    max-width: 450px;
    margin: 0;
    margin-right: 2rem;
    padding: 1rem;
    flex-shrink: 0;
    position: relative;
  }
  
  .about-responsive-image {
    width: 100%;
    max-width: 420px;
    position: relative;
  }
  
  /* Ensure text section has proper spacing and never overlaps */
  .about-text-large-tablet {
    margin-left: 1rem !important;
    padding-left: 1rem !important;
    flex: 1;
    min-width: 0;
  }
}

/* 🖥️ SPECIFIC FIX FOR 1366×768 RESOLUTION */
@media (min-width: 1366px) and (max-width: 1366px) and (min-height: 768px) and (max-height: 768px) {
  .about-image-container {
    max-width: 400px;
    margin: 0;
    margin-right: 3rem;
    padding: 0.5rem;
    flex-shrink: 0;
  }
  
  .about-responsive-image {
    width: 100%;
    max-width: 380px;
  }
  
  .about-text-large-tablet {
    margin-left: 2rem !important;
    padding-left: 1.5rem !important;
    flex: 1;
    min-width: 0;
    overflow: hidden;
  }
  
  /* FeaturesGrid optimizations for 1366x768 */
  .about-features-container-tablet {
    padding: 0 8px !important;
    margin-top: -8px !important;
  }
  
  .about-features-grid-tablet {
    gap: 8px !important;
    grid-template-columns: repeat(4, 1fr) !important;
    justify-items: center !important;
  }
  
  .about-features-card-tablet {
    min-height: 90px !important;
    max-height: 90px !important;
    padding: 8px 6px !important;
    max-width: 180px !important;
    width: 180px !important;
  }
  
  .about-features-icon-tablet {
    width: 16px !important;
    height: 16px !important;
    margin-bottom: 3px !important;
  }
  
  .about-features-text-tablet {
    font-size: 8px !important;
    line-height: 0.9 !important;
    padding: 0 1px !important;
    font-weight: 700 !important;
  }
}

/* 🖥️ LARGE DESKTOP (1367px+) */
@media (min-width: 1367px) {
  .about-image-container {
    max-width: 545px;
    margin: 0 auto;
    padding: 1rem;
  }
  
  .about-responsive-image {
    width: 100%;
    max-width: 545px;
  }
}

  
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = newAboutAnimationStyles;
  document.head.appendChild(styleSheet);
}

// Component 1: Hero Section
const Hero: React.FC = () => {
  return (
    <div className="relative -mt-8 bg-[#0d4a8d] py-8 sm:py-12 md:py-20 about-hero-tablet hero-section" style={{ backgroundImage: "url('/images/newaboutus.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d4a8d]/100 from-25% to-[#0d4a8d]/25"></div>
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 about-hero-title-tablet animate-fade-in transform transition-all duration-700 hover:scale-105">
          About
        </h1>
      </div>
    </div>


  );
};

const FeaturesGrid: React.FC = () => {
  const features = [
    "Branded Pharmaceuticals",
    "Nutraceuticals",
    "Strategic Marketing",
    "Global Standard Products",
  ];
  const CheckmarkIcon = () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 13L9 17L19 7"
        stroke="#0D4A8D"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div className="w-full px-0 sm:px-2 md:px-3 lg:px-4 xl:px-6 2xl:px-1 about-features-container-tablet">

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 
                  gap-3 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-3
                  mt-0 sm:mt-8 md:mt-1
                  w-full mx-auto about-features-grid-tablet">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card bg-[#0D4A8D] rounded-xl flex flex-col items-center justify-center text-center 
                   p-4 sm:p-5 md:p-6 lg:p-6 xl:p-6 2xl:p-6
                   min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[180px] xl:min-h-[180px] 2xl:min-h-[180px]
                   animate-fade-in-up transition-transform duration-300 hover:scale-105 hover:shadow-lg
                   w-full max-w-[450px] sm:max-w-[420px] md:max-w-[450px] lg:max-w-[480px] xl:max-w-[200px] 2xl:max-w-[220px]
                   about-features-card-tablet"
            style={{ animationDelay: `${1.2 + index * 0.1}s` }}
          >
            <div className="bg-white w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-10 xl:h-10
                        rounded-full flex items-center justify-center 
                        mb-2 sm:mb-3 md:mb-3 lg:mb-3 xl:mb-2
                        about-features-icon-tablet
                        transition-transform duration-300 hover:scale-110">
              <CheckmarkIcon />
            </div>

            <h3 className="text-white font-semibold leading-tight
                       text-xs sm:text-sm md:text-base lg:text-base xl:text-sm 2xl:text-base
                       px-2 about-features-text-tablet">
              {feature}
            </h3>
          </div>
        ))}
      </div>
    </div>

  );
};

const AboutSection: React.FC = () => {
  return (
    <section className="pt-[20px] sm:pt-[30px] md:pt-[50px] pb-0 px-[43px] max-md:pt-8 max-md:pb-0 max-md:px-5 max-sm:pt-[15px] max-sm:pb-0 max-sm:px-[15px]
                        about-container-tablet about-container-large-tablet about-container-14 about-container-15 about-container-16">
      <h2
        className="text-[#0D4A8D] text-[55px] font-bold tracking-[-1.65px] max-w-[1221px]   
                     max-md:text-[42px] max-md:mb-[40px] max-sm:text-[28px] max-sm:mb-[30px] 
                     about-main-title-tablet about-title-large-tablet about-title-14 about-title-15 about-title-16
                     animate-fade-in-left transition-transform duration-300 hover:scale-105"
        style={{ animationDelay: '0.2s' }}
      >
        We'll Ensure You Always Get Best Results.
      </h2>

      <div className="flex gap-[25px] items-start max-md:flex-col max-md:gap-10 max-sm:gap-[30px] min-h-0 overflow-hidden">
        {/* Image Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 about-image-container animate-fade-in-left" style={{ animationDelay: '0.4s' }}>
          <img
            src="/images/New_about.png"
            alt="PharmaRise Team"
            className="about-responsive-image"
          />
        </div>

        {/* Text Section - Moved more to the left with increased width */}
        <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col justify-center pt-20 max-md:pt-8 max-sm:pt-4 about-text-large-tablet pb-10 -ml-4">
          <p
            className="text-[#0D4A8D] text-justify text-[25px] font-normal leading-[39.75px] mb-5 
                max-md:text-[20px] max-sm:text-base 
                about-text-tablet about-text-large-tablet about-text-14 about-text-15 about-text-16
                animate-fade-in-right"
            style={{ animationDelay: '0.6s' }}
          >
            Pharmarise Innovations has been founded in 2024 by Mr Rajendra
            Patkar. A pharmacist by qualification and an MBA from Jamnalal
            Bajaj. He has launched many innovative products and has headed top
            pharma companies like Wockhardt, Jb Chemicals, & RPG where, he led
            major brand innovations. He has a vision to deliver innovative
            brands that lead to better patient outcomes. Many of the brands are
            first time in India showing that small companies can deliver big
            Innovations. We always keep in mind the better patient outcomes in
            all our Innovations.
          </p>
          <FeaturesGrid />
        </div>
      </div>
    </section>
  );
};

// Component 4: Why Choose Us Section
interface ChoiceCard {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  borderColor: string;
}

const WhyChooseSection: React.FC = () => {
  const choiceCards: ChoiceCard[] = [
    {
      title: "High Quality Products",
      description: "We work alongside trusted pharmaceutical producers.",
      bgColor: "bg-[#0D4A8D]",
      borderColor: "border-r-[#009ACD] border-b-[#009ACD]",
      icon: '<svg width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-icon" style="width: 87px; height: 87px; margin-bottom: 40px"> <path d="M48.2126 29.3987L52.9976 38.9687C53.6501 40.2737 55.3901 41.5787 56.8401 41.7962L65.5039 43.2461C71.0501 44.1886 72.3551 48.1762 68.3676 52.1637L61.6251 58.9062C60.5014 60.0299 59.8488 62.2412 60.2113 63.8362L62.1327 72.2099C63.6552 78.8074 60.1389 81.3812 54.3027 77.9374L46.1826 73.1162C44.6963 72.2462 42.3039 72.2462 40.8177 73.1162L32.6976 77.9374C26.8613 81.3812 23.3451 78.8074 24.8676 72.2099L26.7889 63.8362C27.1514 62.2774 26.4989 60.0662 25.3751 58.9062L18.6327 52.1637C14.6452 48.1762 15.9501 44.1524 21.4963 43.2461L30.1601 41.7962C31.6101 41.5424 33.3501 40.2737 34.0026 38.9687L38.7877 29.3987C41.3614 24.2149 45.6388 24.2149 48.2126 29.3987Z" stroke="white" stroke-width="5.4375" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21.75 32.625V7.25" stroke="white" stroke-width="5.4375" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M65.25 32.625V7.25" stroke="white" stroke-width="5.4375" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M43.5 14.5V7.25" stroke="white" stroke-width="5.4375" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
    },
    {
      title: "Innovative Solutions",
      description:
        "Cutting-edge medical solutions for modern healthcare needs.",
      bgColor: "bg-[#009ACD]",
      borderColor: "border-r-[#0D4A8D] border-b-[#0D4A8D]",
      icon: '<svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-icon" style="width: 87px; height: 87px; margin-bottom: 40px"> <path d="M18.5068 79.6608C15.8243 79.6608 13.178 78.6458 11.148 76.6158C9.19053 74.6583 8.10303 72.0483 8.10303 69.257C8.10303 66.4658 9.19053 63.8558 11.148 61.8983L58.273 14.7733C62.333 10.7133 68.9305 10.7133 72.9905 14.7733C74.948 16.7308 76.0355 19.3408 76.0355 22.132C76.0355 24.9233 74.948 27.5333 72.9905 29.4908L25.8655 76.6158C23.8355 78.6458 21.1893 79.6608 18.5068 79.6608ZM65.6318 17.1658C64.363 17.1658 63.0943 17.637 62.1155 18.6158L14.9905 65.7408C14.048 66.6833 13.5405 67.9158 13.5405 69.257C13.5405 70.5983 14.048 71.8308 14.9905 72.7733C16.9118 74.6945 20.1018 74.6945 22.023 72.7733L69.148 25.6483C70.0905 24.7058 70.598 23.4733 70.598 22.132C70.598 20.7908 70.0905 19.5583 69.148 18.6158C68.1693 17.637 66.9005 17.1658 65.6318 17.1658Z" fill="white"></path> <path d="M65.6682 35.6895C64.9794 35.6895 64.2907 35.4358 63.7469 34.892L52.8719 24.017C51.8207 22.9658 51.8207 21.2258 52.8719 20.1745C53.9232 19.1233 55.6632 19.1233 56.7144 20.1745L67.5894 31.0495C68.6407 32.1008 68.6407 33.8408 67.5894 34.892C67.0457 35.4358 66.3569 35.6895 65.6682 35.6895Z" fill="white"></path> <path d="M36.6319 20.3195C36.4506 20.3195 36.3056 20.2833 36.1244 20.247L31.1944 18.797L26.2644 20.247C25.6119 20.4283 24.9232 20.247 24.4882 19.7758C24.0169 19.3045 23.8357 18.652 24.0169 17.9995L25.4669 13.0695L24.0169 8.13952C23.8357 7.48702 24.0169 6.79827 24.4882 6.36327C24.9594 5.89202 25.6481 5.71077 26.2644 5.89202L31.1944 7.34202L36.1244 5.89202C36.7769 5.71077 37.4294 5.89202 37.9007 6.36327C38.3719 6.83452 38.5531 7.52327 38.3719 8.13952L36.9219 13.0695L38.3719 17.9995C38.5531 18.652 38.3719 19.3408 37.9007 19.7758C37.5744 20.1383 37.1031 20.3195 36.6319 20.3195ZM31.1944 15.0995C31.3756 15.0995 31.5207 15.1358 31.7019 15.172L33.9494 15.8245L33.2969 13.577C33.1881 13.2508 33.1881 12.8883 33.2969 12.562L33.9494 10.3145L31.7019 10.967C31.3757 11.0758 31.0131 11.0758 30.6869 10.967L28.4394 10.3145L29.0919 12.562C29.2007 12.8883 29.2007 13.2508 29.0919 13.577L28.4394 15.8245L30.6869 15.172C30.8681 15.1358 31.0131 15.0995 31.1944 15.0995Z" fill="white"></path> <path d="M22.1319 42.0695C21.9506 42.0695 21.8056 42.0333 21.6244 41.997L16.6944 40.547L11.7644 41.997C11.1119 42.1783 10.4594 41.997 9.98815 41.5258C9.5169 41.0545 9.33565 40.3658 9.5169 39.7495L10.9669 34.8195L9.5169 29.8895C9.33565 29.237 9.5169 28.5483 9.98815 28.1133C10.4594 27.6783 11.1482 27.4608 11.7644 27.642L16.6944 29.092L21.6244 27.642C22.2407 27.4608 22.9294 27.642 23.4006 28.1133C23.8719 28.5845 24.0531 29.2733 23.8719 29.8895L22.4219 34.8195L23.8719 39.7495C24.0531 40.402 23.8719 41.0908 23.4006 41.5258C23.0744 41.8883 22.6031 42.0695 22.1319 42.0695ZM16.6944 36.8495C16.8756 36.8495 17.0206 36.8858 17.2019 36.922L19.4494 37.5745L18.7969 35.327C18.6881 35.0008 18.6881 34.6383 18.7969 34.312L19.4494 32.0645L17.2019 32.717C16.8756 32.8258 16.5132 32.8258 16.1869 32.717L13.9394 32.0645L14.5919 34.312C14.7007 34.6383 14.7007 35.0008 14.5919 35.327L13.9394 37.5745L16.1869 36.922C16.3682 36.8858 16.5131 36.8495 16.6944 36.8495Z" fill="white"></path> <path d="M76.5069 60.1944C76.3256 60.1944 76.1806 60.1581 75.9994 60.1219L71.0694 58.6719L66.1394 60.1219C65.4869 60.3031 64.8344 60.1219 64.3631 59.6506C63.8919 59.1794 63.7107 58.4906 63.8919 57.8744L65.3419 52.9444L63.8919 48.0144C63.7107 47.3619 63.8919 46.6731 64.3631 46.2381C64.8344 45.8031 65.5231 45.5857 66.1394 45.7669L71.0694 47.2169L75.9994 45.7669C76.6157 45.5857 77.3044 45.7669 77.7756 46.2381C78.2469 46.7094 78.4281 47.3982 78.2469 48.0144L76.7969 52.9444L78.2469 57.8744C78.4281 58.5269 78.2469 59.2156 77.7756 59.6506C77.4494 60.0131 76.9781 60.1944 76.5069 60.1944ZM71.0694 54.9744C71.2506 54.9744 71.3956 55.0106 71.5769 55.0469L73.8244 55.6994L73.1719 53.4519C73.0631 53.1256 73.0631 52.7631 73.1719 52.4369L73.8244 50.1894L71.5769 50.8419C71.2506 50.9506 70.8882 50.9506 70.5619 50.8419L68.3144 50.1894L68.9669 52.4369C69.0756 52.7631 69.0756 53.1256 68.9669 53.4519L68.3144 55.6994L70.5619 55.0469C70.7432 55.0106 70.8881 54.9744 71.0694 54.9744Z" fill="white"></path> </svg>',
    },
    {
      title: "Professional Learning Solution",
      description:
        "We provide training to keep healthcare professionals skilled & updated.",
      bgColor: "bg-[#0D4A8D]",
      borderColor: "border-r-[#009ACD] border-b-[#009ACD]",
      icon: '<svg width="85" height="94" viewBox="0 0 85 94" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-icon" style="width: 87px; height: 87px; margin-bottom: 40px"> <path d="M68.2909 76.5396H64.9829C61.5007 76.5396 58.1926 77.889 55.7551 80.3265L48.312 87.6828C44.9169 91.0344 39.3889 91.0344 35.9938 87.6828L28.5506 80.3265C26.1131 77.889 22.7616 76.5396 19.3229 76.5396H16.0584C8.83288 76.5396 3.00024 70.7507 3.00024 63.6122V16.124C3.00024 8.98551 8.83288 3.19653 16.0584 3.19653H68.2909C75.5164 3.19653 81.3491 8.98551 81.3491 16.124V63.6122C81.3491 70.7071 75.5164 76.5396 68.2909 76.5396Z" stroke="white" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20.4097 34.3168C20.4097 30.2688 23.7177 26.9604 27.7658 26.9604C31.8138 26.9604 35.1219 30.2688 35.1219 34.3168C35.1219 42.4999 23.5001 43.3704 20.932 51.1618C20.4096 52.7723 21.759 54.3828 23.4566 54.3828H35.1219" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M59.7591 54.3395V29.4856C59.7591 28.3539 59.0192 27.3526 57.931 27.0479C56.8428 26.7432 55.6676 27.1785 55.0583 28.136C51.9243 33.1852 48.5291 38.9308 45.5693 43.98C45.0905 44.807 45.0905 45.8952 45.5693 46.7222C46.0481 47.5492 46.9622 48.0713 47.9633 48.0713H63.9378" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
    },
    {
      title: "Expert\nMarketing",
      description:
        "Strategic marketing initiatives for enhanced brand visibility.",
      bgColor: "bg-[#009ACD]",
      borderColor: "border-r-[#0D4A8D] border-b-[#0D4A8D]",
      icon: '<svg width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-icon" style="width: 87px; height: 87px; margin-bottom: 40px"> <path d="M65.7586 78.3725C62.5686 79.315 58.7987 79.75 54.3762 79.75H32.6262C28.2037 79.75 24.4337 79.315 21.2437 78.3725C22.0412 68.9475 31.7199 61.5161 43.5012 61.5161C55.2824 61.5161 64.9611 68.9475 65.7586 78.3725Z" stroke="white" stroke-width="5.4375" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M54.375 7.25H32.625C14.5 7.25 7.25 14.5 7.25 32.625V54.375C7.25 68.0775 11.3825 75.5812 21.2425 78.3725C22.04 68.9475 31.7188 61.5161 43.5 61.5161C55.2812 61.5161 64.96 68.9475 65.7575 78.3725C75.6175 75.5812 79.75 68.0775 79.75 54.375V32.625C79.75 14.5 72.5 7.25 54.375 7.25ZM43.5 51.3662C36.3225 51.3662 30.5225 45.5301 30.5225 38.3526C30.5225 31.1751 36.3225 25.375 43.5 25.375C50.6775 25.375 56.4775 31.1751 56.4775 38.3526C56.4775 45.5301 50.6775 51.3662 43.5 51.3662Z" stroke="white" stroke-width="5.4375" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M56.4772 38.3526C56.4772 45.5301 50.6772 51.3662 43.4997 51.3662C36.3222 51.3662 30.5222 45.5301 30.5222 38.3526C30.5222 31.1751 36.3222 25.375 43.4997 25.375C50.6772 25.375 56.4772 31.1751 56.4772 38.3526Z" stroke="white" stroke-width="5.4375" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
    },
  ];

  return (
    <section className="bg-[#D9EBFF] mt-[20px] sm:mt-[30px] md:mt-[50px] py-[40px] sm:py-[60px] md:py-[102px] max-md:py-20 max-sm:py-[20px]">
      <div className="px-[43px] max-md:px-5 max-sm:px-[15px] about-why-choose-section-tablet pb-10">
        {/* Section Heading */}
        <h2 className="text-[#0D4A8D] text-[55px] font-semibold tracking-[-1.65px] mb-[22px] 
                   max-md:text-[42px] max-md:mb-20 
                   max-sm:text-[28px] max-sm:mb-10 
                   about-why-choose-title-tablet about-title-large-tablet about-title-14 about-title-15 about-title-16
                   animate-fade-in-up transition-transform duration-300 hover:scale-105"
          style={{ animationDelay: '0.2s' }}>
          Why Choose PharmaRise
        </h2>

        {/* Cards Grid */}
        <div className="cards-grid">
          {choiceCards.map((card, index) => (
            <article
              key={index}
              className={`card-item about-why-choose-card-tablet relative flex flex-col items-center text-center 
                      ${card.bgColor} rounded-[21px_0] 
                      border-r-[7px] border-b-[7px] border-solid ${card.borderColor} 
                      animate-fade-in-scale transition-transform duration-300 hover:scale-105 hover:shadow-xl
                      w-full h-[450px] p-8`}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              {/* Content Wrapper */}
              <div className="flex flex-col items-center max-sm:gap-5 gap-6 about-why-choose-card-content-tablet">
                {/* Card Heading */}
                <h3 className="text-[#FFF] text-center 
                           text-[30.447px] font-semibold leading-[39.949px] 
                           tracking-[-1.063px] whitespace-pre-line 
                           max-md:text-[28px] 
                           max-sm:text-lg about-why-choose-card-title-tablet">
                  {card.title}
                </h3>

                {/* Card Icon */}
                <div
                  className="flex justify-center items-center 
                         w-[78px] h-[87px] shrink-0 aspect-[78.35/87] 
                         max-sm:w-[50px] max-sm:h-[55px] mt-6 mb-[-15px] about-why-choose-card-icon-tablet transition-transform duration-300 hover:scale-110"
                  dangerouslySetInnerHTML={{ __html: card.icon }}
                />

                {/* Card Description */}
                <p className="text-[#FFF] text-center 
                          text-[23.81px] font-normal leading-[26.833px] 
                          tracking-[-0.714px] 
                          max-md:text-[20px] max-sm:text-sm max-sm:leading-snug about-why-choose-card-text-tablet">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Component 5: Vision & Mission Section
const VisionMissionSection: React.FC = () => {
  return (
    <section className="relative bg-[#009ACD] py-[40px] sm:py-[60px] md:py-[97px] max-md:py-[40px] max-sm:py-8 about-vision-mission-tablet about-vision-mission-section-compact-tablet">
      <div className="px-[78px] max-md:px-5 max-sm:px-[15px] pb-10">
        {/* Desktop: three columns (left title rail, vision, mission with divider). Mobile/Tablet: stacked */}
        <div className="flex items-center gap-16 max-lg:gap-10 max-md:flex-col about-vision-mission-container-tablet about-vision-mission-gap-fix-tablet">
          {/* Left title rail */}
          <div className="shrink-0 w-[300px] max-md:w-full max-md:mb-8 about-vision-mission-left-title-tablet about-vision-mission-left-compact-tablet flex flex-col justify-center self-center animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            {/* Desktop stacked */}
            <div className="hidden max-md:block text-white font-bold tracking-[-2.01px] leading-tight text-[40px] text-center transition-transform duration-300 hover:scale-105">
              Our Vision & Mission
            </div>
            {/* Desktop stacked */}
            <div className="text-white font-bold tracking-[-2.01px] leading-tight text-[67px] max-lg:text-5xl max-md:hidden about-vision-mission-title-tablet about-vision-mission-title-compact-tablet transition-transform duration-300 hover:scale-105">
              <div>Our</div>
              <div>Vision &</div>
              <div>Mission</div>
            </div>
          </div>

          {/* Right content area: Vision | Mission */}
          <div className="flex-1 flex items-start gap-16 max-lg:gap-10 max-sm:gap-6 max-md:flex-col about-vision-mission-content-compact-tablet">
            {/* Vision */}
            <article className="flex-1 min-w-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3
                className="text-white text-[55px] font-semibold tracking-[-1.65px] mb-[30px] 
                             max-lg:text-[42px] max-md:mb-5 max-sm:text-[32px] max-sm:mb-[15px] about-vision-mission-heading-tablet about-vision-mission-heading-compact-tablet transition-transform duration-300 hover:scale-105"
              >
                Vision
              </h3>
              <p
                className="text-white text-left text-[22px] font-normal tracking-tight leading-[1.4]
                            max-lg:text-lg max-sm:text-base about-vision-mission-text-tablet about-vision-mission-text-compact-tablet"

              >
                Our vision is to be trusted by healthcare professionals by collaborating with renowned pharmaceutical manufacturers, promoting products that meet global standards, and driving sustainable growth through ethical marketing and regulatory compliance.
              </p>
            </article>

            {/* Divider */}
            <div className="hidden max-md:block h-px w-full bg-white/50" />
            <div className="w-px bg-white/50 self-stretch max-md:hidden" />

            {/* Mission */}
            <article className="flex-1 min-w-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <h3
                className="text-white text-[55px] font-semibold  tracking-[-1.65px] mb-[30px] 
                             max-lg:text-[42px] max-md:mb-5 max-sm:text-[32px] max-sm:mb-[15px] about-vision-mission-heading-tablet about-vision-mission-heading-compact-tablet transition-transform duration-300 hover:scale-105"
              >
                Mission
              </h3>
              <p
                className="text-white text-left text-[22px] font-normal tracking-[-0.9px] leading-[1.4]
                            max-lg:text-lg max-sm:text-base about-vision-mission-text-tablet about-vision-mission-text-compact-tablet"
              >
                PharmaRise Innovations LLP is dedicated to bridging healthcare gaps by delivering high-quality pharmaceutical products to providers. We ensure innovation, reliability, & accessibility, bringing advanced medical solutions efficiently to healthcare professionals and patients.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Page Component that combines all sections
const NewAboutPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="pt-[120px]">
        <Hero />
        <AboutSection />
        <WhyChooseSection />
        <VisionMissionSection />
      </main>
      <Footer />
    </div>
  );
};

export default NewAboutPage;