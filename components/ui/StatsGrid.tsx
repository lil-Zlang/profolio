import { StatsGridProps } from '@/types'

const StatsGrid = ({ stats }: StatsGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-6 border-t border-gray-200">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-2xl font-bold text-black">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

export default StatsGrid