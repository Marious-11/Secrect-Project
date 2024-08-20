import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import product from "@/assets/img/product.png";
import TitleCustom from "@/components/TitleCustom";
import { database } from "../../../../../appwrite";
import InputQuality from "@/components/Core/inputQuality";
const Data = {
  title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  description:
    "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, quisquam.</p>",
  price: 120000,
  price_in_sale: 100000,
};

async function page({ params }: { params: { slug: string } }) {
  const productsID = process.env.PRODUCT_TABLE_ID;
  const baseUrl = process.env.DATABASE_ID;

  const productBySlug = await database.getDocument(
    baseUrl as string,
    productsID as string,
    params.slug
  );

  return (
    <section className="container my-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-5">
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
            {productBySlug.Name}
          </p>
          <div className="flex gap-5 items-center">
            <p className="text-2xl font-semibold">
              {productBySlug.price_in_promotion.toLocaleString("VI")} đ
            </p>
            <p className="text-md font-light line-through">
              {productBySlug.price.toLocaleString("VI")} đ
            </p>
          </div>
          <InputQuality size={'md'} defalutValue={1} />
          <div className="flex gap-5">
            <Button variant={"outline"} size={"lg"}>
              Buy Now
            </Button>
            <Button size={"lg"}>Add to cart</Button>
          </div>
        </div>
        <div className="">
          <Image
            src={productBySlug.image ?? product.src}
            alt=""
            width={1000}
            height={500}
            className="w-full rounded-lg"
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
