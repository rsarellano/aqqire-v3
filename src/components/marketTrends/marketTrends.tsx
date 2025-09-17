"use client";
import { Property } from "@/types/property";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { searchProperties } from "@/actions/searchProperties";
import { useEffect, useState } from "react";
import TrendItems from "./trendItems";
import TrendSkeleton from "./trendSkeleton";

const MarketTrends = () => {
  const categories = ["Hotels", "Gas", "Land", "Commercial"];
  const [properties, setProperties] = useState<Property[] | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const fetchData = async () => {
      const data = await searchProperties();
      setProperties(data);

      interval = setInterval(async () => {
        const newData = await searchProperties();
        setProperties(newData);
      }, 100);
    };

    fetchData();

    return () => clearInterval(interval); // cleanup
  });

  return (
    <section className="p-4 py-12 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between container mx-auto overflow-clip gap-4">
        <h2 className="text-center md:text-left text-3xl md:text-4xl font-bold dark:text-white text-primary">
          Hot on the Market
        </h2>

        <Select>
          <SelectTrigger className="grow w-full  md:max-w-1/4 dark:text-white ">
            <SelectValue placeholder="Select Property Type" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem
                key={category}
                value={category.toLowerCase()}
                className="capitalize dark:text-white"
              >
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {!properties ? <TrendSkeleton /> : <TrendItems properties={properties} />}
    </section>
  );
};

export default MarketTrends;
