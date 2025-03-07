
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-portfolio-lightBlue">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <p className="text-portfolio-blue font-semibold mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-darkBlue mb-4">
              Your Name
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-portfolio-gray mb-6">
              Software Engineer
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              I build exceptional and accessible digital experiences for the web. Focused on creating efficient, scalable, and user-friendly applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToProjects}
                className="bg-portfolio-blue hover:bg-blue-600 text-white px-6"
              >
                View Projects
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white"
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-portfolio-blue rounded-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <button 
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="animate-bounce bg-white p-3 rounded-full shadow-lg"
          >
            <ArrowDown size={24} className="text-portfolio-blue" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
