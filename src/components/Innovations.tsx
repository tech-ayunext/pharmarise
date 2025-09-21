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
        className="absolute text-[60px] font-bold leading-normal tracking-[-1.8px] text-[#0D4A8D] text-center font-['Red_Hat_Text']"
        style={{ left: "122px", right: "942px", height: "79px" }}
      >
        Our Innovations
      </h2>

      <div className="w-full flex justify-center mt-[175px]">
        <Swiper
          initialSlide={0}
          modules={[Navigation, Autoplay]} // ✅ include Autoplay
          slidesPerView={3}
          spaceBetween={50}
          centeredSlides={true}
          navigation
          loop
          autoplay={{
            delay: 2000, // 3 seconds between slides
            disableOnInteraction: false, // keep autoplay after user interaction
          }}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className="flex justify-center items-center">
                  <img
                    src={src}
                    alt={`Product ${index + 1}`}
                    className={`rounded-lg object-contain transition-transform duration-300 w-[313px] h-[219px] ${
                      isActive ? "scale-150" : "scale-100 opacity-50"
                    }`}
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <h3 className="text-[rgba(190,38,35,1)] text-[28px] leading-[50px] self-center mt-[102px] max-md:mt-10">
        Description
      </h3>

      <p className="w-[1331px] h-[211px] text-[22px] font-medium leading-[39px] text-center mx-auto mt-[5px]">
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
