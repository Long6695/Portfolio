import React, { createContext, useState } from "react";

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => any;
}

const defaultThemeContext: ThemeContextType = {
  darkMode: false,
  toggleDarkMode: () => {},
};

export const ThemeContext =
  createContext<ThemeContextType>(defaultThemeContext);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const themeContextValue = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
