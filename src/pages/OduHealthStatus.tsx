import React from "react";
import DashboardSidebar from "@/components/DashboardSidebar";

type CardStatus = {
  status: "active" | "inactive" | "warning";
};

type Device = {
  name: string;
  cards: {
    duplexerCard: CardStatus;
    modulatorCard: CardStatus;
    demodulatorCard: CardStatus;
    powerCard: CardStatus;
  };
};

const StatusIcon: React.FC<{ status: CardStatus["status"] }> = ({ status }) => {
  const colors = {
    active: "text-green-500",
    inactive: "text-red-500",
    warning: "text-yellow-500",
  };

  return (
    <div className={`w-3 h-3 rounded-full ${colors[status]} bg-current`} />
  );
};

const CardItem: React.FC<{ name: string; status: CardStatus["status"] }> = ({
  name,
  status,
}) => {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center space-x-2">
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 6V10H5V6C5 5.45 5.45 5 6 5H18C18.55 5 19 5.45 19 6Z"
            fill="currentColor"
          />
          <path
            d="M5 12V18C5 18.55 5.45 19 6 19H18C18.55 19 19 18.55 19 18V12H5ZM10 17H8V14H10V17ZM14 17H12V14H14V17Z"
            fill="currentColor"
          />
        </svg>
        <span className="font-medium">{name}</span>
      </div>
      <StatusIcon status={status} />
    </div>
  );
};

const OduHealthStatus = () => {
  const sampleDevices: Device[] = [
    {
      name: "Device 1",
      cards: {
        duplexerCard: { status: "active" },
        modulatorCard: { status: "active" },
        demodulatorCard: { status: "warning" },
        powerCard: { status: "active" },
      },
    },
    {
      name: "Device 2",
      cards: {
        duplexerCard: { status: "active" },
        modulatorCard: { status: "inactive" },
        demodulatorCard: { status: "active" },
        powerCard: { status: "warning" },
      },
    },
  ];

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar currentPath="/odu-status" />
      <div className="flex-1 bg-[#FFE7E0] p-8">
        <h1 className="text-3xl font-semibold mb-8">ODU Health Status</h1>

        <div className="bg-white rounded-xl shadow-sm p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-400"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sampleDevices.map((device, index) => (
              <div key={index} className="rounded-lg p-4">
                <h3 className="text-lg font-medium mb-3">ODU {device.name}</h3>
                <div>
                  <CardItem
                    name="Duplexer Card"
                    status={device.cards.duplexerCard.status}
                  />
                  <CardItem
                    name="Modulator Card"
                    status={device.cards.modulatorCard.status}
                  />
                  <CardItem
                    name="Demodulator Card"
                    status={device.cards.demodulatorCard.status}
                  />
                  <CardItem
                    name="Power Card"
                    status={device.cards.powerCard.status}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OduHealthStatus;
