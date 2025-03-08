
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };
  
  const openResume = () => {
    // Since we don't have a real resume file yet, we'll create a simple alert
    // In a real application, you would replace this with a link to your actual resume
    alert("Resume functionality: This would download or open your resume PDF");
    // Alternatively: window.open('/resume.pdf', '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-portfolio-darkBlue">Rayan Labyb</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item)} 
              className="text-portfolio-darkBlue hover:text-portfolio-blue font-medium capitalize transition-colors"
            >
              {item}
            </button>
          ))}
          <Button 
            onClick={openResume}
            className="bg-portfolio-blue hover:bg-blue-600 text-white"
          >
            Resume
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-darkBlue"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
          <nav className="flex flex-col space-y-4 px-6">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)} 
                className="text-portfolio-darkBlue hover:text-portfolio-blue font-medium capitalize py-2 transition-colors text-left"
              >
                {item}
              </button>
            ))}
            <Button 
              onClick={openResume}
              className="bg-portfolio-blue hover:bg-blue-600 text-white w-full"
            >
              Resume
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
