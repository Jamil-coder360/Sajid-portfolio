import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-grid">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-400">Have a project in mind? Let's talk about it.</p>
        </div>
        
        <form className="glass p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl shadow-indigo-500/10">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
              />
            </div>
          </div>
          
          <div className="space-y-2 mb-8">
            <label className="text-sm font-medium text-gray-300 ml-1">Message</label>
            <textarea 
              rows="5" 
              placeholder="Tell me about your project..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none"
            ></textarea>
          </div>
          
          <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-indigo-500/20 active:scale-[0.98]">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
