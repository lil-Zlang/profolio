'use client'

import { NavbarProps } from '@/types'

const Navbar = ({ onSectionClick }: NavbarProps) => {
  const handleSectionClick = (section: string) => {
    if (onSectionClick) {
      onSectionClick(section)
    }
  }

  return (
    <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => handleSectionClick('')}
            className="text-xl font-semibold text-gray-900 hover:text-gray-600 transition-colors"
          >
            ZG
          </button>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/zhilang-gui-b5b59b254/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/LangGui79322"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all duration-200"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
