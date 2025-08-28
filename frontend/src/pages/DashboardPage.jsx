// src/pages/DashboardPage.jsx
export default function DashboardPage() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-6">📊 Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-lg font-bold mb-2">User Stats</h3>
          <p className="text-gray-600">Overview of active users.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-lg font-bold mb-2">Recent Activity</h3>
          <p className="text-gray-600">Latest actions and updates.</p>
        </div>
      </div>
    </div>
  );
}
