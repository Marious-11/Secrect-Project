"use client";
import React from "react";
import Ticker from "framer-motion-ticker";
import logo from "@/assets/img/promotion.jpg";
import Image from "next/image";
function BannerInfinity() {
  return (
    <section>
      <Ticker duration={50}>
        {[1, 2, 3, 4, 5, 6, 6].map((item) => (
          <Image
            src={logo}
            alt=""
            width={500}
            height={200}
            className="w-full h-[200px] object-cover px-2"
            key={item}
          />
        ))}
      </Ticker>
    </section>
  );
}

export default BannerInfinity;
