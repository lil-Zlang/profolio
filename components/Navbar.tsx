'use client'

import { NavbarProps } from '@/types'

const Navbar = ({ onSectionClick }: NavbarProps) => {
  const handleSectionClick = (section: string) => {
    if (onSectionClick) {
      onSectionClick(section)
    }
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

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/zhilang-gui-b5b59b254/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-black hover:text-gray-600 transition-colors border border-black px-3 py-1 hover:bg-gray-100"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/LangGui79322"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-black hover:text-gray-600 transition-colors border border-black px-3 py-1 hover:bg-gray-100"
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

