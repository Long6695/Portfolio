import { DARK_THEME, LIGHT_THEME } from "@/constants/theme";
import React, { useEffect, useState } from "react";

const getCurrentTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme ? savedTheme : LIGHT_THEME;
};

const useToggleTheme = () => {
  const [theme, setTheme] = useState(getCurrentTheme);

  const toggleTheme = () => {
    const newTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return { theme, toggleTheme };
};

export default useToggleTheme;
