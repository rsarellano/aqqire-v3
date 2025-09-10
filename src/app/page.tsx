import Navbar from "@/components/header/navbar";
import Hero from "@/components/hero/hero";
import HeroCarousel from "@/components/hero/heroCarousel";
import MarketTrends from "@/components/marketTrends";

export default function Home() {
  return (
    <div>
      <Hero />
      <HeroCarousel />
      <MarketTrends />
    </div>
  );
}
