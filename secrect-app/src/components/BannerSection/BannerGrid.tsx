"use client";
import Image from "next/image";
import React from "react";
import product from "@/assets/img/product.png";
import { Button } from "../ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
interface IProps {
  cols?: 2 | 3 | 4 | number;
}
function BannerGrid({ cols = 2 }: IProps) {
  return (
    <>
      {cols == 2 && (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div className="">
            <Image
              src={product.src}
              alt=""
              width={500}
              height={300}
              className="w-full h-[500px] rounded-lg hover:scale-105 transition-all duration-300 object-cover"
            />
          </div>
          <div className="px-5 flex flex-col gap-5 lg:gap-10">
            <p className="text-[24px] font-semibold lg:text-[32px]">
              Áo thun hình mèo be size L
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              blanditiis ullam voluptate architecto velit a hic odio odit!
              Maiores tempora veniam a quis amet quia, tenetur laborum
              asperiores aliquid neque.
            </p>
            <Button className="w-[200px]">Xem Thêm</Button>
          </div>
        </section>
      )}

      {cols !== 2 && (
        <Swiper
          loop
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          slidesPerView={1}
          spaceBetween={10}
          className="mySwiper h-[300px] object-cover "
          breakpoints={{
            560: {
              slidesPerView: 2,
            },
            1024: { slidesPerView: cols },
          }}
        >
          <SwiperSlide>
            <Image src={product.src} alt="" width={500} height={200} className="w-full h-[200px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={product.src} alt="" width={500} height={200} className="w-full h-[200px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={product.src} alt="" width={500} height={200} className="w-full h-[200px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={product.src} alt="" width={500} height={200} className="w-full h-[200px] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={product.src} alt="" width={500} height={200} className="w-full h-[200px] object-cover" />
          </SwiperSlide>
        </Swiper>
      )}
    </>
  );
}

export default BannerGrid;
