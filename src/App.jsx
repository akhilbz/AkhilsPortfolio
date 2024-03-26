import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useState } from "react";
function App() {
  const [showAlert, setShowAlert] = useState(true);
  const today = new Date();

  const dateString = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return (
    <div className="h-[fit-content]">
      <Navbar />
      {!showAlert && (<div className="absolute mt-[85px] w-fit flex end-2">
        <p onClick={() => setShowAlert(true)} className=" text-sm font-normal text-yellow-300 pr-3 hover:scale-110 duration-500 cursor-pointer">Maintenance Alert: {dateString}</p>
        </div>
      )}
      {showAlert && (<div className="absolute mt-[85px] w-fit  ml-2 flex end-2 bg-yellow-300 text-black p-2 rounded-lg shadow-md space-x-2  items-center">
      <button onClick={() => setShowAlert(false)} className="text-black ">&times;</button>
      <p className="text-sm font-normal">🚧 Updating the Experience Section to match my resume. Your patience is appreciated! 🚧</p>
      </div>)}
      <Home />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
