import { Menu, X } from "lucide-react";
import { useUIStore } from "../../data/stores/ui.store";

const Header = () => {
  const { sidebarOpen, setSidebarOpen } = useUIStore();
  return (
    <header className="bg-white shadow-sm px-4 py-3 flex items-center justify-between z-50">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          {sidebarOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
        <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600 hidden sm:block">
          Administrador
        </span>
        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
      </div>
    </header>
  );
};
export default Header;
