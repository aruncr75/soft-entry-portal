import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  small?: boolean;
  center?: boolean;
}

const Logo: React.FC<LogoProps> = ({ small = false, center = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex ${
        center
          ? "justify-center w-full"
          : small
          ? "justify-start"
          : "justify-center"
      } items-center ${small ? "mb-0" : "mb-6"}`}
    >
      <div className={`relative flex flex-col ${center ? "items-center" : ""}`}>
        <img
          src="/assets/images/BEL-Logo-PNG 1.svg"
          alt="Bharat Electronics Limited Logo"
          className={`${small ? "h-[65px]" : "h-[85px]"} object-contain`}
        />
      </div>
    </motion.div>
  );
};

export default Logo;
