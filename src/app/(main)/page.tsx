import Hero from "@/components/hero/hero";
import HeroCarousel from "@/components/hero/heroCarousel";
import MarketTrends from "@/components/marketTrends/marketTrends";
import News from "@/components/News";
import NewsLetter from "@/components/NewsLetter";
import PopularProperties from "@/components/properties/PopularProperties";
import Testimonials from "@/components/Testimonials";
import WhyAqqire from "@/components/WhyAqqire";

export default function Home() {
  return (
    <div>
      <Hero />
      <HeroCarousel />
      <MarketTrends />
      <News />
      <NewsLetter />
      <PopularProperties />
      <WhyAqqire />
      <Testimonials />
    </div>
  );
}
