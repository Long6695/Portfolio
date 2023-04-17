import React from "react";
import AboutSection from "@/components/about";
import StatSection from "@/components/stat";
import SkillsSection from "@/components/skills";

const MainPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <AboutSection />
      <StatSection />
      <SkillsSection />
    </div>
  );
};

export default MainPage;
