const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            © {currentYear} Zhilang Gui. Built with Next.js and Tailwind CSS.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a
              href="https://github.com/lil-Zlang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/zhilang-gui-b5b59b254/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:lang.gui.bu@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

