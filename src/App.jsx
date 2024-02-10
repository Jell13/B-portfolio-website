import About from "./components/About"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Home from "./components/Home"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Home/>
        <About/>
        <Education/>
        <Banner/>
        <Experience/>
        <Contact/>
      </div>
    </>
  )
}

export default App
