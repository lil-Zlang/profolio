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
    <div className="border border-gray-200">
      <SectionHeader
        title={title}
        subtitle={subtitle}
        isExpanded={isExpanded}
        onToggle={() => onToggle(id)}
      />

      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  )
}

export default ExpandableSection