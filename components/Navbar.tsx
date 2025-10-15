'use client'

import { useState } from 'react'

interface NavbarProps {
  onSectionClick?: (section: string) => void
}

const Navbar = ({ onSectionClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'About', section: 'about' },
    { name: 'Experience', section: 'experience' },
    { name: 'Skills', section: 'skills' },
    { name: 'Projects', section: 'projects' },
    { name: 'Contact', section: 'contact' },
  ]

  const handleSectionClick = (section: string) => {
    if (onSectionClick) {
      onSectionClick(section)
    }
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => handleSectionClick('')}
            className="text-xl font-bold text-black hover:text-gray-600 transition-colors"
          >
            ZG
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleSectionClick(item.section)}
                className="text-gray-600 hover:text-black transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="https://github.com/lil-Zlang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/zhilang-gui-b5b59b254/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:lang.gui.bu@gmail.com"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Email
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-8 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleSectionClick(item.section)}
                className="block w-full text-left text-gray-600 hover:text-black transition-colors"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <a
                href="https://github.com/lil-Zlang"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-black transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/zhilang-gui-b5b59b254/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-black transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:lang.gui.bu@gmail.com"
                className="block text-gray-600 hover:text-black transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

