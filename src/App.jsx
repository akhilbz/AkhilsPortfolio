import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About";
import Education from "./components/Education";
function App() {

  return (
    <div className="h-[fit-content]">
      <Navbar />
      <Home />
      <div className="home-about-spacer home-about-layer"></div>
      <About />
      <div className="about-edu-spacer about-edu-layer"></div>
      <Education />
    </div>
  )
}

export default App
