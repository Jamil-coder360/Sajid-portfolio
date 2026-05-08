import React from 'react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with payment integration.',
    tags: ['React', 'Node.js', 'Stripe'],
    color: 'from-blue-500/20 to-indigo-500/20'
  },
  {
    title: 'AI Image Generator',
    description: 'Leveraging stable diffusion to create stunning art.',
    tags: ['Python', 'React', 'Tailwind'],
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    title: 'Social Dashboard',
    description: 'Real-time analytics for social media management.',
    tags: ['Next.js', 'Supabase', 'Chart.js'],
    color: 'from-emerald-500/20 to-teal-500/20'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-md">Some of my favorite works that showcase my technical skills and creativity.</p>
        </div>
        <button className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">
          View all projects →
        </button>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group glass rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300">
            <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500`}>
               <div className="text-white/20 font-bold text-4xl">Project {index + 1}</div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-6 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs text-indigo-300 border border-indigo-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
