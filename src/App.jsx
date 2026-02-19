import React from "react";
import Contact from "./components/contact.jsx";
import Skillssection from "./components/skillssection";
import Projects from "./components/projects.jsx";
import Footer from "./components/footer.jsx";
import Aboutme from "./components/aboutme.jsx";
import Hero from "./components/hero.jsx";
const App = () => {


  return (
    <div >
      <Hero />
      <Aboutme />
      <Skillssection />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
