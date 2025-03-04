
import React from 'react';
import { motion } from "framer-motion";
import Logo from '@/components/Logo';
import LoginForm from '@/components/LoginForm';
import Slogan from '@/components/Slogan';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-bel-background overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative px-4 py-8">
        <Logo />
        
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-between gap-8 mt-10`}>
          {/* Left side with slogan */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className={`${isMobile ? 'w-full' : 'w-2/5'} flex justify-center`}
          >
            <Slogan />
          </motion.div>
          
          {/* Right side with login form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className={`${isMobile ? 'w-full' : 'w-3/5'} flex justify-center`}
          >
            <LoginForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
