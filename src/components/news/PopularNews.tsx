"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NewsItem from "./NewsItem";
import { useNewsStore } from "@/store/newsStore";

const PopularNews = () => {
  const { news, setNewsItems } = useNewsStore();

  return (
    <section className="p-16">
      <div className="container mx-auto">
        <h2 className="text-5xl  my-4 mb-12 font-bold">Popular Articles</h2>
        <Carousel className="w-full ">
          <CarouselContent>
            {news.map((item, index) => (
              <CarouselItem className="basis-1/3" key={index}>
                <div className="p-1">
                  <NewsItem {...item} key={index} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default PopularNews;
