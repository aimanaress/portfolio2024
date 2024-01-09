import React from "react";

function SkillCard(props) {
  return (
    <div className="flex items-center justify-center border border-gray-200 w-full h-12 rounded-md text-gray-200 hover:text-[#001f3f] hover:bg-gray-200">
      <h3 className="font-bold text-center">{props.name}</h3>
    </div>
  );
}

export default SkillCard;
