export default function ClientList() {
  const clients = [
    { name: 'TechCorp Industries', sector: 'Technology', status: 'active', revenue: '$120K' },
    { name: 'GreenEnergy Ltd', sector: 'Energy', status: 'active', revenue: '$85K' },
    { name: 'HealthPlus Inc', sector: 'Healthcare', status: 'pending', revenue: '$45K' },
    { name: 'EduLearn Academy', sector: 'Education', status: 'active', revenue: '$60K' },
    { name: 'FinServe Bank', sector: 'Finance', status: 'paused', revenue: '$200K' },
  ];

  const statusStyles: Record<string, string> = {
    active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    paused: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Client List</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Client</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sector</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {clients.map(client => (
              <tr key={client.name} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-4 py-3 font-medium dark:text-white">{client.name}</td>
                <td className="px-4 py-3 text-sm text-gray-500">{client.sector}</td>
                <td className="px-4 py-3 text-sm dark:text-white">{client.revenue}</td>
                <td className="px-4 py-3"><span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[client.status]}`}>{client.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
