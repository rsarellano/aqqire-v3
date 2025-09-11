import Hero from "@/components/hero/hero";
import HeroCarousel from "@/components/hero/heroCarousel";
import MarketTrends from "@/components/marketTrends/marketTrends";
import News from "@/components/News";
import NewsLetter from "@/components/NewsLetter";
import PopularProperties from "@/components/properties/PopularProperties";

export default function Home() {
  return (
    <div>
      <Hero />
      <HeroCarousel />
      <MarketTrends />
      <News />
      <NewsLetter />
      <PopularProperties />
    </div>
  );
}
