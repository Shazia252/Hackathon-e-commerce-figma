import DiscountItem from "@/components/DiscountItem";
import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSection from "@/components/HeroSection";
import MyBlog from "@/components/MyBlog";
import NewsLater from "@/components/NewsLater";
import Shopex from "@/components/Shopex";
import TopCate from "@/components/TopCate";
import TrendingProducts from "@/components/TrendingProducts";
import UniqueFeature from "@/components/UniqueFeature";
import Image from "next/image";
// import Hero2 from "../components/Hero2";


export default function Page() {
  return (
    <div>
    
      <HeroSection />
      {/* <Hero2 /> */}
      <FeaturedProducts />
      <Shopex />
      <UniqueFeature />
      <TrendingProducts />
      <DiscountItem />
      <TopCate />
      <NewsLater />
      <MyBlog />
     
    </div>
  );
}
