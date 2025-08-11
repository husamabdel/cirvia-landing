import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ExternalLink, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate to home first, then scroll
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // If we're on home page, scroll directly
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after clicking
    setIsMobileMenuOpen(false);
  };

  const handleGetStarted = () => {
    scrollToSection('contact');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="p-6 flex justify-between items-center shadow-md bg-[#0D1B2A] border-b border-slate-800 sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img src="/cirvia-logo.png" alt="Cirvia Logo" className="h-10 w-auto" />
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        {/* This should work - pure Link with no onClick */}
        <Link 
          to="/about" 
          className="hover:underline text-slate-200 transition-colors"
        >
          About
        </Link>
        
        <button 
          onClick={() => scrollToSection('product')} 
          className="hover:underline text-slate-200 transition-colors"
        >
          Parental AI
        </button>
        
        <button 
          onClick={() => scrollToSection('how-it-works')} 
          className="hover:underline text-slate-200 transition-colors"
        >
          How It Works
        </button>
        
        <button 
          onClick={() => scrollToSection('pricing')} 
          className="hover:underline text-slate-200 transition-colors"
        >
          Pricing
        </button>
        
        <a 
          href="https://docs.cirvia.co" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:underline text-slate-200 transition-colors flex items-center"
        >
          Documentation <ExternalLink className="ml-1 h-4 w-4" />
        </a>
        
        <button 
          onClick={() => scrollToSection('contact')} 
          className="hover:underline text-slate-200 transition-colors"
        >
          Contact
        </button>
      </nav>

      {/* Desktop Action Buttons */}
      <div className="hidden md:flex space-x-3">
        <a 
          href="https://dashboard.cirvia.co" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
        >
          Dashboard <ExternalLink className="ml-1 h-4 w-4" />
        </a>
        
        <button 
          onClick={handleGetStarted} 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-white p-2"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" 
          onClick={closeMobileMenu} 
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-[#0D1B2A] border-l border-slate-800 transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center mb-8">
            <Link to="/" onClick={closeMobileMenu}>
              <img src="/cirvia-logo.png" alt="Cirvia Logo" className="h-8 w-auto" />
            </Link>
            <button onClick={closeMobileMenu} className="text-white p-2">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="space-y-6 mb-8">
            {/* Pure Link for About - should definitely work */}
            <Link 
              to="/about" 
              onClick={closeMobileMenu}
              className="block text-slate-200 hover:text-white transition-colors text-lg"
            >
              About
            </Link>
            
            <button 
              onClick={() => scrollToSection('product')} 
              className="block w-full text-left text-slate-200 hover:text-white transition-colors text-lg"
            >
              Parental AI
            </button>
            
            <button 
              onClick={() => scrollToSection('how-it-works')} 
              className="block w-full text-left text-slate-200 hover:text-white transition-colors text-lg"
            >
              How It Works
            </button>
            
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="block w-full text-left text-slate-200 hover:text-white transition-colors text-lg"
            >
              Pricing
            </button>
            
            <a 
              href="https://docs.cirvia.co" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={closeMobileMenu}
              className="block text-slate-200 hover:text-white transition-colors text-lg flex items-center"
            >
              Documentation <ExternalLink className="ml-2 h-4 w-4" />
            </a>
            
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left text-slate-200 hover:text-white transition-colors text-lg"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Action Buttons */}
          <div className="space-y-3">
            <a 
              href="https://dashboard.cirvia.co" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={closeMobileMenu}
              className="block w-full bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg transition-colors text-center"
            >
              Dashboard
            </a>
            
            <button 
              onClick={handleGetStarted} 
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;