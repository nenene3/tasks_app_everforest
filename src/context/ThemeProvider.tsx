import React, { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { toggleDarkMode } from "../utils/toggleDarkMode";

export type ThemeType = "dark" | "light";

type ThemeCtx = {
  type: ThemeType;
  toggleTheme: () => void;
  setTheme: (type: ThemeType) => void;
};

const themeContext = createContext<ThemeCtx | null>(null);

export function useTheme() {
  const ctx = useContext(themeContext);

  if (!ctx) {
    throw new Error("you used the context outisde themeprovider");
  }
  return ctx;
}

type Props = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: Props) => {
  const { val: theme, setVal: setTheme } = useLocalStorageState<ThemeType>({
    key: "theme",
    initValue: "light",
  });

  useEffect(() => {
    toggleDarkMode(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const ctx: ThemeCtx = { setTheme, type: theme, toggleTheme };

  return <themeContext.Provider value={ctx}>{children}</themeContext.Provider>;
};

export default ThemeProvider;
