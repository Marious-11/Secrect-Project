import Image from "next/image";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import banner from "@/assets/img/product.png";
function CardItem() {
  return (
    <section className="h-[300px]   group rounded-2xl flex flex-col gap-1 relative">
      <div className="bg-red-500 w-full h-[200px]"><Image src={banner.src} alt="" width={200} height={150} className="object-cover w-full " /></div>
      <div className="bg-slate-100 w-full h-[100px] flex flex-col justify-between items-end p-2">
        <p className="w-[80%] text-end line-clamp-2">Áo Thun Trớn Trắng Be size L</p>
        <p className="font-light text-slate-500 text-[16px]">120.000 đ</p>
      </div>
      <div className="absolute  size-[50px] rounded-tr-full rounded-br-full bg-white top-[180px] flex justify-center items-center transition-all duration-300 ease-linear">
        <FaCartShopping
          size={24}
          className=" transition-all duration-300 ease-in-out"
        />
      </div>
    </section>
  );
}

export default CardItem;
