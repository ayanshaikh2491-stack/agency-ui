export default function TeamMembers() {
  const team = [
    { name: 'Ayaan Shaikh', role: 'Lead Developer', status: 'online', tasks: 3, avatar: '#6366f1' },
    { name: 'Priya Patel', role: 'Designer', status: 'online', tasks: 2, avatar: '#10b981' },
    { name: 'Rahul Kumar', role: 'Backend Dev', status: 'away', tasks: 4, avatar: '#f59e0b' },
    { name: 'Sunita Verma', role: 'QA Engineer', status: 'offline', tasks: 1, avatar: '#ef4444' },
    { name: 'Vikram Singh', role: 'DevOps', status: 'online', tasks: 2, avatar: '#8b5cf6' },
  ]

  const statusLabels: Record<string, string> = { online: 'Online', away: 'Away', offline: 'Offline' }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Team Members</h2>
        <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 shadow-sm">+ Invite</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {team.map(member => (
          <div key={member.name} className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <div className="relative">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-semibold text-sm" style={{ backgroundColor: member.avatar }}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-gray-800 ${
                  member.status === 'online' ? 'bg-emerald-500' : member.status === 'away' ? 'bg-amber-500' : 'bg-gray-400'
                }`} />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-xs text-gray-500">{member.role}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">{member.tasks} tasks assigned</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                member.status === 'online' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400' :
                member.status === 'away' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400' :
                'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
              }`}>
                {statusLabels[member.status]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
