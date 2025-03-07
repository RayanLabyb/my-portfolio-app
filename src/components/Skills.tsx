
import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "HTML/CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "SQL", "MongoDB"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-portfolio-lightBlue" ref={sectionRef}>
      <div className="section-container reveal">
        <h2 className="section-title text-center">My Skills</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          I've worked with a range of technologies in the web development world, from backend to design.
          Here are the key skills I bring to every project.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6 text-portfolio-darkBlue">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <Check size={18} className="text-portfolio-blue mr-2" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
