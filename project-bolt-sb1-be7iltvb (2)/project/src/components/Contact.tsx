import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 dark:from-gray-50 dark:via-blue-50 dark:to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-400 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-white dark:text-gray-900">
          Get In Touch
        </h2>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white dark:text-gray-900 mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 dark:text-gray-600 text-lg leading-relaxed">
                I'm always interested in discussing new opportunities, collaborations, or just having a conversation about DevOps, cloud technologies, or sports. Feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-6">
              <a
                href="tel:1234567890"
                className="flex items-center gap-4 p-4 bg-white/10 dark:bg-gray-800/50 rounded-xl hover:bg-white/20 dark:hover:bg-gray-800/70 transition-all duration-300 group"
              >
                <div className="p-3 bg-green-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white dark:text-gray-900">Phone</h4>
                  <p className="text-gray-300 dark:text-gray-600">1234567890</p>
                </div>
              </a>
              
              <a
                href="mailto:utkarsh@example.com"
                className="flex items-center gap-4 p-4 bg-white/10 dark:bg-gray-800/50 rounded-xl hover:bg-white/20 dark:hover:bg-gray-800/70 transition-all duration-300 group"
              >
                <div className="p-3 bg-blue-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white dark:text-gray-900">Email</h4>
                  <p className="text-gray-300 dark:text-gray-600">utkarsh@example.com</p>
                </div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/utkarsh-sharma-507169259/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/10 dark:bg-gray-800/50 rounded-xl hover:bg-white/20 dark:hover:bg-gray-800/70 transition-all duration-300 group"
              >
                <div className="p-3 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white dark:text-gray-900">LinkedIn</h4>
                  <p className="text-gray-300 dark:text-gray-600">Connect with me</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white dark:text-gray-900">
                Send Message
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 dark:text-gray-600 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 dark:bg-gray-700/50 border border-gray-300/30 dark:border-gray-600/30 rounded-lg text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 dark:text-gray-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 dark:bg-gray-700/50 border border-gray-300/30 dark:border-gray-600/30 rounded-lg text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 dark:text-gray-600 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 dark:bg-gray-700/50 border border-gray-300/30 dark:border-gray-600/30 rounded-lg text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 dark:text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/20 dark:bg-gray-700/50 border border-gray-300/30 dark:border-gray-600/30 rounded-lg text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};