import { useUIStore } from "../../data/stores/ui.store"; // ruta según tu estructura
import NavigationLinks from "./NavigationLinks";
import type { NavItem } from "./types";

const menuData: NavItem[] = [
  { label: "Dashboard", href: "/" },
  {
    label: "Tareas",
    submenu: [
      { label: "Tareas", href: "/products" },
      { label: "Crear tarea", href: "/billing" },
      { label: "Actualizar tarea", href: "/invoice" },
    ],
  },
  {label:"Configuracion",href:"/setting"}
  
];

const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useUIStore();

  return (
    <>
     {sidebarOpen && (
          <div
            className="fixed inset-0  z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <aside
          className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="h-full px-3 py-4 overflow-y-auto">
            <NavigationLinks menu={menuData}  />
          </div>
        </aside>
    </>
  );
};

export default Sidebar;
