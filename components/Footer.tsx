const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="text-center">
          <div className="flex justify-center gap-2">
            <a
              href="https://github.com/lil-Zlang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white px-5 py-2.5 rounded-2xl hover:bg-white/10 transition-all duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/zhilang-gui-b5b59b254/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white px-5 py-2.5 rounded-2xl hover:bg-white/10 transition-all duration-200"
            >
              LinkedIn
            </a>
            <a
              href="mailto:lang.gui.bu@gmail.com"
              className="text-sm text-gray-400 hover:text-white px-5 py-2.5 rounded-2xl hover:bg-white/10 transition-all duration-200"
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
