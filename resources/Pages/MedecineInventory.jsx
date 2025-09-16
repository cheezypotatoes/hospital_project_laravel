import React from "react";
import { Search, Bell, User, Filter } from "lucide-react";

const MedicineInventory = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 border-r">
        <div className="p-4 font-bold text-lg">Logo</div>
        <nav className="flex flex-col gap-2 p-2">
          <button className="p-2 text-left hover:bg-gray-200">Dashboard</button>
          <button className="p-2 text-left hover:bg-gray-200">Patient Management</button>
          <button className="p-2 text-left hover:bg-gray-200">Appointment</button>
          <button className="p-2 text-left hover:bg-gray-200">Physician Record</button>
          <button className="p-2 text-left hover:bg-gray-200">Billing</button>
          <button className="p-2 text-left hover:bg-gray-200 font-semibold bg-gray-200">Medicine Inventory</button>
          <button className="p-2 text-left hover:bg-gray-200">Dispensing</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top bar */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Medicine Inventory</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search patients, appointments"
                className="border rounded px-3 py-1"
              />
              <Search className="absolute right-2 top-2 w-4 h-4 text-gray-500" />
            </div>
            <Bell className="w-6 h-6 cursor-pointer" />
            <User className="w-6 h-6 cursor-pointer" />
          </div>
        </header>

        <p className="text-gray-600 mb-4">Manage and track all pharmaceutical stock</p>

        {/* Medicine Inventory Table */}
        <div className="border rounded-lg overflow-hidden mb-6">
          <div className="flex justify-between items-center p-3 border-b">
            <input
              type="text"
              placeholder="Search medicines..."
              className="border rounded px-3 py-1 w-1/3"
            />
            <div className="flex gap-2">
              <button className="flex items-center gap-1 border px-3 py-1 rounded">
                <Filter size={16} /> Filter
              </button>
              <button className="bg-blue-600 text-white px-3 py-1 rounded">
                Add Medicine
              </button>
            </div>
          </div>

          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">Medicine Name</th>
                <th className="p-2">Stock</th>
                <th className="p-2">Expiry Date</th>
                <th className="p-2">Status</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Paracetamol 500mg", stock: 120, expiry: "2025-09-11", status: "In stock" },
                { name: "Amoxicillin 250mg", stock: 30, expiry: "2024-09-11", status: "Low stock" },
                { name: "Ibuprofen", stock: 85, expiry: "2026-09-11", status: "In stock" },
                { name: "Omeprazole 20mg", stock: 15, expiry: "2025-09-11", status: "Low stock" },
                { name: "Cough Syrup", stock: 50, expiry: "2024-09-11", status: "In stock" },
              ].map((med, i) => (
                <tr key={i} className="border-t">
                  <td className="p-2">{med.name}</td>
                  <td className="p-2">{med.stock}</td>
                  <td className="p-2">{med.expiry}</td>
                  <td className="p-2">{med.status}</td>
                  <td className="p-2 flex gap-2">
                    <button className="text-blue-600 hover:underline">View</button>
                    <button className="text-green-600 hover:underline">Dispense</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Record Dispensing + Recent Activity */}
        <div className="grid grid-cols-2 gap-6">
          {/* Record Dispensing */}
          <div className="border rounded-lg p-4">
            <h2 className="font-semibold mb-3">Record Dispensing</h2>
            <div className="flex flex-col gap-3">
              <input type="text" placeholder="Enter patient’s ID" className="border rounded px-3 py-1" />
              <input type="text" placeholder="Select medicine" className="border rounded px-3 py-1" />
              <input type="text" placeholder="e.g., 2 tablets / once a day" className="border rounded px-3 py-1" />
              <input type="text" placeholder="e.g., 10" className="border rounded px-3 py-1" />
              <button className="bg-green-600 text-white px-3 py-1 rounded">Save</button>
            </div>
          </div>

          {/* Recent Dispensing Activity */}
          <div className="border rounded-lg p-4">
            <h2 className="font-semibold mb-3">Recent Dispensing Activity</h2>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-3 border rounded bg-gray-50">
                  <p className="text-sm font-medium">Rexcel Lusica</p>
                  <p className="text-sm text-gray-600">Paracetamol 500mg | 2 Tablets</p>
                  <p className="text-xs text-gray-500">10:30 AM</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MedicineInventory;
