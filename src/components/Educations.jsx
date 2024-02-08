import React from "react";
import ExperienceCard from "./ExperienceCard";

function Educations() {
  const skill = [
    {
      key: 1,
      name: "Bachelor of Information Technology",
      organization: "International Islamic University Malaysia",
      duration: "2018 - 2023",
    },
    {
      key: 2,
      name: "Foundation in Architecture and Environmental Design",
      organization: "International Islamic University Malaysia",
      duration: "2017 - 2018",
    },
    {
      key: 3,
      name: "Frontend using React.js",
      organization: "Udemy",
      duration: "2023",
    },
  ];

  return (
    <div className="mb-10 py-12">
      <div className="flex flex-col items-center">
        <div className="pt-2 pb-5 flex flex-col items-center">
          <h2 className="font-bebas text-4xl font-bold">Educations</h2>
          <p className="text-gray-200">Education history.</p>
        </div>
        <div className="grid grid-cols-2 gap-2 w-full">
          {skill.map((item) => (
            <div
              className={`col-start-${item.key % 2 === 0 ? 2 : 1} row-start-${
                item.key
              }`}
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

export default Educations;
