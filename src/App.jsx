import "./App.css";
import NavBar from "./components/NavBar";
import Achievements from "./Page/Achievements";
import Education from "./Page/Education";
import Experience from "./Page/Experience";
import Home from "./Page/Home";
import Projects from "./Page/Projects";
import Skills from "./Page/Skills";
function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
    </>
  );
}

export default App;
