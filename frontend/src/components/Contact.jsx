import React, { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaArrowRight, FaLinkedin } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { submitContact } from '../utils/api'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await submitContact(formData)
      
      if (response.success) {
        toast.success(`Thank you ${formData.name}! Your message has been sent successfully. I will get back to you soon!`, {
          position: "top-center",
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        toast.error('Something went wrong. Please try again.')
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
      console.error('Contact form error:', error)
    }
    setLoading(false)
  }

  const contactInfo = [
    {
      icon: <FaWhatsapp size={20} />,
      title: 'WhatsApp',
      value: '+917670820733',
      link: 'https://wa.me/917670820733',
      color: 'bg-green-600'
    },
    {
      icon: <FaEnvelope size={20} />,
      title: 'Email',
      value: 'gantaakhila773@gmail.com',
      link: 'mailto:gantaakhila773@gmail.com',
      color: 'bg-blue-600'
    },
    {
      icon: <FaMapMarkerAlt size={20} />,
      title: 'Location',
      value: 'Warangal, Telangana',
      link: '#',
      color: 'bg-slate-600'
    },
    {
      icon: <FaLinkedin size={20} />,
      title: 'LinkedIn',
      value: 'Akhila Ganta',
      link: 'https://www.linkedin.com/in/ganta-akhila-3172432a4/',
      color: 'bg-blue-700'
    }
  ]

  return (
    <section id="contact" className="py-24 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your project requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="flex items-center gap-4 p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300 group"
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
              >
                <div className={`w-12 h-12 ${info.color} text-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {info.icon}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-lg">{info.title}</div>
                  <div className="text-slate-600">{info.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                      placeholder="Project inquiry"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project requirements, timeline, and budget..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {loading ? 'Sending Message...' : 'Send Message'}
                  {!loading && <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
