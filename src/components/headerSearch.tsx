import React, { useState } from "react";
import axios from "axios";

const headerSearch = () => {
  const [searchPrompt, setSearchPrompt] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/properties/search-ai",
        {
          prompt: searchPrompt,
        }
      );
    } catch {
      console.log("Matching IDs:", response.data.ids);
    }
  };

  return (
    <div className="w-[701px] h-[40px] flex justify-between">
      <input
        type="text"
        placeholder="Search available commercial properties across the U.S."
        className="bg-white border border-gray-300 rounded-xl w-[581px] px-4"
      />
      <button className="bg-blue-500 border  hover:bg-blue-600 border-gray-50 w-[77px] h-[40px] rounded-lg text-white font-bold">
        Search
      </button>
    </div>
  );
};

export default headerSearch;
