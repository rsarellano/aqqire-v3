"use client";
import { FaUserTie } from "react-icons/fa6";

import { Input } from "@/components/ui/input";
import { signUpUser } from "../actions/signup";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MdAlternateEmail } from "react-icons/md";

type userType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number | null;
  password: string;
  confirmPassword: string;
};

const Registration = () => {
  const [user, setUser] = useState<userType>({
    firstName: "",
    lastName: "",
    email: "",
    phone: null,
    password: "",
    confirmPassword: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="flex justify-center items-center p-4 h-screen"
      style={{
        background: `linear-gradient(90deg,rgba(0, 86, 150, 0.79) 0%, rgba(0, 86, 150, 0.26) 50%, rgba(0, 86, 150, 0.6) 100%), url('/background/skyline.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="lg:max-w-[25%] w-full flex-col flex items-center gap-3 bg-gray-900  text-white p-4 rounded-xl">
        <form
          action={signUpUser}
          className="p-4 w-full grid grid-cols-2 gap-4 "
        >
          <div className="flex gap-2 col-span-2 items-baseline justify-center">
            <FaUserTie size={30} />
            <h1 className="text-2xl font-semibold">Become a Member</h1>
          </div>

          <div className="flex w-full items-center bg-gray-800 p-2 rounded-xl">
            <Label htmlFor="firstName" className="text-white">
              <MdAlternateEmail size={24} />
            </Label>
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              onChange={onChange}
              value={user.firstName ?? ""}
              className="bg-transparent border-0 w-full outline-none text-sm text-white md:text-base focus-visible:ring-transparent"
            />
          </div>

          <div className="flex w-full items-center bg-gray-800 p-2 rounded-xl">
            <Label htmlFor="lastName" className="text-white">
              <MdAlternateEmail size={24} />
            </Label>
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              onChange={onChange}
              value={user.lastName ?? ""}
              className="bg-transparent border-0 w-full outline-none text-sm text-white md:text-base focus-visible:ring-transparent"
            />
          </div>

          <div className="flex w-full items-center bg-gray-800 p-2 rounded-xl col-span-2">
            <Label htmlFor="phone" className="text-white">
              <MdAlternateEmail size={24} />
            </Label>
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={onChange}
              value={user.phone ?? ""}
              className="bg-transparent border-0 w-full outline-none text-sm text-white md:text-base focus-visible:ring-transparent"
            />
          </div>

          <div className="flex w-full items-center bg-gray-800 p-2 rounded-xl col-span-2">
            <Label htmlFor="email" className="text-white">
              <MdAlternateEmail size={24} />
            </Label>
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              onChange={onChange}
              value={user.email ?? ""}
              className="bg-transparent border-0 w-full outline-none text-sm text-white md:text-base focus-visible:ring-transparent"
            />
          </div>

          <div className="flex w-full items-center bg-gray-800 p-2 rounded-xl col-span-2">
            <Label htmlFor="password" className="text-white">
              <MdAlternateEmail size={24} />
            </Label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={onChange}
              value={user.password ?? ""}
              className="bg-transparent border-0 w-full outline-none text-sm text-white md:text-base focus-visible:ring-transparent"
            />
          </div>

          <div className="flex w-full items-center bg-gray-800 p-2 rounded-xl col-span-2">
            <Label htmlFor="confirmPassword" className="text-white">
              <MdAlternateEmail size={24} />
            </Label>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              onChange={onChange}
              value={user.confirmPassword ?? ""}
              className="bg-transparent border-0 w-full outline-none text-sm text-white md:text-base focus-visible:ring-transparent"
            />
          </div>

          <Button
            type="submit"
            className="col-span-2 py-6 cursor-pointer bg-gray-800 "
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
