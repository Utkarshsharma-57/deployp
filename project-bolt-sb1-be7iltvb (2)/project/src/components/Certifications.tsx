import React from 'react';
import { Award, Shield, Trophy, Star } from 'lucide-react';

export const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      type: "Cloud",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      year: "2023",
      type: "DevOps",
      icon: <Star className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "HashiCorp Terraform Associate",
      issuer: "HashiCorp",
      year: "2022",
      type: "Infrastructure",
      icon: <Shield className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      year: "2022",
      type: "Containerization",
      icon: <Star className="w-8 h-8" />,
      color: "from-green-500 to-teal-500"
    }
  ];

  const achievements = [
    {
      title: "National Judo Championship",
      description: "Gold Medal - Under 81kg Category",
      year: "2021",
      location: "New Delhi, India",
      icon: <Trophy className="w-12 h-12" />,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "State Judo Championship",
      description: "Silver Medal - Under 81kg Category", 
      year: "2020",
      location: "Mumbai, India",
      icon: <Award className="w-12 h-12" />,
      color: "from-gray-400 to-gray-600"
    },
    {
      title: "Regional Judo Tournament",
      description: "Bronze Medal - Under 81kg Category",
      year: "2019",
      location: "Bangalore, India",
      icon: <Award className="w-12 h-12" />,
      color: "from-amber-600 to-orange-700"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 dark:bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white dark:text-gray-900">
          Certifications & Achievements
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-white dark:text-gray-900 mb-8 text-center">
              Technical Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className="bg-gray-800 dark:bg-white rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} text-white flex-shrink-0`}>
                      {cert.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white dark:text-gray-900 mb-2">
                        {cert.title}
                      </h4>
                      <p className="text-gray-400 dark:text-gray-600 mb-1">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500 dark:text-gray-500">
                          {cert.year}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${cert.color} text-white`}>
                          {cert.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sports Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-white dark:text-gray-900 mb-8 text-center">
              Judo Achievements
            </h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="bg-gray-800 dark:bg-white rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} text-white flex-shrink-0`}>
                      {achievement.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white dark:text-gray-900 mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-400 dark:text-gray-600 mb-2">
                        {achievement.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                        <span>{achievement.year}</span>
                        <span>•</span>
                        <span>{achievement.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl text-center">
              <Trophy className="w-16 h-16 text-white mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">
                National Medalist in Judo
              </h4>
              <p className="text-yellow-100">
                Demonstrating discipline, dedication, and continuous improvement in both sports and technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};