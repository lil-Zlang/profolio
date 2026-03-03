import Image from 'next/image'

const Hero = () => {
  return (
    <section className="pt-16 pb-12 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-8">
        {/* Name + Photo Row */}
        <div className="flex items-center gap-6 mb-6">
          <h1 className="text-6xl md:text-8xl font-black text-black dark:text-white uppercase tracking-tight leading-none">
            Lang Gui
          </h1>
          <div className="shrink-0">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700">
              <Image
                src="/profile.jpeg"
                alt="Lang Gui"
                width={112}
                height={112}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="max-w-4xl space-y-4">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
            I&apos;m Lang, an AI Engineer at <span className="font-bold text-black dark:text-white underline decoration-2 decoration-[#FFB74D]">EasyBee AI</span> building multi-agent systems and production RAG pipelines. I ship AI-powered products from <span className="font-bold text-black dark:text-white underline decoration-2 decoration-[#FFB74D]">0&rarr;1</span> &mdash; <span className="font-bold text-black dark:text-white">10 apps in 10 weeks</span>, from a winning AWS hackathon automated red-teaming platform to voice-to-PR agents.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
            BU Computer Engineering &apos;25, Technology Innovation concentration. Ex-<span className="font-bold text-black dark:text-white underline decoration-2 decoration-[#FFB74D]">Cadence Design Systems</span>.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
            <span className="bg-[#FFB74D] px-1 font-bold text-black">Building for today&apos;s problems. Architecting for tomorrow&apos;s.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
