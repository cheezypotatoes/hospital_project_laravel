import { Card, CardContent } from "@/components/ui/card";
import Logo from "../images/Logo.svg";
import { Home, Users, Calendar, FileText, Clipboard, Box, Activity, CreditCard } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Link } from "react-router-dom";
import InfoDeskStaffView from "./patient.jsx"; 
import Appointment  from "./appointment";

export default function DashboardPage() {
  const performanceData = [
    { day: "Mon", patients: 25 },
    { day: "Tue", patients: 45 },
    { day: "Wed", patients: 62 },
    { day: "Thu", patients: 78 },
    { day: "Fri", patients: 85 },
    { day: "Sat", patients: 40 },
    { day: "Sun", patients: 30 },
  ];

  const statusData = [
    { name: "Confirmed", value: 60 },
    { name: "Pending", value: 30 },
    { name: "Cancelled", value: 10 },
  ];

  const COLORS = ["#4ade80", "#facc15", "#f87171"];

  const activities = [
    { event: "New patient : John Dill Dough", time: "5 mins ago", status: "New" },
    { event: "Updated medical notes : Jane Smith", time: "15 mins ago", status: "Updated" },
    { event: "Low stock alert : Ibuprofen (100 mg)", time: "30 mins ago", status: "Alert" },
    { event: "Appointment confirmed : Mommy Oni", time: "1 hour ago", status: "Completed" },
    { event: "Payment processed : Bill #2025-001", time: "2 hours ago", status: "Completed" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
     <aside className="fixed top-0 left-0 w-64 h-screen bg-white border-r flex flex-col shadow-lg">
       <div className="p-6 font-bold text-xl border-b flex flex-col items-center">
            <img src={Logo} alt="Logo" className="h-30 w-30 object-contain mb-2" />
            <span className="text-sm text-center">Jorge & Co Medical Center</span>
        </div>


        
       <nav className="flex-1 p-4 text-sm overflow-y-auto space-y-1">
                <a href="#" className="flex items-center px-3 py-2 rounded-md bg-gray-200 font-medium space-x-2">
                    <Home className="w-4 h-4" />
                    <span>Dashboard</span>
                </a>
                 <Link
                    to="/patient"
                    className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 space-x-2">
                    <Users className="w-4 h-4" />
                    <span>Patient Management</span>
                  </Link>
                  
                <Link
                to="/appointment"
                className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Appointment</span>
                </Link>

                <Link
                to="/doctordashboard"
                 className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 space-x-2">
                    <FileText className="w-4 h-4" />
                    <span>Physician Record</span>
                </Link>
                <a href="#" className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 space-x-2">
                    <Clipboard className="w-4 h-4" />
                    <span>Billing</span>
                </a>
                <Link
                 to="/medecineinventory
                 
                 " className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 space-x-2">
                    <Box className="w-4 h-4" />
                    <span>Medicine Inventory</span>
                </Link>

                <Link
                 to="/cashier" className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 space-x-2">
                    <Box className="w-4 h-4" />
                    <span>Cashier Dashboard</span>
                </Link>
                <a href="#" className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 space-x-2">
                    <Activity className="w-4 h-4" />
                    <span>Dispensing</span>
                </a>
         </nav>


        </aside>


      {/* Main Content */}
        <main className="ml-64 flex-1 p-8 space-y-8">
        {/* Header */}
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>

        {/* Top Stats Cards */}
    
                    <div className="grid grid-cols-4 gap-6">
            {/* Patients Today */}
            <Card className="shadow-sm">
                <CardContent className="p-6 text-center">
                <h2 className="text-gray-600 flex items-center justify-center space-x-2">
                    <Users className="w-6 h-6" />
                    <span>Patients Today</span>
                </h2>
                <p className="text-4xl font-bold mt-2">143</p>
                </CardContent>
            </Card>

            {/* Upcoming Appointments */}
            <Card className="shadow-sm">
                <CardContent className="p-6 text-center">
                <h2 className="text-gray-600 flex items-center justify-center space-x-2">
                    <Calendar className="w-6 h-6" />
                    <span>Upcoming Appointments</span>
                </h2>
                <p className="text-4xl font-bold mt-2">69</p>
                </CardContent>
            </Card>

                {/* Billing / Cashiering */}
                <Card className="shadow-sm">
                <CardContent className="p-6 text-center">
                    <h2 className="text-gray-600 flex items-center justify-center space-x-2">
                    <CreditCard className="w-6 h-6" />
                    <span>Billing Section</span>
                    </h2>
                    <p className="text-4xl font-bold mt-2">25</p>
                    <p className="text-xs text-gray-500 flex items-center justify-center space-x-1">
                    <Users className=" text-red-500  w-4 h-4" />
                    <span className = " text-red-500 underline">Persons waiting</span>
                    </p>
                </CardContent>
                </Card>


            {/* Medicine Stock Alerts */}
            <Card className="shadow-sm">
                <CardContent className="p-6 text-center">
                <h2 className="text-gray-600 flex items-center justify-center space-x-2">
                    <Box className="w-6 h-6" />
                    <span>Medicine Stock Alerts</span>
                </h2>
                <p className="text-4xl font-bold mt-2">67</p>
                </CardContent>
            </Card>
            </div>


        {/* Charts */}
        <div className="grid grid-cols-2 gap-6">
          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Performance Insights</h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={performanceData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="patients" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Appointment Status Distribution</h2>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={statusData} dataKey="value" nameKey="name" outerRadius={90} label>
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center space-x-6 mt-4 text-sm text-gray-600">
                <span className="flex items-center"><span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>Confirmed</span>
                <span className="flex items-center"><span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>Pending</span>
                <span className="flex items-center"><span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>Cancelled</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Activities */}
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Activities & Alerts</h2>
            <table className="w-full text-sm border border-gray-200 rounded-md overflow-hidden">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-2 border">Event</th>
                  <th className="p-2 border">Time</th>
                  <th className="p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((act, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="p-2 border">{act.event}</td>
                    <td className="p-2 border">{act.time}</td>
                    <td className="p-2 border">{act.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
