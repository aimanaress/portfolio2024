import React from "react";
import ExperienceCard from "./ExperienceCard";

function Educations() {
  const skill = [
    { key: 1, name: "Bachelor of Information Technology" },
    { key: 2, name: "Foundation in Architecture and Environmental Design" },
    { key: 3, name: "Udemy" },
  ];

  return (
    <div className="mt-36">
      <div className="flex flex-col items-center">
        <h2 className="font-bebas text-2xl font-bold">Educations</h2>
        <div className="grid grid-cols-2 gap-2 w-full">
          {skill.map((item) => (
            <div
              className={`col-start-${item.key % 2 === 0 ? 2 : 1} row-start-${
                item.key
              }`}
            >
              <ExperienceCard name={item.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Educations;
