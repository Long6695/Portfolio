import React, { useContext } from "react";
import cn from "classnames";
import { ThemeContext } from "@/context/theme-context";
const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={cn("section-wrapper", {
        dark: darkMode,
        light: !darkMode,
      })}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
