
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, MapPin, Mail, Phone } from 'lucide-react';
import { jsPDF } from "jspdf";

const Resume = () => {
  const downloadResume = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();
    
    // Set font styles
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor(26, 31, 44); // Dark blue color
    
    // Add header
    doc.text("Rayan Labyb", 105, 20, { align: "center" });
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(142, 145, 150); // Gray color
    doc.text("Software Engineer", 105, 28, { align: "center" });
    
    // Add contact info - Using text instead of emoji to avoid encoding issues
    doc.text("Location: Ouled Teima, Morocco", 105, 40, { align: "center" });
    doc.text("Email: rayan.the.programmer@gmail.com", 105, 48, { align: "center" });
    doc.text("Phone: +212672504422", 105, 56, { align: "center" });
    
    // Add a separator line
    doc.setDrawColor(220, 220, 220);
    doc.line(20, 65, 190, 65);
    
    // Professional Summary
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(74, 108, 247); // Blue color
    doc.text("Professional Summary", 20, 75);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    const summaryText = "Software engineer with 2+ years of experience building web applications. Passionate about creating efficient, scalable, and user-friendly applications with modern technologies.";
    const wrappedSummary = doc.splitTextToSize(summaryText, 170);
    doc.text(wrappedSummary, 20, 85);
    
    // Experience
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(74, 108, 247); // Blue color
    doc.text("Experience", 20, 105);
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(26, 31, 44); // Dark blue color
    doc.text("Created my first GitHub profile", 20, 115);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(142, 145, 150); // Gray color
    doc.text("2021 - 2022", 170, 115, { align: "right" });
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text("Started my journey by creating a GitHub profile and learning version control basics.", 20, 123);
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(26, 31, 44); // Dark blue color
    doc.text("Wrote my first line of code in Python", 20, 133);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(142, 145, 150); // Gray color
    doc.text("2021 - 2022", 170, 133, { align: "right" });
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text("Began programming journey with Python, learning fundamental concepts and building simple applications.", 20, 141);
    
    // Training
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(74, 108, 247); // Blue color
    doc.text("Training", 20, 161);
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(26, 31, 44); // Dark blue color
    doc.text("HTML/CSS/REACT", 20, 171);
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(142, 145, 150); // Gray color
    doc.text("2023 - 2024", 170, 171, { align: "right" });
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text("Learned HTML/CSS/REACT through self-study and online resources.", 20, 179);
    
    // Technical Skills
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(74, 108, 247); // Blue color
    doc.text("Technical Skills", 20, 199);
    
    // Add skills in grid-like format
    const skills = [
      "JavaScript", "React", "TypeScript", 
      "HTML/CSS", "Node.js", "MongoDB",
      "Python", "Git", "SQL", 
      "Deepseek API"
    ];
    
    const skillsPerRow = 3;
    let yPos = 209;
    let xPos = 20;
    
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    
    for (let i = 0; i < skills.length; i++) {
      doc.text(skills[i], xPos, yPos);
      if ((i + 1) % skillsPerRow === 0) {
        yPos += 10;
        xPos = 20;
      } else {
        xPos += 60;
      }
    }
    
    // Add footer
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.setTextColor(150, 150, 150);
    doc.text("Downloaded from Rayan Labyb's Portfolio Website", 105, 280, { align: "center" });
    
    // Save the PDF
    doc.save("Rayan_Labyb_Resume.pdf");
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
              <span className="flex items-center gap-1">
                <MapPin size={14} className="text-portfolio-blue" /> Ouled Teima, Morocco
              </span>
              <span className="flex items-center gap-1">
                <Mail size={14} className="text-portfolio-blue" /> rayan.the.programmer@gmail.com
              </span>
              <span className="flex items-center gap-1">
                <Phone size={14} className="text-portfolio-blue" /> +212672504422
              </span>
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
