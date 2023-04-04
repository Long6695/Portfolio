"use client";
import ContactSection from "@/components/contact";
import AboutSection from "@/components/about";
import WorksSection from "@/components/works";
import React, { useRef, useState } from "react";
import Nav, { MenuType } from "@/components/nav";
import ThemeContextProvider from "@/context/theme-context";

const MainPage = () => {
  const aboutSection = useRef<HTMLDivElement>(null);
  const projectSection = useRef<HTMLDivElement>(null);
  const contactSection = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(1);

  const sectionRefMap = {
    1: aboutSection,
    2: projectSection,
    3: contactSection,
  };

  const scrollToView = (num: keyof typeof sectionRefMap) => {
    sectionRefMap[num]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = (item: MenuType) => {
    scrollToView(item.id as keyof typeof sectionRefMap);
    setActive(item.id);
  };

  return (
    <ThemeContextProvider>
      <Nav onScroll={handleScroll} active={active} />
      <div className="section-layout px-7 pt-12" ref={aboutSection}>
        <AboutSection />
      </div>
      <div className="section-layout px-7 pt-12" ref={projectSection}>
        <WorksSection />
      </div>
      <div className="section-layout px-7 pt-12" ref={contactSection}>
        <ContactSection />
      </div>
    </ThemeContextProvider>
  );
};

export default MainPage;
