import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Heart, 
  MapPin, 
  Waves, 
  Radio, 
  ArrowRight, 
  CheckCircle, 
  Eye,
  Lock,
  MessageSquare,
  Smartphone,
  Globe,
  Zap,
  Brain,
  Navigation,
  Activity
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Products() {
  const [activeTab, setActiveTab] = useState('overview');

  const scrollToProduct = (productId) => {
    const element = document.getElementById(productId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D1B2A] text-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 text-center px-4 md:px-20">
        <div className="flex justify-center mb-6">
          <img src="/cirvia-logo.png" alt="Cirvia Logo" className="h-32 w-auto" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Our <span className="text-blue-400">Products</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-slate-300 leading-relaxed">
          Cirvia builds technology that empowers and connects. From protecting children online to helping people discover meaningful experiences, our products create safer, more vibrant digital communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToProduct('parental-ai')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg shadow-lg transition-colors flex items-center justify-center"
          >
            Explore Parental AI <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button 
            onClick={() => scrollToProduct('greenheart-lime')}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg shadow-lg transition-colors flex items-center justify-center"
          >
            Discover Greenheart Lime <Heart className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Products Overview */}
      <section className="bg-white text-[#0D1B2A] py-16 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0D1B2A] mb-6">Two Platforms, One Mission</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Building technology that protects families and connects communities through innovative AI-powered solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Parental AI Overview */}
            <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200">
              <div className="flex items-center mb-6">
                <Shield className="h-12 w-12 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-[#0D1B2A]">Parental AI</h3>
                  <p className="text-blue-600 font-semibold">Child Protection Platform</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Empowering parents with complete visibility into their children's digital interactions. COPPA and CIPRA compliant real-time AI protection.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">Real-time threat detection</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">Complete parent visibility</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">COPPA/CIPRA compliant</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">99.2% accuracy rate</span>
                </div>
              </div>
              <div className="flex space-x-3">
                <button 
                  onClick={() => scrollToProduct('parental-ai')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Learn More
                </button>
                <Link 
                  to="/contact" 
                  className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Greenheart Lime Overview */}
            <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200">
              <div className="flex items-center mb-6">
                <Heart className="h-12 w-12 text-green-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-[#0D1B2A]">Greenheart Lime</h3>
                  <p className="text-green-600 font-semibold">Experience Discovery Platform</p>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">Coming Soon</span>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A mood-based discovery platform that connects you with experiences, locations, and activities that match your vibe and energy.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Pulse: Local mood-based discovery</span>
                </div>
                <div className="flex items-center">
                  <Waves className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Flow: City vibe matching</span>
                </div>
                <div className="flex items-center">
                  <Radio className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Frequency: AI mood assistant</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Web & mobile platform</span>
                </div>
              </div>
              <div className="flex space-x-3">
                <button 
                  onClick={() => scrollToProduct('greenheart-lime')}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Learn More
                </button>
                <button className="border border-green-600 text-green-600 px-6 py-2 rounded-lg opacity-50 cursor-not-allowed">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parental AI Detailed Section */}
      <section id="parental-ai" className="bg-gray-50 py-16 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-16 w-16 text-blue-600 mr-4" />
              <div>
                <h2 className="text-4xl font-bold text-[#0D1B2A]">Parental AI</h2>
                <p className="text-xl text-blue-600">Empowering Parents Through Visibility</p>
              </div>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The first COPPA and CIPRA compliant AI platform that gives parents complete visibility into their children's digital interactions while protecting privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <Eye className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-2">Complete Visibility</h3>
              <p className="text-gray-700 text-sm">Real-time monitoring with full parent transparency</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <MessageSquare className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-2">Threat Detection</h3>
              <p className="text-gray-700 text-sm">AI-powered detection of predators and harmful content</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <Lock className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-2">Privacy Compliant</h3>
              <p className="text-gray-700 text-sm">Full COPPA and CIPRA regulatory compliance</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <Zap className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-2">99.2% Accuracy</h3>
              <p className="text-gray-700 text-sm">Industry-leading threat detection accuracy</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#0D1B2A] mb-6">Integration Made Simple</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-bold text-[#0D1B2A] mb-2">Easy SDK Integration</h4>
                <p className="text-gray-700 text-sm">Lightweight SDK with comprehensive documentation</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-blue-600">2</span>
                </div>
                <h4 className="font-bold text-[#0D1B2A] mb-2">Real-time Protection</h4>
                <p className="text-gray-700 text-sm">Immediate threat detection and blocking</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-blue-600">3</span>
                </div>
                <h4 className="font-bold text-[#0D1B2A] mb-2">Parent Dashboard</h4>
                <p className="text-gray-700 text-sm">Complete visibility and control for parents</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link 
                to="/#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors inline-flex items-center"
              >
                Get Started with Parental AI <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Greenheart Lime Detailed Section */}
      <section id="greenheart-lime" className="bg-white py-16 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-16 w-16 text-green-600 mr-4" />
              <div>
                <h2 className="text-4xl font-bold text-[#0D1B2A]">Greenheart Lime</h2>
                <p className="text-xl text-green-600">Where Mood Meets Discovery</p>
                <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">Coming Soon</span>
              </div>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A revolutionary platform that uses AI to understand your mood and connects you with experiences, locations, and activities that resonate with your current energy and vibe.
            </p>
          </div>

          {/* Platform Info */}
          <div className="bg-green-50 rounded-xl p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">One Portal, Three Modules</h3>
                <p className="text-gray-700 mb-6">
                  Greenheart Lime is available as both a web application and mobile platform, featuring three integrated modules that work together to enhance your experience discovery journey.
                </p>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <Globe className="h-6 w-6 text-green-600 mr-2" />
                    <span className="text-gray-700 font-semibold">Web App</span>
                  </div>
                  <div className="flex items-center">
                    <Smartphone className="h-6 w-6 text-green-600 mr-2" />
                    <span className="text-gray-700 font-semibold">Mobile App</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-lg font-bold text-[#0D1B2A] mb-4">Platform Features</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-gray-700 text-sm">Cross-platform synchronization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-gray-700 text-sm">Real-time mood analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-gray-700 text-sm">Personalized recommendations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-gray-700 text-sm">Location-based discovery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Three Modules */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Pulse Module */}
            <div className="bg-gradient-to-br from-pink-100 to-red-100 rounded-xl p-8 border-2 border-pink-200">
              <div className="text-center mb-6">
                <MapPin className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#0D1B2A]">Pulse</h3>
                <p className="text-pink-600 font-semibold">Local Mood Discovery</p>
                <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2 py-1 rounded-full">Coming Soon</span>
              </div>
              <p className="text-gray-700 mb-6 text-center">
                Discover "pulses" - locations within a 25-mile radius that match your current mood and energy, featuring activities and experiences that resonate with how you're feeling today.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Navigation className="h-4 w-4 text-pink-600 mr-2" />
                  <span className="text-gray-700 text-sm">25-mile radius discovery</span>
                </div>
                <div className="flex items-center">
                  <Activity className="h-4 w-4 text-pink-600 mr-2" />
                  <span className="text-gray-700 text-sm">Mood-matched activities</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-4 w-4 text-pink-600 mr-2" />
                  <span className="text-gray-700 text-sm">Real-time availability</span>
                </div>
              </div>
            </div>

            {/* Flow Module */}
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-8 border-2 border-blue-200">
              <div className="text-center mb-6">
                <Waves className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#0D1B2A]">Flow</h3>
                <p className="text-blue-600 font-semibold">City Vibe Matching</p>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">Coming Soon</span>
              </div>
              <p className="text-gray-700 mb-6 text-center">
                Explore different cities and locations that match your personal vibe and energy. Discover places across the world where your personality and mood feel at home.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Globe className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-gray-700 text-sm">Global city discovery</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-gray-700 text-sm">Vibe compatibility</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-gray-700 text-sm">Cultural alignment</span>
                </div>
              </div>
            </div>

            {/* Frequency Module */}
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl p-8 border-2 border-purple-200">
              <div className="text-center mb-6">
                <Radio className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#0D1B2A]">Frequency</h3>
                <p className="text-purple-600 font-semibold">AI Mood Assistant</p>
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">Coming Soon</span>
              </div>
              <p className="text-gray-700 mb-6 text-center">
                An intelligent LLM that learns from your input to understand how you're feeling and provides personalized suggestions for activities in Pulse and Flow based on your emotional state.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Brain className="h-4 w-4 text-purple-600 mr-2" />
                  <span className="text-gray-700 text-sm">AI mood analysis</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-4 w-4 text-purple-600 mr-2" />
                  <span className="text-gray-700 text-sm">Personalized suggestions</span>
                </div>
                <div className="flex items-center">
                  <Activity className="h-4 w-4 text-purple-600 mr-2" />
                  <span className="text-gray-700 text-sm">Cross-module integration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon CTA */}
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">Get Ready for Greenheart Lime</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Be among the first to experience mood-based discovery. Sign up for updates and early access to Greenheart Lime when it launches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#contact" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center"
              >
                Join Waitlist <Heart className="ml-2 h-5 w-5" />
              </Link>
              <button className="border border-green-600 text-green-600 px-8 py-3 rounded-lg opacity-50 cursor-not-allowed">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0D1B2A] py-16 px-4 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore Our Products?</h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Whether you're looking to protect your family with Parental AI or discover new experiences with Greenheart Lime, Cirvia has the technology to enhance your digital life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg shadow-lg transition-colors flex items-center justify-center"
            >
              Get Started with Parental AI <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
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

export default Products;