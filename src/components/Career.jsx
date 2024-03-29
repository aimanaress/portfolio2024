import React from "react";
import ExperienceCard from "./ExperienceCard";

function Career() {
  const skill = [
    {
      key: 1,
      name: "Digital Designer",
      organization: "Inmagine",
      duration: "July 2022 - Jan 2024",
    },
    {
      key: 2,
      name: "Graphic Designer",
      organization: "Freelance",
      duration: "2017 - Present",
    },
  ];

  return (
    <div className="mb-10 py-12">
      <div className="flex flex-col items-center">
        <div className="pt-2 pb-5 flex flex-col items-center">
          <h2 className="font-bebas text-4xl font-bold">Career</h2>
          <p className="text-gray-200">Working experience.</p>
        </div>
        <div className="grid grid-cols-2 gap-2 w-full">
          {skill.map((item) => (
            <div
              className={`col-start-${item.key % 2 === 0 ? 2 : 1}
              row-start-${item.key}`}
            >
              <ExperienceCard
                name={item.name}
                organization={item.organization}
                duration={item.duration}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Career;
