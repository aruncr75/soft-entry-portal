import React from 'react';

interface DeviceDetailsProps {
  device: {
    name: string;
    ip: string;
    type: string;
  } | null;
}

const DeviceDetails = ({ device }: DeviceDetailsProps) => {
  if (!device) return null;

  const parameters = [
    "Temperature", "Input Power", "Output Power", 
    "Reflected Power", "Current", "Voltage", 
    "Gain", "Efficiency", "Power Status"
  ];

  const values = ["45°C", "30W", "150W", "5W", "2A", "24V", "15dB", "85%", "ON"];

  return (
    <div className="w-full h-full">
      {/* Tabs */}
      <div className="flex border-b-2 border-[rgba(0,0,0,0.3)]">
        <div className="w-32 py-4 bg-[#17332E] flex items-center justify-center">
          <span className="text-white font-inter text-xl font-semibold">Overview</span>
        </div>
        <div className="w-32 py-4 flex items-center justify-center">
          <span className="text-black font-inter text-xl font-semibold">Status</span>
        </div>
        <div className="w-32 py-4 flex items-center justify-center">
          <span className="text-black font-inter text-xl font-semibold">Alerts</span>
        </div>
      </div>

      {/* Parameters and Values */}
      <div className="p-6">
        {parameters.map((param, index) => (
          <div key={param} className="flex items-center mb-4">
            <div className="w-48 font-inter text-xl">
              {param}
            </div>
            <div className="font-inter text-xl">
              {values[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceDetails;
