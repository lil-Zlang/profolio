const Footer = () => {
  return (
    <footer id="about" className="bg-black dark:bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-md">
              Available for freelance projects, collaboration, and full-time opportunities.
              Currently based in San Francisco, CA.
            </p>
            <a
              href="mailto:lang.gui.bu@gmail.com"
              className="inline-block text-sm font-bold uppercase tracking-wider border-b-2 border-white pb-0.5 hover:text-gray-300 hover:border-gray-300 transition-colors"
            >
              lang.gui.bu@gmail.com
            </a>
          </div>

          {/* Right - Links */}
          <div className="flex flex-col items-start md:items-end justify-between">
            <div className="flex gap-6 mb-8">
              <a
                href="https://github.com/lgui30"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/zhilang-gui-b5b59b254/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/lgui30"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
              >
                X
              </a>
            </div>
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} Zhilang Gui
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
