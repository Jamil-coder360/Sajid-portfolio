import React from 'react';

const education = [
  {
    degree: 'Master of Computer Science',
    institution: 'Stanford University',
    duration: '2021 - 2023',
    description: 'Specialized in Artificial Intelligence and Human-Computer Interaction.'
  },
  {
    degree: 'Bachelor of Software Engineering',
    institution: 'MIT',
    duration: '2017 - 2021',
    description: 'Graduated with Honors. Focus on Distributed Systems and Web Technologies.'
  }
];

const achievements = [
  {
    title: 'Google Developer Expert',
    organization: 'Google',
    date: '2024',
    description: 'Recognized for expertise in Web Technologies and community contributions.'
  },
  {
    title: 'Best Innovative App Award',
    organization: 'App World Expo',
    date: '2023',
    description: 'Awarded for "EchoLink", a decentralized communication platform.'
  },
  {
    title: 'Open Source Contributor',
    organization: 'GitHub',
    date: 'Ongoing',
    description: 'Active contributor to major React and Tailwind CSS ecosystems.'
  }
];

const EducationAchievement = () => {
  return (
    <section id="education" className="py-24 px-6 max-w-7xl mx-auto bg-grid relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="grid lg:grid-cols-2 gap-16 relative z-10">
        {/* Education Section */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-4">
            <span className="w-12 h-1 h-px bg-indigo-500"></span>
            Education
          </h2>
          <div className="space-y-12 border-l-2 border-indigo-500/20 ml-4 pl-8">
            {education.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[41px] top-0 w-4 h-4 bg-[#0f172a] border-2 border-indigo-500 rounded-full group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                <span className="text-indigo-400 text-sm font-semibold mb-2 block">{item.duration}</span>
                <h3 className="text-2xl font-bold text-white mb-1">{item.degree}</h3>
                <p className="text-indigo-200/60 font-medium mb-3">{item.institution}</p>
                <p className="text-gray-400 leading-relaxed text-sm max-w-md">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-4">
            <span className="w-12 h-1 h-px bg-purple-500"></span>
            Achievements
          </h2>
          <div className="grid gap-6">
            {achievements.map((item, index) => (
              <div key={index} className="glass p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-purple-200/60 text-sm mb-3">{item.organization}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationAchievement;
