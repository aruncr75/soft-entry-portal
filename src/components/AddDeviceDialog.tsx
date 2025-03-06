import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AddDeviceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddDeviceDialog: React.FC<AddDeviceDialogProps> = ({ open, onOpenChange }) => {
  const [deviceName, setDeviceName] = useState("");
  const [deviceIP, setDeviceIP] = useState("");
  const [deviceType, setDeviceType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle device addition logic here
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl border rounded-lg p-6 bg-white shadow-sm">
        <h2 className="text-2xl font-semibold mb-6">Add Device</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-gray-400 font-medium">Device Name</label>
            <Input 
              value={deviceName}
              onChange={(e) => setDeviceName(e.target.value)}
              className="border rounded-md h-12"
              placeholder=""
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-gray-400 font-medium">Device IP</label>
            <Input 
              value={deviceIP}
              onChange={(e) => setDeviceIP(e.target.value)}
              className="border rounded-md h-12"
              placeholder=""
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-gray-400 font-medium">Device Type</label>
            <Select value={deviceType} onValueChange={setDeviceType}>
              <SelectTrigger className="border rounded-md h-12">
                <SelectValue placeholder="Select ODU or IDU" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="odu">ODU</SelectItem>
                <SelectItem value="idu">IDU</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex justify-end gap-4 pt-2">
            <Button 
              type="submit" 
              className="bg-black text-white px-6 py-2 rounded"
            >
              Add Device
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              className="border border-black px-6 py-2 rounded"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddDeviceDialog;
