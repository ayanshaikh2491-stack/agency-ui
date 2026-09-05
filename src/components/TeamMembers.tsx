export default function TeamMembers() {
  const team = [
    { name: 'Ayaan Shaikh', role: 'Lead Developer', status: 'online', tasks: 3 },
    { name: 'Priya Patel', role: 'Designer', status: 'online', tasks: 2 },
    { name: 'Rahul Kumar', role: 'Backend Dev', status: 'away', tasks: 4 },
    { name: 'Sunita Verma', role: 'QA Engineer', status: 'offline', tasks: 1 },
    { name: 'Vikram Singh', role: 'DevOps', status: 'online', tasks: 2 },
  ];

  const statusColors: Record<string, string> = {
    online: 'bg-green-500',
    away: 'bg-yellow-500',
    offline: 'bg-gray-400',
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Team Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {team.map(member => (
          <div key={member.name} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                {member.name[0]}
              </div>
              <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${statusColors[member.status]} border-2 border-white dark:border-gray-800`} />
            </div>
            <div>
              <h3 className="font-semibold dark:text-white">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
              <p className="text-xs text-gray-400">{member.tasks} tasks</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
