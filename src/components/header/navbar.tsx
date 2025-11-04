"use client";

// React Imports
import React, { useState, useEffect } from "react";

// NextJS Imports
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Utils
import checkAuth from "@/utils/checkAuth";
import { useAuth } from "@/utils/authContext";
import { useDarkMode } from "@/hooks/useDarkMode";

// SHADCN imports
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

// Icons
import {
  FaLightbulb,
  FaMagnifyingGlass,
  FaRegLightbulb,
} from "react-icons/fa6";

// Component Imports
import { publicNavItems, privateNavItems } from "./navItems";

const NavBar = () => {
  const api = process.env.NEXT_PUBLIC_API_URL;
  const { isDark, toggleDark } = useDarkMode();
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const verifyUser = async () => {
      const auth = await checkAuth();
      console.log("Auth status from checkAuth:", auth);
      setIsAuthenticated(auth);
    };
    verifyUser();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch(`${api}/users/logout`, {
        method: "POST",
        credentials: "include",
      });
      router.push("/login");
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className="hidden xl:flex gap-4 justify-around px-4 py-6 bg-primary shadow-sm">
      <Link href="/">
        <Image src="/logo.png" width="150" height="100" alt="Aqqire Logo" />
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          {(isAuthenticated ? privateNavItems : publicNavItems).map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink asChild>
                <Link href={item.href} className="text-white">
                  {item.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}

          {!isAuthenticated ? (
            <>
              <NavigationMenuItem>
                <Button
                  asChild
                  className="bg-primary cursor-pointer hover:border-primary hover:text-primary hover:bg-white border text-white text-base font-semibold rounded-md"
                >
                  <Link href="/login">Login</Link>
                </Button>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Button
                  asChild
                  className="bg-primary cursor-pointer hover:border-primary hover:text-primary hover:bg-white border text-white text-base font-semibold rounded-md"
                >
                  <Link href="/register">Register</Link>
                </Button>
              </NavigationMenuItem>
            </>
          ) : (
            <NavigationMenuItem>
              <Button
                onClick={handleLogout}
                className="bg-white text-primary hover:bg-primary hover:text-white border border-primary text-base font-semibold rounded-md"
              >
                Logout
              </Button>
            </NavigationMenuItem>
          )}

          <NavigationMenuItem>
            <div className="fixed right-5 top-5 space-x-3">
              <Link href="/search">
                <Button className="cursor-pointer dark:bg-secondary-foreground dark:text-white rounded-full overflow-hidden border border-white dark:border-transparent p-5">
                  <FaMagnifyingGlass />
                </Button>
              </Link>

              <Button
                onClick={toggleDark}
                className="cursor-pointer dark:bg-secondary-foreground dark:text-white rounded-full overflow-hidden border border-white dark:border-transparent p-5"
              >
                {isDark ? <FaRegLightbulb /> : <FaLightbulb />}
              </Button>
            </div>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default NavBar;
