import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import DeploymentConfig from "./pages/DeploymentConfig";
import NotFound from "./pages/NotFound";
import UserManagement from "./pages/UserManagement";
import MonitoringAndReport from "./pages/MonitoringAndReport";
import IduHealthStatus from "./pages/IduHealthStatus";
import OduHealthStatus from "./pages/OduHealthStatus";
import IduConfiguration from "./pages/IduConfiguration";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/deployment" element={<DeploymentConfig />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/monitoring-report" element={<MonitoringAndReport />} />
          <Route path="/idu-status" element={<IduHealthStatus />} />
          <Route path="/odu-status" element={<OduHealthStatus />} />
          <Route path="/idu-config" element={<IduConfiguration />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
