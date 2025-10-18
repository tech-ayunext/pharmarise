import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules"; // ✅ Correct for v10+

const Innovations = () => {
  const originalImages = [
    "/images/Product1.png",
    "/images/Product2.png",
    "/images/Product3.png",
    "/images/Product4.png",
  ];

  // Duplicate images multiple times for seamless infinite loop
  const images = [...originalImages, ...originalImages, ...originalImages];
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

      <div className="w-full flex justify-center mt-[40px] sm:mt-[125px] md:mt-[150px] lg:mt-[55px] px-4 relative">
        <Swiper
          initialSlide={4} // Start from middle to avoid seeing the beginning
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          navigation
          loop={true}
          loopAdditionalSlides={2}
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={600}
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
          {images.map((src, index) => (
            <SwiperSlide key={`slide-${index}`}>
              {({ isActive }) => (
                <div className="flex justify-center items-center">
                  <img
                    src={src}
                    alt={`Product ${(index % originalImages.length) + 1}`}
                    className={`rounded-lg object-contain transition-all duration-500 ease-in-out w-[200px] h-[140px] sm:w-[250px] sm:h-[175px] md:w-[280px] md:h-[196px] lg:w-[313px] lg:h-[219px] ${isActive
                      ? "scale-150 opacity-100 z-10"
                      : "scale-100 opacity-50 z-0"
                      }`}
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Enhanced styles for infinite loop carousel */}
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
          .swiper-wrapper {
            transition-timing-function: linear;
          }
          .swiper-slide {
            transition: all 0.5s ease-in-out;
          }
          
          /* 🎯 TABLET VIEW - Smaller carousel images */
          @media (min-width: 768px) and (max-width: 1024px) {
            .swiper-slide img {
              width: 180px !important;
              height: 126px !important;
            }
            .swiper-slide img.scale-150 {
              transform: scale(2.2) !important;
            }
            .swiper-slide img.scale-100 {
              transform: scale(0.9) !important;
            }
            .swiper-button-prev,
            .swiper-button-next {
              width: 25px;
              height: 25px;
              top: 50%;
            }
            .swiper-button-prev::after,
            .swiper-button-next::after {
              font-size: 16px;
            }
          }
          
          /* 🎯 SMALL TABLETS (600px - 767px) */
          @media (min-width: 600px) and (max-width: 767px) {
            .swiper-slide img {
              width: 160px !important;
              height: 112px !important;
            }
            .swiper-slide img.scale-150 {
              transform: scale(1.1) !important;
            }
            .swiper-slide img.scale-100 {
              transform: scale(0.8) !important;
            }
            .swiper-button-prev,
            .swiper-button-next {
              width: 22px;
              height: 22px;
              top: 48%;
            }
            .swiper-button-prev::after,
            .swiper-button-next::after {
              font-size: 15px;
            }
          }
          
          @media (max-width: 640px) {
            .swiper-button-prev,
            .swiper-button-next {
              width: 20px;
              height: 20px;
              top: 45%;
            }
            .swiper-button-prev::after,
            .swiper-button-next::after {
              font-size: 14px;
            }
          }
        `}</style>
      </div>

      <h3 className="text-[rgba(190,38,35,1)] text-[20px] sm:text-[24px] md:text-[26px] lg:text-[28px] leading-[30px] sm:leading-[40px] md:leading-[45px] lg:leading-[50px]  mt-[60px] sm:mt-[80px] md:mt-[90px] lg:mt-[102px] max-md:mt-10 px-4">
        Description
      </h3>

      <p className="w-full max-w-[1331px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-medium leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[39px]  mx-auto mt-[5px] px-4 sm:px-8 lg:px-0 mb-[100px]">
        A unique natural nutritional supplement for the first-time in India
        containing Garcinia Cambogia with added advantage of Salacia Reticulata
        as compared to other marketed Garcinia products. Salacia along with
        Garcinia in GarciBIO offers significant synergistic effects in
        overweight patients. Multiple pathways of action make GarciBIO preferred
        choice for weight reduction. Indian vegetarian population can take it
        without any hesitation as it available in Veg capsules.
      </p>
    </section>
  );
};

export default Innovations;
