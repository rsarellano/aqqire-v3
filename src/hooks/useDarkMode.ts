"use client";
import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export function useDarkMode() {
  const [isDark, setIsDark] = useLocalStorage<boolean>("isDark", false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  const toggleDark = () => {
    setIsDark((prev) => !prev);
  };

  return { isDark, toggleDark };
}
