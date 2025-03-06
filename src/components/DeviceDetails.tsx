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
    "Power Level",
    "Forward Power",
    "Reverse Power",
    "Over Temperature",
    "Overcurrent",
    "PA ON/OFF",
    "VSWR Status",
    "PA Health Status"
  ];

  const values = [
    "45 dBm",
    "150W",
    "5W",
    "Normal",
    "Normal",
    "ON",
    "Good",
    "Healthy"
  ];

  return (
    <div className="w-full h-full">
      {/* Tabs */}
      <div className="flex border-b-2 border-[rgba(0,0,0,0.3)]">
        <div className="w-32 py-4 bg-[#17332E] flex items-center justify-center">
          <span className="text-white font-inter text-base font-semibold">Overview</span>
        </div>
        <div className="w-32 py-4 flex items-center justify-center">
          <span className="text-black font-inter text-base font-semibold">Status</span>
        </div>
        <div className="w-32 py-4 flex items-center justify-center">
          <span className="text-black font-inter text-base font-semibold">Alerts</span>
        </div>
      </div>

      {/* Parameters and Values */}
      <div className="p-6">
        {parameters.map((param, index) => (
          <div key={param} className="flex items-center mb-4">
            <div className="w-48 font-inter text-base">
              {param}
            </div>
            <div className="font-inter text-base">
              {values[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceDetails;
