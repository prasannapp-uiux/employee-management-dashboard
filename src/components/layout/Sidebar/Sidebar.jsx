import "./Sidebar.css";
import { LayoutDashboard, Users, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    label: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Employee List",
    path: "/employee-list",
    icon: Users,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  return (
    <>
      <div className="bg-white border-r border-gray-200 min-h-screen w-64 p-6 ">
        <div className="logo-section flex align-items-center gap-x-2 mb-4">
          <img src="/logo.svg" alt="" />
          <div className="logo-content">
            <h5 className="text-base font-bold text-gray-900">EMS Portal</h5>
            <p className="text-xs font-medium text-gray-700">
              Work Force Admin
            </p>
          </div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            return <NavLink
            key={item.path}
  to={item.path}
            className = {({isActive}) => {
              return (
                `flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${isActive ? "bg-blue-100 text-blue-600 font-medium" : "text-gray-600 hover:bg-gray-200"}`
              )
            }}>
              <Icon className="w-5 h-5"/>
              <span>{item.label}</span>
            </NavLink>;
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
