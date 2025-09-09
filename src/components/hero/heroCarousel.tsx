"use client";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import type { CarouselApi } from "../ui/carousel";
import { useEffect, useState, useRef } from "react";

const heroCarousel = () => {
  const logos = ["colliers.png", "marcus.png", "hrec.png", "sei.png"];
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <section className="p-4 py-16 bg-main">
      <div className="container mx-auto ">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {logos.map((logo) => (
              <CarouselItem className="basis-1 md:basis-1/3 " key={logo}>
                <Image
                  width={350}
                  height={250}
                  alt="logo"
                  className="mx-auto"
                  src={`/logos/${logo}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="cursor-pointer" />
          <CarouselNext className="cursor-pointer" />
        </Carousel>
      </div>
    </section>
  );
};

export default heroCarousel;
