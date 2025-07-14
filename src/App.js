import React from 'react';
import MyNavbar from './components/Navbar';
import Hero from './sections/Hero';
import Contact from './sections/Contact';
import Connect from './sections/Connect';
import About from './sections/About';
import Experience from './sections/Experience';
import Footer from './sections/Footer';
import Projects from './sections/Projects';
function App() {
  return (
    <>
      <MyNavbar />
      <Hero />
     <Connect />
      <About />
      <Experience />
      <Projects />
     <Contact />
     <Footer />
    

    </>
  );
}

export default App;
