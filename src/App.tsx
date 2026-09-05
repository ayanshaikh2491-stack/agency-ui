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

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div>
            <h1 className="text-3xl font-bold mb-6 dark:text-white">Agency Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Active Projects', value: '8', color: 'blue' },
                { label: 'Team Members', value: '5', color: 'green' },
                { label: 'Active Clients', value: '5', color: 'purple' },
                { label: 'Tasks Completed', value: '42', color: 'emerald' },
              ].map(stat => (
                <div key={stat.label} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-3xl font-bold dark:text-white">{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg mb-3 dark:text-white">Recent Activity</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-600 dark:text-gray-400">✅ CI/CD pipeline configured</li>
                  <li className="text-sm text-gray-600 dark:text-gray-400">📋 Task board updated</li>
                  <li className="text-sm text-gray-600 dark:text-gray-400">👥 Team onboarding complete</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-lg mb-3 dark:text-white">Quick Actions</h3>
                <div className="flex flex-wrap gap-2">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600">+ New Task</button>
                  <button className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600">+ New Client</button>
                  <button className="px-3 py-1 bg-purple-500 text-white rounded text-sm hover:bg-purple-600">+ Team Event</button>
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
        <aside className="w-16 bg-gray-900 text-white flex flex-col items-center py-4">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-lg mb-6">A</div>
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`w-12 h-12 flex items-center justify-center text-lg mb-2 rounded-lg ${activeTab === tab.key ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
              title={tab.label}
            >
              {tab.icon}
            </button>
          ))}
          <button onClick={() => setDarkMode(!darkMode)} className="mt-auto w-12 h-12 flex items-center justify-center hover:bg-gray-800 rounded-lg">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </aside>

        {/* Main */}
        <main className="flex-1 overflow-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}
