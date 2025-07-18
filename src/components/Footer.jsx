import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0D1B2A] text-white py-12 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/">
              <img src="/cirvia-logo.png" alt="Cirvia Logo" className="h-12 w-auto mb-4" />
            </Link>
            <p className="text-slate-300 mb-4">
              Empowering parents with complete visibility and COPPA-compliant protection for their children's digital interactions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                💼
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                💻
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('product')} className="text-slate-300 hover:text-white transition-colors">Parental AI</button></li>
              <li><button onClick={() => scrollToSection('how-it-works')} className="text-slate-300 hover:text-white transition-colors">How It Works</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="text-slate-300 hover:text-white transition-colors">Pricing</button></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="https://docs.cirvia.co" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors">About Us</Link></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-white transition-colors">Contact</button></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">COPPA Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-300 text-sm">
            © 2025 Cirvia. All rights reserved. COPPA & CIPRA Compliant.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://dashboard.cirvia.co" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors text-sm">
              Dashboard
            </a>
            <a href="https://docs.cirvia.co" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors text-sm">
              Documentation
            </a>
            <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-white transition-colors text-sm">
              Support
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;