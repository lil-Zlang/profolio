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
        </div>
      </div>
    </nav>
  )
}

export default Navbar

