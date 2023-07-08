import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About";
function App() {

  return (
    <div className="h-[fit-content]">
      <Navbar />
      <Home />
      <div className="home-about-spacer home-about-layer"></div>
      <About />
    </div>
  )
}

export default App
