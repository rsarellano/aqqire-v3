"use client";

import { useEffect } from "react";
import axios from "axios";

const FeaturedProperties = () => {
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    console.log("Token:", token);
  }, []);

  return (
    <div className="flex container">
      <div className="">Featured Properties</div>
    </div>
  );
};

export default FeaturedProperties;
