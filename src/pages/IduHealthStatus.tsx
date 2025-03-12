import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DashboardSidebar from "@/components/DashboardSidebar";

const IduHealthStatus = () => {
  const [deviceAddress, setDeviceAddress] = useState("");
  const [deviceType, setDeviceType] = useState("");

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar currentPath="/idu-status" />

      <div className="flex-1 bg-[#FFE7E0] p-8">
        <h1 className="text-3xl font-semibold mb-8">IDU Health Status</h1>

        {/* Device Status Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-400"></div>
          <h2 className="text-xl font-semibold mb-6">Device Status</h2>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-gray-500 mb-2">Device Address</label>
              <Input
                value={deviceAddress}
                onChange={(e) => setDeviceAddress(e.target.value)}
                placeholder="Enter device address"
                className="border-2 border-gray-300 h-12"
              />
            </div>
            <div>
              <label className="block text-gray-500 mb-2">Device Type</label>
              <Input
                value={deviceType}
                onChange={(e) => setDeviceType(e.target.value)}
                placeholder="Enter device type"
                className="border-2 border-gray-300 h-12"
              />
            </div>
          </div>

          {/* Status Display Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-[#F9F9F9] p-4 rounded">
              <h3 className="font-medium mb-2">Power Status</h3>
              <div className="text-sm text-gray-600">20dB</div>
            </div>
            <div className="bg-[#F9F9F9] p-4 rounded">
              <h3 className="font-medium mb-2">Temperature</h3>
              <div className="text-sm text-gray-600">25°C</div>
            </div>
            <div className="bg-[#F9F9F9] p-4 rounded">
              <h3 className="font-medium mb-2">Operating Status</h3>
              <div className="text-sm text-gray-600">Active</div>
            </div>
            <div className="bg-[#F9F9F9] p-4 rounded">
              <h3 className="font-medium mb-2">Connection Status</h3>
              <div className="text-sm text-gray-600">Connected</div>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <Button className="bg-[#111820] text-white hover:bg-[#2a3642] px-10 rounded-md">
              Refresh
            </Button>
            <Button
              variant="outline"
              className="border-[#111820] hover:bg-gray-100 px-10 rounded-md"
            >
              Clear
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IduHealthStatus;
