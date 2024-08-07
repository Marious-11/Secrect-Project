import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import product from "@/assets/img/product.png";
import TitleCustom from "@/components/TitleCustom";
import { database } from "../../../../../appwrite";
const Data = {
  title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  description:
    "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, quisquam.</p>",
  price: 120000,
  price_in_sale: 100000,
};

async function page() {
    const productsID = process.env.PRODUCT_TABLE_ID;
    const baseUrl = process.env.DATABASE_ID;

    // const productBySlug = await database.getDocument(baseUrl as string, productsID as string, "65485222222222222222");
  return (
    <section className="container my-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-5">
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
            {Data.title}
          </p>
          <div className="flex gap-5 items-center">
            <p className="text-2xl font-semibold">
              {Data.price_in_sale.toLocaleString("VI")} đ
            </p>
            <p className="text-md font-light line-through">
              {Data.price.toLocaleString("VI")} đ
            </p>
          </div>
          <div className="flex gap-5">
            <Button variant={"outline"} size={"lg"}>
              Buy Now
            </Button>{" "}
            <Button size={"lg"}>Add to cart</Button>
          </div>
        </div>
        <div className="">
          <Image
            src={product.src}
            alt=""
            width={1000}
            height={500}
            className="w-full "
          />
        </div>
      </div>
      {/* description */}
      <div className="flex flex-col gap-5 mt-10">
        <TitleCustom title="Description" justify="start" />
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: Data.description }}
        ></div>
      </div>
    </section>
  );
}

export default page;
