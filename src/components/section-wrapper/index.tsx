import React, { useContext } from "react";
import cn from "classnames";
import { ThemeContext } from "@/context/theme-context";
import { useParallax } from "react-scroll-parallax";

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  const { darkMode } = useContext(ThemeContext);
  const scroll = useParallax<HTMLDivElement>({
    scale: [1, 0.5, "easeInCubic"],
  });
  return (
    <div
      ref={scroll.ref}
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
