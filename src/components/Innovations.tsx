import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules"; // ✅ Correct for v10+

const Innovations = () => {
  const images = [
    "/images/Product1.png",
    "/images/Product2.png",
    "/images/Product3.png",
    "/images/Product4.png",
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

      <div className="w-full flex justify-center mt-[70px] sm:mt-[125px] md:mt-[150px] lg:mt-[175px] px-4 relative">
        <Swiper
          initialSlide={0}
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          navigation
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
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
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className="flex justify-center items-center">
                  <img
                    src={src}
                    alt={`Product ${index + 1}`}
                    className={`rounded-lg object-contain transition-transform duration-300 w-[200px] h-[140px] sm:w-[250px] sm:h-[175px] md:w-[280px] md:h-[196px] lg:w-[313px] lg:h-[219px] ${
                      isActive ? "scale-150" : "scale-100 opacity-50"
                    }`}
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Add Tailwind classes for small navigation buttons on mobile */}
        <style>{`
          .swiper-button-prev,
          .swiper-button-next {
            color: #0d4a8d; /* button color */
          }
          @media (max-width: 640px) {
            .swiper-button-prev,
            .swiper-button-next {
              width: 20px;
              height: 20px;
              top: 45%; /* vertical center */
            }
            .swiper-button-prev::after,
            .swiper-button-next::after {
              font-size: 14px; /* smaller arrow */
            }
          }
        `}</style>
      </div>

      <h3 className="text-[rgba(190,38,35,1)] text-[20px] sm:text-[24px] md:text-[26px] lg:text-[28px] leading-[30px] sm:leading-[40px] md:leading-[45px] lg:leading-[50px] self-center mt-[60px] sm:mt-[80px] md:mt-[90px] lg:mt-[102px] max-md:mt-10 px-4">
        Description
      </h3>

      <p className="w-full max-w-[1331px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-medium leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[39px] text-center mx-auto mt-[5px] px-4 sm:px-8 lg:px-0">
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
