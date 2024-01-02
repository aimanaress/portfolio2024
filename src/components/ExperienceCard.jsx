import React from "react";

function ExperienceCard(props) {
  return (
    <div className="flex items-center justify-center bg-gray-200 w-full h-14">
      <div className="font-bold">{props.name}</div>
    </div>
  );
}

export default ExperienceCard;
