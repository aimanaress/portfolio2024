import NavBar from "./components/NavBar";
import About from "./components/About";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Educations from "./components/Educations";
import Career from "./components/Career";
import Connect from "./components/Connect";
import React, { useRef, useEffect } from "react";

function App() {
  const about = useRef(null);
  const work = useRef(null);
  const skills = useRef(null);
  const educations = useRef(null);
  const career = useRef(null);
  const connect = useRef(null);

  return (
    <div className="flex flex-col">
      {/* <NavBar /> */}
      <NavBar />

      <div className="container mx-auto w-10/12">
        <div id="1" ref={about} className="element">
          <About />
        </div>
        <div id="2" ref={work} className="element">
          <Works />
        </div>
        <div id="3" ref={skills} className="element">
          <Skills />
        </div>
        <div id="4" ref={educations} className="element">
          <Educations />
        </div>
        <div id="5" ref={career} className="element">
          <Career />
        </div>
        <div id="6" ref={connect} className="element">
          <Connect />
        </div>
      </div>
    </div>
  );
}

export default App;
