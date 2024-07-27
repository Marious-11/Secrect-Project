"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import banner from "@/assets/img/banner.png";
function CategorySwiper() {
  return (
    <section>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <SwiperSlide key={item}>
            <div className="flex justify-center items-center bg-white rounded-lg">
              <Image
                src={banner.src}
                alt=""
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default CategorySwiper;
