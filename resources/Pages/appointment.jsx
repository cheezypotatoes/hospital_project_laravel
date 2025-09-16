import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Calendar, FileText, Clipboard, Box, Activity, Bell, User } from "lucide-react";


const Appointment = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [notes, setNotes] = useState("");

  const appointments = [
    {
      name: "Jorge Macabenta",
      time: "10:40 AM",
      reason: "Fucked a banana tree",
      age: 69,
      gender: "Male",
      contact: "09234657891",
      medicalHistory: ["Childhood asthma (Ongoing)", "Sakit sa kigol (Ongoing)"],
      currentConditions: "Mild hypertension",
      medications: ["Loperamide 10mg (daily)"],
      notes: "Patient is advised to stop fucking banana tree and exercise well."
    },
    {
      name: "Bren&ben&ben Ciano",
      time: "1:40 PM",
      reason: "Fucked a banana tree without lube",
    },
    {
      name: "Rexcel Lusica",
      time: "2:40 PM",
      reason: "Fucked a boulevard baddie with malboro blast in the mouth",
    },
  ];

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
    setNotes(patient.notes || "");
  };

  const handleSaveNotes = () => {
    if (selectedPatient) {
      console.log(`Saved notes for ${selectedPatient.name}:`, notes);
      // Here you can send the notes to backend API
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6 font-bold text-xl border-b flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">Logo</div>
          <span className="text-xs">Doctor Dashboard</span>
        </div>
        <nav className="flex-1 space-y-1 p-4 text-sm">
         <Link to="/dashboard" className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 space-x-2">
            <Activity className="w-4 h-4" />  {/* Replace Dashboard with Activity */}
            <span>Dashboard</span>
            </Link>
          <Link to="/patient" className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 space-x-2">
            <Users className="w-4 h-4" />
            <span>Patient Management</span>
          </Link>
          <Link to="/appointment" className="flex items-center px-3 py-2 rounded-md bg-gray-200 space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Appointment</span>
          </Link>
          <Link to="/physician-record" className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 space-x-2">
            <FileText className="w-4 h-4" />
            <span>Physician Record</span>
          </Link>
          <Link to="/billing" className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 space-x-2">
            <Clipboard className="w-4 h-4" />
            <span>Billing</span>
          </Link>
          <Link to="/inventory" className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 space-x-2">
            <Box className="w-4 h-4" />
            <span>Medicine Inventory</span>
          </Link>
          <Link to="/dispensing" className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 space-x-2">
            <Activity className="w-4 h-4" />
            <span>Dispensing</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Doctor’s Dashboard</h1>
        <div className="mb-4 flex">
          <input
            type="text"
            placeholder="Search patients, appointments"
            className="flex-1 p-2 border rounded-md"
          />
          <button className="ml-2 p-2 bg-gray-200 rounded-md flex items-center space-x-1">
            <span>Filter</span>
          </button>
          <Bell className="ml-4 w-5 h-5" />
          <User className="ml-2 w-5 h-5" />
        </div>

        <div className="flex space-x-6">
          {/* Upcoming Appointments */}
          <div className="w-1/3">
            <h2 className="font-semibold mb-2">Upcoming Appointments</h2>
            {appointments.map((appt, idx) => (
              <div
                key={idx}
                className={`p-3 mb-2 border rounded-md cursor-pointer ${selectedPatient === appt ? "bg-gray-200" : "bg-white"}`}
                onClick={() => handleSelectPatient(appt)}
              >
                <p className="font-medium">{appt.name}</p>
                <p className="text-sm">{appt.time}</p>
                <p className="text-xs">Reason: {appt.reason}</p>
              </div>
            ))}
          </div>

          {/* Patient Record */}
          {selectedPatient && (
            <div className="flex-1 bg-white p-4 rounded-md shadow-md space-y-4">
              <h2 className="font-semibold text-lg">{selectedPatient.name}</h2>
              <p>{selectedPatient.age} years old, {selectedPatient.gender}</p>
              <p>Contact: {selectedPatient.contact}</p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium">Medical History</h3>
                  <ul className="list-disc list-inside">
                    {selectedPatient.medicalHistory?.map((mh, i) => (
                      <li key={i}>{mh}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium">Current Conditions</h3>
                  <p>{selectedPatient.currentConditions}</p>
                </div>
              </div>

              <div>
                <h3 className="font-medium">Medications</h3>
                <ul className="list-disc list-inside">
                  {selectedPatient.medications?.map((med, i) => (
                    <li key={i}>{med}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium">Medical Notes</h3>
                <textarea
                  className="w-full border p-2 rounded-md"
                  rows="4"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
                <button
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md"
                  onClick={handleSaveNotes}
                >
                  Save Notes
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Appointment;
