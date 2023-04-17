import React from "react";
import AboutSection from "@/components/about";
import Stat from "@/components/stat";
import Skills from "@/components/skills";

const MainPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <AboutSection />
      <div className="flex justify-center">
        <Stat />
      </div>
      <Skills />
    </div>
  );
};

export default MainPage;
