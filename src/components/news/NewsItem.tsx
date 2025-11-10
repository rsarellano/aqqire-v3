import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { News } from "@/types/news";

const NewsItem = ({ title, description, imageUrl }: News) => {
  return (
    <Card className="col-span-1 shadow-md gap-0 p-0 flex flex-col border-0 overflow-hidden h-[400px]">
      <CardHeader className="relative grow">
        <Image
          src={imageUrl || "/background/skyline.jpg"}
          fill
          className="size-full z-0"
          alt="article"
        />
      </CardHeader>
      <CardContent className="p-0">
        <div className=" mt-auto  bg-white px-4 py-8">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsItem;
