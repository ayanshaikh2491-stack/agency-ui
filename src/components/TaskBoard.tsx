import { useState } from 'react'

interface Task {
  id: number
  title: string
  desc: string
  status: 'backlog' | 'progress' | 'done'
  priority: 'low' | 'medium' | 'high'
  assignee: string
}

const initialTasks: Task[] = [
  { id: 1, title: 'Design homepage mockup', desc: 'Create Figma mockup for new homepage', status: 'backlog', priority: 'high', assignee: 'Ayaan' },
  { id: 2, title: 'Setup CI/CD pipeline', desc: 'Configure GitHub Actions for deploy', status: 'progress', priority: 'high', assignee: 'Priya' },
  { id: 3, title: 'Write API docs', desc: 'Document all REST endpoints', status: 'progress', priority: 'medium', assignee: 'Rahul' },
  { id: 4, title: 'Fix navbar responsiveness', desc: 'Mobile menu not working on iOS', status: 'done', priority: 'medium', assignee: 'Ayaan' },
  { id: 5, title: 'Add dark mode toggle', desc: 'Implement theme switcher', status: 'backlog', priority: 'low', assignee: 'Priya' },
  { id: 6, title: 'Database migration', desc: 'Migrate PostgreSQL tables', status: 'done', priority: 'high', assignee: 'Rahul' },
]

const columns: { key: Task['status']; label: string; bg: string }[] = [
  { key: 'backlog', label: 'Backlog', bg: 'bg-slate-50 dark:bg-slate-900/50' },
  { key: 'progress', label: 'In Progress', bg: 'bg-blue-50 dark:bg-blue-900/20' },
  { key: 'done', label: 'Done', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
]

const priorityStyles: Record<string, string> = {
  high: 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-400',
  medium: 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400',
  low: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400',
}

export default function TaskBoard() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  const moveTask = (id: number, newStatus: Task['status']) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Task Board</h2>
        <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 shadow-sm">+ Add Task</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {columns.map(col => (
          <div key={col.key} className={`${col.bg} rounded-xl p-4 border border-gray-200 dark:border-gray-700`}>
            <h3 className="font-semibold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">{col.label}</h3>
            <div className="space-y-3">
              {tasks.filter(t => t.status === col.key).map(task => (
                <div key={task.id} className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-sm text-gray-900 dark:text-white">{task.title}</h4>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${priorityStyles[task.priority]}`}>{task.priority}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{task.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{task.assignee}</span>
                    {col.key !== 'done' && (
                      <button onClick={() => moveTask(task.id, col.key === 'backlog' ? 'progress' : 'done')} className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded hover:bg-indigo-100 font-medium">
                        {col.key === 'backlog' ? '▶ Start' : '✓ Done'}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
