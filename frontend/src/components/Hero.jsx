import React, { useState, useEffect } from 'react'
import { FaArrowRight, FaEnvelope, FaDownload, FaSpinner, FaCheck } from 'react-icons/fa'
import akhiaPhoto from '/akhia-photo.jpg'

const Hero = () => {
  const [downloadState, setDownloadState] = useState('idle')
  const [currentRole, setCurrentRole] = useState(0)

  const roles = [
    'Full Stack Developer',
    'React Specialist',
    'UI/UX Designer',
    'Problem Solver'
  ]

  // Role rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDownloadResume = async () => {
    if (downloadState !== 'idle') return   

    setDownloadState('downloading')

    try {
      setTimeout(() => {
        const link = document.createElement('a')
        link.href = '/resume.pdf'
        link.download = 'Akhila_Ganta_Resume.pdf'
        
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        
        setDownloadState('downloaded')
        setTimeout(() => setDownloadState('idle'), 3000)
      }, 1500)
    } catch (error) {
      console.error('Download failed:', error)
      setDownloadState('idle')
    }
  }

  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-slate-100 relative"
    >
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">

          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
              Akhila Ganta
            </h1>

            {/* Dynamic Role */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-blue-600 transition-all">
              {roles[currentRole]}
            </h2>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
              Crafting digital experiences with modern technologies. 
              Specializing in React, Node.js, and scalable web applications 
              that make a difference.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg transition-all flex items-center gap-3 justify-center"
              >
                View My Work <FaArrowRight />
              </button>

              <button
                onClick={handleDownloadResume}
                disabled={downloadState === 'downloading'}
                className={`px-8 py-4 rounded-lg font-semibold border flex items-center gap-3 justify-center transition-all ${
                  downloadState === 'downloading'
                    ? 'bg-slate-100 border-slate-300 text-slate-500 cursor-wait'
                    : downloadState === 'downloaded'
                    ? 'bg-green-100 border-green-400 text-green-700 shadow-sm'
                    : 'bg-white border-slate-300 text-slate-700 hover:border-blue-400 hover:text-blue-600 shadow-sm'
                }`}
              >
                {downloadState === 'downloading' && (
                  <>
                    <FaSpinner className="animate-spin" /> Downloading...
                  </>
                )}
                {downloadState === 'downloaded' && (
                  <>
                    <FaCheck className="text-green-600" /> Downloaded!
                  </>
                )}
                {downloadState === 'idle' && (
                  <>
                    <FaDownload /> Download Resume
                  </>
                )}
              </button>

              <button
                onClick={scrollToContact}
                className="px-8 py-4 rounded-lg font-semibold border bg-white text-slate-700 hover:border-purple-400 hover:text-purple-600 shadow-sm transition-all flex items-center gap-3 justify-center"
              >
                <FaEnvelope /> Contact Me
              </button>
            </div>

            {/* Status */}
            <div className="flex items-center gap-3 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-slate-500 font-medium">
                  Available for opportunities
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-slate-200">
              <img
                src={akhiaPhoto}
                alt="Akhila Ganta - Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
