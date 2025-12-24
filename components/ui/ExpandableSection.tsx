import { ExpandableSectionProps } from '@/types'
import SectionHeader from './SectionHeader'

const ExpandableSection = ({
  id,
  title,
  subtitle,
  isExpanded,
  onToggle,
  children
}: ExpandableSectionProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-sm shadow-gray-200/50 ring-1 ring-gray-100 overflow-hidden hover:shadow-md hover:ring-gray-200 transition-all duration-300">
      <SectionHeader
        title={title}
        subtitle={subtitle}
        isExpanded={isExpanded}
        onToggle={() => onToggle(id)}
      />

      <div
        className={`grid transition-all duration-300 ease-out ${
          isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-2 border-t border-gray-100">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpandableSection
