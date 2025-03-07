import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DashboardSidebar from "@/components/DashboardSidebar";

const DeploymentConfig = () => {
  const [selectedDevice, setSelectedDevice] = useState("");
  const [snmpTimeout, setSnmpTimeout] = useState("");
  const [retries, setRetries] = useState("");

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar currentPath="/deployment" />

      {/* Main content */}
      <div className="flex-1 bg-[#FFE7E0] p-8">
        <h1 className="text-3xl font-semibold mb-8">
          Deployment Configuration
        </h1>

        {/* Device selection section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8 relative overflow-hidden min-h-[300px]">
          <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-400"></div>

          <h2 className="text-xl font-semibold mb-6">Active Devices</h2>

          <div className="mb-16">
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="w-6 h-6 bg-gray-200 flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={selectedDevice === "point-to-point"}
                  onChange={() =>
                    setSelectedDevice(
                      selectedDevice === "point-to-point"
                        ? ""
                        : "point-to-point"
                    )
                  }
                  className="opacity-0 absolute"
                />
                {selectedDevice === "point-to-point" && (
                  <div className="w-3 h-3 bg-black"></div>
                )}
              </div>
              <span className="text-black">Point to Point</span>
            </label>
          </div>

          <div className="flex justify-end gap-4">
            <Button className="bg-[#111820] text-white hover:bg-[#2a3642] px-10 rounded-md">
              Set
            </Button>
            <Button
              variant="outline"
              className="border-[#111820] hover:bg-gray-100 px-10 rounded-md"
            >
              Cancel
            </Button>
          </div>
        </div>

        {/* Configuration section */}
        <div className="bg-white rounded-xl shadow-sm p-8 relative overflow-hidden min-h-[300px]">
          <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-400"></div>

          <h2 className="text-xl font-semibold mb-6">Active Devices</h2>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-gray-500 mb-2">
                SNMP timeout (Secs)
              </label>
              <Input
                value={snmpTimeout}
                onChange={(e) => setSnmpTimeout(e.target.value)}
                className="border-2 border-gray-300 h-12"
              />
            </div>
            <div>
              <label className="block text-gray-500 mb-2">
                Nos. of retries
              </label>
              <Input
                value={retries}
                onChange={(e) => setRetries(e.target.value)}
                className="border-2 border-gray-300 h-12"
              />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button className="bg-[#111820] text-white hover:bg-[#2a3642] px-10 rounded-md">
              Set
            </Button>
            <Button
              variant="outline"
              className="border-[#111820] hover:bg-gray-100 px-10 rounded-md"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeploymentConfig;
