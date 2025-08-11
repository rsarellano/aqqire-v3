import React, { useState } from "react";
import axios from "axios";

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

      const response = await axios.post(
        "http://127.0.0.1:8000/properties/search-ai",
        {
          prompt: searchPrompt,
        }
      );
      setSearchResults(response.data.properties);
      console.log("Prompt being sent:", searchPrompt);
      console.log("Matching IDs:", response.data.properties);
    } catch (error) {
      console.error("Error during AI Search:", error);
    }

    console.log("Search handler finished");
  };

  return (
    <div className=" flex flex-col gap-4 ">
      <div className="flex justify-between w-[701px] h-[40px]">
        <input
          type="text"
          placeholder="Search available commercial properties across the U.S."
          className="bg-white border border-gray-300 rounded-xl w-[581px] px-4"
          value={searchPrompt}
          onChange={(e) => setSearchPrompt(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 border  hover:bg-blue-600 border-gray-50 w-[77px] h-[40px] rounded-lg text-white font-bold"
        >
          Search
        </button>
      </div>
      <div className="flex justify center">
        {searchResults.map((property) => (
          <div
            key={property.id}
            className="p-4 border rounded shadow w-[120px] h-[150px] m-1"
          >
            <h3 className="text-base font-bold">{property.name}</h3>
            <h3 className="text-base font-bold">${property.price}</h3>
            <h3 className="text-base font-bold">{property.state}</h3>
            <h3 className="text-base font-bold">{property.city}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default headerSearch;
