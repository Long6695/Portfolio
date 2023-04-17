import { SKILLS } from "@/constants/skills";
import React from "react";

const Skills = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-wrap max-w-md justify-center">
        {SKILLS.map((skill) => (
          <div key={skill.id} className="badge badge-primary m-2">
            <h2 className="text-lg"> {skill.label}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
