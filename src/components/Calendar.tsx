export default function Calendar() {
  const today = new Date()
  const month = today.getMonth()
  const year = today.getFullYear()
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const events = [
    { day: 12, title: 'Client Meeting', color: 'indigo' },
    { day: 18, title: 'Sprint Review', color: 'emerald' },
    { day: 25, title: 'Release v2.0', color: 'violet' },
  ]

  const eventBg: Record<string, string> = {
    indigo: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-400',
    emerald: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400',
    violet: 'bg-violet-50 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400',
  }

  const getEvents = (day: number) => events.filter(e => e.day === day)

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Calendar</h2>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 shadow-sm">+ New Event</button>
          <button className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50">◀ Prev</button>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-900 dark:text-white">{today.toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
          <div className="flex gap-3">
            {[{ c: 'indigo', l: 'Meeting' }, { c: 'emerald', l: 'Review' }, { c: 'violet', l: 'Release' }].map(e => (
              <div key={e.l} className="flex items-center gap-1.5 text-xs text-gray-500">
                <div className={`w-2 h-2 rounded-full bg-${e.c}-500`} />
                {e.l}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-7 gap-0.5">
          {days.map(d => <div key={d} className="text-center text-[10px] font-semibold text-gray-400 py-2">{d}</div>)}
          {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} className="min-h-[70px] p-0.5" />)}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1
            const dayEvents = getEvents(day)
            const isToday = day === today.getDate() && month === today.getMonth()
            return (
              <div key={day} className={`min-h-[70px] p-1 rounded-lg border ${isToday ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 ring-2 ring-indigo-100' : 'border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}>
                <span className={`text-xs font-semibold ${isToday ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-400'}`}>{day}</span>
                {dayEvents.map((ev, idx) => (
                  <div key={idx} className={`text-[9px] ${eventBg[ev.color]} rounded px-1 mt-0.5 truncate cursor-pointer hover:opacity-80`}>
                    {ev.title}
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
