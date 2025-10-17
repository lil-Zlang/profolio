import { TagListProps } from '@/types'

const TagList = ({ tags }: TagListProps) => {
  return (
    <div className="flex flex-wrap gap-1">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs border border-gray-200"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

export default TagList