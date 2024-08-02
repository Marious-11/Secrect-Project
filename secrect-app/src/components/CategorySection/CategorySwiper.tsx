"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import banner from "@/assets/img/product.png";
import Link from "next/link";
function CategorySwiper() {
  return (
    <section>
      <Swiper
        className="my-wipper"
        slidesPerView={"auto"}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
          1420: {
            slidesPerView: 6,
          },
        }}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <SwiperSlide key={item}>
            <Link
              href={"/"}
              className="flex justify-center items-center bg-white rounded-lg flex-col gap-4 hover:bg-slate-100 p-3 transition-all duration-200"
            >
              <Image
                src={banner.src}
                alt=""
                width={100}
                height={100}
                className="w-full h-[150px] object-cover rounded-lg"
              />
              <p>T-Shirt</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default CategorySwiper;
