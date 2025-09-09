import React, { useState } from "react";
import axios from "axios";
import {
  FaCheck,
  FaHouse,
  FaLocationDot,
  FaLocationPin,
} from "react-icons/fa6";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FaTimes } from "react-icons/fa";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";

interface Property {
  id: string;
  name: string;
  price: string;
  city: string;
  state: string;
}

const headerSearch = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [searchResults, setSearchResults] = useState<Property[]>([]);

  const handleSearch = async () => {
    console.log("Search clicked");

    try {
      console.log("About to send request");

      // const response = await axios.post(
      //   "http://127.0.0.1:8000/properties/search-ai",
      //   {
      //     prompt: searchPrompt,
      //   }
      // );
      // setSearchResults(response.data.properties);

      new Promise((resolve, reject) => {
        setTimeout(() => {
          setSearchResults([
            {
              name: "Empire State Building",
              price: "250000000",
              city: "New York",
              state: "NY",
              id: "1",
            },
            {
              name: "Willis Tower",
              price: "150000000",
              city: "Chicago",
              state: "IL",
              id: "2",
            },
            {
              name: "Transamerica Pyramid",
              price: "120000000",
              city: "San Francisco",
              state: "CA",
              id: "3",
            },
            {
              name: "The Shard",
              price: "200000000",
              city: "London",
              state: "UK",
              id: "4",
            },
            {
              name: "One World Trade Center",
              price: "300000000",
              city: "New York",
              state: "NY",
              id: "5",
            },
          ]);
          resolve("foo");
        }, 800);
      });

      console.log("Prompt being sent:", searchPrompt);
    } catch (error) {
      console.error("Error during AI Search:", error);
    }

    console.log("Search handler finished");
  };

  return (
    <div>
      <div className="flex flex-col xl:flex-row gap-4 items-center">
        <div className="rounded-full p-2 px-4 bg-white border border-slate-400 flex gap-2 items-center md:max-w-[90%] xl:max-w-[80%] w-full grow">
          <FaHouse />
          <Input
            type="text"
            placeholder="Search available commercial properties across the U.S. "
            className="border-0 outline-none focus-visible:ring-0 grow "
            value={searchPrompt}
            onChange={(e) => setSearchPrompt(e.target.value)}
          />

          {searchPrompt && (
            <Button
              className="bg-transparent hover:bg-transparent border-0 !p-0 cursor-pointer"
              onClick={() => setSearchPrompt("")}
            >
              <FaTimes className="text-main p-0" size={30} />
            </Button>
          )}
        </div>
        <Button
          onClick={handleSearch}
          className="bg-main border rounded-sm text-white font-bold cursor-pointer grow w-full md:max-w-[90%] xl:max-w-[15%]"
        >
          Search
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-12 p-4">
        {searchResults.map((property) => (
          <Card
            key={property.id}
            className="col-span-1 py-0 pb-2 overflow-hidden gap-3"
          >
            <CardHeader className="relative  size-full min-h-45  overflow-hidden p-0">
              <div className="w-full h-">
                <img
                  src="/background/skyline.jpg"
                  alt="Property Image"
                  className="size-full"
                />
              </div>
            </CardHeader>

            <CardContent className="p-6 py-0">
              <div className="flex justify-between gap-2">
                <div className="flex gap-1 items-center ">
                  <FaLocationDot className="p-0" size={16} />
                  <p className="text-xs">
                    {property.city}, {property.state}
                  </p>
                </div>
                <p className=" text-main font-bold ">
                  ${Number(property.price).toLocaleString("en-us")}
                </p>
              </div>

              <p className=" font-bold py-2">{property.name}</p>

              <div className="flex justify-between">
                <p className="text-xs py-3">Number of Rooms: {property.id}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default headerSearch;
