import { space_mono } from "@/app/fonts";
import React, { useContext } from "react";
import { CiSun, CiDark } from "react-icons/ci";
import { AiOutlineDownload } from "react-icons/ai";
import cn from "classnames";
import { ThemeContext } from "@/context/theme-context";

export type MenuType = {
  id: number;
  label: string;
  value: string;
};
const MENUS: MenuType[] = [
  {
    id: 1,
    label: "about",
    value: "about",
  },
  {
    id: 2,
    label: "projects",
    value: "projects",
  },
  {
    id: 3,
    label: "contact",
    value: "contact",
  },
];

const Nav = ({
  active,
  onScroll,
}: {
  active: number;
  onScroll: (item: MenuType) => void;
}) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const handleDownloadCV = () => {};
  return (
    <div className="fixed left-0 right-0 top-2 container m-auto flex items-center justify-center gap-10">
      <div className="flex items-center w-full h-10">
        <ul className="relative flex justify-center gap-10 w-full">
          {MENUS.map((item) => (
            <li
              key={item.value}
              className={cn(
                `font-bold text-lg hover:animate-scale ${space_mono.className}`,
                {
                  active: item.id === active,
                  deactive: item.id !== active,
                }
              )}
              onClick={() => onScroll(item)}
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
            onClick={handleDownloadCV}
          >
            resume
            <AiOutlineDownload className="animate-bounce " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
