import React, { useState } from "react";
import DashboardSidebar from "@/components/DashboardSidebar";

const OduConfiguration = () => {
  const [deviceIp, setDeviceIp] = useState("192.168.1.100");
  const [activeTab, setActiveTab] = useState("duplexer");

  const renderTabContent = () => {
    switch (activeTab) {
      case "baseband":
        return (
          <div className="p-8">
          

            {/* Configuration Table */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Configuration</h3>
              <div className="grid grid-cols-4 gap-1 mb-1">
                {[
                  "Mode",
                  "Data Rate",
                  "Modulation",
                  "Freq Hopping"
                ].map((header) => (
                  <div key={header} className="bg-[#D9D9D9] p-3">
                    <span className="font-semibold text-sm">{header}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-1">
                <div className="bg-[#F9F9F9] p-3">
                  <span className="text-sm">FDD</span>
                </div>
                <div className="bg-[#F9F9F9] p-3">
                  <span className="text-sm">256 Mbps</span>
                </div>
                <div className="bg-[#F9F9F9] p-3">
                  <span className="text-sm">256 QAM</span>
                </div>
                <div className="bg-[#F9F9F9] p-3 flex items-center justify-between">
                  <span className="text-sm">Enabled</span>
                  <button className="bg-[#1E88E5] text-white px-3 py-1 rounded-md text-md hover:bg-blue-600">
                    Change Configuration
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case "duplexer":
        return (
          <div className="p-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">ID</span>
                <span className="text-gray-800">1</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">Health Status</span>
                <span className="text-green-500 font-medium">UP</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">TX Frequency</span>
                <span className="text-gray-800">12.5 GHz</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">RX Frequency</span>
                <span className="text-gray-800">13.5 GHz</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">Mode</span>
                <select className="border border-gray-300 rounded px-3 py-1">
                  <option value="fdd">FDD</option>
                  <option value="tdd">TDD</option>
                </select>
              </div>
            </div>
          </div>
        );
      case "modulator":
      case "demodulator":
      case "power":
        return (
          <div className="p-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">ID</span>
                <span className="text-gray-800">1</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">Health Status</span>
                <span className="text-green-500 font-medium">UP</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">SW Version</span>
                <span className="text-gray-800">2.0 (19-2-19)</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">FW Version</span>
                <span className="text-gray-800">15.1 (25-7-19)</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const tabs = [
    { id: 'baseband', label: 'Baseband card' },
    { id: 'poweramp', label: 'Power Amplifier' },
    { id: 'duplexer', label: 'Duplexer' },
    { id: 'powersupply', label: 'Power Supply' },
    { id: 'selftest', label: 'Self test' }
  ];

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar currentPath="/odu-config" />
      <div className="flex-1 bg-[#FFE7E0] p-8">
        <h1 className="text-3xl font-semibold mb-8">Outdoor Unit Configuration</h1>
        
        <div className="flex flex-col items-start w-[431px] h-[105px] mb-[30px]">
          <label className="w-full h-[36px] font-poppins font-semibold text-[20px] leading-[30px] flex items-center text-[#BABABA]">
            Select ODU
          </label>
          <div className="relative w-full">
            <input
              type="text"
              value={deviceIp}
              onChange={(e) => setDeviceIp(e.target.value)}
              placeholder="192.168.1.100"
              className="box-border w-full h-[69px] bg-white border-[3px] border-[#BABABA] rounded-[10px] px-[20px] py-[13px] font-inter font-semibold text-[20px] leading-[24px] text-black selection:bg-blue-200"
            />
          </div>
        </div>

        <div className="flex flex-row items-center gap-0 mb-0">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`flex justify-center items-center px-[22px] py-[18px] w-[180px] h-[65px] ${
                activeTab === tab.id ? "bg-[#17332E] text-white" : "bg-transparent"
              } cursor-pointer`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="font-inter font-semibold text-[20px] leading-[24px] text-center">
                {tab.label}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-b-[30px] overflow-hidden relative">
          <div className="h-[3px] bg-[#00AFEF] w-full" />
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default OduConfiguration;
