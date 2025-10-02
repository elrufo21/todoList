import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { NavItem } from "./types";  // definir el tipo en algún lugar

interface NavigationLinksProps {
  menu: NavItem[];
}

const NavigationLinks = ({ menu }: NavigationLinksProps) => {
  // Para manejar estados de dropdown por índice, podrías usar un array de booleans
  const [openDropdowns, setOpenDropdowns] = useState<boolean[]>([]);

  const toggleDropdown = (idx: number) => {
    setOpenDropdowns((prev) => {
      const newArr = [...prev];
      newArr[idx] = !newArr[idx];
      return newArr;
    });
  };

  return (
    <nav className="space-y-2">
      {menu.map((item, i) => {
        const hasSub = item.submenu && item.submenu.length > 0;
        return (
          <div key={i}>
            {hasSub ? (
              <div>
                <button
                  onClick={() => toggleDropdown(i)}
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {/* Aquí puedes renderizar item.icon si existe */}
                    <span>{item.label}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openDropdowns[i] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdowns[i] && (
                  <div className="ml-6 mt-1 space-y-1">
                    {item.submenu!.map((sub, j) => (
                      <a
                        href={sub.href ?? "#"}
                        key={j}
                        className="block px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                href={item.href ?? "#"}
                className="flex items-center gap-3 px-3 py-2 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {/* item.icon si existe */}
                <span>{item.label}</span>
              </a>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default NavigationLinks;
