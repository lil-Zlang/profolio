const About = () => {
  return (
    <section id="about" className="py-20 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-black">About</h2>
        
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            I'm driven by a simple question: how can we make complex technology feel human?
          </p>
          
          <p>
            At Boston University, this question led me to create a semi-autonomous cycle for the visually impaired—a project that won the Societal Impact Award.
          </p>
          
          <p>
            I bring that same user-first mindset to my professional work, whether building an AI that makes travel planning 40% easier for customers at EasyBee AI, or a model that makes data centers 5% more efficient at Cadence.
          </p>
          
          <p>
            For me, the goal is always the same: solve real problems for real people.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">40%</div>
            <div className="text-gray-600">Conversion Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">38%</div>
            <div className="text-gray-600">Latency Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">90%+</div>
            <div className="text-gray-600">Test Coverage</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">10+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

