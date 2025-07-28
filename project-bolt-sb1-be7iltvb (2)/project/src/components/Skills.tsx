import React from 'react';
import { 
  Container, 
  Cloud, 
  Settings, 
  Code, 
  GitBranch, 
  Server, 
  Database,
  Mic,
  Users,
  Target
} from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "DevOps",
      icon: <Settings className="w-8 h-8" />,
      skills: ["Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "CI/CD"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cloud Platforms", 
      icon: <Cloud className="w-8 h-8" />,
      skills: ["AWS", "Azure", "GCP", "CloudFormation", "ARM Templates"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools & Languages",
      icon: <Code className="w-8 h-8" />,
      skills: ["Bash", "Python", "Helm", "Ansible", "Git", "Linux"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-8 h-8" />,
      skills: ["Marketing", "Public Speaking", "Team Leadership", "Project Management"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 dark:bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white dark:text-gray-900">
          Skills & Tools
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-gray-800 dark:bg-white rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mb-4`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white dark:text-gray-900 mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 px-3 py-2 bg-gray-700 dark:bg-gray-100 rounded-lg text-gray-300 dark:text-gray-700 hover:bg-gray-600 dark:hover:bg-gray-200 transition-colors duration-200"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};