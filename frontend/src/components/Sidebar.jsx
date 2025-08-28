// src/components/Sidebar.jsx
import { Home, FileText, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="h-full w-60 bg-white shadow-md p-4 flex flex-col gap-3">
      <a
        href="#"
        className="flex items-center gap-2 p-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition"
      >
        <Home size={18} /> Dashboard
      </a>
      <a
        href="#"
        className="flex items-center gap-2 p-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition"
      >
        <FileText size={18} /> Reports
      </a>
      <a
        href="#"
        className="flex items-center gap-2 p-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition"
      >
        <Settings size={18} /> Settings
      </a>
    </aside>
  );
}
