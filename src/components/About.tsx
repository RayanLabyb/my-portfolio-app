
import React, { useEffect, useRef } from 'react';

const About = () => {
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

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="reveal" ref={sectionRef}>
            <h2 className="section-title">About Me</h2>
            <p className="text-lg mb-6">
              I'm a passionate software engineer with a strong foundation in web development. 
              With 5+ years of experience, I specialize in building high-quality applications 
              that deliver exceptional user experiences.
            </p>
            <p className="text-lg mb-6">
              My journey in tech began when I built my first website in college. Since then, 
              I've worked with diverse teams to create scalable solutions for various industries, 
              from e-commerce to healthcare.
            </p>
            <p className="text-lg">
              Outside of work, I enjoy contributing to open-source projects, mentoring aspiring 
              developers, and expanding my knowledge through continuous learning. I'm always 
              excited to tackle new challenges and collaborate on innovative projects.
            </p>
          </div>
          <div className="bg-portfolio-lightGray rounded-xl p-8 reveal" ref={sectionRef}>
            <h3 className="text-2xl font-bold mb-6 text-portfolio-darkBlue">Education & Experience</h3>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-lg">Google</h4>
                <span className="text-sm text-portfolio-gray">2020 - Present</span>
              </div>
              <p className="text-portfolio-darkBlue">Senior Software Engineer</p>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-lg">Amazon</h4>
                <span className="text-sm text-portfolio-gray">2018 - 2020</span>
              </div>
              <p className="text-portfolio-darkBlue">Software Development Engineer</p>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-lg">Stanford University</h4>
                <span className="text-sm text-portfolio-gray">2014 - 2018</span>
              </div>
              <p className="text-portfolio-darkBlue">B.S. in Computer Science</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
