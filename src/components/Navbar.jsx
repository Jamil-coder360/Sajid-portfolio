import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass rounded-2xl px-6 py-3">
        <div className="text-2xl font-bold text-gradient">Sajid.dev</div>
        <div className="hidden md:flex space-x-8">
          {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
        <button className="bg-primary/20 text-primary-content px-5 py-2 rounded-xl border border-primary/30 hover:bg-primary/30 transition-all font-medium">
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
