import React from "react";
import SkillCard from "./SkillCard";

function Skills() {
  const skill = [
    //Frontend
    { name: "CSS" },
    { name: "HTML" },
    { name: "JavaScript" },
    { name: "Bootstrap" },
    { name: "React.js" },
    { name: "Tailwind CSS" },
    { name: "Node.js" },

    //Others
    { name: "C++" },
    { name: "Java" },
    { name: "PHP" },
    { name: "Laravel" },
    { name: "MySQL" },
    { name: "SQL" },
    { name: "Flutter" },
    { name: "Firebase" },

    //Design
    { name: "Figma" },
    { name: "Photoshop" },
    { name: "Illustrator" },
    { name: "Affinity Designer" },
    { name: "Affinity Photo" },
    { name: "Blender 3D" },
  ];

  return (
    <div className="mb-10 py-12">
      <div className="flex flex-col items-center">
        <div className="pt-2 pb-5 flex flex-col items-center">
          <h2 className="font-bebas text-4xl font-bold">Skills</h2>
          <p className="text-gray-200">Dummy Text</p>
        </div>
        <div className="grid grid-cols-2 w-full gap-2 md:grid-cols-3 xl:grid-cols-5">
          {skill.map((item) => (
            <SkillCard name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
