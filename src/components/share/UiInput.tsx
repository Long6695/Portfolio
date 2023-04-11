import React, { HTMLProps, InputHTMLAttributes, useContext } from "react";
import cn from "classnames";
import { ThemeContext } from "@/context/theme-context";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const UiInput = (props: Props) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <input
      className={cn("w-full", {
        dark: darkMode,
        light: !darkMode,
      })}
      {...props}
    />
  );
};

export default UiInput;
