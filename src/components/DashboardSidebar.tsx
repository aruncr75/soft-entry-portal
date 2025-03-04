
import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Settings, Users, FileText, Heart, List, Plus } from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active = false, to = "#" }) => {
  return (
    <Link 
      to={to}
      className={`flex items-center gap-3 p-3 hover:bg-gray-700 transition-colors ${
        active ? 'bg-lime-300 text-black font-medium' : 'text-white'
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </Link>
  );
};

const DashboardSidebar = () => {
  return (
    <aside className="w-64 bg-[#0F171B] flex flex-col">
      <div className="flex-1">
        <SidebarItem icon={LayoutDashboard} label="Dashboard" active to="/dashboard" />
        <SidebarItem icon={Settings} label="Deployment Configuration" to="#" />
        <SidebarItem icon={Users} label="User Management" to="#" />
        <SidebarItem icon={FileText} label="Report Generation" to="#" />
        <SidebarItem icon={Heart} label="Health Status" to="#" />
        <SidebarItem icon={List} label="IDU Status" to="#" />
        <SidebarItem icon={List} label="ODU Status" to="#" />
        <SidebarItem icon={Settings} label="Configuration" to="#" />
        <SidebarItem icon={Settings} label="IDU Configuration" to="#" />
        <SidebarItem icon={Settings} label="ODU Configuration" to="#" />
      </div>
      
      {/* User profile at bottom */}
      <div className="p-4 border-t border-gray-700 flex items-center space-x-3">
        <div className="h-10 w-10 rounded-full bg-gray-300 overflow-hidden">
          <img 
            src="/lovable-uploads/7b47cdd1-8fe8-417c-b501-12f996e0ce44.png" 
            alt="Profile" 
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <div className="text-white font-medium">S. Kumar</div>
          <div className="text-gray-400 text-sm">Admin</div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
