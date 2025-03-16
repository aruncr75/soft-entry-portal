import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Settings,
  Users,
  FileText,
  Heart,
  Database,
  ServerCog,
  ChevronDown,
} from "lucide-react";
import Logo from "./Logo";

const SidebarItem = ({ icon: Icon, label, active = false, to = "#" }) => {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 p-3 hover:bg-gray-700 transition-colors ${
        active ? "bg-lime-300 text-black font-medium" : "text-white"
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </Link>
  );
};

const DashboardSidebar = ({ currentPath = "/dashboard" }) => {
  return (
    <aside className="w-80 min-h-screen bg-[#0F171B] flex flex-col relative">
      {/* Blue header at the top */}
      <div className="flex flex-col items-center justify-center p-[26px_10px] gap-[10px] w-[calc(100%-2rem)] h-[165px] mx-auto bg-[#D1EFFF] rounded-[0px_0px_30px_30px]">
        <Logo small center />
      </div>

      <div className="flex-1 mt-[50px]">
        <SidebarItem
          icon={LayoutDashboard}
          label="Dashboard"
          active={currentPath === "/dashboard"}
          to="/dashboard"
        />
        <SidebarItem
          icon={ServerCog}
          label="Deployment Configuration"
          active={currentPath === "/deployment"}
          to="/deployment"
        />
        <SidebarItem
          icon={Users}
          label="User Management"
          active={currentPath === "/user-management"}
          to="/user-management"
        />
        <SidebarItem
          icon={FileText}
          label="Monitoring and Report"
          active={currentPath === "/monitoring-report"}
          to="/monitoring-report"
        />
        <SidebarItem icon={Heart} label="Health Status" to="#" />
        <div className="ml-4">
          <SidebarItem
            icon={Database}
            label="IDU Status"
            to="/idu-status"
            active={currentPath === "/idu-status"}
          />
          <SidebarItem
            icon={Database}
            label="ODU Status"
            to="/odu-status"
            active={currentPath === "/odu-status"}
          />
        </div>
        <SidebarItem icon={Settings} label="Configuration" to="#" />
        <div className="ml-4">
          <SidebarItem
            icon={Database}
            label="IDU Configuration"
            to="/idu-config"
            active={currentPath === "/idu-config"}
          />
          <SidebarItem icon={Database} label="ODU Configuration" to="#" />
        </div>
      </div>

      {/* User profile at bottom */}
      <div className="p-4 border-t border-gray-700 flex items-center">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gray-300 overflow-hidden">
            <img
              src="/lovable-uploads/7b47cdd1-8fe8-417c-b501-12f996e0ce44.png"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <span className="text-white font-medium">S. Kumar</span>
              <ChevronDown
                className="text-white font-medium self-center font-bold"
                size={20}
              />
            </div>
            <div className="text-gray-400 text-sm">Admin</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
