import { useState } from 'react';

interface Task {
  id: number;
  title: string;
  desc: string;
  status: 'backlog' | 'progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  assignee: string;
}

const initialTasks: Task[] = [
  { id: 1, title: 'Design homepage mockup', desc: 'Create Figma mockup for new homepage', status: 'backlog', priority: 'high', assignee: 'Ayaan' },
  { id: 2, title: 'Setup CI/CD pipeline', desc: 'Configure GitHub Actions for deploy', status: 'progress', priority: 'high', assignee: 'Priya' },
  { id: 3, title: 'Write API docs', desc: 'Document all REST endpoints', status: 'progress', priority: 'medium', assignee: 'Rahul' },
  { id: 4, title: 'Fix navbar responsiveness', desc: 'Mobile menu not working on iOS', status: 'done', priority: 'medium', assignee: 'Ayaan' },
  { id: 5, title: 'Add dark mode toggle', desc: 'Implement theme switcher', status: 'backlog', priority: 'low', assignee: 'Priya' },
  { id: 6, title: 'Database migration', desc: 'Migrate PostgreSQL tables', status: 'done', priority: 'high', assignee: 'Rahul' },
];

const columns: { key: Task['status']; label: string; bg: string; headerBg: string }[] = [
  { key: 'backlog', label: 'Backlog', bg: 'bg-gray-50 dark:bg-gray-900', headerBg: 'bg-gray-100 dark:bg-gray-800' },
  { key: 'progress', label: 'In Progress', bg: 'bg-blue-50 dark:bg-blue-900/20', headerBg: 'bg-blue-100 dark:bg-blue-900/30' },
  { key: 'done', label: 'Done', bg: 'bg-green-50 dark:bg-green-900/20', headerBg: 'bg-green-100 dark:bg-green-900/30' },
];

const priorityStyles: Record<string, string> = {
  high: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  low: 'bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200',
};

export default function TaskBoard() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const moveTask = (id: number, newStatus: Task['status']) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Task Board</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {columns.map(col => (
          <div key={col.key} className={`${col.bg} rounded-lg p-4 border border-gray-200 dark:border-gray-700`}>
            <h3 className="font-semibold text-lg mb-3 capitalize dark:text-white">{col.label}</h3>
            <div className="space-y-2">
              {tasks.filter(t => t.status === col.key).map(task => (
                <div key={task.id} className="rounded p-3 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow dark:bg-gray-800">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-sm dark:text-white">{task.title}</h4>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${priorityStyles[task.priority]}`}>
                      {task.priority}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{task.desc}</p>
                  <p className="text-xs text-gray-400 mt-2">Assigned: {task.assignee}</p>
                  {col.key !== 'done' && (
                    <div className="mt-2">
                      {col.key === 'backlog' && (
                        <button onClick={() => moveTask(task.id, 'progress')} className="text-xs bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Start</button>
                      )}
                      {col.key === 'progress' && (
                        <button onClick={() => moveTask(task.id, 'done')} className="text-xs bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Done</button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
