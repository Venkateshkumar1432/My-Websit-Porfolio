import Hero from "./components/Hero";
import NavbarComponent from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import Contect from "./components/Content";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Project />
      <Services />
      <Blogs />
      <Contect />
      <Footer />
    </>
  );
}

export default App;
