"use client";

import React, { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint, FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const loginPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="flex justify-center w-full h-screen items-center">
      <div className="w-[90%] p-5 bg-gray-900 flex-col flex items-center gap-3 rounded-xl shadow-slate-500 shadow-lg">
        <h1 className="text-lg md:text-xl font-semibold text-white">
          Welcome Back
        </h1>
        <p className="text-xs md:text-sm text-gray-500 text-center">
          Dont have an account? <span className="text-white">Sign up</span>
        </p>

        <div className="w-full flex flex-col gap-3">
          <div className="w-full items-center bg-gray-800 p-2 rounded-xl">
            <MdAlternateEmail />
            <input
              type="email"
              placeholder="Email Account"
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
            />
          </div>
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2 relative">
            <FaFingerprint />
            <input
              type={showPassword ? "password" : "text"}
              placeholder="Password"
              className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
            />
            {showPassword ? (
              <FaRegEyeSlash
                className="absoute right-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <FaRegEye
                className="absolute right-5 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
