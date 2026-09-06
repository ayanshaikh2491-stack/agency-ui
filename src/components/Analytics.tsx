export default function Analytics() {
  const data = {
    totalProjects: 24,
    completedTasks: 156,
    revenue: '$85K',
    growth: '+12%',
    tasksByMonth: [30, 45, 38, 52, 60, 48, 65, 72, 58, 80, 85, 90],
  }

  const maxVal = Math.max(...data.tasksByMonth)

  const stats = [
    { label: 'Total Projects', value: data.totalProjects, icon: '📁', color: 'indigo' },
    { label: 'Completed Tasks', value: data.completedTasks, icon: '✅', color: 'emerald' },
    { label: 'Revenue', value: data.revenue, icon: '💰', color: 'violet' },
    { label: 'Growth', value: data.growth, icon: '📈', color: 'teal' },
  ]

  const statBg: Record<string, string> = {
    indigo: 'bg-indigo-50 dark:bg-indigo-900/30',
    emerald: 'bg-emerald-50 dark:bg-emerald-900/30',
    violet: 'bg-violet-50 dark:bg-violet-900/30',
    teal: 'bg-teal-50 dark:bg-teal-900/30',
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Analytics</h2>
        <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 shadow-sm">Export Report</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map(stat => (
          <div key={stat.label} className={`${statBg[stat.color]} rounded-xl p-4 border border-gray-100 dark:border-gray-700`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</span>
              <span className="text-xl">{stat.icon}</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Tasks by Month</h3>
        <div className="flex items-end gap-1.5 h-36">
          {data.tasksByMonth.map((val, i) => (
            <div key={i} className="flex-1 bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t flex items-end justify-center text-white text-[10px] font-medium pb-1" style={{ height: `${(val / maxVal) * 100}%` }}>
              {val}
            </div>
          ))}
        </div>
        <div className="flex gap-1.5 mt-2">
          {['J','F','M','A','M','J','J','A','S','O','N','D'].map(m => (
            <div key={m} className="flex-1 text-center text-[10px] text-gray-400">{m}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
