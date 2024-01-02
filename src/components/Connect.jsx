import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Connect() {
  return (
    <div className="mt-36">
      <div className="flex flex-col items-center">
        <h2 className="font-bebas text-2xl font-bold">Connect</h2>
        <div className="flex flex-row">
          <IconContext.Provider value={{ color: "gray", size: 59 }}>
            <FaLinkedin /> <FaBehanceSquare /> <FaGithubSquare />
          </IconContext.Provider>
        </div>
        <div>
          <form className="flex flex-col">
            <input placeholder="Name" />
            <input placeholder="Email" />
            <textarea placeholder="Message" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Connect;
