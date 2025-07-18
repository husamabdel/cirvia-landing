import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => {
    scrollToSection('contact');
  };

  return (
    <header className="p-6 flex justify-between items-center shadow-md bg-[#0D1B2A] border-b border-slate-800 sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img src="/cirvia-logo.png" alt="Cirvia Logo" className="h-10 w-auto" />
        </Link>
      </div>
      <nav className="hidden md:flex space-x-6">
        <Link to="/about" className="hover:underline text-slate-200 transition-colors">About</Link>
        <button onClick={() => scrollToSection('product')} className="hover:underline text-slate-200 transition-colors">Parental AI</button>
        <button onClick={() => scrollToSection('how-it-works')} className="hover:underline text-slate-200 transition-colors">How It Works</button>
        <button onClick={() => scrollToSection('pricing')} className="hover:underline text-slate-200 transition-colors">Pricing</button>
        <a href="https://docs.cirvia.co" target="_blank" rel="noopener noreferrer" className="hover:underline text-slate-200 transition-colors flex items-center">
          Documentation <ExternalLink className="ml-1 h-4 w-4" />
        </a>
        <button onClick={() => scrollToSection('contact')} className="hover:underline text-slate-200 transition-colors">Contact</button>
      </nav>
      <div className="flex space-x-3">
        <a href="https://dashboard.cirvia.co" target="_blank" rel="noopener noreferrer" className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center">
          Dashboard <ExternalLink className="ml-1 h-4 w-4" />
        </a>
        <button onClick={handleGetStarted} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;