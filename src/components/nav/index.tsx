"use client";
import React from "react";
import { space_mono } from "@/app/fonts";
import { AiOutlineDownload } from "react-icons/ai";
import { VscListSelection } from "react-icons/vsc";
import SwitchTheme from "./SwitchTheme";
import { MENUS } from "@/constants/nav";
import Link from "next/link";

const Nav = () => {
  const handleDownloadCV = () => {};
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <VscListSelection />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {MENUS.map((item) => (
              <li key={item.value} className={`${space_mono.className}`}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          LongThai
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {MENUS.map((item) => (
            <li key={item.value} className={`${space_mono.className}`}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <SwitchTheme />
        <a className="btn ml-2" onClick={handleDownloadCV}>
          Download CV <AiOutlineDownload className="animate-bounce ml-2" />
        </a>
      </div>
    </div>
  );
};

export default Nav;
