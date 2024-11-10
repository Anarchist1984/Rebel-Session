import React from 'react';
import { Bot, Sparkles, Brain, Zap } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full text-orange-400 mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Building the future of automation</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-blue-400 to-orange-500 text-transparent bg-clip-text">
            Your Personal Digital Assistant
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            We're a small team of developers passionate about making your
            digital life easier. Our upcoming tools will revolutionize how you
            research and manage emails.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2">
              <Brain className="w-5 h-5" />
              Join Beta Program
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-blue-950/20 to-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Upcoming Products
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're crafting intelligent tools that understand how you work
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ProductCard
              title="Research Buddy"
              description="A smart Chrome extension that enhances your research workflow. It automatically organizes your findings, generates summaries, and helps you stay focused."
              type="research"
            />
            <ProductCard
              title="Gmail Manager"
              description="Take control of your inbox with AI-powered email management. Automatically categorize, prioritize, and draft responses to your emails."
              type="gmail"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6">
                Why We're Building This
              </h2>
              <div className="space-y-6 text-lg text-gray-400">
                <p>
                  As developers, we've experienced the daily challenges of
                  information overload and email management. We believe
                  automation should feel personal and adapt to your unique
                  workflow.
                </p>
                <p>
                  Our mission is to create tools that work alongside you,
                  learning your preferences and helping you focus on what truly
                  matters.
                </p>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-br from-blue-500/10 to-orange-500/10 p-8 rounded-2xl border border-blue-900/30">
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Zap className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        Built by developers, for everyone
                      </h3>
                      <p className="text-gray-400">
                        We understand the importance of intuitive, powerful
                        tools
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Brain className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        AI-powered, human-focused
                      </h3>
                      <p className="text-gray-400">
                        Technology that adapts to you, not the other way around
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-900/50 via-orange-900/50 to-blue-900/50 p-12 rounded-3xl border border-blue-900/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Be Part of Our Journey
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join our beta program and help shape the future of our products.
              Get early access and special perks.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold transition-all">
              Sign Up for Beta Access
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-900/30 py-8 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-orange-500" />
            <span className="font-semibold">Rebel Session</span>
          </div>
          <div className="flex items-center gap-6 text-gray-400">
            <a href="#" className="hover:text-orange-500 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Contact
            </a>
          </div>
          <p className="text-gray-500">
            © 2024 Rebel Session. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
