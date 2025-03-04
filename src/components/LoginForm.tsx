
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/use-toast";

const LoginForm: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userId.trim() || !password.trim()) {
      toast({
        title: "Login failed",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would normally authenticate with a backend
    toast({
      title: "Login successful",
      description: "Welcome back!",
    });
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[500px] bg-white rounded-2xl shadow-lg p-8"
    >
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-bel-text">Login Now</h1>
      </motion.div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="space-y-2"
        >
          <label htmlFor="userId" className="block text-lg font-semibold text-gray-400">
            User ID
          </label>
          <Input
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="h-[55px] border border-gray-300 rounded-md text-lg px-4 focus-visible:ring-bel-text"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="space-y-2"
        >
          <label htmlFor="password" className="block text-lg font-semibold text-gray-400">
            Password
          </label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-[55px] border border-gray-300 rounded-md text-lg px-4 focus-visible:ring-bel-text"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="pt-4"
        >
          <Button 
            type="submit" 
            className="bg-[#0F171B] hover:bg-[#0F171B]/90 text-white font-semibold rounded-md h-[50px] w-[100px] text-xl transition-all duration-300"
          >
            Okay
          </Button>
        </motion.div>
      </form>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-10 text-center text-gray-400 text-sm"
      >
        Copyright © Bharat Electronics Ltd. All rights reserved.<br/>
        Ver 1.0
      </motion.div>
    </motion.div>
  );
};

export default LoginForm;
