import React from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

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
  onScroll: (num: number) => void;
}) => {
  const handleDownloadCV = () => {};
  return (
    <div className="h-full">
      <NavMobile
        active={active}
        onScroll={onScroll}
        data={MENUS}
        onDownload={handleDownloadCV}
      />
      <NavDesktop
        active={active}
        onScroll={onScroll}
        data={MENUS}
        onDownload={handleDownloadCV}
      />
    </div>
  );
};

export default Nav;
