import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

export const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "The Future of DevOps: Embracing GitOps and Platform Engineering",
      excerpt: "Exploring how GitOps principles and platform engineering are reshaping the DevOps landscape, making deployments more reliable and teams more productive.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "DevOps",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Cloud-Native Security: Zero Trust in Kubernetes",
      excerpt: "Implementing zero trust security models in Kubernetes environments, covering network policies, service mesh, and runtime security best practices.",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "Cloud Security",
      image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Marketing in Tech: Lessons from Sports Psychology",
      excerpt: "How the mental discipline and strategy from competitive Judo translates into effective marketing strategies for technical products and services.",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "Marketing",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Infrastructure as Code: Beyond Terraform",
      excerpt: "Exploring modern IaC tools and practices, including Pulumi, CDK, and emerging declarative infrastructure management patterns.",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Infrastructure",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-cyan-500" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Blog & Thoughts
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sharing insights on DevOps trends, cloud strategy, marketing in tech, and lessons learned from competitive sports
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-cyan-500 text-white text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <button className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-medium hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors duration-200 group">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};