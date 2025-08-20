"use client";

import React, { useState } from "react";
import { MdAlternateEmail, MdEmail } from "react-icons/md";
import { FaFingerprint, FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const loginPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const api = process.env.NEXT_PUBLIC_API_URL;

  const handleLogin = async () => {
    try {
      const res = await fetch(`${api}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_email: email,
          user_passwrd: password,
        }),
      });

      const data = await res.json();
      console.log("server response:", data);

      if (!res.ok) {
        throw new Error(data.detail || "Login failed");
      }

      localStorage.setItem("token", data.access_token);
      console.log("login success, token saved!");
    } catch (err) {
      console.error("login error:", err);
    }
  };

  return (
    <div className="flex justify-center w-full h-screen items-center">
      <div className="w-[400px] p-5 bg-gray-900 flex-col flex items-center gap-3 rounded-xl shadow-slate-500 shadow-lg">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-0 w-full outline-none text-sm text-white md:text-base"
            />
          </div>
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2 relative">
            <FaFingerprint />
            <input
              type={showPassword ? "password" : "text"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent border-0 w-full outline-none text-white text-sm md:text-base"
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
          <div>
            <button className="text-white" onClick={handleLogin}>
              login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
