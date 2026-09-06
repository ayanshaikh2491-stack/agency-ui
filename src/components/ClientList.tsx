export default function ClientList() {
  const clients = [
    { name: 'TechCorp Industries', sector: 'Technology', status: 'active', revenue: '$120K', growth: '+12%', color: '#6366f1' },
    { name: 'GreenEnergy Ltd', sector: 'Energy', status: 'active', revenue: '$85K', growth: '+8%', color: '#10b981' },
    { name: 'HealthPlus Inc', sector: 'Healthcare', status: 'pending', revenue: '$45K', growth: '+3%', color: '#f59e0b' },
    { name: 'EduLearn Academy', sector: 'Education', status: 'active', revenue: '$60K', growth: '+15%', color: '#8b5cf6' },
    { name: 'FinServe Bank', sector: 'Finance', status: 'paused', revenue: '$200K', growth: '-2%', color: '#ef4444' },
  ]

  const statusStyles: Record<string, string> = {
    active: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400',
    pending: 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400',
    paused: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Client List</h2>
        <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 shadow-sm">+ Add Client</button>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50 dark:bg-gray-900/50">
            <tr>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Client</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Sector</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Revenue</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Growth</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {clients.map(client => (
              <tr key={client.name} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs" style={{ backgroundColor: client.color }}>
                      {client.name[0]}
                    </div>
                    <span className="font-medium text-sm text-gray-900 dark:text-white">{client.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3 text-sm text-gray-500">{client.sector}</td>
                <td className="px-5 py-3 text-sm font-medium text-gray-900 dark:text-white">{client.revenue}</td>
                <td className="px-5 py-3">
                  <span className={`text-xs font-semibold ${client.growth.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>
                    {client.growth}
                  </span>
                </td>
                <td className="px-5 py-3"><span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[client.status]}`}>{client.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
