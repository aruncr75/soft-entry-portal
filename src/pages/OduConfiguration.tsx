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
                {["Mode", "Data Rate", "Modulation", "Freq Hopping"].map(
                  (header) => (
                    <div key={header} className="bg-[#D9D9D9] p-3">
                      <span className="font-semibold text-sm">{header}</span>
                    </div>
                  )
                )}
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

            {/* Additional Fields Section */}
            <div className="mt-12">
              <div className="h-[1px] bg-[#e0e0e0] mb-8" />
              <div className="grid grid-cols-6 gap-4">
                {/* Left side fields */}
                <div className="col-span-2 grid grid-cols-2 gap-x-4 gap-y-2">
                  <div className="bg-[#D9D9D9] p-3 rounded">
                    <span className="font-semibold text-sm">Mac Address</span>
                  </div>
                  <div className="bg-[#F9F9F9] p-3 rounded">
                    <span className="text-sm">00:1B:44:11:3A:B7</span>
                  </div>

                  <div className="bg-[#D9D9D9] p-3 rounded">
                    <span className="font-semibold text-sm">IP Address</span>
                  </div>
                  <div className="bg-[#F9F9F9] p-3 rounded">
                    <span className="text-sm">192.168.1.100</span>
                  </div>

                  <div className="bg-[#D9D9D9] p-3 rounded">
                    <span className="font-semibold text-sm">Link Uptime</span>
                  </div>
                  <div className="bg-[#F9F9F9] p-3 rounded">
                    <span className="text-sm">24:00:00</span>
                  </div>

                  <div className="bg-[#D9D9D9] p-3 rounded">
                    <span className="font-semibold text-sm">
                      Auto Power On/Off
                    </span>
                  </div>
                  <div className="bg-[#F9F9F9] p-3 rounded flex justify-between items-center">
                    <span className="text-sm">Enabled</span>
                    <div className="relative">
                      <div className="w-11 h-6 bg-[#2196F3] rounded-full">
                        <div className="absolute w-5 h-5 bg-white rounded-full shadow-md top-[2px] right-[2px] transition-transform"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Middle fields */}
                <div className="col-span-2 grid grid-cols-2 gap-x-4 gap-y-2">
                  <div className="bg-[#D9D9D9] p-3 rounded">
                    <span className="font-semibold text-sm">
                      Software Version
                    </span>
                  </div>
                  <div className="bg-[#F9F9F9] p-3 rounded">
                    <span className="text-sm">v2.1.0</span>
                  </div>

                  <div className="bg-[#D9D9D9] p-3 rounded">
                    <span className="font-semibold text-sm">RSSI</span>
                  </div>
                  <div className="bg-[#F9F9F9] p-3 rounded">
                    <span className="text-sm">-65 dBm</span>
                  </div>

                  <div className="bg-[#D9D9D9] p-3 rounded">
                    <span className="font-semibold text-sm">Link distance</span>
                  </div>
                  <div className="bg-[#F9F9F9] p-3 rounded">
                    <span className="text-sm">2.5 km</span>
                  </div>

                  <div className="bg-[#D9D9D9] p-3 rounded">
                    <span className="font-semibold text-sm">PA On/Off</span>
                  </div>
                  <div className="bg-[#F9F9F9] p-3 rounded flex justify-between items-center">
                    <span className="text-sm">Enabled</span>
                    <div className="relative">
                      <div className="w-11 h-6 bg-[#2196F3] rounded-full">
                        <div className="absolute w-5 h-5 bg-white rounded-full shadow-md top-[2px] right-[2px]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side fields */}
                <div className="col-span-2 grid grid-cols-2 gap-x-4 gap-y-2">
                  <div className="bg-[#D9D9D9] p-3 rounded">
                    <span className="font-semibold text-sm">Device Id</span>
                  </div>
                  <div className="bg-[#F9F9F9] p-3 rounded">
                    <span className="text-sm">ODU-001</span>
                  </div>

                  <div className="bg-[#D9D9D9] p-3 rounded">
                    <span className="font-semibold text-sm">CH Size</span>
                  </div>
                  <div className="bg-[#F9F9F9] p-3 rounded">
                    <span className="text-sm">28 MHz</span>
                  </div>

                  {/* Empty row */}
                  <div className="bg-[#D9D9D9] p-3 rounded">
                    <span className="font-semibold text-sm">Link Distance</span>
                  </div>
                  <div className="bg-[#F9F9F9] p-3 rounded">
                    <span className="text-sm">28 </span>
                  </div>

                  <div className="bg-[#D9D9D9] p-3 rounded">
                    <span className="font-semibold text-sm">AES Off</span>
                  </div>
                  <div className="bg-[#F9F9F9] p-3 rounded flex justify-between items-center">
                    <span className="text-sm">Enabled</span>
                    <div className="relative">
                      <div className="w-11 h-6 bg-[#2196F3] rounded-full">
                        <div className="absolute w-5 h-5 bg-white rounded-full shadow-md top-[2px] right-[2px]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons - Changed from justify-end to justify-start */}
            <div className="mt-8 flex justify-start gap-4">
              <button className="bg-[#1E88E5] text-white px-6 py-2 rounded-md hover:bg-blue-600">
                Start Manual Power Level
              </button>
              <button className="bg-[#1E88E5] text-white px-6 py-2 rounded-md hover:bg-blue-600">
                Save Settings
              </button>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-[#e0e0e0] mt-8"></div>

            {/* TxRx Frequency Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">TxRx Frequency</h3>
              <div className="grid grid-cols-3 gap-x-4 gap-y-2 max-w-[600px]">
                <div className="bg-[#D9D9D9] p-3 rounded">
                  <span className="font-semibold text-sm">Tx Frequency</span>
                </div>
                <div className="bg-[#F9F9F9] p-3 rounded">
                  <span className="text-sm">KHz</span>
                </div>
                <div className="flex justify-center">
                  <button className="bg-[#1E88E5] text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600">
                    Change Frequency
                  </button>
                </div>

                <div className="bg-[#D9D9D9] p-3 rounded">
                  <span className="font-semibold text-sm">Rx Frequency</span>
                </div>
                <div className="bg-[#F9F9F9] p-3 rounded">
                  <span className="text-sm">KHz</span>
                </div>
                <div className="flex justify-center">
                  <button className="bg-[#1E88E5] text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600">
                    Change Frequency
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-[#e0e0e0] mt-8"></div>

            {/* TxRx Frequency Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">
                Address Configuration
              </h3>
              <div className="grid grid-cols-3 gap-x-4 gap-y-2 max-w-[600px]">
                <div className="bg-[#D9D9D9] p-3 rounded">
                  <span className="font-semibold text-sm">IP Address</span>
                </div>
                <div className="bg-[#F9F9F9] p-3 rounded">
                  <span className="text-sm"></span>
                </div>
                <div className="flex justify-center">
                  <button className="bg-[#1E88E5] text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600">
                    Change Address
                  </button>
                </div>

                <div className="bg-[#D9D9D9] p-3 rounded">
                  <span className="font-semibold text-sm">Netmask</span>
                </div>
                <div className="bg-[#F9F9F9] p-3 rounded">
                  <span className="text-sm"></span>
                </div>
                <div className="flex justify-center">
                  {/* <button className="bg-[#1E88E5] text-white px-3 py-1 rounded-md text-sm hover:bg-blue-600">
        Change Frequency
      </button> */}
                </div>
              </div>
              {/* Divider */}
              <div className="h-[1px] bg-[#e0e0e0] mt-8"></div>
            </div>

            {/* GPS Coordinates Section */}
            <div className="mt-8 flex items-center gap-60">
              <h3 className="text-xl font-semibold">GPS Coordinates</h3>
              <button className="bg-[#1E88E5] text-white px-4 py-1.5 rounded-md hover:bg-blue-600 text-md">
                Configure GPS Coordinates
              </button>
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
                <span className="text-gray-600 font-medium w-64">
                  Health Status
                </span>
                <span className="text-green-500 font-medium">UP</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">
                  TX Frequency
                </span>
                <span className="text-gray-800">12.5 GHz</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">
                  RX Frequency
                </span>
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
                <span className="text-gray-600 font-medium w-64">
                  Health Status
                </span>
                <span className="text-green-500 font-medium">UP</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">
                  SW Version
                </span>
                <span className="text-gray-800">2.0 (19-2-19)</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">
                  FW Version
                </span>
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
    { id: "baseband", label: "Baseband card" },
    { id: "poweramp", label: "Power Amplifier" },
    { id: "duplexer", label: "Duplexer" },
    { id: "powersupply", label: "Power Supply" },
    { id: "selftest", label: "Self test" },
  ];

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar currentPath="/odu-config" />
      <div className="flex-1 bg-[#FFE7E0] p-8">
        <h1 className="text-3xl font-semibold mb-8">
          Outdoor Unit Configuration
        </h1>

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
                activeTab === tab.id
                  ? "bg-[#17332E] text-white"
                  : "bg-transparent"
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
