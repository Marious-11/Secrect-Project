import React, { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FiPlus, FiMinus } from "react-icons/fi";
import InputQuality from "../Core/inputQuality";
const data = [
  {
    id: "m5gr84i9",
    amount: 316,
    name: "Product 1 ljkdslkfjsd lksdjflsdjflkwaet  lkawsdjflasetuao",
    count: 1,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    name: "Product 2",
    count: 1,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    id: "derv1ws0",
    amount: 837,
    name: "Product 3",
    count: 1,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    id: "5kma53ae",
    amount: 874,
    name: "Product 4",
    count: 1,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    name: "Product 5",
    count: 1,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
];

function TableRender({ data }: { data: any[] }) {
  console.log(data);

  return (
    <section className="flex flex-col gap-5 mt-20 py-10 relative ">
      <div className="grid grid-cols-1 md:grid-cols-3 border rounded-[20px] p-5">
        <div className="flex items-center gap-2">
          <Checkbox />
          <p>All</p>
        </div>
        <div className="col-span-2 md:grid grid-cols-4 items-center text-center text-[14px] hidden ">
          <p className="">Price</p>
          <p>Count</p>
          <p>Amount</p>
          <div className="flex justify-end">
            <RiDeleteBin6Line
              size={18}
              className=" hidden md:flex  text-red-500 text-nowrap "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 border rounded-[20px] p-5">
        {data.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-3 ${
              index != 0 && "border-t-2 pt-5"
            }`}
          >
            <div className="flex items-center gap-2">
              <Checkbox />
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
              />
              <div className="flex justify-between w-full gap-5">
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] line-clamp-1">{item.title}</p>
                  <p className="text-[14px] font-light md:hidden">
                    {item.price}
                  </p>
                  <div className="flex border rounded-xl items-center w-[120px] h-[30px] md:hidden px-2">
                    <InputQuality defalutValue={Number(item.count)} size="md" />
                  </div>
                </div>
                <div className="">
                  <RiDeleteBin6Line
                    size={18}
                    className=" md:hidden text-red-500 text-nowrap "
                  />
                </div>
              </div>
            </div>
            {/*  */}
            <div className="hidden md:grid md:grid-cols-4 items-center text-center col-span-2">
              <p className="text-[14px] ">
                {Number(item.price).toLocaleString("VI")} Đ
              </p>
              <div className="flex items-center justify-center w-full h-[40px] px-2">
                <InputQuality defalutValue={Number(item.count)} size="md" id={item.$id} />
              </div>
              <p className="text-[14px]">{item.amount}</p>
              <div className="flex justify-end w-full">
                <RiDeleteBin6Line
                  size={18}
                  className=" hidden md:block  text-red-500 text-nowrap "
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sticky bottom-0 w-full border h-[80px] rounded-[20px] bg-white flex justify-between px-5 items-center">
        <p>Total: 1234</p>
        <Button>Checkout</Button>
      </div>
    </section>
  );
}

export default TableRender;
