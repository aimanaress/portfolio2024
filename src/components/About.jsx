import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function About() {
  return (
    <div className="flex flex-col items-center mt-36">
      <div className="text-8xl text-center font-bold m-6 font-bebas">
        AIMAN ARES
      </div>
      <div className="text-center w-11/12 md:w-2/3">
        Recent IT graduate passionate about design with 6 years of creative
        experience. Eager to transition into Front-End Development, I thrive on
        continuous learning and adaptability. Let's connect and explore how I
        can contribute to your team's success!
      </div>
      <div className="mt-6 flex flex-row">
        <IconContext.Provider value={{ color: "#000000", size: 40 }}>
          <FaLinkedin /> <FaBehanceSquare /> <FaGithubSquare />
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default About;