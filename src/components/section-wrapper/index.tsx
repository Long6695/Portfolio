import React from "react";

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-screen">{children}</div>;
};

export default SectionWrapper;
