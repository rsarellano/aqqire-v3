"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Icon imports
import {
  FaCheck,
  FaHouse,
  FaLocationDot,
  FaLocationPin,
} from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

// ShadCN imports
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const headerSearch = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const router = useRouter();

  return (
    <div>
      <div className="flex flex-col xl:flex-row gap-4 items-center">
        <div className="rounded-full p-2 px-4 bg-white dark:bg-accent border border-accent flex gap-2 items-center md:max-w-[90%] xl:max-w-[80%] w-full grow">
          <FaHouse className="dark:text-white" />
          <Input
            type="text"
            placeholder="Search available commercial properties across the U.S. "
            className="border-0 outline-none focus-visible:ring-0 grow bg-transparent  dark:bg-transparent dark:text-foreground-accent text-foreground-accent dark:placeholder:text-white placeholder:text-foreground-accent"
            value={searchPrompt}
            onChange={(e) => setSearchPrompt(e.target.value)}
          />

          {searchPrompt && (
            <Button
              className="bg-transparent hover:bg-transparent border-0 !p-0 cursor-pointer"
              onClick={() => setSearchPrompt("")}
            >
              <FaTimes className="dark:text-white text-primary p-0" size={30} />
            </Button>
          )}
        </div>
        <Button
          onClick={() => router.push(`/search?query=${searchPrompt}`)}
          className="bg-primary border hover: text-white font-bold cursor-pointer grow w-full md:max-w-[90%] xl:max-w-[15%] py-6 rounded-full"
        >
          Search Properties
        </Button>
      </div>
    </div>
  );
};

export default headerSearch;
