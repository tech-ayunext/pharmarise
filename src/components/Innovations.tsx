import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { useState } from "react";

const Innovations = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const innovationsData = [
    {
      image: "/images/Innovations_1.png",
      description: "A unique natural nutritional supplement for the first time in India containing Garcinia Cambogia with added advantage of Salacia Reticulata as compared to other marketed Garcinia products. Salacia along with Garcinia in GarciBIO offers significant synergistic effects in overweight patients. Multiple pathways of action make GarciBIO the preferred choice for weight reduction. Indian vegetarian population can take it without hesitation as it is available in Veg capsules."
    },
    {
      image: "/images/Innovations_2.png",
      description: "A triple drug therapy containing Metformin, Glimepride, and Voglibose. The advanced formulation enables Biognide GV1 to disintegrate faster as compared to other marketed brands."
    },
    {
      image: "/images/Innovations_3.png",
      description: "CobalFine 6G is a Veg tablet formulation with unique 6G Extract along with the perfect ratio of Curcumin and Piperine which reduces stress and maintains youthfulness."
    },
    {
      image: "/images/Innovations_4.png",
      description: "RosNano is an innovative, first-time-in-India product with Nanoparticle size-based Rosuvastatin formulation stabilized in Cyclodextrin. Since Rosuvastatin is poorly soluble and has low bioavailability, this innovation improves its solubility and stability. The particle size is 2–20 microns compared to 200–400 microns in conventional brands, ensuring 2× better bioavailability, enhanced efficacy, safety, and reduced dosage load."
    },
    {
      image: "/images/Innovations_5.png",
      description: "We are the second company to market a unique combination containing both the bioactive forms of Vitamin B12. The addition of Adenosylcobalamin — the only other bioactive form — makes CobalFine a completely bioactive product. This unique formula quickly became the preferred choice among doctors."
    }
  ];

  return (
    <section
      className="bg-[rgba(217,235,255,1)] flex w-full flex-col items-stretch text-[rgba(13,74,141,1)] font-bold text-center pt-[33px] pb-[122px] max-md:max-w-full max-md:pb-[100px]"
      id="innovations"
    >
      <h2
        className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold leading-normal tracking-[-1.8px] text-[#0D4A8D]
        text-center lg:text-left px-4 sm:px-8 lg:px-0 lg:ml-[122px]"
      >
        Our Innovations
      </h2>

      {/* Simplified Carousel */}
      <div className="w-full flex justify-center mt-[40px] sm:mt-[125px] md:mt-[150px] lg:mt-[55px] px-4 relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          navigation
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={600}
          onSlideChange={(swiper) => {
            // Use a timeout to ensure the slide change is complete before updating text
            setTimeout(() => {
              setActiveIndex(swiper.realIndex);
            }, 100);
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {innovationsData.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className="flex justify-center items-center">
                  <img
                    src={item.image}
                    alt={`Innovation ${index + 1}`}
                    className={`rounded-xl object-contain transition-all duration-500 ease-in-out w-[200px] h-[140px] sm:w-[250px] sm:h-[175px] md:w-[280px] md:h-[196px] lg:w-[313px] lg:h-[219px] ${isActive
                      ? "scale-150 opacity-100 z-10 "
                      : "scale-100 opacity-50 z-0"
                      }`}
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Description Section */}
      <div className="w-full text-center mt-[60px] sm:mt-[80px] md:mt-[90px] lg:mt-[102px] px-4">
        <h3 className="text-[#BE2623] text-[20px] sm:text-[24px] md:text-[26px] lg:text-[28px] leading-[30px] sm:leading-[40px] md:leading-[45px] lg:leading-[50px] font-bold mb-4">
          Description
        </h3>
        <div className="min-h-[200px] flex items-start justify-center">
          <p
            className="text-[#0D4A8D] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-medium leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[39px] max-w-[1331px] mx-auto transition-opacity duration-300"
            style={{ opacity: 1 }}
          >
            {innovationsData[activeIndex]?.description}
          </p>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: #0d4a8d;
          transition: all 0.3s ease;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          color: #BE2623;
          transform: scale(1.1);
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        @media (max-width: 640px) {
          .swiper-slide img.scale-150 {
            transform: scale(1.8) !important;
          }
          .swiper-slide img.scale-100 {
            transform: scale(0.8) !important;
          }
          .swiper-button-prev,
          .swiper-button-next {
            width: 20px !important;
            height: 20px !important;
            margin-top: -10px !important;
          }
          .swiper-button-prev::after,
          .swiper-button-next::after {
            font-size: 12px !important;
            font-weight: bold !important;
          }
        }
        
        @media (min-width: 768px) and (max-width: 1024px) {
          .swiper-slide img.scale-150 {
            transform: scale(2.2) !important;
          }
          .swiper-slide img.scale-100 {
            transform: scale(0.9) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Innovations;