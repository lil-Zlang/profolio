import { BulletListProps } from '@/types'

const BulletList = ({ items, className = '' }: BulletListProps) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-3">
          <div className="mt-2 w-1 h-1 bg-black rounded-full flex-shrink-0" />
          <span className="text-gray-700 text-sm">{item}</span>
        </div>
      ))}
    </div>
  )
}

export default BulletList