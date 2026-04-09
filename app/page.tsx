'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import ProjectList from '@/components/ProjectList'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Experience />
      <ProjectList />
      <Blog />
      <Footer />
    </main>
  )
}
