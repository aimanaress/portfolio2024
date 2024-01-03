import React from "react";

function SkillCard(props) {
  return (
    <div className="flex items-center justify-center bg-gray-200 w-full h-14 rounded-md">
      <div className="font-bold">{props.name}</div>
    </div>
  );
}

export default SkillCard;
