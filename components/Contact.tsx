const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-black">Contact</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              I'm driven by complex challenges and the opportunity to create technology with a purpose. 
              If you have a project that aims to make a real-world impact, I would love to connect.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-black mb-2">Email</h3>
                <a
                  href="mailto:lang.gui.bu@gmail.com"
                  className="text-gray-700 hover:text-black transition-colors"
                >
                  lang.gui.bu@gmail.com
                </a>
              </div>
              
              <div>
                <h3 className="font-bold text-black mb-2">Location</h3>
                <p className="text-gray-700">San Francisco, CA</p>
              </div>
              
              <div>
                <h3 className="font-bold text-black mb-2">Links</h3>
                <div className="space-y-2">
                  <div>
                    <a
                      href="https://github.com/lil-Zlang"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-black transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/zhilang-gui-b5b59b254/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-black transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 p-8">
            <h3 className="text-xl font-bold mb-6 text-black">Let's Work Together</h3>
            <p className="text-gray-700 mb-6">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <div className="w-1 h-1 bg-black rounded-full" />
                Available for freelance projects
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1 h-1 bg-black rounded-full" />
                Open to collaboration
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1 h-1 bg-black rounded-full" />
                Response within 24 hours
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

