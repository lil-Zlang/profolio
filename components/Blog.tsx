const blogPosts = [
  {
    title: '10 Apps in 10 Weeks: What I Learned Shipping Fast',
    description: 'Lessons from building and deploying one full app every week — from idea to production.',
    date: 'Feb 2026',
    tags: ['Shipping', 'Building in Public'],
  },
  {
    title: 'Building Multi-Agent Systems with LangGraph',
    description: 'How I architected a supervisor agent with sub-agents at EasyBee AI to reduce cold-start latency from 5s to 150ms.',
    date: 'Jan 2026',
    tags: ['AI Engineering', 'LangGraph'],
  },
  {
    title: 'From Hackathon to Production: Crimson Red-Teaming Platform',
    description: 'How our team built an automated LLM security testing platform in 24 hours and won the AWS x Datadog hackathon.',
    date: 'Dec 2025',
    tags: ['Hackathon', 'AI Security'],
  },
]

const Blog = () => {
  return (
    <section id="blog" className="bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-2xl font-black uppercase tracking-tight text-black dark:text-white mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
          Blog
        </h2>

        <div className="space-y-0">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group py-8 border-b border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900/50 -mx-4 px-4 rounded transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-black dark:text-white group-hover:underline decoration-2 decoration-[#FFB74D]">
                  {post.title}
                </h3>
                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap mt-1">
                  {post.date}
                </span>
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
          ))}
        </div>

        <p className="text-xs text-gray-400 dark:text-gray-500 mt-8 italic">
          More posts coming soon...
        </p>
      </div>
    </section>
  )
}

export default Blog
