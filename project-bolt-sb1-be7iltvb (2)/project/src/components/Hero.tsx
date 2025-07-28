import React from 'react';
import { Github, Linkedin, Mail, Phone, Cloud, Server, Code } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 dark:from-gray-50 dark:via-blue-50 dark:to-gray-50 flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float">
          <Cloud className="w-16 h-16 text-cyan-400 dark:text-cyan-600 opacity-30" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Server className="w-12 h-12 text-blue-400 dark:text-blue-600 opacity-30" />
        </div>
        <div className="absolute bottom-32 left-20 animate-float">
          <Code className="w-14 h-14 text-purple-400 dark:text-purple-600 opacity-30" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed">
          <Cloud className="w-20 h-20 text-cyan-400 dark:text-cyan-600 opacity-20" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in">
            Utkarsh Sharma
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 dark:text-gray-700 mb-4 animate-slide-up">
            DevOps & Cloud Native Engineer
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 dark:text-gray-600 mb-12 max-w-2xl mx-auto animate-slide-up-delayed">
            "Bridging Technology, Discipline, and Communication"
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-delayed">
            <a
              href="https://www.linkedin.com/in/utkarsh-sharma-507169259/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            
            <a
              href="tel:1234567890"
              className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Call Me
            </a>
            
            <a
              href="mailto:utkarsh@example.com"
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
            
            <a
              href="https://github.com/utkarsh-sharma"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};