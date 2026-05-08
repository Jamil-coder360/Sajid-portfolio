import React from 'react';

const skillCategories = [
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript']
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Supabase']
  },
  {
    name: 'Tools',
    skills: ['Git', 'Docker', 'Vercel', 'AWS', 'Figma']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Technical Expertise</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category) => (
            <div key={category.name} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                <div className="w-8 h-8 rounded bg-indigo-500/30"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-6">{category.name}</h3>
              <ul className="space-y-4">
                {category.skills.map(skill => (
                  <li key={skill} className="text-gray-400 hover:text-indigo-400 transition-colors cursor-default">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
