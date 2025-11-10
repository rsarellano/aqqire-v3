import FeaturedNews from "@/components/news/FeaturedNews";
import NewsHero from "@/components/news/NewsHero";
import NewsItems from "@/components/news/NewsItems";
import PopularNews from "@/components/news/PopularNews";
import NewsLetter from "@/components/NewsLetter";

const page = () => {
  return (
    <div>
      <NewsHero />
      <NewsItems />
      <FeaturedNews />
      <PopularNews />
      <NewsLetter />
    </div>
  );
};

export default page;
