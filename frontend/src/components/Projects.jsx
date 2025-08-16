import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Pipeline Editor(DAG Builder)',
      description: 'Designed and implemented an interactive Directed Acyclic Graph (DAG) builder using React and TypeScript, enabling users to visually create, connect, and manage workflow pipelines.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D',
      technologies: ['React.js','Vite' ,'TypeScript', 'Tailwind CSS'],
      status: 'Completed',
      github: 'https://github.com/A7k6h7i0/pipeline-editor-dag-builder',
      demo: 'https://pipeline-editor-dag-builder-azure.vercel.app/'
    },
    {
      id: 2,
      title: 'Personal ExpenseTracker',
      description: 'Developed a full-stack web application using Flask to track, visualize, and manage personal expenses with Linear Regression model for forecasting.',
      image: 'https://plus.unsplash.com/premium_photo-1681589453588-82be3da564c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGV4cGVuc2V8ZW58MHx8MHx8fDA%3D',
      technologies: ['Python','Pandas','Matplotlib','Scikit-learn'],
      status: 'Completed',
      github: 'https://github.com/A7k6h7i0/Expense-tracker',
      demo: 'https://expense-tracker-1-tzhp.onrender.com/'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Developed a full-stack portfolio website using the MERN stack with Twilio WhatsApp API integration for direct communication.',
      image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      status: 'Completed',
      github: 'https://github.com/A7k6h7i0/latest-portfolio',
      demo: 'https://latest-portfolio-rosy.vercel.app/'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            My Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-slate-900 px-4 py-2 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2"
                  >
                    <FaGithub size={14} />
                    Code
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                    {project.status}
                  </span>
                </div>
                
                <p className="text-slate-600 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold flex items-center gap-2 text-sm"
                  >
                    View Project
                    <FaExternalLinkAlt size={12} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
