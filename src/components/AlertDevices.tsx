import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DeviceItemProps {
  name: string;
  ip: string;
  type: "ODU" | "IDU";
  selected?: boolean;
  onClick?: () => void;
}

const DeviceItem = ({ name, ip, type, selected, onClick }: DeviceItemProps) => {
  return (
    <div
      className="p-4 cursor-pointer"
      onClick={onClick}
      style={{
        background: selected ? "#17332E" : undefined,
        color: selected ? "#fff" : undefined,
      }}
    >
      <div className="flex justify-between items-center">
        <div className="font-medium">{name}</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-gray-500">{ip}</div>
        <div className="bg-gray-300 text-gray-700 px-2 py-1 text-sm rounded">
          {type}
        </div>
      </div>
      <hr className={`my-2 border-${selected ? 'gray-700' : 'gray-300'}`} />
    </div>
  );
};

const AlertDevices = () => {
  const alertDevices = [
    { name: "Baseband Card", ip: "192.168.2.50", type: "ODU" as const },
    { name: "Power Amplifier", ip: "192.168.2.14", type: "ODU" as const },
    { name: "Control Unit", ip: "192.168.2.17", type: "IDU" as const },
  ];

  const activeDevices = [
    { name: "Duplexer", ip: "192.168.2.53", type: "ODU" as const },
    { name: "E1 Card", ip: "192.168.2.19", type: "ODU" as const },
    { name: "E3 Card", ip: "192.168.2.5", type: "ODU" as const },
  ];

  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);

  return (
    <div className="h-full bg-gray-200">
      <div className="p-4 bg-gray-200">
        <h2 className="text-xl font-bold inline-block">Alert Devices</h2>
        <span className="ml-2 bg-gray-400 text-white px-2 py-1 rounded-full text-sm">
          3
        </span>
      </div>

      <div>
        {alertDevices.map((device, index) => (
          <DeviceItem
            key={index}
            name={device.name}
            ip={device.ip}
            type={device.type}
            selected={selectedDevice === device.name}
            onClick={() => setSelectedDevice(device.name)}
          />
        ))}
      </div>

      <div className="p-4 bg-gray-200 mt-4">
        <h2 className="text-xl font-bold inline-block">Active Devices</h2>
        <span className="ml-2 bg-gray-400 text-white px-2 py-1 rounded-full text-sm">
          5
        </span>
      </div>

      <div>
        {activeDevices.map((device, index) => (
          <DeviceItem
            key={index}
            name={device.name}
            ip={device.ip}
            type={device.type}
          />
        ))}
      </div>

      <div className="p-4 flex justify-center">
        <Button className="bg-lime-300 hover:bg-lime-400 text-black font-medium flex items-center gap-2">
          <Plus size={20} />
          Add Device
        </Button>
      </div>
    </div>
  );
};

export default AlertDevices;
