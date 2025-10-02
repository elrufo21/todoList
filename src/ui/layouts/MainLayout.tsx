import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SideBar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <div className="flex flex-1 relative overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-4 lg:p-6 w-full lg:w-auto overflow-y-auto bg-gray-100">
            <Outlet />
        </main>
      </div>
    </div>
  );
};
export default MainLayout;
