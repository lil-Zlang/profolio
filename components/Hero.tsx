import Image from 'next/image'

const Hero = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Profile Image */}
          <div className="shrink-0">
            <div className="w-36 h-36 rounded-[2rem] overflow-hidden shadow-xl shadow-gray-200/60 ring-1 ring-gray-100">
              <Image
                src="/profile.jpeg"
                alt="Zhilang Gui"
                width={144}
                height={144}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900 tracking-tight">
              Zhilang Gui
            </h1>

            <div className="space-y-2">
              <p className="text-gray-600 leading-relaxed">
                Lead AI Engineer at <span className="font-semibold text-gray-900">EasyBee AI</span> — built multi-agent systems that improved booking and support workflows by <span className="font-semibold text-gray-900">40%</span>.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Recent <span className="font-semibold text-gray-900">BU</span> grad &apos;25. Designed a semi-autonomous tricycle that won the <span className="font-semibold text-gray-900">Society Impact Award</span> among 70 competing senior design projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
