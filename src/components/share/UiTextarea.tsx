import React, { HTMLProps, InputHTMLAttributes, useContext } from "react";
import cn from "classnames";
import { ThemeContext } from "@/context/theme-context";

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {}

const UiTextarea = (props: Props) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <textarea
      className={cn("w-full", {
        dark: darkMode,
        light: !darkMode,
      })}
      {...props}
    />
  );
};

export default UiTextarea;
