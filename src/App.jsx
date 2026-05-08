import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import EducationAchievement from './components/EducationAchievement';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0f172a] min-h-screen font-sans text-slate-300 selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <EducationAchievement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
