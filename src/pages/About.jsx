import React from 'react';
import { Shield, Users, Target, Award, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import cedric from '../assets/cedric.jpg';
import shem from '../assets/shem.jpeg'; 
import isaac from '../assets/isaac.jpeg';

export default function About() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => {
    // Navigate to home page contact section
    window.location.href = '/#contact';
  };

  const teamMembers = [
    {
      name: "Cedric Hill",
      role: "Founder",
      image: cedric,
      bio: "Cedric B. Hill is the Founder and Visionary of Cirvia, a first-of-its-kind AI-powered platform designed to empower parents with full visibility and control over their children’s digital environments. A proud U.S. Marine Corps veteran, seasoned technologist, and award-winning community leader, Cedric brings over two decades of experience in information technology, operations, and mission-driven innovation to his work protecting the next generation."
    },
    {
      name: "Shem Collier",
      role: "President",
      image: shem,
      bio: "Strategic leader overseeing Cirvia's operations and growth initiatives. Shem brings deep expertise in scaling technology and building partnerships with platforms that prioritize child safety. Focused on ensuring Parental AI reaches families who need it most."
    },
    {
      name: "Isaac Barnes",
      role: "Advisory Board Member",
      image: isaac,
      bio: "Technology and business development partner driving innovation in AI-powered child protection. Isaac specializes in building strategic partnerships with platforms, companies, and governments to expand the reach of Parental AI. His focus is on creating solutions that empower parents while ensuring compliance with child safety regulations."
    },
    {
      name: "Ramona M. Tascoe",
      role: "Various Roles",
      image: "/placeholder.jpg", // Placeholder for additional team members
      bio: "Our team includes experts in AI, child safety, and business development who are dedicated to delivering technology that truly empowers parents and protects children online
    }
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Child Safety First",
      description: "Every decision we make is guided by our commitment to protecting children in digital spaces while respecting their privacy and development."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Parent Empowerment",
      description: "We believe parents should have complete visibility and control over their children's digital interactions, with full transparency and COPPA compliance."
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Precision & Accuracy",
      description: "Our AI maintains 99.2% accuracy in threat detection, ensuring parents receive reliable alerts without overwhelming false positives."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Regulatory Excellence",
      description: "Full compliance with COPPA and CIPRA regulations, ensuring children's data is protected while providing parents the visibility they need."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0D1B2A] text-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 text-center px-4 md:px-20">
        <div className="flex justify-center mb-6">
          <img src="/cirvia-logo.png" alt="Cirvia Logo" className="h-32 w-auto" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          About <span className="text-blue-400">Cirvia</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-slate-300 leading-relaxed">
          We're building technology that empowers parents with complete visibility into their children's digital interactions. Our mission is to create a safer digital world for families through AI-powered protection and transparency.
        </p>
        <button 
          onClick={handleGetStarted}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg shadow-lg transition-colors flex items-center justify-center mx-auto"
        >
          Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </section>

      {/* Mission Section */}
      <section className="bg-white text-[#0D1B2A] py-16 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0D1B2A] mb-6">Our Mission</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-700 leading-relaxed">
              <strong>Empowering parents through transparency and control.</strong> We believe every parent deserves complete visibility into their child's digital interactions. Our COPPA and CIPRA compliant technology gives parents the tools they need to protect their children while maintaining trust and communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">Why We Built Parental AI</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In today's digital world, children face unprecedented online risks from predators, cyberbullying, and inappropriate content. Traditional parental controls fall short, leaving parents without visibility into their children's actual interactions.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Parental AI changes this.</strong> Our real-time AI monitoring provides complete transparency into all digital interactions, blocking threats before they reach children while giving parents the comprehensive visibility they need to keep their families safe.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We're not just building software – we're creating peace of mind for parents and safer digital experiences for children everywhere.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <h4 className="text-xl font-bold text-[#0D1B2A] mb-4">The Problem We Solve</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>99% of children encounter strangers online by age 14</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>42% of children experience cyberbullying</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Parents have limited visibility into actual online interactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Traditional controls block platforms entirely, limiting healthy digital development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0D1B2A] mb-6">Our Values</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Everything we do is guided by our commitment to child safety, parent empowerment, and regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {value.icon}
                  <h3 className="text-xl font-bold text-[#0D1B2A] ml-3">{value.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0D1B2A] mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our leadership team combines expertise in AI, child safety, and business development to deliver technology that truly empowers parents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-200 flex items-center justify-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 items-center justify-center">
                    <span className="text-4xl font-bold text-blue-600">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="bg-gray-50 py-16 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0D1B2A] mb-6">Parental AI by the Numbers</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our technology is making a real difference for families across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.2%</div>
              <p className="text-gray-700 font-semibold">Threat Detection Accuracy</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">&lt;0.1%</div>
              <p className="text-gray-700 font-semibold">False Positive Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1-2</div>
              <p className="text-gray-700 font-semibold">Weeks Integration Time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-700 font-semibold">COPPA/CIPRA Compliant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0D1B2A] py-16 px-4 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Empower Parents?</h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Join the growing number of platforms that trust Parental AI to provide complete parent visibility and COPPA-compliant child protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleGetStarted}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg shadow-lg transition-colors flex items-center justify-center"
            >
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <a 
              href="https://docs.cirvia.co" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-100 hover:bg-white text-[#0D1B2A] px-8 py-4 rounded-lg text-lg shadow-lg transition-colors"
            >
              View Documentation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}