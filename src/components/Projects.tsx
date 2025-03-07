
import React, { useEffect, useRef } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product search, shopping cart, and payment processing.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "AI Content Generator",
      description: "An AI-powered application that generates content for blogs, social media, and marketing materials. Integrates with OpenAI's GPT-3 and has a user-friendly interface.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      tags: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Health & Fitness Tracker",
      description: "A mobile-responsive web application for tracking workouts, nutrition, and health metrics. Features data visualization and progress tracking.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
      tags: ["React", "Chart.js", "Firebase", "Material UI"],
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white" ref={sectionRef}>
      <div className="section-container reveal">
        <h2 className="section-title text-center">Featured Projects</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          Here are some of the projects I've worked on. Each project solves a real problem and showcases different skills and technologies.
        </p>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`order-1 ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              <div className={`order-2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                <h3 className="text-2xl font-bold mb-4 text-portfolio-darkBlue">{project.title}</h3>
                <p className="text-lg mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-portfolio-lightBlue text-portfolio-darkBlue">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button 
                    onClick={() => window.open(project.github, '_blank')}
                    variant="outline" 
                    className="border-portfolio-darkBlue text-portfolio-darkBlue hover:bg-portfolio-darkBlue hover:text-white"
                  >
                    <Github size={18} className="mr-2" />
                    Code
                  </Button>
                  <Button 
                    onClick={() => window.open(project.live, '_blank')}
                    className="bg-portfolio-blue hover:bg-blue-600 text-white"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
