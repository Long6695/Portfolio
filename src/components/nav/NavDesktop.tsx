import { space_mono } from "@/app/fonts";
import { ThemeContext } from "@/context/theme-context";
import React, { useContext } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { CiSun, CiDark } from "react-icons/ci";
import { MenuType } from ".";
import cn from "classnames";

const NavDesktop = ({
  data,
  onDownload,
  active,
  onScroll,
}: {
  data: MenuType[];
  onDownload: () => void;
  active: number;
  onScroll: (item: number) => void;
}) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div className="mobile-hidden fixed left-0 right-0 top-2 container m-auto flex items-center justify-center gap-10">
      <div className="flex items-center w-full h-10">
        <ul className="relative flex justify-center gap-10 w-full">
          {data.map((item) => (
            <li
              key={item.value}
              className={cn(
                `font-bold text-lg hover:animate-scale ${space_mono.className}`,
                {
                  active: item.id === active,
                  deactive: item.id !== active,
                }
              )}
              onClick={() => onScroll(item.id)}
            >
              <a
                className={cn("cursor-pointer", {
                  "text-gray-500": item.id !== active,
                })}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="absolute right-2 top-0 flex items-center gap-3">
          {darkMode ? (
            <CiSun
              className="hover:fill-orange-400 cursor-pointer"
              size="22px"
              onClick={toggleDarkMode}
            />
          ) : (
            <CiDark
              className="hover:fill-orange-400 cursor-pointer"
              size="22px"
              onClick={toggleDarkMode}
            />
          )}
          <button
            className={`border-orange-400 border-2 font-bold text-lg px-4 h-10 rounded-full ${space_mono.className} flex items-center gap-2`}
            onClick={onDownload}
          >
            resume
            <AiOutlineDownload className="animate-bounce" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavDesktop;
