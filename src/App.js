import NavBar from "./components/NavBar";
import About from "./components/About";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Educations from "./components/Educations";
import Career from "./components/Career";
import Connect from "./components/Connect";

function App() {
  return (
    <div className="flex flex-col">
      <NavBar />

      <div className="container mx-auto w-10/12">
        <About />
        <Works />
        <Skills />
        <Educations />
        <Career />
        <Connect />
      </div>
    </div>
  );
}

export default App;
