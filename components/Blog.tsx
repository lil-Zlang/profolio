import Link from 'next/link'
import { blogPosts } from '@/data/blog'

const Blog = () => {
  return (
    <section id="blog" className="bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-2xl font-black uppercase tracking-tight text-black dark:text-white mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
          Blog
        </h2>

        <div className="space-y-0">
          {blogPosts.map((post) => {
            const isPublished = post.content !== 'Coming soon.'

            const inner = (
              <article
                className={`group py-8 border-b border-gray-100 dark:border-gray-800 -mx-4 px-4 rounded transition-colors ${
                  isPublished
                    ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900/50'
                    : 'opacity-60'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <h3 className={`text-lg font-bold text-black dark:text-white ${isPublished ? 'group-hover:underline decoration-2 decoration-[#FFB74D]' : ''}`}>
                      {post.title}
                    </h3>
                    {!isPublished && (
                      <span className="text-[10px] uppercase tracking-wider font-medium text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-700 px-2 py-0.5">
                        Soon
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 whitespace-nowrap mt-1">
                    <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {post.date}
                    </span>
                    {isPublished && (
                      <>
                        <span className="text-gray-300 dark:text-gray-600">&middot;</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          {post.readTime}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3 max-w-2xl">
                  {post.description}
                </p>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-600 px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            )

            if (isPublished) {
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  {inner}
                </Link>
              )
            }

            return <div key={post.slug}>{inner}</div>
          })}
        </div>
      </div>
    </section>
  )
}

export default Blog
