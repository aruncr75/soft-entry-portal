
import React from 'react';
import { motion } from "framer-motion";

const Slogan: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="p-8 max-w-[769px]"
    >
      <div className="space-y-6">
        <div className="inline-block rounded-full bg-white/20 px-3 py-1 backdrop-blur-sm">
          <span className="text-bel-button font-medium">Empowering Innovation</span>
        </div>
        <h2 className="text-5xl font-bold text-bel-text leading-tight">
          Advanced Technology <br /> for a Secure Tomorrow
        </h2>
        <p className="text-xl text-bel-text/70 max-w-[600px]">
          Pioneering electronics solutions for defense, aerospace, and civilian applications with precision and excellence.
        </p>
      </div>
    </motion.div>
  );
};

export default Slogan;
