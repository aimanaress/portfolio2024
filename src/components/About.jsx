import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function About() {
  return (
    <div className="flex short:mt-9 tall:h-screen items-center">
      <div className="flex flex-col items-center py-12 ">
        <h1 className="text-9xl text-center font-bold m-6 font-bebas">
          AIMAN ARES
        </h1>
        <p className="text-gray-200 text-center w-11/12 md:w-2/3">
          Recent IT graduate passionate about design with 6 years of creative
          experience. Eager to transition into Front-End Development, I thrive
          on continuous learning and adaptability. Let's connect and explore how
          I can contribute to your team's success!
        </p>
        <div className="mt-12 flex flex-row">
          <IconContext.Provider value={{ color: "#FFF", size: 40 }}>
            <FaLinkedin /> <FaBehanceSquare /> <FaGithubSquare />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default About;
