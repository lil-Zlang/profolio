'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import { getBlogPost } from '@/data/blog'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const { dark, toggle } = useTheme()
  const post = getBlogPost(slug)

  // Dynamic page title
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Lang Gui`
    }
  }, [post])

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black dark:text-white mb-4">Post not found</h1>
          <Link href="/" className="text-gray-500 hover:text-black dark:hover:text-white underline">
            Back to portfolio
          </Link>
        </div>
      </div>
    )
  }

  // Split content on --- for section breaks, then render paragraphs
  const sections = post.content.split('\n---\n')

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Minimal nav */}
      <nav className="sticky top-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/#blog"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            &larr; Back
          </Link>
          <button
            onClick={toggle}
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {post.date}
            </span>
            <span className="text-gray-300 dark:text-gray-600">&middot;</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-black dark:text-white leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-600 px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content */}
        <div className="space-y-16">
          {sections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="space-y-6">
              {section
                .split('\n\n')
                .filter((p) => p.trim())
                .map((paragraph, pIdx) => {
                  const trimmed = paragraph.trim()

                  // Italic paragraph (entire line wrapped in *)
                  if (trimmed.startsWith('*') && trimmed.endsWith('*') && !trimmed.startsWith('**')) {
                    return (
                      <p
                        key={pIdx}
                        className="text-lg md:text-xl font-medium text-black dark:text-white italic leading-relaxed pl-4 border-l-2 border-[#FFB74D]"
                      >
                        {trimmed.slice(1, -1)}
                      </p>
                    )
                  }

                  // Bold line (standalone emphasis)
                  if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
                    return (
                      <p
                        key={pIdx}
                        className="text-base md:text-lg font-bold text-black dark:text-white leading-relaxed"
                      >
                        {trimmed.slice(2, -2)}
                      </p>
                    )
                  }

                  // Regular paragraph — handle inline bold and italic
                  return (
                    <p
                      key={pIdx}
                      className="text-base text-gray-700 dark:text-gray-300 leading-[1.8]"
                      dangerouslySetInnerHTML={{
                        __html: trimmed
                          .replace(/\*\*(.+?)\*\*/g, '<strong class="text-black dark:text-white font-semibold">$1</strong>')
                          .replace(/\*(.+?)\*/g, '<em>$1</em>'),
                      }}
                    />
                  )
                })}
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            Built Crimson with{' '}
            <a href="https://twitter.com/briksliks" target="_blank" rel="noopener noreferrer" className="underline hover:text-black dark:hover:text-white">
              @briksliks
            </a>
            . I write about building, AI, and what I&apos;m learning as a new grad in SF.
          </p>
          <Link
            href="/#blog"
            className="inline-block mt-6 text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white underline transition-colors"
          >
            &larr; Back to all posts
          </Link>
        </footer>
      </article>
    </div>
  )
}
