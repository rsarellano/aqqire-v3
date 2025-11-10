"use client";
import Image from "next/image";
import { Card } from "../ui/card";
import NewsItemsFilters from "./NewsItemsFilters";
import { useNewsStore } from "@/store/newsStore";
import { useEffect } from "react";
import { items } from "./test";
import NewsItem from "./NewsItem";

const NewsItems = () => {
  const { news, setNewsItems } = useNewsStore();

  useEffect(() => {
    setNewsItems(items);
    return () => {};
  }, []);

  return (
    <section className="p-12">
      <div className="container grid grid-cols-3  mx-auto">
        <NewsItemsFilters />
        <div className="grid grid-cols-2 col-span-2 gap-4 min-h-[80vh]">
          {news.map((item, index) => (
            <NewsItem {...item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsItems;
