"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { navItems } from "./navItems";
import Image from "next/image";

const navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="hidden lg:flex gap-4 justify-around px-4 py-6  bg-main shadow-sm">
      <ul className="flex gap-2 items-center">
        <li className="mr-6">
          <Link href="/">
            <Image src="/logo.png" width="150" height="100" alt="Aqqire Logo" />
          </Link>
        </li>
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium ",
                  active ? "bg-white text-main" : "text-white hover:bg-gray-100"
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex gap-2">
        <Link href="/login" onClick={() => setOpen(false)}>
          <Button className="bg-slate-500 cursor-pointer hover:border-blue-500 hover:text-blue-500 hover:bg-white border text-white text-base font-semibold rounded-md">
            Login
          </Button>
        </Link>
        <Link href="/register" onClick={() => setOpen(false)}>
          <Button className="bg-white cursor-pointer hover:border-main hover:text-main hover:bg-white border text-main text-base font-semibold rounded-md">
            Register
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default navbar;
