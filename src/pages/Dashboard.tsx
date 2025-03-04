
import React from 'react';
import DashboardSidebar from '@/components/DashboardSidebar';
import AlertDevices from '@/components/AlertDevices';
import DeviceHealth from '@/components/DeviceHealth';
import DashboardHeader from '@/components/DashboardHeader';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <DashboardSidebar />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <DashboardHeader />
        
        {/* Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left panel - Alert Devices */}
          <div className="w-1/3 overflow-y-auto border-r">
            <AlertDevices />
          </div>
          
          {/* Right panel - Device Health */}
          <div className="w-2/3 overflow-y-auto">
            <DeviceHealth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
