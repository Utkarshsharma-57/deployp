import React from 'react';
import { Github, Linkedin, Mail, Phone, Heart, Code, Trophy } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Utkarsh Sharma
            </h3>
            <p className="text-gray-400 dark:text-gray-500 leading-relaxed">
              DevOps & Cloud Native Engineer passionate about bridging technology, discipline, and communication.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span>National Medalist in Judo</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-400 dark:text-gray-500 hover:text-cyan-400 transition-colors duration-200">
                About Me
              </a>
              <a href="#skills" className="text-gray-400 dark:text-gray-500 hover:text-cyan-400 transition-colors duration-200">
                Skills & Tools
              </a>
              <a href="#projects" className="text-gray-400 dark:text-gray-500 hover:text-cyan-400 transition-colors duration-200">
                Projects
              </a>
              <a href="#certifications" className="text-gray-400 dark:text-gray-500 hover:text-cyan-400 transition-colors duration-200">
                Certifications
              </a>
              <a href="#contact" className="text-gray-400 dark:text-gray-500 hover:text-cyan-400 transition-colors duration-200">
                Contact
              </a>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="tel:1234567890"
                className="flex items-center gap-3 text-gray-400 dark:text-gray-500 hover:text-cyan-400 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>1234567890</span>
              </a>
              
              <a
                href="mailto:utkarsh@example.com"
                className="flex items-center gap-3 text-gray-400 dark:text-gray-500 hover:text-cyan-400 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>utkarsh@example.com</span>
              </a>
              
              <div className="flex gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/utkarsh-sharma-507169259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 dark:bg-gray-700 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                
                <a
                  href="https://github.com/utkarsh-sharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 dark:bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <span>© 2024 Utkarsh Sharma. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and</span>
              <Code className="w-4 h-4 text-cyan-400" />
            </div>
            
            <div className="text-sm text-gray-500 dark:text-gray-400">
              DevOps Engineer • Cloud Native Enthusiast • National Judo Medalist
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};