import React from "react";
import { AlertCircle, CheckCircle } from "lucide-react";

const DeviceNode = ({ id, ip, isHealthy = true, x = "50%", y = "10%" }) => {
  return (
    <div className="absolute" style={{ left: x, top: y }}>
      <div className="flex flex-col items-center">
        <div className="text-gray-600 mb-1">
          {id} - {ip}
        </div>
        <div className="relative flex flex-col items-center">
          <div className="bg-gray-800 rounded p-2 flex items-center justify-center w-16 h-10">
            <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          {isHealthy ? (
            <CheckCircle
              className="text-green-500 absolute -right-3 -top-3"
              size={20}
            />
          ) : (
            <AlertCircle
              className="text-red-500 absolute -right-3 -top-3"
              size={20}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const Arrow = ({
  startX = "50%",
  startY = "15%",
  endX = "50%",
  endY = "30%",
}) => {
  return (
    <div
      className="absolute"
      style={{
        left: startX,
        top: startY,
        width: "1px",
        height: "100px",
        borderLeft: "2px solid #333",
      }}
    >
      <div
        className="absolute"
        style={{
          bottom: "-10px",
          left: "-5px",
          width: "0",
          height: "0",
          borderLeft: "6px solid transparent",
          borderRight: "6px solid transparent",
          borderTop: "10px solid #333",
        }}
      ></div>
    </div>
  );
};

const DeviceHealth = () => {
  return (
    <div className="h-full relative">
      <div className="p-4 bg-white-200">
        <h2 className="text-xl font-bold">
          Device Card Health Status (Point to Point)
        </h2>
      </div>
      <hr className="my-0 border-gray-400" />
      <div className="relative p-4 h-[calc(100%-60px)] bg-white-200">
        {/* First node */}
        <DeviceNode
          id="ODU"
          ip="192.168.2.50"
          isHealthy={false}
          x="50%"
          y="10%"
        />

        {/* Arrow from first to second */}
        <Arrow startX="50%" startY="15%" endX="50%" endY="30%" />

        {/* Second node */}
        <DeviceNode
          id="ODU"
          ip="192.168.2.14"
          isHealthy={false}
          x="50%"
          y="30%"
        />

        {/* Arrow from second to third */}
        <Arrow startX="50%" startY="35%" endX="50%" endY="50%" />

        {/* Third node */}
        <DeviceNode
          id="ODU"
          ip="192.168.2.17"
          isHealthy={false}
          x="50%"
          y="50%"
        />

        {/* Arrow from third to fourth */}
        <Arrow startX="50%" startY="55%" endX="50%" endY="70%" />

        {/* Fourth node */}
        <DeviceNode
          id="IDU"
          ip="192.168.2.53"
          isHealthy={true}
          x="50%"
          y="70%"
        />
      </div>
    </div>
  );
};

export default DeviceHealth;
