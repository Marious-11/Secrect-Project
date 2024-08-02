import BannerComponent from "@/components/BannerSection/BannerComponent";
import BannerGrid from "@/components/BannerSection/BannerGrid";
import CardItem from "@/components/Card/CardItem";
import CategoryGrid from "@/components/CategorySection/CategoryGrid";
import CategorySwiper from "@/components/CategorySection/CategorySwiper";
import TitleCustom from "@/components/TitleCustom";

export default function Home() {
  return (
    <section className="mt-20 container flex flex-col gap-10">
      <BannerComponent />
      <div className="">
        <BannerGrid cols={3} />
      </div>

      <div className="flex flex-col gap-5 ">
        <TitleCustom justify="center" title="Bộ sưu tập" />
        <CategorySwiper />
      </div>

      <BannerGrid cols={2} />
      <div className="flex flex-col gap-5">
        <TitleCustom justify="start" title="Categories for men" />
        <CategoryGrid />
      </div>
      <div className="flex flex-col gap-5">
        <TitleCustom justify="start" title="Categories for lady" />
        <CategoryGrid />
      </div>
      
    </section>
  );
}
