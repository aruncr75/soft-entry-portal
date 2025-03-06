import React, { useState } from 'react';
import DashboardSidebar from '@/components/DashboardSidebar';
import AlertDevices from '@/components/AlertDevices';
import DeviceDetails from '@/components/DeviceDetails';
import DeviceHealth from '@/components/DeviceHealth';

const Dashboard = () => {
  const [selectedDevice, setSelectedDevice] = useState(null);

  return (
    <div className="flex h-screen bg-gray-100">
      <DashboardSidebar />
      <div className="flex-1 flex overflow-hidden">
        {/* Left panel - Alert Devices */}
        <div className="w-[400px] overflow-y-auto border-r">
          <AlertDevices onDeviceSelect={setSelectedDevice} />
        </div>
        
        {/* Right panel - DeviceHealth or DeviceDetails */}
        <div className="flex-1 overflow-y-auto">
          {selectedDevice ? (
            <DeviceDetails device={selectedDevice} />
          ) : (
            <DeviceHealth />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


