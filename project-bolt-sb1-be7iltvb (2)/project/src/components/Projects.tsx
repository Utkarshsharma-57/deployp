import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      title: "Kubernetes Multi-Cloud Orchestration",
      description: "Automated deployment pipeline across AWS, Azure, and GCP using Terraform and Kubernetes operators.",
      category: "DevOps",
      technologies: ["Kubernetes", "Terraform", "AWS", "Azure", "GCP"],
      github: "https://github.com/utkarsh-sharma/k8s-multicloud",
      demo: "https://demo.example.com",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Complete GitOps workflow with automated testing, security scanning, and deployment using GitHub Actions.",
      category: "DevOps", 
      technologies: ["GitHub Actions", "Docker", "SonarCube", "ArgoCD"],
      github: "https://github.com/utkarsh-sharma/cicd-automation",
      demo: "https://demo.example.com",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Serverless Infrastructure as Code",
      description: "AWS Lambda-based microservices with Infrastructure as Code using Terraform and automated monitoring.",
      category: "Cloud",
      technologies: ["AWS Lambda", "Terraform", "CloudWatch", "API Gateway"],
      github: "https://github.com/utkarsh-sharma/serverless-iac",
      demo: "https://demo.example.com",
      image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "DevOps Marketing Platform",
      description: "Marketing automation platform for DevOps tools with analytics dashboard and user engagement tracking.",
      category: "Marketing-Tech",
      technologies: ["React", "Node.js", "MongoDB", "Docker"],
      github: "https://github.com/utkarsh-sharma/devops-marketing",
      demo: "https://demo.example.com",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Container Security Scanner",
      description: "Automated security scanning tool for Docker containers with vulnerability assessment and compliance reports.",
      category: "DevOps",
      technologies: ["Python", "Docker", "Trivy", "Jenkins"],
      github: "https://github.com/utkarsh-sharma/container-security",
      demo: "https://demo.example.com",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const filters = ['All', 'DevOps', 'Cloud', 'Marketing-Tech'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Filter className="w-4 h-4 inline mr-2" />
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-500 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};