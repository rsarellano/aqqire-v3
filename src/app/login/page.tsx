"use client";

import React, { useState } from "react";
import { MdAlternateEmail, MdEmail } from "react-icons/md";
import { FaFingerprint, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    <div
      className="flex justify-center w-full h-screen items-center"
      style={{
        background: `linear-gradient(90deg,rgba(0, 86, 150, 0.79) 0%, rgba(0, 86, 150, 0.26) 50%, rgba(0, 86, 150, 0.6) 100%), url('/background/skyline.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="lg:max-w-[25%] w-full p-5 bg-gray-900 flex-col flex items-center gap-3 rounded-xl shadow-slate-500 shadow-lg">
        <h1 className="text-2xl md:text-xl font-bold text-white">
          Welcome to Aqqire
        </h1>

        <div className="w-full flex flex-col gap-3">
          <div className="flex w-full items-center bg-gray-800 p-2 rounded-xl">
            <Label htmlFor="email" className="text-white">
              <MdAlternateEmail size={24} />
            </Label>
            <Input
              type="email"
              placeholder="Account Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-0 w-full outline-none text-sm text-white md:text-base focus-visible:ring-transparent"
            />
          </div>
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2 relative overflow-hidden">
            <Label htmlFor="email" className="text-white">
              <FaFingerprint size={24} />
            </Label>
            <Input
              type={showPassword ? "password" : "text"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent border-0 w-full outline-none text-sm text-white md:text-base focus-visible:ring-transparent"
            />
            <FaRegEyeSlash
              className={`cursor-pointer mx-2 text-white transform transition duration-300 absolute right-2  ${
                showPassword ? "translate-x-0" : "translate-x-20"
              }`}
              size={24}
              onClick={togglePasswordVisibility}
            />
            <FaRegEye
              size={24}
              className={`cursor-pointer mx-2 text-white transform transition duration-300 absolute right-2 ${
                showPassword ? "translate-x-20" : "translate-x-0"
              }`}
              onClick={togglePasswordVisibility}
            />
          </div>
          <div>
            <Button
              className="text-white w-full bg-gray-800 cursor-pointer hover:bg-white hover:text-gray-800"
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
          <p className="text-xs md:text-sm text-gray-500 text-center">
            Dont have an account?{" "}
            <Link href="/register" className="text-white">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
