"use client";
import { FaUserTie } from "react-icons/fa6";

import { Input } from "@/components/ui/input";
import { signUpUser } from "../../actions/signup";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MdAlternateEmail } from "react-icons/md";
import axios from "axios";

type userType = {
  user_firstName: string;
  user_lastName: string;
  user_email: string;
  user_mobileNumber: string;
  user_passwrd: string;
  confirmPassword: string;
};

const Registration = () => {
  const [user, setUser] = useState<userType>({
    user_firstName: "",
    user_lastName: "",
    user_email: "",
    user_mobileNumber: "",
    user_passwrd: "",
    confirmPassword: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const api = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${api}/users/register`, {
        ...user,
        confirmPassword: undefined,
      });
      console.log("User Registered", res.data);
    } catch (error: any) {
      console.error(
        " Registration Failed",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div
      className="flex justify-center items-center p-4 h-screen"
      style={{
        background: `linear-gradient(90deg,rgba(0, 86, 150, 0.79) 0%, rgba(0, 86, 150, 0.26) 50%, rgba(0, 86, 150, 0.6) 100%), url('/background/skyline.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="lg:max-w-[25%] w-full flex-col flex items-center gap-3  bg-white dark:bg-primary dark:text-white text-primary p-4 rounded-xl">
        <form
          onSubmit={handleSubmit}
          className="p-4 w-full grid grid-cols-2 gap-4 "
        >
          <div className="flex gap-2 col-span-2 items-baseline justify-center">
            <FaUserTie size={30} />
            <h1 className="text-2xl font-semibold">Become a Member</h1>
          </div>

          <div className="flex w-full items-center border p-2 rounded-xl">
            <Label htmlFor="firstName" className="dark:text-white">
              <MdAlternateEmail size={24} />
            </Label>
            <Input
              type="text"
              name="user_firstName"
              placeholder="First Name"
              required
              onChange={onChange}
              value={user.user_firstName ?? ""}
              className="bg-transparent border-0 w-full outline-none text-sm text-white md:text-base focus-visible:ring-transparent"
            />
          </div>

          <div className="flex w-full items-center border p-2 rounded-xl">
            <Label htmlFor="lastName" className="dark:text-white">
              <MdAlternateEmail size={24} />
            </Label>
            <Input
              type="text"
              name="user_lastName"
              placeholder="Last Name"
              required
              onChange={onChange}
              value={user.user_lastName ?? ""}
              className="bg-transparent border-0 w-full outline-none text-sm text-white md:text-base focus-visible:ring-transparent"
            />
          </div>

          <div className="flex w-full items-center border p-2 rounded-xl col-span-2">
            <Label htmlFor="phone" className="dark:text-white">
              <MdAlternateEmail size={24} />
            </Label>
            <Input
              type="tel"
              name="user_mobileNumber"
              placeholder="Phone Number"
              required
              onChange={onChange}
              value={user.user_mobileNumber ?? ""}
              className="bg-transparent border-0 w-full outline-none text-sm text-white md:text-base focus-visible:ring-transparent"
            />
          </div>

          <div className="flex w-full items-center border p-2 rounded-xl col-span-2">
            <Label htmlFor="email" className="dark:text-white">
              <MdAlternateEmail size={24} />
            </Label>
            <Input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
              onChange={onChange}
              value={user.user_email ?? ""}
              className="bg-transparent border-0 w-full outline-none text-sm text-white md:text-base focus-visible:ring-transparent"
            />
          </div>

          <div className="flex w-full items-center border p-2 rounded-xl">
            <Label htmlFor="password" className="dark:text-white">
              <MdAlternateEmail size={24} />
            </Label>
            <Input
              type="password"
              name="user_passwrd"
              placeholder="Password"
              required
              onChange={onChange}
              value={user.user_passwrd ?? ""}
              className="bg-transparent border-0 w-full outline-none text-sm text-white md:text-base focus-visible:ring-transparent"
            />
          </div>

          <div className="flex w-full items-center border p-2 rounded-xl">
            <Label htmlFor="confirmPassword" className="dark:text-white">
              <MdAlternateEmail size={24} />
            </Label>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              onChange={onChange}
              value={user.confirmPassword ?? ""}
              className="bg-transparent dark:bg-transparent border-0 w-full outline-none text-sm text-white md:text-base focus-visible:ring-transparent"
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
