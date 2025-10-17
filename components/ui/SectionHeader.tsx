import { SectionHeaderProps } from '@/types'

const SectionHeader = ({ title, subtitle, isExpanded, onToggle }: SectionHeaderProps) => {
  return (
    <button
      onClick={onToggle}
      className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex justify-between items-center"
    >
      <div>
        <h2 className="text-xl font-bold text-black">{title}</h2>
        <p className="text-gray-600 mt-1">{subtitle}</p>
      </div>
      <span className="text-2xl text-gray-400">
        {isExpanded ? '−' : '+'}
      </span>
    </button>
  )
}

export default SectionHeader