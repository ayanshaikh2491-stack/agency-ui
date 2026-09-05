export default function Analytics() {
  const data = {
    totalProjects: 24,
    completedTasks: 156,
    revenue: '$85K',
    growth: '+12%',
    tasksByMonth: [30, 45, 38, 52, 60, 48, 65, 72, 58, 80, 85, 90],
  };

  const maxVal = Math.max(...data.tasksByMonth);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Total Projects', value: data.totalProjects, color: 'blue' },
          { label: 'Completed Tasks', value: data.completedTasks, color: 'green' },
          { label: 'Revenue', value: data.revenue, color: 'purple' },
          { label: 'Growth', value: data.growth, color: 'emerald' },
        ].map(stat => (
          <div key={stat.label} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="text-2xl font-bold dark:text-white">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold mb-4 dark:text-white">Tasks by Month</h3>
        <div className="flex items-end gap-1 h-40">
          {data.tasksByMonth.map((val, i) => (
            <div key={i} className="flex-1 bg-blue-500 rounded-t flex items-end justify-center text-white text-xs" style={{ height: `${(val / maxVal) * 100}%` }}>
              {val}
            </div>
          ))}
        </div>
        <div className="flex gap-1 mt-2">
          {['J','F','M','A','M','J','J','A','S','O','N','D'].map(m => (
            <div key={m} className="flex-1 text-center text-xs text-gray-400">{m}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
