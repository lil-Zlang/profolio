'use client'

import { useState, useRef } from 'react'
import { SinglePagePortfolioRef } from '@/types'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SinglePagePortfolio from '@/components/SinglePagePortfolio'
import Footer from '@/components/Footer'

export default function Home() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const portfolioRef = useRef<SinglePagePortfolioRef>(null)

  const handleSectionClick = (section: string): void => {
    setExpandedSection(section || null)
    portfolioRef.current?.toggleSection(section)
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar onSectionClick={handleSectionClick} />
      <Hero />
      <SinglePagePortfolio ref={portfolioRef} />
      <Footer />
    </main>
  )
}

