//main layout including all sections and components
import { useState } from 'react'
import Hero from './components/Hero';
import About from './components/About';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Highlights from './components/Highlights';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    < >
      <Routes>
         <Route
        path="/"
        element={
          <>
            <Hero />
            <Navbar />
            <About />
            <Project />
            <Highlights />
            <Footer />
          </>
        }
      />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App
