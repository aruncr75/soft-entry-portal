import React, { useState } from "react";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const MonitoringAndReport = () => {
  const [hoursValue, setHoursValue] = useState("");
  const [intervalValue, setIntervalValue] = useState("");
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const onStartMonitoring = () => {
    // Implementation here
  };

  const onEndMonitoring = () => {
    // Implementation here
  };

  const onPopulateData = () => {
    // Implementation here
  };

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar currentPath="/monitoring-report" />
      <div className="flex-1 bg-[#FFE7E0] p-8">
        <h1 className="text-3xl font-semibold mb-8">
          Monitoring and Report Generation
        </h1>

        {/* Device Monitoring Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8 relative overflow-hidden min-h-[300px]">
          <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-400"></div>

          <div className="w-full mb-8">
            {/* Table Headers */}
            <div className="grid grid-cols-3 gap-1 mb-1">
              <div className="bg-[#D9D9D9] p-3">
                <span className="font-semibold text-sm">Device Address</span>
              </div>
              <div className="bg-[#D9D9D9] p-3">
                <span className="font-semibold text-sm">Device Type</span>
              </div>
              <div className="bg-[#D9D9D9] p-3">
                <span className="font-semibold text-sm">Monitor</span>
              </div>
            </div>

            {/* Search Row */}
            <div className="grid grid-cols-2 gap-1 mb-1">
              <div className="bg-[#F9F9F9] p-3">
                <Input
                  placeholder="Search for device address"
                  className="border-2 border-gray-300 h-8"
                />
              </div>
              <div className="bg-[#F9F9F9] p-3">
                <Input
                  placeholder="Search for device type"
                  className="border-2 border-gray-300 h-8"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1">
              <div className="bg-[#F9F9F9] p-3">
                <span className="text-sm">192.168.1.14</span>
              </div>
              <div className="bg-[#F9F9F9] p-3">
                <span className="text-sm">ODU</span>
              </div>
              <div className="bg-[#F9F9F9] p-3">
                <Button
                  variant="link"
                  className="text-black underline p-0 h-auto"
                >
                  Monitor
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Report Generation Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 relative overflow-hidden min-h-[300px]">
          <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-400"></div>
          <h2 className="text-xl font-semibold mb-6">Report Generation</h2>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side with input fields */}
            <div className="flex-1 space-y-6 w-full">
              <div>
                <label className="block text-gray-500 mb-2">
                  Enter no. of hours to be monitored
                </label>
                <Input
                  value={hoursValue}
                  onChange={(e) => setHoursValue(e.target.value)}
                  className="border-2 border-gray-300 h-12"
                />
              </div>

              <div>
                <label className="block text-gray-500 mb-2">
                  Enter interval (in mins)
                </label>
                <Input
                  value={intervalValue}
                  onChange={(e) => setIntervalValue(e.target.value)}
                  className="border-2 border-gray-300 h-12"
                />
              </div>

              <div>
                <div className="font-bold">
                  Time Remaining:{" "}
                  <span className="font-normal">
                    {timeRemaining.days} days, {timeRemaining.hours} hrs,{" "}
                    {timeRemaining.minutes} mins, {timeRemaining.seconds} secs
                  </span>
                </div>
              </div>
            </div>

            {/* Right side with buttons */}
            <div className="flex flex-col justify-start space-y-4 w-full md:w-auto">
              <Button
                onClick={onStartMonitoring}
                className="bg-[#1E88E5] hover:bg-blue-600 text-white py-6 px-6 rounded-md text-center min-w-[220px]"
              >
                Start Monitoring
              </Button>

              <Button
                onClick={onEndMonitoring}
                variant="outline"
                className="border-[#1E88E5] text-[#1E88E5] hover:bg-blue-50 py-6 px-6 rounded-md text-center"
              >
                End Monitoring
              </Button>

              <Button
                onClick={onPopulateData}
                variant="outline"
                className="border-[#1E88E5] text-[#1E88E5] hover:bg-blue-50 py-6 px-6 rounded-md text-center"
              >
                Populate Previous Data
              </Button>
            </div>
          </div>
        </div>

        {/* New Container Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8 relative overflow-hidden min-h-[300px]">
          <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-400"></div>
          <h2 className="text-xl font-semibold mb-6">Monitoring Status</h2>

          <div className="w-full mb-8">
            {/* Table Headers */}
            <div className="grid grid-cols-4 gap-1 mb-1">
              <div className="bg-[#D9D9D9] p-3">
                <span className="font-semibold text-sm">Device IP</span>
              </div>
              <div className="bg-[#D9D9D9] p-3">
                <span className="font-semibold text-sm">Device Type</span>
              </div>
              <div className="bg-[#D9D9D9] p-3">
                <span className="font-semibold text-sm">Device Name</span>
              </div>
              <div className="bg-[#D9D9D9] p-3">
                <span className="font-semibold text-sm">Status</span>
              </div>
            </div>

            {/* Table Row */}
            <div className="grid grid-cols-4 gap-1">
              <div className="bg-[#F9F9F9] p-3">
                <span className="text-sm">192.168.1.14</span>
              </div>
              <div className="bg-[#F9F9F9] p-3">
                <span className="text-sm">ODU</span>
              </div>
              <div className="bg-[#F9F9F9] p-3">
                <span className="text-sm">Duplexer</span>
              </div>
              <div className="bg-[#F9F9F9] p-3">
                <Button
                  variant="link"
                  className="text-black underline p-0 h-auto"
                >
                  View
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Monitoring Data Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mt-8 relative overflow-hidden min-h-[300px]">
          <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-400"></div>
          <h2 className="text-xl font-semibold mb-4">Duplexer</h2>
          <div className="space-y-4">
            <div className="flex">
              <span className="w-32 text-gray-600">Tx frequency</span>
              <span>12.5 GHz</span>
            </div>
            <div className="flex">
              <span className="w-32 text-gray-600">Rx frequency</span>
              <span>13.5 GHz</span>
            </div>
            <div className="flex">
              <span className="w-32 text-gray-600">BITE request</span>
              <span>Normal</span>
            </div>
            <div className="flex">
              <span className="w-32 text-gray-600">Mode(FDD/TDD)</span>
              <span>FDD</span>
            </div>
            <div className="flex">
              <span className="w-32 text-gray-600">Reset Duplexer</span>
              <span>No</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonitoringAndReport;
