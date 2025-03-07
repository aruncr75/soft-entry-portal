import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AddUserDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddUserDialog: React.FC<AddUserDialogProps> = ({
  open,
  onOpenChange,
}) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle user addition logic here
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl border rounded-lg p-6 bg-white shadow-sm">
        <h2 className="text-2xl font-semibold mb-6">Add User</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-gray-400 font-medium">User ID</label>
            <Input
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="border rounded-md h-12"
              type="text"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-400 font-medium">Password</label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-md h-12"
              type="password"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-400 font-medium">
              Confirm Password
            </label>
            <Input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border rounded-md h-12"
              type="password"
            />
          </div>

          <div className="space-y-2 w-[200px]">
            <label className="text-gray-400 font-medium">Role</label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="border rounded-md h-12">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="operator">Operator</SelectItem>
                <SelectItem value="viewer">Viewer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end gap-4 pt-2">
            <Button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded"
            >
              Add User
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

export default AddUserDialog;
