"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";

function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue !== null) {
        setValue(JSON.parse(storedValue));
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue));
      }
    } catch {
      setValue(defaultValue);
    }
  }, [key]);

  const setLocalStorageValue: Dispatch<SetStateAction<T>> = (valueOrFn) => {
    setValue((prev) => {
      const newValue =
        valueOrFn instanceof Function ? valueOrFn(prev) : valueOrFn;
      localStorage.setItem(key, JSON.stringify(newValue));
      return newValue;
    });
  };

  return [value, setLocalStorageValue];
}

export default useLocalStorage;
