import FeaturedNews from "@/components/news/FeaturedNews";
import NewsHero from "@/components/news/NewsHero";
import NewsItems from "@/components/news/NewsItems";

const page = () => {
  return (
    <div>
      <NewsHero />
      <NewsItems />
      <FeaturedNews />
    </div>
  );
};

export default page;
