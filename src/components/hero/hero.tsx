"use client";

import React from "react";
import HeaderSearch from "./headerSearch";

const header = () => {
  const gridBackgroundStyle = {
    backgroundColor: "#ffffff",
    opacity: 0.1,
    backgroundImage:
      "linear-gradient(#000000 0.8px, transparent 0.8px), linear-gradient(90deg, #000000 0.8px, transparent 0.8px), linear-gradient(#000000 0.4px, transparent 0.4px), linear-gradient(90deg, #000000 0.4px, #ffffff 0.4px)",
    backgroundSize: "20px 20px, 20px 20px, 4px 4px, 4px 4px",
    backgroundPosition:
      "-0.8px -0.8px, -0.8px -0.8px, -0.4px -0.4px, -0.4px -0.4px",
  };
  return (
    <section className="flex flex-col gap-4 items-center justify-center min-h-screen pt-20 relative">
      <div
        className="inset-0 absolute pointer-events-none"
        style={gridBackgroundStyle}
      />
      <div className="space-y-4 relative z-10">
        <h1 className=" text-center text-4xl  md:text-6xl font-bold xl:leading-[1.5] p-4">
          Find Your Next
          <span className="px-2 text-main">Commercial Real Estate</span>
          <br />
          Opportunity
        </h1>

        <p className="text-center text-xl md:text-2xl font-normal md:p-6 p-4">
          Powering CRE professionals with real-time listings, vendor
          directories, and headline news.
        </p>
      </div>
      <div className="p-4 lg:p-0 mt-12 max-w-6xl w-full relative z-10">
        <HeaderSearch />
      </div>
    </section>
  );
};

export default header;
