import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zhilang Gui | Solution Engineer Building Intelligent Systems',
  description: 'Solution engineer bridging complex algorithms with intuitive solutions. Building intelligent systems that empower people and enhance lives. Experience at EasyBee AI and Cadence Design Systems.',
  keywords: ['Solution Engineer', 'Machine Learning', 'Embedded Systems', 'Full-Stack Development', 'ROS2', 'IoT', 'LangGraph', 'Boston University', 'AI Systems', 'Computer Engineering'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={jetbrainsMono.className}>
        {children}
      </body>
    </html>
  )
}

