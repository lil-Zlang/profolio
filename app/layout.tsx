import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/contexts/ThemeContext'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zhilang (Lang) Gui | AI Engineer',
  description: 'AI Engineer building multi-agent systems, production RAG pipelines, and shipping AI-powered products from 0→1. BU Computer Engineering \'25. 10 apps in 10 weeks. AWS hackathon winner.',
  keywords: ['AI Engineer', 'Machine Learning', 'LangGraph', 'Multi-Agent Systems', 'RAG', 'Full-Stack', 'Boston University', 'Computer Engineering', 'San Francisco'],
  authors: [{ name: 'Zhilang (Lang) Gui' }],
  openGraph: {
    title: 'Lang Gui | AI Engineer',
    description: 'AI Engineer shipping multi-agent systems and production RAG pipelines. 10 apps in 10 weeks. AWS hackathon winner.',
    url: 'https://www.buildwithlang.com',
    siteName: 'Build with Lang',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lang Gui | AI Engineer',
    description: 'AI Engineer shipping multi-agent systems and production RAG pipelines. 10 apps in 10 weeks. AWS hackathon winner.',
    creator: '@lgui30',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={jetbrainsMono.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
