
import React from 'react';
import { motion } from "framer-motion";

interface LogoProps {
  small?: boolean;
}

const Logo: React.FC<LogoProps> = ({ small = false }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex ${small ? 'justify-start' : 'justify-center'} items-center ${small ? 'mb-0' : 'mb-6'}`}
    >
      <div className="relative flex flex-col items-center">
        <img 
          src="/lovable-uploads/d0545c40-17fa-47b6-ba82-3e9e5fae51c3.png" 
          alt="Bharat Electronics Limited Logo"
          className={`${small ? 'h-[40px]' : 'h-[60px]'} object-contain mb-2`}
        />
        {!small && <p className="text-xs text-center text-slate-800 tracking-wide">QUALITY. TECHNOLOGY. INNOVATION</p>}
      </div>
    </motion.div>
  );
};

export default Logo;
