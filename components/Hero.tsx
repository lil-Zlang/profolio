import Image from 'next/image'

const Hero = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-48 h-48 rounded-[2.5rem] overflow-hidden shadow-xl shadow-gray-200/60 ring-1 ring-gray-100">
            <Image
              src="/profile.jpeg"
              alt="Zhilang Gui"
              width={192}
              height={192}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold mb-2 text-gray-900 tracking-tight">
          Zhilang Gui
        </h1>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm ring-1 ring-gray-100 p-6 text-left">
          <p className="text-gray-700 leading-relaxed">
            Lead AI Engineer at <span className="font-semibold text-black">EasyBee AI</span> · Recent graduate from <span className="font-semibold text-black">Boston University</span>. Engineered a <span className="font-semibold text-black">multi-skill agent framework</span> that drove a <span className="font-semibold text-black">40% efficiency gain</span> in booking and accuracy workflows. Award-winning lead for the <span className="font-semibold text-black">Society Impact Award</span> in BU senior design out of 70 teams.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
