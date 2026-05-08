import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
        <div>
          <h2 className="text-4xl font-bold text-white mb-6">Let's build something <span className="text-gradient">extraordinary</span> together.</h2>
          <p className="text-gray-400 mb-8 max-w-md">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          <a href="mailto:hello@sajid.dev" className="text-2xl font-semibold text-white hover:text-indigo-400 transition-colors">
            hello@sajid.dev
          </a>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-6">
            {['Twitter', 'GitHub', 'LinkedIn', 'Dribbble'].map(social => (
              <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                {social}
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-4">
            © {new Date().getFullYear()} Sajid. Built with React & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
