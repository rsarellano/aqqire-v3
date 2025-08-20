"use client";

import React from "react";
import { useRouter } from "next/router";
import link from "next/link";

const navbar = () => {
  return (
    <nav className="flex gap-4 justify-end px-4 py-6 bg-white border-b-2 border-b-gray-200 h-[98px]">
      <div className="flex gap-4 ">
        <button className="bg-white hover:bg-gray-100 text-gray-600 font-semibold  px-[7px] text-base h-[35px] rounded-lg ">
          Home
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-600 font-semibold  px-[7px] text-base h-[35px] rounded-lg ">
          Properties
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-600 font-semibold  px-[7px] text-base h-[35px] rounded-lg ">
          Newsfeed
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-600 font-semibold  px-[7px] text-base h-[35px] rounded-lg ">
          Vendor Directory
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-600 font-semibold  px-[7px] text-base h-[35px] rounded-lg ">
          Advertise
        </button>
        <button className="bg-white hover:bg-gray-100 text-gray-600 font-semibold  px-[7px] text-base h-[35px] rounded-lg ">
          Contact Us
        </button>
      </div>

      <div className="flex gap-2 mr-[40px]">
        <button className="bg-gray-300 h-[38px] hover:bg-gray-400 text-gray-700 w-[58px] text-base font-semibold rounded-md">
          login
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white h-[38px] w-[72px] text-base font-semibold rounded-md">
          register
        </button>
      </div>
    </nav>
  );
};

export default navbar;
