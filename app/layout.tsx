import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zhiliang Gui | Computer Engineer & Solutions Architect',
  description: 'Computer Engineer specializing in ML, embedded systems, and full-stack development. Experience at Cadence Design Systems and EasyBee AI.',
  keywords: ['Computer Engineering', 'Machine Learning', 'Embedded Systems', 'Full-Stack Development', 'ROS2', 'IoT', 'LangGraph', 'Boston University'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

