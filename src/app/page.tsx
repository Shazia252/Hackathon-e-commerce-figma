
// import ContactPage from "@/components/ContactPage";
import DiscountItem from "@/components/DiscountItem";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MyBlog from "@/components/MyBlog";
import Navbar from "@/components/Navbar";
import NewsLater from "@/components/NewsLater";
import Shopex from "@/components/Shopex";
import TopCate from "@/components/TopCate";
import TrendingProducts from "@/components/TrendingProducts";
import UniqueFeature from "@/components/UniqueFeature";
// import { ContactIcon } from "lucide-react";

export default function Home() {
  return (
    <div>
    
      <Header />
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <Shopex />
      <UniqueFeature />
      <TrendingProducts />
      <DiscountItem />
      <TopCate />
      <NewsLater />
      <MyBlog />
      {/* <ContactPage /> */}
      <Footer />
    </div>
  );
}
