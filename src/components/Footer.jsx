import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
        <div>
          <div className="text-2xl font-bold text-gradient mb-4">Sajid.dev</div>
          <p className="text-gray-500 max-w-sm">Designing and developing high-performance web applications with a focus on user experience.</p>
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
