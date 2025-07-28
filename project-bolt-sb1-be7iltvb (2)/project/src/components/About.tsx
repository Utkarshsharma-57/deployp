import React from 'react';
import { Award, Target, Users, Mic } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-56 h-56 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-gray-600 dark:text-gray-400">US</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a passionate DevOps and Cloud Native Engineer with a unique blend of technical expertise and athletic discipline. My journey combines cutting-edge technology with the dedication I've learned through competitive sports.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                As a national medalist in Judo, I bring the same level of discipline, focus, and continuous improvement mindset to my work in automation, infrastructure, and cloud-native technologies.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <Target className="w-8 h-8 text-cyan-500" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Automation</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Infrastructure & CI/CD</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <Mic className="w-8 h-8 text-purple-500" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Communication</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Marketing & Speaking</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <Award className="w-8 h-8 text-yellow-500" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Achievement</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">National Medalist</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <Users className="w-8 h-8 text-green-500" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Leadership</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Team Management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};