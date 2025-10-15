const Hero = () => {
  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          Zhilang Gui
        </h1>
        
        <p className="text-lg md:text-xl mb-4 text-gray-700">
          Solution Engineer
        </p>
        
        <p className="text-base mb-8 text-gray-600 max-w-2xl mx-auto">
          I build intelligent systems that bridge complex algorithms with intuitive, real-world solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/lil-Zlang"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:lang.gui.bu@gmail.com"
            className="px-6 py-2 bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

