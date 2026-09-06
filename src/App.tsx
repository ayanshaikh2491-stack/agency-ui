import { useState } from 'react'
import TaskBoard from './components/TaskBoard'
import TeamMembers from './components/TeamMembers'
import ClientList from './components/ClientList'
import Analytics from './components/Analytics'
import Calendar from './components/Calendar'

type Tab = 'dashboard' | 'tasks' | 'team' | 'clients' | 'analytics' | 'calendar'

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard')
  const [darkMode, setDarkMode] = useState(false)

  const tabs: { key: Tab; label: string; icon: string }[] = [
    { key: 'dashboard', label: 'Dashboard', icon: '📊' },
    { key: 'tasks', label: 'Tasks', icon: '📋' },
    { key: 'team', label: 'Team', icon: '👥' },
    { key: 'clients', label: 'Clients', icon: '🤝' },
    { key: 'analytics', label: 'Analytics', icon: '📈' },
    { key: 'calendar', label: 'Calendar', icon: '📅' },
  ]

  const statColors: Record<string, string> = {
    blue: 'bg-blue-500',
    green: 'bg-emerald-500',
    purple: 'bg-violet-500',
    emerald: 'bg-teal-500',
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Agency Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Active Projects', value: '8', sub: '+2 this week', color: 'blue', icon: '📁' },
                { label: 'Team Members', value: '5', sub: '3 online now', color: 'green', icon: '👤' },
                { label: 'Active Clients', value: '5', sub: '1 pending', color: 'purple', icon: '🏢' },
                { label: 'Tasks Completed', value: '42', sub: '+5 today', color: 'emerald', icon: '✅' },
              ].map(stat => (
                <div key={stat.label} className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</span>
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</span>
                    <span className="text-xs font-medium text-gray-400 mb-1">{stat.sub}</span>
                  </div>
                  <div className="mt-3 h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${statColors[stat.color]} w-3/4`} />
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Recent Activity</h3>
                <ul className="space-y-3">
                  {[
                    { text: '✅ CI/CD pipeline configured', time: '2m ago' },
                    { text: '📋 Task board updated', time: '15m ago' },
                    { text: '👥 Team onboarding complete', time: '1h ago' },
                    { text: '📈 Analytics report generated', time: '3h ago' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-300">{item.text}</span>
                      <span className="text-xs text-gray-400">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Quick Actions</h3>
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 shadow-sm">+ New Task</button>
                  <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 shadow-sm">+ New Client</button>
                  <button className="px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-medium hover:bg-violet-700 shadow-sm">+ Team Event</button>
                </div>
              </div>
            </div>
          </div>
        )
      case 'tasks': return <TaskBoard />
      case 'team': return <TeamMembers />
      case 'clients': return <ClientList />
      case 'analytics': return <Analytics />
      case 'calendar': return <Calendar />
    }
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        {/* Sidebar */}
        <aside className="w-56 bg-gray-900 text-white flex flex-col py-4 shrink-0">
          <div className="px-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-sm">A</div>
              <span className="font-semibold text-white text-lg">Agency</span>
            </div>
          </div>
          <nav className="flex-1 px-2 space-y-1">
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
          <div className="px-2 mt-2">
            <button onClick={() => setDarkMode(!darkMode)} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
              <span className="text-lg">{darkMode ? '☀️' : '🌙'}</span>
              <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 overflow-auto">
          <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-3 flex items-center justify-between sticky top-0 z-10">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                <input type="text" placeholder="Search anything..." className="w-full pl-9 pr-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-lg text-sm border border-transparent focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-colors" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500 dark:text-gray-400 hidden sm:block">Good morning, Ayaan 👋</span>
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">A</div>
            </div>
          </header>
          <div className="p-6">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
}
