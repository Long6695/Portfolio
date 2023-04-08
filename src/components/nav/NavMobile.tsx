import { space_mono } from "@/app/fonts";
import React, { useContext, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { CiSun, CiDark } from "react-icons/ci";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { MenuType } from ".";
import cn from "classnames";
import { ThemeContext } from "@/context/theme-context";

const NavMobile = ({
  data,
  onDownload,
  active,
  onScroll,
}: {
  data: MenuType[];
  onDownload: () => void;
  active: number;
  onScroll: (num: number) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const renderMenu = () => {
    return (
      <>
        <div className="fixed top-0 bottom-0 left-0 w-1/2 p-4 bg-gradient-to-r from-gray-400 to-slate-100">
          <div className="flex justify-end">
            <RxCross2 onClick={handleToggleMenu} />
          </div>
          <ul className="flex flex-col gap-10">
            {data.map((item) => (
              <li
                key={item.value}
                className={cn(
                  `font-bold text-lg hover:animate-scale w-fit ${space_mono.className}`,
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
          <div className="flex flex-col gap-3 mt-6">
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
              className={`w-fit border-orange-400 border-2 font-bold text-lg px-4 h-10 rounded-full ${space_mono.className} flex items-center gap-2`}
              onClick={onDownload}
            >
              resume
              <AiOutlineDownload className="animate-bounce " />
            </button>
          </div>
        </div>
        <div
          onClick={handleToggleMenu}
          className="fixed top-0 bottom-0 right-0 w-1/2 p-4"
        />
      </>
    );
  };

  return (
    <div className="fixed left-0 right-0 top-6 desktop-hidden z-50">
      {isOpen && renderMenu()}
      <div className="px-6">
        <div className="flex justify-end items-center">
          <RxHamburgerMenu onClick={handleToggleMenu} />
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
