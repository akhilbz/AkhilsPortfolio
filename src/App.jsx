import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
function App() {

  return (
    <div className="h-[fit-content]">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Projects />
    </div>
  )
}

export default App
