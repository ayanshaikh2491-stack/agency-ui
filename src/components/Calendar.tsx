export default function Calendar() {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const events = [
    { day: 12, title: 'Client Meeting', color: 'blue' },
    { day: 18, title: 'Sprint Review', color: 'green' },
    { day: 25, title: 'Release v2.0', color: 'purple' },
  ];

  const getEvents = (day: number) => events.filter(e => e.day === day);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Calendar</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg dark:text-white">{today.toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
          <div className="flex gap-2">
            <button className="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded">◀</button>
            <button className="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded">▶</button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days.map(d => <div key={d} className="text-center text-xs font-medium text-gray-400 py-2">{d}</div>)}
          {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const dayEvents = getEvents(day);
            const isToday = day === today.getDate() && month === today.getMonth();
            return (
              <div key={day} className={`min-h-[80px] p-1 rounded border ${isToday ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-gray-700'}`}>
                <span className={`text-xs ${isToday ? 'font-bold text-blue-600' : 'text-gray-600 dark:text-gray-400'}`}>{day}</span>
                {dayEvents.map((ev, idx) => (
                  <div key={idx} className={`text-[10px] bg-${ev.color}-100 text-${ev.color}-800 rounded px-1 mt-0.5 truncate dark:bg-${ev.color}-900 dark:text-${ev.color}-200`}>
                    {ev.title}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
