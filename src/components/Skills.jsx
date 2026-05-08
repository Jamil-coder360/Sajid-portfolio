import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  Database, 
  Layout, 
  Layers, 
  Box, 
  Cloud, 
  Palette, 
  Monitor,
  Rocket
} from 'lucide-react';

const skillCategories = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: <Layout className="w-5 h-5" />,
    color: 'indigo',
    skills: [
      { name: 'React', level: 95, icon: <Globe className="w-4 h-4" /> },
      { name: 'Next.js', level: 90, icon: <Layers className="w-4 h-4" /> },
      { name: 'Tailwind CSS', level: 98, icon: <Palette className="w-4 h-4" /> },
      { name: 'Framer Motion', level: 85, icon: <Box className="w-4 h-4" /> },
      { name: 'TypeScript', level: 88, icon: <Code2 className="w-4 h-4" /> }
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: <Database className="w-5 h-5" />,
    color: 'purple',
    skills: [
      { name: 'Node.js', level: 92, icon: <Terminal className="w-4 h-4" /> },
      { name: 'Express', level: 90, icon: <Cpu className="w-4 h-4" /> },
      { name: 'PostgreSQL', level: 85, icon: <Database className="w-4 h-4" /> },
      { name: 'Prisma', level: 88, icon: <Layers className="w-4 h-4" /> },
      { name: 'Supabase', level: 82, icon: <Cloud className="w-4 h-4" /> }
    ]
  },
  {
    id: 'tools',
    name: 'Tools',
    icon: <Terminal className="w-5 h-5" />,
    color: 'pink',
    skills: [
      { name: 'Git', level: 95, icon: <Code2 className="w-4 h-4" /> },
      { name: 'Docker', level: 80, icon: <Box className="w-4 h-4" /> },
      { name: 'Vercel', level: 90, icon: <Rocket className="w-4 h-4" /> },
      { name: 'AWS', level: 75, icon: <Cloud className="w-4 h-4" /> },
      { name: 'Figma', level: 85, icon: <Palette className="w-4 h-4" /> }
    ]
  }
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const activeCategory = skillCategories.find(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
            Technical <span className="text-gradient">Superpowers</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A curated selection of my technical expertise, honed through years of 
            building professional applications and constant learning.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="glass p-1.5 rounded-2xl flex gap-2 overflow-x-auto no-scrollbar">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                  activeTab === category.id 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {activeTab === category.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-white/10 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{category.icon}</span>
                <span className="relative z-10">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {activeCategory.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold group-hover:text-indigo-300 transition-colors">{skill.name}</h4>
                      <div className="text-xs text-gray-500">Proficiency: {skill.level}%</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
