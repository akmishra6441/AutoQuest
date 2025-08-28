// src/App.jsx
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";

export default function App() {
  return (
    <div className="h-screen w-screen flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      {/* Sidebar + Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
          <DashboardPage />
        </main>
      </div>
    </div>
  );
}
