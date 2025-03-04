
import React from 'react';
import { motion } from "framer-motion";

const Logo: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex justify-center items-center mb-6"
    >
      <div className="relative w-[346px] h-[115px] flex items-center justify-center">
        <h1 className="text-4xl font-bold text-bel-text">BEL</h1>
        <p className="text-lg text-bel-muted ml-2">Bharat Electronics Ltd.</p>
      </div>
    </motion.div>
  );
};

export default Logo;
