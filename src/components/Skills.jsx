import React from "react";
import SkillCard from "./SkillCard";

function Skills() {
  const skill = [
    { name: "Laravel" },
    { name: "PHP" },
    { name: "Tailwind CSS" },
    { name: "Laravel" },
    { name: "PHP" },
    { name: "Tailwind CSS" },
    { name: "Laravel" },
    { name: "PHP" },
    { name: "Tailwind CSS" },
    { name: "Laravel" },
    { name: "PHP" },
    { name: "Tailwind CSS" },
    { name: "Laravel" },
    { name: "PHP" },
    { name: "Tailwind CSS" },
  ];

  return (
    <div className="mt-36">
      <div className="flex flex-col items-center">
        <h2 className="font-bebas text-2xl font-bold">Skills</h2>
        <div className="grid grid-cols-3 w-full gap-2 xl:grid-cols-5">
          {skill.map((item) => (
            <SkillCard name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
