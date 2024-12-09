import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import TrendingProducts from "@/components/TrendingProducts";





export default function Home() {
  return (
    <div>
    
      <Header />
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <TrendingProducts />
      <Footer />
    </div>
  );
}
