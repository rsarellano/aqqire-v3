"use client";
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { article } from "@/types/news";
import Autoplay from "embla-carousel-autoplay";

const NewsCarousel = ({ articles }: { articles: article[] }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div>
      {/* 🔑 Force carousel height here */}
      <Carousel
        opts={{ loop: true }}
        setApi={setApi}
        className="h-full relative max-w-4/5 mx-auto"
      >
        <CarouselContent>
          {articles?.map((article, index) => (
            <CarouselItem
              className="basis-1/1 sm:basis-1/2 xl:basis-1/3 "
              key={index}
            >
              <Card className="border-0 h-full ">
                <CardHeader>
                  <h3 className="text-accent-foreground text-lg md:text-2xl font-semibold">
                    {article.title}
                  </h3>
                  <CardDescription>
                    <p className="text-accent-foreground text-sm leading-relaxed flex-grow">
                      {article.description}
                    </p>
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto ml-auto">
                  <Link href={article.link}>
                    <Button>Read More</Button>
                  </Link>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className=" lg:flex cursor-pointer" />
        <CarouselNext className=" lg:flex cursor-pointer" />
      </Carousel>
    </div>
  );
};

export default NewsCarousel;
