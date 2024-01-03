import React from "react";

function ExperienceCard(props) {
  return (
    <div className="flex items-center justify-center bg-gray-200 w-full pt-5 pb-5 rounded-md">
      <div className="font-bold ml-2 mr-2 text-center">{props.name}</div>
    </div>
  );
}

export default ExperienceCard;
