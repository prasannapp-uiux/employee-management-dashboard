import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const MainLayout = () => {
  return (
    <div className="h-screen flex">
      
      {/* Sidebar - full height */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex flex-col flex-1">
        
        {/* Header only for content area */}
        <Header />

        {/* Content */}
        <main className="flex-1 bg-gray-50 p-6 overflow-auto">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default MainLayout;