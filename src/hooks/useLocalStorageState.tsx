import { useEffect, useState } from "react";

export function useLocalStorageState<T>(params: { key: string; initValue: T }) {
  const { key, initValue } = params;

  const [val, setVal] = useState<T>(() => {
    if (typeof window === "undefined") return initValue; // SSR safety

    const storedVal = localStorage.getItem(key);
    try {
      return storedVal ? JSON.parse(storedVal) : initValue;
    } catch {
      return initValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  }, [val, key]);

  return { val, setVal };
}
