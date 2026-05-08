import React from 'react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center pt-20 px-6 bg-grid">
      <div className="max-w-4xl text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass border border-white/10 text-sm font-medium text-indigo-400">
          Available for new opportunities
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
          Crafting <span className="text-gradient">Digital Experiences</span> that define the future.
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Full-stack developer specializing in building exceptional digital experiences. 
          Currently focused on building accessible, human-centered products.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-semibold transition-all shadow-lg shadow-indigo-500/20">
            View Projects
          </button>
          <button className="px-8 py-4 glass text-white rounded-2xl font-semibold hover:bg-white/5 transition-all">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
