
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
      <div className="relative flex flex-col items-center">
        <img 
          src="/lovable-uploads/d0545c40-17fa-47b6-ba82-3e9e5fae51c3.png" 
          alt="Bharat Electronics Limited Logo"
          className="h-[60px] object-contain mb-2"
        />
        <p className="text-xs text-center text-slate-800 tracking-wide">QUALITY. TECHNOLOGY. INNOVATION</p>
      </div>
    </motion.div>
  );
};

export default Logo;
