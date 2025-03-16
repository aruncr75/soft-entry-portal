import React, { useState } from "react";
import DashboardSidebar from "@/components/DashboardSidebar";

const IduConfiguration = () => {
  const [deviceIp, setDeviceIp] = useState("192.168.1.100");
  const [networkId, setNetworkId] = useState("192.168.1.114");
  const [eowType, setEowType] = useState("");
  const [activeTab, setActiveTab] = useState("control");

  const renderTabContent = () => {
    switch (activeTab) {
      case "lan":
        return (
          <div className="p-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">ID</span>
                <span className="text-gray-800">1</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">
                  IP Address
                </span>
                <span className="text-gray-800">192.168.2.14</span>
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

            {/* Port Table */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Port Table</h3>
              <div className="grid grid-cols-6 gap-1 mb-1">
                {[
                  "Port",
                  "Port Type",
                  "Port Status",
                  "Port Duplex Status",
                  "Port Admin Status",
                  "Dest. Terminal Id",
                ].map((header) => (
                  <div key={header} className="bg-[#D9D9D9] p-3">
                    <span className="font-semibold text-sm">{header}</span>
                  </div>
                ))}
              </div>
              {/* Sample row - add more as needed */}
              <div className="grid grid-cols-6 gap-1">
                <div className="bg-[#F9F9F9] p-3">
                  <span className="text-sm">Port 1</span>
                </div>
                <div className="bg-[#F9F9F9] p-3">
                  <span className="text-sm">Ethernet</span>
                </div>
                <div className="bg-[#F9F9F9] p-3">
                  <span className="text-sm">Active</span>
                </div>
                <div className="bg-[#F9F9F9] p-3">
                  <span className="text-sm">Full</span>
                </div>
                <div className="bg-[#F9F9F9] p-3">
                  <span className="text-sm">Up</span>
                </div>
                <div className="bg-[#F9F9F9] p-3">
                  <span className="text-sm">IDU-1</span>
                </div>
              </div>

              <div className="flex justify-end mt-8">
                <button className="bg-[#1E88E5] text-white px-6 py-2 rounded-md hover:bg-blue-600">
                  Set Value
                </button>
              </div>
            </div>
          </div>
        );
      case "e3":
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
                  Control CuType
                </span>
                <span className="text-gray-800">Master</span>
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
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">
                  No. of Interfaces
                </span>
                <span className="text-gray-800">6</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">EOW Type</span>
                <select className="border border-gray-300 rounded px-3 py-1">
                  <option value="">Select</option>
                </select>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">
                  Network Id
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-800">192.168.1.14</span>
                  <button className="bg-[#1E88E5] text-white px-6 py-2 rounded-md hover:bg-blue-600">
                    Set Value
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">
                  Terminal Id
                </span>
                <span className="text-gray-800">Power Level</span>
              </div>
            </div>

            {/* Interface Table */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Interface Table</h3>
              <div className="grid grid-cols-9 gap-1 mb-1">
                {[
                  "Index",
                  "Name",
                  "Descr",
                  "Type",
                  "IP Add.",
                  "Subnet Mask",
                  "Gateway",
                  "Dest. Term.Id",
                  "Status",
                ].map((header) => (
                  <div key={header} className="bg-[#D9D9D9] p-3">
                    <span className="font-semibold text-sm">{header}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-8">
                <button className="bg-[#1E88E5] text-white px-6 py-2 rounded-md hover:bg-blue-600">
                  Set Value
                </button>
              </div>
            </div>
          </div>
        );
      case "e1":
        return (
          <div className="p-8">
            {/* Device Information */}
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">ID</span>
                <span className="text-gray-800">1</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">
                  IP Address
                </span>
                <span className="text-gray-800">192.168.1.14</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">
                  Health Status
                </span>
                <span className="text-gray-800">Master</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">
                  SW Version
                </span>
                <span className="text-gray-800">1.0 (19-2-19)</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">
                  FW Version
                </span>
                <span className="text-gray-800">7.0 (8-12-18)</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">
                  Number of Links
                </span>
                <span className="text-gray-800">4</span>
              </div>
            </div>

            {/* Link Table */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Link Table</h3>
              <div className="grid grid-cols-7 gap-1 mb-1">
                {[
                  "Link",
                  "Link Type",
                  "Frame Structure",
                  "Link Admin Status",
                  "Loopback Status",
                  "Loopback Port 1",
                  "Loopback Port 2",
                ].map((header) => (
                  <div key={header} className="bg-[#D9D9D9] p-3">
                    <span className="font-semibold text-sm">{header}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                <div className="bg-[#F9F9F9] p-3">
                  <span className="text-sm">Link 1</span>
                </div>
                <div className="bg-[#F9F9F9] p-3">
                  <span className="text-sm">E1</span>
                </div>
                <div className="bg-[#F9F9F9] p-3">
                  <span className="text-sm">G.704</span>
                </div>
                <div className="bg-[#F9F9F9] p-3">
                  <span className="text-sm">Up</span>
                </div>
                <div className="bg-[#F9F9F9] p-3">
                  <span className="text-sm">Disabled</span>
                </div>
                <div className="bg-[#F9F9F9] p-3">
                  <button className="bg-[#1E88E5] text-white px-3 py-1 rounded-md text-sm">
                    Set Value
                  </button>
                </div>
                <div className="bg-[#F9F9F9] p-3">
                  <button className="bg-[#1E88E5] text-white px-3 py-1 rounded-md text-sm">
                    Set Value
                  </button>
                </div>
              </div>
            </div>

            {/* Alarm Set Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Alarm Set</h3>
              <div className="grid grid-cols-9 gap-1 mb-1">
                <div className="bg-[#D9D9D9] p-3">
                  <span className="font-semibold text-sm">Link</span>
                </div>
                {[
                  "LOS",
                  "AIS",
                  "ODF",
                  "RAI",
                  "BER3",
                  "OOFM",
                  "AIS16",
                  "RAIM",
                ].map((header) => (
                  <div key={header} className="bg-[#D9D9D9] p-3">
                    <span className="font-semibold text-sm">{header}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-9 gap-1">
                <div className="bg-[#F9F9F9] p-3">
                  <span className="text-sm">Link 1</span>
                </div>
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bg-[#F9F9F9] p-3 flex justify-center">
                    <input type="checkbox" className="h-4 w-4" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "control":
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
                  Control CuType
                </span>
                <span className="text-gray-800">Master</span>
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
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">
                  No. of Interfaces
                </span>
                <span className="text-gray-800">6</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">EOW Type</span>
                <select className="border border-gray-300 rounded px-3 py-1">
                  <option value="">Select</option>
                </select>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">
                  Network Id
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-800">192.168.1.114</span>
                  <button className="bg-[#1E88E5] text-white px-6 py-2 rounded-md hover:bg-blue-600">
                    Set Value
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">
                  Terminal Id
                </span>
                <span className="text-gray-800">Power Level</span>
              </div>
            </div>
          </div>
        );
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
                  Control CuType
                </span>
                <span className="text-gray-800">Master</span>
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
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">
                  No. of Interfaces
                </span>
                <span className="text-gray-800">6</span>
              </div>
            </div>
          </div>
        );
      case "selftest":
        return (
          <div className="p-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">
                  IP Address
                </span>
                <span className="text-gray-800">192.168.1.14</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 font-medium w-64">
                  Device Type
                </span>
                <span className="text-gray-800">Indoor Unit</span>
              </div>
              {[
                "Control Card Status",
                "E1 Card Status",
                "E3 Card Status",
                "Lan Card Status",
                "Power Card Status",
              ].map((label) => (
                <div key={label} className="flex items-center">
                  <span className="text-gray-600 font-medium w-64">
                    {label}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar currentPath="/idu-config" />
      <div className="flex-1 bg-[#FFE7E0] p-8">
        <h1 className="text-3xl font-semibold mb-8">
          Indoor Unit Configuration
        </h1>

        {/* Device IP Field - Outside container, left aligned */}
        <div className="flex flex-col items-start w-[431px] h-[105px] mb-[30px]">
          <label className="w-full h-[36px] font-poppins font-semibold text-[20px] leading-[30px] flex items-center text-[#BABABA]">
            Select IDU
          </label>

          <div className="relative w-full">
            {/* Input with white background and default IP text in black */}
            <input
              type="text"
              value={deviceIp}
              placeholder="192.168.1.100"
              onChange={(e) => setDeviceIp(e.target.value)}
              className="box-border w-full h-[69px] bg-white border-[3px] border-[#BABABA] rounded-[10px] px-[20px] py-[13px] font-inter font-semibold text-[20px] leading-[24px] text-black selection:bg-blue-200"
            />
          </div>
        </div>

        {/* Tab Bar - Now outside and above the container */}
        <div className="flex flex-row items-center gap-0 mb-0">
          <div
            className={`flex justify-center items-center px-[22px] py-[18px] w-[138px] h-[65px] ${
              activeTab === "control"
                ? "bg-[#17332E] text-white"
                : "bg-transparent"
            } cursor-pointer`}
            onClick={() => setActiveTab("control")}
          >
            <span className="font-inter font-semibold text-[20px] leading-[24px]">
              Control Card
            </span>
          </div>
          <div
            className={`flex justify-center items-center px-[22px] py-[18px] w-[138px] h-[65px] ${
              activeTab === "e1" ? "bg-[#17332E] text-white" : "bg-transparent"
            } cursor-pointer`}
            onClick={() => setActiveTab("e1")}
          >
            <span className="font-inter font-semibold text-[20px] leading-[24px]">
              E1 Card
            </span>
          </div>
          <div
            className={`flex justify-center items-center px-[22px] py-[18px] w-[138px] h-[65px] ${
              activeTab === "e3" ? "bg-[#17332E] text-white" : "bg-transparent"
            } cursor-pointer`}
            onClick={() => setActiveTab("e3")}
          >
            <span className="font-inter font-semibold text-[20px] leading-[24px]">
              E3 Card
            </span>
          </div>
          <div
            className={`flex justify-center items-center px-[22px] py-[18px] w-[138px] h-[65px] ${
              activeTab === "lan" ? "bg-[#17332E] text-white" : "bg-transparent"
            } cursor-pointer`}
            onClick={() => setActiveTab("lan")}
          >
            <span className="font-inter font-semibold text-[20px] leading-[24px]">
              Lan Card
            </span>
          </div>
          <div
            className={`flex justify-center items-center px-[22px] py-[18px] w-[138px] h-[65px] ${
              activeTab === "power"
                ? "bg-[#17332E] text-white"
                : "bg-transparent"
            } cursor-pointer`}
            onClick={() => setActiveTab("power")}
          >
            <span className="font-inter font-semibold text-[20px] leading-[24px]">
              Power Card
            </span>
          </div>
          <div
            className={`flex justify-center items-center px-[22px] py-[18px] w-[138px] h-[65px] ${
              activeTab === "selftest"
                ? "bg-[#17332E] text-white"
                : "bg-transparent"
            } cursor-pointer`}
            onClick={() => setActiveTab("selftest")}
          >
            <span className="font-inter font-semibold text-[20px] leading-[24px]">
              Self Test
            </span>
          </div>
        </div>

        {/* White container with blue top border */}
        <div className="bg-white rounded-b-[30px] overflow-hidden relative">
          <div className="h-[3px] bg-[#00AFEF] w-full" />

          {renderTabContent()}

          {activeTab === "control" && (
            <>
              <div className="border-t border-gray-200 my-8"></div>
              <div className="px-8 pb-8">
                {/* Interface Table content */}
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Interface Table</h3>
                </div>

                {/* Table Headers */}
                <div className="grid grid-cols-9 gap-1 mb-1">
                  {[
                    "Index",
                    "Name",
                    "Descr",
                    "Type",
                    "IP Add.",
                    "Subnet Mask",
                    "Gateway",
                    "Dest. Term.Id",
                    "Status",
                  ].map((header) => (
                    <div key={header} className="bg-[#D9D9D9] p-3">
                      <span className="font-semibold text-sm">{header}</span>
                    </div>
                  ))}
                </div>

                {/* Sample Table Row */}
                <div className="grid grid-cols-9 gap-1">
                  <div className="bg-[#F9F9F9] p-3">
                    <span className="text-sm">1</span>
                  </div>
                  <div className="bg-[#F9F9F9] p-3">
                    <span className="text-sm">eth0</span>
                  </div>
                  <div className="bg-[#F9F9F9] p-3">
                    <span className="text-sm">Ethernet</span>
                  </div>
                  <div className="bg-[#F9F9F9] p-3">
                    <span className="text-sm">LAN</span>
                  </div>
                  <div className="bg-[#F9F9F9] p-3">
                    <span className="text-sm">192.168.1.100</span>
                  </div>
                  <div className="bg-[#F9F9F9] p-3">
                    <span className="text-sm">255.255.255.0</span>
                  </div>
                  <div className="bg-[#F9F9F9] p-3">
                    <span className="text-sm">192.168.1.1</span>
                  </div>
                  <div className="bg-[#F9F9F9] p-3">
                    <span className="text-sm">IDU-1</span>
                  </div>
                  <div className="bg-[#F9F9F9] p-3">
                    <span className="text-sm">Active</span>
                  </div>
                </div>

                {/* Buttons moved to bottom */}
                <div className="flex justify-end gap-4 mt-8">
                  <button className="bg-[#1E88E5] text-white px-6 py-2 rounded-md hover:bg-blue-600">
                    Set Value
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default IduConfiguration;
