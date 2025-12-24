import { SectionHeaderProps } from '@/types'

const SectionHeader = ({ title, subtitle, isExpanded, onToggle }: SectionHeaderProps) => {
  return (
    <button
      onClick={onToggle}
      className="w-full p-6 text-left hover:bg-gray-50/50 transition-all duration-200 flex justify-between items-center group"
    >
      <div>
        <h2 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">{title}</h2>
        <p className="text-gray-500 mt-1">{subtitle}</p>
      </div>
      <span className={`text-xl text-gray-300 group-hover:text-gray-400 transition-all duration-300 ${isExpanded ? 'rotate-45' : 'rotate-0'}`}>
        +
      </span>
    </button>
  )
}

export default SectionHeader
