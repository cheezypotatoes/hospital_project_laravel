import React from "react";
import { Search, Bell, User, Printer } from "lucide-react";

const CashierDashboard = () => {
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
          <button className="p-2 text-left font-semibold bg-gray-200">Billing</button>
          <button className="p-2 text-left hover:bg-gray-200">Medicine Inventory</button>
          <button className="p-2 text-left hover:bg-gray-200">Dispensing</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top bar */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Cashier Dashboard</h1>
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

        {/* Add Services / Items */}
        <div className="mb-6">
          <h2 className="font-semibold mb-3">Add Services / Items</h2>
          <div className="grid grid-cols-3 gap-3 mb-3">
            <input
              type="text"
              placeholder="Service"
              defaultValue="Blood Test (CBC)"
              className="border rounded px-3 py-1"
            />
            <input
              type="number"
              placeholder="Quantity"
              defaultValue={1}
              className="border rounded px-3 py-1"
            />
            <input
              type="number"
              placeholder="Price"
              defaultValue={350}
              className="border rounded px-3 py-1"
            />
          </div>
          <div className="flex justify-between border-t pt-3">
            <span className="font-medium">Total Amount Due :</span>
            <span className="font-semibold">₱ 350</span>
          </div>
          <button className="w-full mt-3 bg-blue-600 text-white px-4 py-2 rounded">
            Generate Bill
          </button>
        </div>

        {/* Bottom Section: Payments + Sidebar Info */}
        <div className="grid grid-cols-3 gap-6">
          {/* Process Payments */}
          <div className="col-span-2 border rounded-lg p-4">
            <h2 className="font-semibold mb-3">Process Payments</h2>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <input
                type="number"
                placeholder="Amount Received"
                className="border rounded px-3 py-1"
              />
              <select className="border rounded px-3 py-1">
                <option>Cash</option>
                <option>Card</option>
                <option>GCash</option>
              </select>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded">
                Record Payment
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-gray-600 text-white px-4 py-2 rounded">
                <Printer size={16} /> Print Receipt
              </button>
            </div>
          </div>

          {/* Right Sidebar Info */}
          <div className="flex flex-col gap-6">
            {/* Pending Payments */}
            <div className="border rounded-lg p-4">
              <h2 className="font-semibold mb-3">Pending Payments</h2>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-3 border rounded bg-gray-50">
                    <p className="text-sm font-medium">Rexcel Lusica</p>
                    <p className="text-xs text-gray-600">Date: 2025-09-11</p>
                    <p className="font-semibold text-right">₱ 32,000</p>
                    <p className="text-xs text-yellow-600">Processing</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-2 text-blue-600 text-sm">
                View all pending payments
              </button>
            </div>

            {/* Recent Transactions */}
            <div className="border rounded-lg p-4">
              <h2 className="font-semibold mb-3">Recent Transactions</h2>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-3 border rounded bg-gray-50">
                    <p className="text-sm font-medium">Rexcel Lusica</p>
                    <p className="text-xs text-gray-600">Date: 2025-09-11</p>
                    <p className="font-semibold text-right">₱ 32,000</p>
                    <p className="text-xs text-green-600">Paid</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-2 text-blue-600 text-sm">
                View all recent transactions
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CashierDashboard;
