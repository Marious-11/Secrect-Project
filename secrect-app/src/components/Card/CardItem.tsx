import Image from "next/image";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import banner from "@/assets/img/product2.png";
import Link from "next/link";
import { Models } from "appwrite";
function CardItem({ data }: { data: Models.Document }) {
  return (
    <Link
      href={`/products/${data.category}/${data.$id}`}
      className="h-[300px]   group rounded-2xl flex flex-col gap-1 relative"
    >
      <div className=" w-full h-[200px] overflow-hidden rounded-xl">
        <Image
          src={data.image ?? banner.src}
          //data.image ?? banner.src
          alt=""
          width={200}
          height={150}
          className="object-cover w-full group-hover:scale-110  transition-all duration-300 overflow-hidden "
        />
      </div>
      <div className="bg-[#e4e4e4]/30 rounded-t-xl w-full h-[100px] flex flex-col justify-between items-end p-2">
        <p className="w-[80%] text-end line-clamp-2">{data.Name}</p>
        <div className="flex gap-3 items-end">
          <p className="font-light text-slate-500 text-[16px]">
            {data.price_in_promotion
              ? Number(data.price_in_promotion).toLocaleString("VI")
              : 0}{" "}
            đ
          </p>
          <p className="font-light text-slate-500 text-[14px] line-through">
            {data.price ? Number(data.price).toLocaleString("VI") : 0} đ
          </p>
        </div>
      </div>
      <div className="absolute  size-[60px] rounded-tr-full  rounded-br-full bg-white border-r-2 border-black border-b-2 border-t-2 top-[170px] flex justify-center items-center transition-all duration-300 ease-linear">
        <FaCartShopping
          size={24}
          className=" transition-all duration-300 ease-in-out"
        />
      </div>
    </Link>
  );
}

export default CardItem;
