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

        <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900 tracking-tight">
          Zhilang Gui
        </h1>

        <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
          I build intelligent systems that bridge complex algorithms with intuitive, real-world solutions.
        </p>
      </div>
    </section>
  )
}

export default Hero
