import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zhilang Gui | Software Engineer Building Intelligent Systems',
  description: 'Software engineer bridging complex algorithms with intuitive solutions. Building intelligent systems that empower people and enhance lives. Experience at EasyBee AI and Cadence Design Systems.',
  keywords: ['Software Engineer', 'Machine Learning', 'Embedded Systems', 'Full-Stack Development', 'ROS2', 'IoT', 'LangGraph', 'Boston University', 'AI Systems', 'Computer Engineering'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

