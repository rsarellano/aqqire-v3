"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { navItems } from "./navItems";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import {
  FaLightbulb,
  FaMagnifyingGlass,
  FaRegLightbulb,
} from "react-icons/fa6";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useDarkMode } from "@/hooks/useDarkMode";
import { Drawer } from "../ui/drawer";

const navbar = () => {
  const pathname = usePathname();
  const { isDark, toggleDark } = useDarkMode();

  return (
    <nav className="flex gap-4 justify-around px-4 py-6  bg-primary shadow-sm">
      <Link href="/">
        <Image src="/logo.png" width="150" height="100" alt="Aqqire Logo" />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink key={item.href} asChild>
                  <Link href={item.href} className="text-white">
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}

          <NavigationMenuItem>
            <Link href="/login">
              <Button className="bg-primary cursor-pointer hover:border-primary hover:text-primary hover:bg-white border text-white text-base font-semibold rounded-md">
                Login
              </Button>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/register">
              <Button className="bg-primary cursor-pointer hover:border-primary hover:text-primary hover:bg-white border text-white text-base font-semibold rounded-m">
                Register
              </Button>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="">
            <div className="fixed right-5 top-5 space-x-3">
              <Link href="/search">
                <Button className="cursor-pointer dark:bg-secondary-foreground  dark:text-white rounded-full overflow-hidden border border-white dark:border-transparent p-5 ">
                  <FaMagnifyingGlass />
                </Button>
              </Link>

              <Button
                onClick={() => toggleDark()}
                className="cursor-pointer dark:bg-secondary-foreground  dark:text-white rounded-full overflow-hidden border border-white dark:border-transparent p-5 "
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

export default navbar;
