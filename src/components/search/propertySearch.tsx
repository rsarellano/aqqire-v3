"use client";
import React, { useState } from "react";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const PropertySearch = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const router = useRouter();
  return (
    <div className="space-y-2 mx-auto font-bold p-4">
      <h1 className="text-center text-4xl text-accent-foreground p-4">
        Properties Listen on AQQIRE
      </h1>
      <Input
        placeholder="Search Property"
        className="text-accent-foreground"
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
