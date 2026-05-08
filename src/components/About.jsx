import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden shadow-2xl shadow-indigo-500/20">
             {/* Placeholder for an actual image or a generated illustration */}
             <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-6xl">About Me</div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 glass rounded-2xl flex items-center justify-center p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5+</div>
              <div className="text-xs text-gray-400">Years Exp.</div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">Passionate about creating <span className="text-gradient">impactful digital solutions</span>.</h2>
          <p className="text-gray-400 text-lg mb-6 leading-relaxed">
            I am a full-stack developer with a deep love for clean code and intuitive user interfaces. 
            My journey began over 5 years ago, and since then, I've had the privilege of working with 
            diverse teams to build products that solve real-world problems.
          </p>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            I believe that great software is built on a foundation of empathy, performance, and 
            accessibility. When I'm not coding, you can find me exploring new technologies or 
            contributing to open-source projects.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-white font-semibold mb-2">My Values</h4>
              <p className="text-sm text-gray-500">Quality, Performance, User-centric design.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">My Goal</h4>
              <p className="text-sm text-gray-500">To push the boundaries of web technology.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
