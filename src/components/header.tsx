"use client";

import React from "react";
import HeaderSearch from "./headerSearch";

const header = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-[525px] ">
      <div>
        <p className="text-center text-5xl w-[883px] font-bold ">
          <span> Find Your Next </span>
          <span className=" text-blue-500"> Commercial Real Estate </span>
          <span>Opportunity</span>
        </p>

        <p className="text-center w-[883px] text-xl font-normal py-3">
          Powering CRE professionals with real-time listings, vendor
          directories, and headline news.
        </p>
      </div>
      <div className="">
        <HeaderSearch />
      </div>
    </div>
  );
};

export default header;
