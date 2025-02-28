import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Building2, Calendar, GraduationCap, Code2, Brain, Database, LineChart as ChartLine } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header/Hero Section */}
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?auto=format&fit=crop&q=80"
            alt="Data Science Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 z-10">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative w-64 h-64">
                <img 
                  src={`${import.meta.env.BASE_URL}logo.png`}
                  alt="Aksamatrix Logo"
                  className="w-full h-full object-contain mix-blend-screen"
                />
              </div>
            </div>
            <p className="text-2xl text-gray-300 mb-4 italic">"Precision in Chaos"</p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/mdaksamvk" target="_blank" rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/mdaksamvk/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:mdaksamvk@gmail.com" className="hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* About Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg mb-6">
                <p className="text-gray-300 leading-relaxed">
                  Hello! I am MD Aksam V.K, a Data Scientist with a Ph.D. in Mathematics from Vellore Institute of Technology, India. 
                  I am passionate about leveraging AI and Machine Learning to solve complex problems. My journey includes building 
                  intelligent systems for cybersecurity and contributing to international journals including IEEE/ACM, IET, Springer, 
                  and Elsevier.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-gray-800 rounded-lg">
                  <Brain className="w-8 h-8 text-blue-400 mb-2" />
                  <h3 className="font-semibold mb-2">Machine Learning</h3>
                  <p className="text-sm text-gray-400">Advanced ML models and algorithms</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg">
                  <Database className="w-8 h-8 text-blue-400 mb-2" />
                  <h3 className="font-semibold mb-2">Big Data</h3>
                  <p className="text-sm text-gray-400">Large-scale data processing</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg">
                  <ChartLine className="w-8 h-8 text-blue-400 mb-2" />
                  <h3 className="font-semibold mb-2">Analytics</h3>
                  <p className="text-sm text-gray-400">Predictive & prescriptive analytics</p>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg">
                  <Code2 className="w-8 h-8 text-blue-400 mb-2" />
                  <h3 className="font-semibold mb-2">Development</h3>
                  <p className="text-sm text-gray-400">Custom AI solutions</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-6">Certifications</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-700 rounded-lg">
                    <h4 className="font-semibold">Industrial IoT on Google Cloud Platform</h4>
                    <p className="text-sm text-gray-400">Google Cloud</p>
                  </div>
                  <div className="p-4 bg-gray-700 rounded-lg">
                    <h4 className="font-semibold">Version Control with Git</h4>
                    <p className="text-sm text-gray-400">Atlassian</p>
                  </div>
                  <div className="p-4 bg-gray-700 rounded-lg">
                    <h4 className="font-semibold">Machine Learning</h4>
                    <p className="text-sm text-gray-400">Stanford University - Andrew Ng</p>
                  </div>
                  <div className="p-4 bg-gray-700 rounded-lg">
                    <h4 className="font-semibold">Advanced R Programming</h4>
                    <p className="text-sm text-gray-400">Johns Hopkins University</p>
                  </div>
                  <div className="p-4 bg-gray-700 rounded-lg">
                    <h4 className="font-semibold">Developing AI Applications on Azure</h4>
                    <p className="text-sm text-gray-400">Microsoft</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="space-y-6">
              <div className="flex items-start">
                <Building2 className="w-5 h-5 mt-1 mr-3 text-blue-400" />
                <div>
                  <h4 className="font-semibold">Principal Data Scientist</h4>
                  <p className="text-gray-400">Securin</p>
                  <p className="text-sm text-gray-500">June 2024 - Dec 2024</p>
                </div>
              </div>
              <div className="flex items-start">
                <Building2 className="w-5 h-5 mt-1 mr-3 text-blue-400" />
                <div>
                  <h4 className="font-semibold">Senior Data Scientist</h4>
                  <p className="text-gray-400">Securin</p>
                  <p className="text-sm text-gray-500">May 2021 - June 2024</p>
                </div>
              </div>
              <div className="flex items-start">
                <Building2 className="w-5 h-5 mt-1 mr-3 text-blue-400" />
                <div>
                  <h4 className="font-semibold">Data Scientist</h4>
                  <p className="text-gray-400">ZettaLabs</p>
                  <p className="text-sm text-gray-500">April 2019 - April 2020</p>
                </div>
              </div>
              <div className="flex items-start">
                <Building2 className="w-5 h-5 mt-1 mr-3 text-blue-400" />
                <div>
                  <h4 className="font-semibold">Data Scientist</h4>
                  <p className="text-gray-400">GrayMatter Software Services</p>
                  <p className="text-sm text-gray-500">May 2018 - April 2019</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <a href="https://github.com/mdaksamvk/Project-A" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">Project A</h3>
                <ExternalLink className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-gray-400 mb-4">
                Advanced machine learning models and data analysis solutions for real-world problems.
              </p>
              <div className="flex space-x-3">
                <span className="px-3 py-1 bg-gray-900 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-900 rounded-full text-sm">TensorFlow</span>
                <span className="px-3 py-1 bg-gray-900 rounded-full text-sm">ML</span>
              </div>
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="bg-gray-800 p-8 rounded-lg">
            <p className="text-gray-300 mb-6">
              Interested in working together? I'd love to hear from you.
              Let's discuss how we can help with your data science needs.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              <a href="mailto:mdaksamvk@gmail.com" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
              <a href="https://github.com/mdaksamvk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </a>
              <a href="https://www.linkedin.com/in/mdaksamvk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 rounded-lg hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5 mr-2" />
                View LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 Aksamatrix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;