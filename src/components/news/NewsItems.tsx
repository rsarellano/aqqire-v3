"use client";
import Image from "next/image";
import { Card } from "../ui/card";
import NewsItemsFilters from "./NewsItemsFilters";
import { useNewsStore } from "@/store/newsStore";
import { useEffect } from "react";
import { items } from "./test";

const NewsItems = () => {
  const { news, setNewsItems } = useNewsStore();

  useEffect(() => {
    setNewsItems(items);
    return () => {};
  }, []);

  return (
    <section className="p-6">
      <div className="container grid grid-cols-3  mx-auto">
        {/* Filters */}
        <NewsItemsFilters />

        <div className="grid grid-cols-2 col-span-2 gap-4 min-h-[80vh]">
          {news.map((item, index) => (
            <Card
              className="col-span-1 shadow-md relative border-0 overflow-hidden h-[400px]"
              key={index}
            >
              <Image
                src={"/background/skyline.jpg"}
                fill
                className="size-full"
                alt="article"
              />
              <div className="z-50 mt-auto bg-white p-4">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsItems;
