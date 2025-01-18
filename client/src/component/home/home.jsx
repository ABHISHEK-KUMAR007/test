import React, { useState } from 'react';
import { ClipboardList, TrendingUp, Shield, Clock, Truck, FileText, Users, Building2, Menu, X, ChevronRight } from "lucide-react";
import { Link } from 'react-router-dom';
const StatCard = ({ icon: Icon, count, label }) => (
  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 text-center transform hover:scale-105 transition-all">
    <Icon className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
    <div className="text-3xl font-bold text-gray-900 mb-1">{count}+</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all group">
    <div className="bg-blue-50 p-3 rounded-lg w-fit mb-4 group-hover:bg-blue-100 transition-colors">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const features = [
    {
      icon: ClipboardList,
      title: "Smart Bid Management",
      description: "Streamline your bidding process with AI-powered insights and real-time tracking"
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Make data-driven decisions with comprehensive performance metrics and forecasting"
    },
    {
      icon: Shield,
      title: "Safety Compliance",
      description: "Automated compliance tracking and certification management system"
    },
    {
      icon: Clock,
      title: "Real-time Monitoring",
      description: "Get instant alerts and live updates on your mining operations"
    },
    {
      icon: Truck,
      title: "Smart Logistics",
      description: "Optimize your supply chain with AI-powered logistics management"
    },
    {
      icon: FileText,
      title: "Digital Documentation",
      description: "Centralized document management with blockchain verification"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="text-blue-600 bg-blue-50 p-2 rounded-lg">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-gray-900">CoalOptimizer</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <button
                onClick={() => setShowModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden">
              {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-3 space-y-3">
              <a href="#features" className="block text-gray-600">Features</a>
              <a href="#about" className="block text-gray-600">About</a>
              <button
                onClick={() => setShowModal(true)}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative pt-24 pb-32 px-4 bg-gradient-to-b from-gray-900 to-blue-900">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMEwwIDMwbDMwIDMwIDMwLTMwTDMwIDB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Optimize Your Mining Operations
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Streamline your coal mining operations with AI-powered insights, real-time monitoring, and advanced analytics
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="group bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center space-x-2 mx-auto"
          >
            <span>Get Started</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard icon={Users} count="1,500" label="Active Vendors" />
          <StatCard icon={Building2} count="300" label="Mining Sites" />
          <StatCard icon={TrendingUp} count="98" label="Efficiency Rate" />
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the next generation of mining operations management with our comprehensive suite of tools
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Access Portal</h2>
              <div className="space-y-4">
              <button
  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
>
  <Link to="/login" className="block w-full h-full text-center">
    Login
  </Link>
</button>
<button
  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors"
>
  <Link to="/signup" className="block w-full h-full text-center">
    Register
  </Link>
</button>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-full text-gray-600 hover:text-gray-900 py-2 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center text-gray-600">
          <p>© 2025 CoalOptimizer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;