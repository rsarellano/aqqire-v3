"use client";
import React, { useState } from "react";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const PropertySearch = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const router = useRouter();
  return (
    <div>
      <Input
        placeholder="Search Property"
        onChange={(e) => setSearchPrompt(e.target.value)}
      />
      <Button
        onClick={() => router.push(`/search?query=${searchPrompt}`)}
        className="bg-primary border rounded-sm text-white font-bold cursor-pointer grow w-full hover:bg-blue-800"
      >
        Search Properties
      </Button>
    </div>
  );
};

export default PropertySearch;
