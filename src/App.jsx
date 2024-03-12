//Estilos
import "./app.css";
//Secciones
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Certificates from "./Components/Certificates/Certificates";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      
    </>
  );
}

export default App;
