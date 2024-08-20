import BannerComponent from "@/components/BannerSection/BannerComponent";
import BannerGrid from "@/components/BannerSection/BannerGrid";
import BannerInfinity from "@/components/BannerSection/BannerInfinity";
import CategoryGrid from "@/components/CategorySection/CategoryGrid";
import CategorySwiper from "@/components/CategorySection/CategorySwiper";
import TitleCustom from "@/components/TitleCustom";
import { database } from "../../appwrite";
import Banner3DSection from "@/components/BannerSection/Banner3DSection";

export default async function Home() {
  const baseUrl = process.env.DATABASE_ID;
  const categoryID = process.env.CATEGORY_TABLE_ID;
  const productsID = process.env.PRODUCT_TABLE_ID;

  // call api
  const category = await database.listDocuments(
    baseUrl as string,
    categoryID as string
  );
  const products = await database.listDocuments(
    baseUrl as string,
    productsID as string
  );
  //

  return (
    <section className="my-20 container flex flex-col gap-10 ">
      
      <BannerComponent />

      <div className="">
        <BannerGrid cols={3} />
      </div>

      <div className="flex flex-col gap-5 ">
        <TitleCustom justify="center" title="Bộ sưu tập" />
        <CategorySwiper data={category.documents} />
      </div>

      <BannerGrid cols={2} />
      <div className="flex flex-col gap-5">
        <TitleCustom justify="start" title="Producs for men" />
        <CategoryGrid data={products.documents} />
      </div>
      <div className="flex flex-col gap-5">
        <TitleCustom justify="start" title="Products for lady" />
        <CategoryGrid data={products.documents} />
      </div>
      <div className="flex flex-col gap-5">
        <TitleCustom justify="center" title="Khách hàng hợp tác" />
        <BannerInfinity />
      </div>
    </section>
  );
}
