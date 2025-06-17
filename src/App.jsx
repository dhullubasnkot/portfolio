import "./App.css";
import "./index.css";
// import Navbar from "./components/navbar";
import About from "./pages/AboutSection";
import Contact from "./pages/Contact";
import HeroSection from "./pages/herosection";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
