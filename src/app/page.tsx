"use client";
import ContactSection from "@/components/contact";
import IntroduceSection from "@/components/introduce";
import WorksSection from "@/components/works";
import React, { useRef, useState } from "react";
import cn from "classnames";
type MenuType = {
  id: number;
  label: string;
  value: string;
};
const MENUS: MenuType[] = [
  {
    id: 1,
    label: "Introduce",
    value: "introduce",
  },
  {
    id: 2,
    label: "Works",
    value: "works",
  },
  {
    id: 3,
    label: "Contact",
    value: "contact",
  },
];

const MainPage = () => {
  const section1 = useRef<HTMLDivElement>(null);
  const section2 = useRef<HTMLDivElement>(null);
  const section3 = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(1);

  const sectionMap = {
    1: section1,
    2: section2,
    3: section3,
  };

  const scrollToView = (num: keyof typeof sectionMap) => {
    sectionMap[num]?.current?.scrollIntoView({ behavior: "smooth" });
  };
  console.log(active);
  const handleScroll = (item: MenuType) => {
    scrollToView(item.id as keyof typeof sectionMap);
    setActive(item.id);
  };
  return (
    <>
      <div className="fixed left-0 right-0 container m-auto flex justify-center gap-10">
        <ul className="flex gap-10">
          {MENUS.map((item) => (
            <li
              key={item.value}
              className={cn({
                active: item.id === active,
                deactive: item.id !== active,
              })}
              onClick={() => handleScroll(item)}
            >
              <p
                className={cn({
                  "text-white": item.id === active,
                  "text-gray-500": item.id !== active,
                })}
              >
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-black h-full p-7" ref={section1}>
        <IntroduceSection />
      </div>
      <div className="bg-red-500 h-full p-7" ref={section2}>
        <WorksSection />
      </div>
      <div className="bg-blue-500 h-full p-7" ref={section3}>
        <ContactSection />
      </div>
    </>
  );
};

export default MainPage;
