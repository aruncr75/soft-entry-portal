import React from "react";
import { motion } from "framer-motion";

const Slogan: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="pb-12 max-w-[1000px] -ml-4 -mt-4"
    >
      <img
        src="/assets/images/BEL-Slogan.svg"
        alt="BEL Slogan"
        className="w-full h-auto object-left"
        style={{ maxWidth: "1000px", minWidth: "800px" }}
      />
    </motion.div>
  );
};

export default Slogan;
