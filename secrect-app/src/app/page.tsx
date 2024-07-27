import BannerComponent from "@/components/BannerSection/BannerComponent";
import CategorySwiper from "@/components/CategorySection/CategorySwiper";
import HeaderComponent from "@/components/HeaderComponent";
import TitleCustom from "@/components/TitleCustom";
import Image from "next/image";

export default function Home() {
  return (
    <section className="mt-20 container flex flex-col gap-10">
      <BannerComponent />
      <div className="flex flex-col gap-5">
        <TitleCustom justify="start" title="Danh Mục Sản Phẩm" />
        <CategorySwiper />
      </div>
    </section>
  );
}
