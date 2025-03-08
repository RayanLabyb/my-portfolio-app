
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';

const Resume = () => {
  const downloadResume = () => {
    // In a real implementation, this would download a PDF file
    alert("This would download the resume as a PDF");
    // Implementation would be: window.open('/path-to-your-resume.pdf', '_blank');
  };
  
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-portfolio-darkBlue mb-12">Resume</h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-portfolio-darkBlue">Rayan Labyb</h1>
            <p className="text-lg text-portfolio-gray mt-2">Software Engineer</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-portfolio-gray">
              <span>📍 Ouled Teima, Morocco</span>
              <span>📧 rayan.the.programmer@gmail.com</span>
              <span>📱 +212672504422</span>
            </div>
          </div>
          
          {/* Summary */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-portfolio-blue border-b border-gray-200 pb-2 mb-3">
              Professional Summary
            </h2>
            <p className="text-portfolio-gray">
              Software engineer with 2+ years of experience building web applications. Passionate about creating efficient, 
              scalable, and user-friendly applications with modern technologies.
            </p>
          </div>
          
          {/* Experience */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-portfolio-blue border-b border-gray-200 pb-2 mb-3">
              Experience
            </h2>
            
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-portfolio-darkBlue">Created my first GitHub profile</h3>
                <span className="text-sm text-portfolio-gray">2021 - 2022</span>
              </div>
              <p className="text-sm text-portfolio-gray mt-1">
                Started my journey by creating a GitHub profile and learning version control basics.
              </p>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-portfolio-darkBlue">Wrote my first line of code in Python</h3>
                <span className="text-sm text-portfolio-gray">2021 - 2022</span>
              </div>
              <p className="text-sm text-portfolio-gray mt-1">
                Began programming journey with Python, learning fundamental concepts and building simple applications.
              </p>
            </div>
          </div>
          
          {/* Education/Training */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-portfolio-blue border-b border-gray-200 pb-2 mb-3">
              Training
            </h2>
            
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-portfolio-darkBlue">HTML/CSS/REACT</h3>
                <span className="text-sm text-portfolio-gray">2023 - 2024</span>
              </div>
              <p className="text-sm text-portfolio-gray mt-1">
                Learned HTML/CSS/REACT through self-study and online resources.
              </p>
            </div>
          </div>
          
          {/* Skills */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-portfolio-blue border-b border-gray-200 pb-2 mb-3">
              Technical Skills
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <div className="bg-gray-50 rounded p-2 text-sm">JavaScript</div>
              <div className="bg-gray-50 rounded p-2 text-sm">React</div>
              <div className="bg-gray-50 rounded p-2 text-sm">TypeScript</div>
              <div className="bg-gray-50 rounded p-2 text-sm">HTML/CSS</div>
              <div className="bg-gray-50 rounded p-2 text-sm">Node.js</div>
              <div className="bg-gray-50 rounded p-2 text-sm">MongoDB</div>
              <div className="bg-gray-50 rounded p-2 text-sm">Python</div>
              <div className="bg-gray-50 rounded p-2 text-sm">Git</div>
              <div className="bg-gray-50 rounded p-2 text-sm">SQL</div>
              <div className="bg-gray-50 rounded p-2 text-sm">Deepseek API</div>
            </div>
          </div>
          
          {/* Download Button */}
          <div className="text-center mt-8">
            <Button onClick={downloadResume} className="bg-portfolio-blue hover:bg-blue-600 text-white">
              <Download size={18} />
              Download PDF Version
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
