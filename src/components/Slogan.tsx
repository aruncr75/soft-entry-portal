
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
      <h1 className="text-2xl font-bold text-black mb-4">BHARAT ELECTRONICS LIMITED</h1>
      
      <div className="flex items-start">
        <span className="text-7xl font-serif italic mr-2">7</span>
        <div className="mt-1">
          <span className="text-4xl font-serif italic">0</span>
          <span className="text-2xl font-serif italic ml-1">Years ago,</span>
        </div>
      </div>
      
      <p className="text-2xl font-bold text-[#0099cc] leading-tight mt-2">
        ONE COMPANY SET OUT TO DEVELOP TECHNOLOGY<br />
        TO SAFEGUARD THE NATION.
      </p>
      
      <div className="mt-2">
        <span className="text-3xl font-bold">TODAY, </span>
        <span className="text-2xl text-[#0099cc] font-bold">IT IS SHAPING THE FUTURE OF INDIA'S DEFENCE!</span>
      </div>
    </motion.div>
  );
};

export default Slogan;
