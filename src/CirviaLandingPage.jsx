import React, { useState } from 'react';
import { 
  CheckCircle, 
  ShieldCheck, 
  MessageSquare, 
  Eye, 
  ArrowRight,
  Star,
  Users,
  Lock,
  Zap,
  Code,
  ChevronDown,
  ChevronUp,
  Send,
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from "lucide-react";

export default function EnhancedCirviaLandingPage() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    integrationType: 'general'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '', integrationType: 'general' });
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How does Parental AI integrate with existing platforms?",
      answer: "Parental AI provides a lightweight SDK that can be easily integrated into any platform or application. Our team provides full support during integration, typically completed within 1-2 weeks."
    },
    {
      question: "What types of threats does Parental AI detect?",
      answer: "Our AI detects predatory behavior, cyberbullying, inappropriate content sharing, stranger danger, grooming attempts, and suspicious communication patterns using advanced machine learning algorithms."
    },
    {
      question: "How accurate is the threat detection?",
      answer: "Our AI maintains 99.2% accuracy in threat detection with less than 0.1% false positive rate, continuously improving through machine learning and regular updates."
    },
    {
      question: "Is children's data kept private and secure with COPPA/CIPRA compliance?",
      answer: "Absolutely. We are fully compliant with both COPPA and CIPRA regulations. We use end-to-end encryption, never store personal conversations, and only analyze threat patterns in real-time. Parents receive complete visibility while children's privacy is fully protected according to federal regulations."
    },
    {
      question: "What platforms does Parental AI support?",
      answer: "We support all major gaming platforms (Roblox, Minecraft, Fortnite), social media apps (Snapchat, Instagram, TikTok), messaging apps, and can integrate with any custom platform."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent & Product Manager",
      company: "TechCorp",
      testimonial: "Parental AI gave me the visibility and control I needed as a parent. Finally, I can see what my daughter is experiencing online and protect her from threats while respecting her privacy. The transparency is incredible.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "CTO",
      company: "GameStudio Inc",
      testimonial: "The COPPA compliance and parent visibility features made this a no-brainer for us. Parents love having complete transparency into their children's interactions, and integration was seamless.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Community Manager",
      company: "KidsApp",
      testimonial: "The threat detection is incredibly accurate. We've prevented numerous harmful interactions since implementing Parental AI.",
      rating: 5
    }
  ];

  const integrationPartners = [
    { name: "Gaming", logo: "🎮" },
    { name: "Social Media", logo: "👻" },
    { name: "Consoles", logo: "⛏️" },
    { name: "Messaging Apps", logo: "💬" },
    { name: "Education", logo: "🏆" }
  ];

  return (
    <div className="min-h-screen bg-[#0D1B2A] text-white">
      {/* Enhanced Header */}
      <header className="p-6 flex justify-between items-center shadow-md bg-[#0D1B2A] border-b border-slate-800 sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <img src="/cirvia-logo.png" alt="Cirvia Logo" className="h-10 w-auto" />
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:underline text-slate-200 transition-colors">About</a>
          <a href="#product" className="hover:underline text-slate-200 transition-colors">Parental AI</a>
          <a href="#how-it-works" className="hover:underline text-slate-200 transition-colors">How It Works</a>
          <a href="#pricing" className="hover:underline text-slate-200 transition-colors">Pricing</a>
          <a href="https://docs.cirvia.co" target="_blank" rel="noopener noreferrer" className="hover:underline text-slate-200 transition-colors flex items-center">
            Documentation <ExternalLink className="ml-1 h-4 w-4" />
          </a>
          <a href="#contact" className="hover:underline text-slate-200 transition-colors">Contact</a>
        </nav>
        <div className="flex space-x-3">
          <a href="https://dashboard.cirvia.co" target="_blank" rel="noopener noreferrer" className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center">
            Dashboard <ExternalLink className="ml-1 h-4 w-4" />
          </a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center px-4 md:px-20">
        <div className="flex justify-center mb-6">
          <img src="/cirvia-logo.png" alt="Cirvia Logo" className="h-48 w-auto" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Building Technology That <span className="text-blue-400">Empowers Parents</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-slate-300 leading-relaxed">
          Cirvia empowers parents with complete visibility into their children's digital interactions. Our COPPA and CIPRA compliant Parental AI gives parents the tools they need to protect their children while ensuring full transparency and control.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg shadow-lg transition-colors flex items-center justify-center">
            Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="bg-slate-100 hover:bg-white text-[#0D1B2A] px-8 py-4 rounded-lg text-lg shadow-lg transition-colors">
            Watch Demo
          </button>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="bg-white text-[#0D1B2A] py-16 px-4 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0D1B2A] mb-6">Introducing Parental AI</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-700 leading-relaxed">
            <strong>Empowering Parents with Complete Visibility.</strong> Parental AI is a real-time AI defense layer that gives parents full control and transparency over their children's digital interactions. Our COPPA and CIPRA compliant solution instantly detects threats, blocks predatory messages, and provides comprehensive visibility into all online activities.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <img src="/parental-ai-logo.png" alt="Parental AI Logo" className="h-48 w-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl shadow-lg border p-8 bg-white hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4 text-[#0D1B2A]">
              <ShieldCheck className="mr-3 h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-bold">AI-Powered Protection</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Advanced AI monitors content in real-time, detecting threats and harmful messages using cutting-edge sentiment analysis. <strong>Parents receive instant alerts</strong> with complete visibility into all flagged interactions.
            </p>
          </div>

          <div className="rounded-xl shadow-lg border p-8 bg-white hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4 text-[#0D1B2A]">
              <MessageSquare className="mr-3 h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-bold">Threat Detection</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Blocks predators and suspicious messages before they reach your child. <strong>Every interaction is logged</strong> and available for parent review through our comprehensive dashboard.
            </p>
          </div>

          <div className="rounded-xl shadow-lg border p-8 bg-white hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4 text-[#0D1B2A]">
              <Eye className="mr-3 h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-bold">Complete Parent Visibility</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>Empowering parents with transparency.</strong> Comprehensive dashboard provides complete visibility into all digital interactions, flagged content, and real-time threat analysis. Parents stay informed and in control.
            </p>
          </div>

          <div className="rounded-xl shadow-lg border p-8 bg-white hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4 text-[#0D1B2A]">
              <Lock className="mr-3 h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-bold">COPPA & CIPRA Compliant</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>Privacy-first protection.</strong> Our solution is fully compliant with COPPA and CIPRA regulations, ensuring children's data is protected while giving parents the visibility they need to keep their kids safe.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gray-50 py-16 px-4 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0D1B2A] mb-6">How Parental AI Empowers Parents</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            <strong>Complete visibility, full control.</strong> Our three-step process ensures parents have complete transparency into their children's digital interactions while maintaining COPPA and CIPRA compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-xl font-bold text-[#0D1B2A] mb-4">Real-Time Monitoring</h3>
            <p className="text-gray-700">
              Our AI continuously analyzes all incoming messages and content in real-time, identifying potential threats before they reach your child.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-xl font-bold text-[#0D1B2A] mb-4">Intelligent Filtering</h3>
            <p className="text-gray-700">
              Advanced algorithms detect and block harmful content, predatory behavior, and suspicious communications while allowing safe interactions.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="text-xl font-bold text-[#0D1B2A] mb-4">Parent Dashboard & Alerts</h3>
            <p className="text-gray-700">
              <strong>Complete visibility for parents.</strong> Parents receive instant notifications and can review all flagged content through an intuitive dashboard. Every interaction is logged and available for review, giving parents full control and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="bg-white text-[#0D1B2A] py-16 px-4 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-12">See Parental AI in Action</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              className="w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/Rb-7tPUuGn8"
              title="Parental AI Official Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="bg-gray-50 py-16 px-4 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0D1B2A] mb-6">Trusted by Leading Platforms</h2>
          <p className="text-xl text-gray-700">
            Parental AI integrates seamlessly with the platforms your children use most.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {integrationPartners.map((partner, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-2">{partner.logo}</div>
                <p className="text-sm font-semibold text-gray-700">{partner.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 px-4 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0D1B2A] mb-6">What Our Users Say</h2>
          <p className="text-xl text-gray-700">
            Hear from parents and platform developers who trust Parental AI.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.testimonial}"</p>
              <div>
                <p className="font-semibold text-[#0D1B2A]">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-50 py-16 px-4 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0D1B2A] mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-700">
            Choose the plan that fits your needs. All plans include 24/7 support and regular updates.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-white rounded-lg shadow-md p-8 border">
            <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">Starter</h3>
            <div className="text-4xl font-bold text-[#0D1B2A] mb-6">
              $99<span className="text-lg font-normal text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Up to 1,000 users</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Real-time threat detection</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Basic dashboard</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Email support</li>
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors">
              Get Started
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-blue-500 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">Professional</h3>
            <div className="text-4xl font-bold text-[#0D1B2A] mb-6">
              $299<span className="text-lg font-normal text-gray-600">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Up to 10,000 users</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Advanced AI protection</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Full analytics dashboard</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Priority support</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Custom integrations</li>
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-lg shadow-md p-8 border">
            <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4">Enterprise</h3>
            <div className="text-4xl font-bold text-[#0D1B2A] mb-6">
              Custom<span className="text-lg font-normal text-gray-600"> pricing</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Unlimited users</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />White-label solution</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Dedicated support</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />SLA guarantee</li>
              <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" />Custom features</li>
            </ul>
            <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 px-4 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0D1B2A] mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-700">
            Everything you need to know about Parental AI and how it works.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-semibold text-[#0D1B2A]">{faq.question}</h3>
                {expandedFaq === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {expandedFaq === index && (
                <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-16 px-4 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0D1B2A] mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-700">
            Ready to empower parents with complete visibility and COPPA-compliant protection? Contact us for a demo or integration consultation.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-[#0D1B2A] mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Integration Interest</label>
                <select
                  name="integrationType"
                  value={formData.integrationType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="general">General Inquiry</option>
                  <option value="gaming">Gaming Platform</option>
                  <option value="social">Social Media</option>
                  <option value="messaging">Messaging App</option>
                  <option value="custom">Custom Integration</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors flex items-center justify-center"
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">info@cirvia.co</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">+1 (470) 526-8303</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Atlanta, GA</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-[#0D1B2A] mb-6">Quick Links</h3>
              <div className="space-y-3">
                <a href="https://docs.cirvia.co" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 transition-colors flex items-center">
                  📚 Documentation & API Reference <ExternalLink className="ml-2 h-4 w-4" />
                </a>
                <a href="https://dashboard.cirvia.co" target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:text-blue-800 transition-colors flex items-center">
                  🔧 Developer Dashboard <ExternalLink className="ml-2 h-4 w-4" />
                </a>
                <a href="#" className="block text-blue-600 hover:text-blue-800 transition-colors">
                  🛠️ Integration Guide
                </a>
                <a href="#" className="block text-blue-600 hover:text-blue-800 transition-colors">
                  📊 Case Studies
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D1B2A] text-white py-12 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/cirvia-logo.png" alt="Cirvia Logo" className="h-12 w-auto mb-4" />
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
                <li><a href="#product" className="text-slate-300 hover:text-white transition-colors">Parental AI</a></li>
                <li><a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a></li>
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
                <li><a href="#" className="text-slate-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
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
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors text-sm">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}