import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zhilang Gui | Lead AI Engineer',
  description: 'Lead AI Engineer at EasyBee AI and Computer Engineering graduate from Boston University. Engineered a multi-skill agent framework that drove a 40% efficiency gain in booking and accuracy workflows.',
  keywords: ['AI Engineer', 'Machine Learning', 'Embedded Systems', 'Full-Stack Development', 'ROS2', 'IoT', 'LangGraph', 'Boston University', 'AI Systems', 'Computer Engineering'],
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

