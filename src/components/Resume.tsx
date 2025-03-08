
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';

const Resume = () => {
  const downloadResume = () => {
    // Create a hidden anchor element
    const link = document.createElement('a');
    
    // Set the attributes for the anchor element
    // In a real implementation, this would be the path to an actual PDF file
    // For demo purposes, we'll use a data URL that creates a simple PDF
    const pdfData = 'data:application/pdf;base64,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Pj4Kc3RyZWFtCjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nIHg6eG1wdGs9J1hNUCB0b29sa2l0IDIuOS4xLTEzLCBmcmFtZXdvcmsgMS42Jz4KPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJyB4bWxuczppWD0naHR0cDovL25zLmFkb2JlLmNvbS9pWC8xLjAvJz4KPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9J3V1aWQ6ODEyOWRjMGItMmFjNi0xMWVlLTAwMDAtNzRhODdmNmMxNmYyJyB4bWxuczpwZGY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8nIHBkZjpQcm9kdWNlcj0nTWFjIE9TIFggMTAuMTYuMCBRdWFydHogUERGQ29udGV4dCcvPgo8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0ndXVpZDo4MTI5ZGMwYi0yYWM2LTExZWUtMDAwMC03NGE4N2Y2YzE2ZjInIHhtbG5zOnhtcD0naHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyc+PHhtcDpNb2RpZnlEYXRlPjIwMjMtMTItMDdUMTE6NDU6MzdaMC0wNjwveG1wOk1vZGlmeURhdGU+Cjx4bXA6Q3JlYXRlRGF0ZT4yMDIzLTEyLTA3VDExOjQ1OjM3WjAtMDY8L3htcDpDcmVhdGVEYXRlPgo8eG1wOkNyZWF0b3JUb29sPkhlcmFjbGl0dXMg4oCUIENWPC94bXA6Q3JlYXRvclRvb2w+PC9yZGY6RGVzY3JpcHRpb24+CjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSd1dWlkOjgxMjlkYzBiLTJhYzYtMTFlZS0wMDAwLTc0YTg3ZjZjMTZmMicgeG1sbnM6eGFwTU09J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8nPjx4YXBNTTpEb2N1bWVudElEPnV1aWQ6Njg2MWFiZGQtMjhkZC0xMWU4LTAwMDAtZmQ2NGNjYmY2MTA5PC94YXBNTTpEb2N1bWVudElEPgo8eGFwTU06SW5zdGFuY2VJRD51dWlkOjgxMjlkYzBiLTJhYzYtMTFlZS0wMDAwLTc0YTg3ZjZjMTZmMjwveGFwTU06SW5zdGFuY2VJRD48L3JkZjpEZXNjcmlwdGlvbj4KPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KCmVuZHN0cmVhbQplbmRvYmoKeCByZWYKMCAzMwowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDA1MjcyNCAwMDAwMCBuIAowMDAwMDAxMDU5IDAwMDAwIG4gCjAwMDAwMDIzMzUgMDAwMDAgbiAKMDAwMDAwMDAwMCAwMDAwMCBuIAowMDAwMDAwMzE2IDAwMDAwIG4gCjAwMDAwMDE0MjcgMDAwMDAgbiAKMDAwMDAwMTUzNSAwMDAwMCBuIAowMDAwMDAxNjIyIDAwMDAwIG4gCjAwMDAwMDI0ODcgMDAwMDAgbiAKMDAwMDAwMjUyMiAwMDAwMCBuIAowMDAwMDUyODY1IDAwMDAwIG4gCjAwMDAwMDA0MjQgMDAwMDAgbiAKMDAwMDAwMDUwNiAwMDAwMCBuIAowMDAwMDAxMjM3IDAwMDAwIG4gCjAwMDAwMDEzMzUgMDAwMDAgbiAKMDAwMDA1MDgzMSAwMDAwMCBuIAowMDAwMDUyNTEzIDAwMDAwIG4gCjAwMDAwNTI1MzQgMDAwMDAgbiAKMDAwMDA1MjU3MCAwMDAwMCBuIAowMDAwMDUyNjIzIDAwMDAwIG4gCjAwMDAwNTI2NDMgMDAwMDAgbiAKMDAwMDA1MjY2MyAwMDAwMCBuIAowMDAwMDUyNjgzIDAwMDAwIG4gCjAwMDAwNTI3MDMgMDAwMDAgbiAKMDAwMDA1MjcyMSAwMDAwMCBuIAowMDAwMDUyNzQxIDAwMDAwIG4gCjAwMDAwNTI3NjMgMDAwMDAgbiAKMDAwMDA1Mjc4MiAwMDAwMCBuIAowMDAwMDUyODAyIDAwMDAwIG4gCjAwMDAwNTI4MjIgMDAwMDAgbiAKMDAwMDA1MjgwOCAwMDAwMCBuIAp0cmFpbGVyCjw8IC9TaXplIDMzIC9Sb290IDMyIDAgUiAvSW5mbyAzIDAgUiAvSUQgWyA8MjE3YzlkOGNmMmM1OGUzNmJkYTgxYTg1Y2UzYjJkMjY+CjwyMTdjOWQ4Y2YyYzU4ZTM2YmRhODFhODVjZTNiMmQyNj4gXSAvUHJldiA1Mjg4MyA+PgpzdGFydHhyZWYKNTQzODcKJSVFT0YK';
    
    link.href = pdfData;
    link.download = 'Rayan_Labyb_Resume.pdf';
    
    // Append the anchor to the body
    document.body.appendChild(link);
    
    // Trigger the download
    link.click();
    
    // Clean up by removing the anchor element
    document.body.removeChild(link);
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

