import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      {/* Professional background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-white"></div>
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                About Me
              </h2>
              <div className="w-20 h-1 bg-blue-600 rounded"></div>
            </div>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Hello! I'm Akhila Ganta, a passionate and results-driven fullstack developer with a strong foundation
                in full-stack web development and a keen interest in building scalable, user-focused applications. 
                With hands-on experience in technologies such as React, Node.js, Express, and SQL/NoSQL databases, I specialize in translating complex problems into simple, elegant solutions.
              </p>
              <p>
                I thrive in environments where innovation meets practicality, and I take pride in writing clean,
                maintainable, and well-documented code. My academic background in Computer Science & Engineering (Data Science) has 
                provided me with a strong grasp of data structures and algorithms.
              </p>
              <p>
                I have worked as a Frontend and cloud developer intern at Siter Academy Norway,
                with a passion for building intuitive, responsive, and high-performing applications. My expertise lies in HTML, Tailwind CSS, Figma
                and cloud-based deployment solutions, where I gained hands-on experience in designing user-friendly interfaces and deploying applications to cloud platforms such as Microsoft Azure.
              </p>
            </div>
            
            {/* Professional quote */}
            <div className="border-l-4 border-blue-600 pl-6 py-4">
              <p className="text-slate-700 font-medium italic">
                "Building scalable solutions with clean, maintainable code"
              </p>
            </div>
          </div>

          {/* Right Content - Education Timeline */}
          <div className="lg:pl-8">
            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-semibold text-slate-900 mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                Education
              </h3>
              
              <div className="space-y-8">
                {/* University */}
                <div className="relative pl-8 border-l-2 border-slate-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-slate-900">
                      Bachelor of Technology
                    </h4>
                    <p className="text-slate-600 font-medium">Vaagdevi College of Engineering</p>
                    <p className="text-sm text-slate-500">Computer Science & Engineering (Data Science)</p>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      2022 - 2026
                    </span>
                  </div>
                </div>

                {/* Certification */}
                <div className="relative pl-8 border-l-2 border-slate-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-600 rounded-full"></div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-slate-900">
                      Full-stack Development Certification
                    </h4>
                    <p className="text-slate-600 font-medium">NxtWave Disruptive Technologies</p>
                    <p className="text-sm text-slate-500">Industry Ready Certification</p>
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      2023 - 2025
                    </span>
                  </div>
                </div>

                {/* Intermediate */}
                <div className="relative pl-8">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-slate-400 rounded-full"></div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-slate-900">
                      Intermediate
                    </h4>
                    <p className="text-slate-600 font-medium">TSMS & JS</p>
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                      2020 - 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
