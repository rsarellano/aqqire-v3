"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const navbar = () => {
  type NavItems = { label: string; href: string };

  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function classNames(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join("");
  }

  const NAV_ITEMS: NavItems[] = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties" },
    { label: "Newsfeed", href: "/newsfeed" },
    { label: "Vendor Directory", href: "/vendor" },
    { label: "Advertise", href: "/advertise" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="flex gap-4 justify-end px-4 py-6 bg-white border-b-2 border-b-gray-200 h-[98px]">
      <div className="flex gap-4 ">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={classNames(
                "px-3 py-2 rounded-md text-sm font-medium",
                active
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      <div className="flex gap-2 mr-[40px]">
        <Link href="/login" onClick={() => setOpen(false)}>
          <Button className="bg-blue-500 cursor-pointer hover:border-blue-500 hover:text-blue-500 hover:bg-white border text-white text-base font-semibold rounded-md">
            Login
          </Button>
        </Link>

        <Link href="/register" onClick={() => setOpen(false)}>
          <Button className="bg-blue-500 cursor-pointer hover:border-blue-500 hover:text-blue-500 hover:bg-white border text-white text-base font-semibold rounded-md">
            Register
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default navbar;
