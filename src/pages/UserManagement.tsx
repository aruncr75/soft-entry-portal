import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import DashboardSidebar from "@/components/DashboardSidebar";
import AddUserDialog from "@/components/AddUserDialog";

const UserManagement = () => {
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const users = [
    { id: "001", role: "Admin", createdBy: "System" },
    { id: "002", role: "Operator", createdBy: "S. Kumar" },
    { id: "003", role: "Viewer", createdBy: "S. Kumar" },
  ];

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar currentPath="/user-management" />

      <div className="flex-1 bg-[#FFE7E0] p-8">
        <h1 className="text-3xl font-semibold mb-8">
          User Management
        </h1>

        {/* Main Content */}
        <div className="bg-white rounded-b-[30px] overflow-hidden">
          {/* Blue top border */}
          <div className="h-[3px] bg-[#00AFEF] w-full" />

          <div className="p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold">Active Users</h2>
              <Button
                className="bg-[#0F171B] text-white px-10 py-6 text-xl font-semibold rounded-lg"
                onClick={() => setIsAddUserOpen(true)}
              >
                Add User
              </Button>
            </div>

            {/* Table */}
            <div className="w-[600px] border-collapse">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-1 mb-1">
                <div className="bg-[#D9D9D9] p-2">
                  <span className="font-bold text-sm">User ID</span>
                </div>
                <div className="bg-[#D9D9D9] p-2">
                  <span className="font-bold text-sm">Role</span>
                </div>
                <div className="bg-[#D9D9D9] p-2">
                  <span className="font-bold text-sm">Created By</span>
                </div>
                <div className="bg-[#D9D9D9] p-2">
                  <span className="font-bold text-sm">Action</span>
                </div>
              </div>

              {/* Table Body */}
              {users.map((user) => (
                <div key={user.id} className="grid grid-cols-4 gap-1 mb-1">
                  <div className="bg-[#F9F9F9] p-2">
                    <span className="text-sm">{user.id}</span>
                  </div>
                  <div className="bg-[#F9F9F9] p-2">
                    <span className="text-sm">{user.role}</span>
                  </div>
                  <div className="bg-[#F9F9F9] p-2">
                    <span className="text-sm">{user.createdBy}</span>
                  </div>
                  <div className="bg-[#F9F9F9] p-2">
                    <Button
                      variant="destructive"
                      size="sm"
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 text-xs"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <AddUserDialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen} />
      </div>
    </div>
  );
};

export default UserManagement;
