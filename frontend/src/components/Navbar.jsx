// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600 text-white px-6 py-3 shadow-md flex items-center justify-between">
      <h1 className="text-2xl font-bold tracking-wide">⚡ AutoQuest</h1>
      <div className="flex items-center gap-4">
        <button className="hover:bg-blue-700 px-3 py-1 rounded">Login</button>
        <button className="bg-white text-blue-600 px-3 py-1 rounded shadow hover:bg-gray-200">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
