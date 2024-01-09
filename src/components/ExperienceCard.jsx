import React from "react";

function ExperienceCard(props) {
  return (
    <div className="flex flex-col items-center justify-center text-center border border-gray-200 w-full p-5 rounded-md text-gray-200 hover:text-[#001f3f] hover:bg-gray-200">
      <h3 className="font-bold ml-2 mr-2">{props.name}</h3>
      <p className="text-sm">{props.organization}</p>
      <p className="text-sm italic">{props.duration}</p>
    </div>
  );
}

export default ExperienceCard;
