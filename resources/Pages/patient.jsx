import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Home, Calendar, FileText, Clipboard, Box, Activity } from "lucide-react";
import Dashboard from '../Pages/Dashboard'; // adjust the path

const InfoDeskStaffView = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    suffix: "",
    bloodType: "",
    phone: "",
    email: "",
    address: "",
    primaryDoctor: "",
    allergies: "",
    medicalRecords: "",
    emergencyName: "",
    relationship: "",
    emergencyPhone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFormData({
      fullName: "",
      dob: "",
      gender: "",
      suffix: "",
      bloodType: "",
      phone: "",
      email: "",
      address: "",
      primaryDoctor: "",
      allergies: "",
      medicalRecords: "",
      emergencyName: "",
      relationship: "",
      emergencyPhone: "",
    });
  };

  const handleRegister = () => {
    console.log("Registering patient:", formData);
    // Add your API call here
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6 font-bold text-xl border-b flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-12 w-12 object-contain"
          />
          <span className="text-xs">Jorge & Co Medical Center</span>
        </div>
        <nav className="flex-1 space-y-1 p-4 text-sm">
          <a
            href="#"
            className="flex items-center px-3 py-2 rounded-md bg-gray-200 font-medium"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-100"
          >
            Patient Management
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100"
          >
            Appointment
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100"
          >
            Physician Record
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100"
          >
            Billing
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100"
          >
            Medicine Inventory
          </a>
          <a
            href="#"
            className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100"
          >
            Dispensing
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Info Desk Staff View</h1>
        <div className="mb-6 flex space-x-4">
          <button className="px-4 py-2 bg-gray-300 rounded-md">Patient Registration</button>
          <button className="px-4 py-2 bg-gray-100 rounded-md">Appointment Scheduling</button>
        </div>

        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4">Register New Patient</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
            />
            <input
              type="date"
              name="dob"
              placeholder="Date of Birth"
              value={formData.dob}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input
              type="text"
              name="suffix"
              placeholder="Suffix"
              value={formData.suffix}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
            />
            <select
              name="bloodType"
              value={formData.bloodType}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
            >
              <option value="">Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="p-2 border rounded-md w-full col-span-2"
            />
            <select
              name="primaryDoctor"
              value={formData.primaryDoctor}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
            >
              <option value="">Select Doctor</option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Jane">Dr. Jane</option>
            </select>
            <input
              type="text"
              name="allergies"
              placeholder="Known Allergies"
              value={formData.allergies}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
            />
            <textarea
              name="medicalRecords"
              placeholder="Existing Medical Records"
              value={formData.medicalRecords}
              onChange={handleChange}
              className="p-2 border rounded-md w-full col-span-2"
            />
            <input
              type="text"
              name="emergencyName"
              placeholder="Emergency Contact Name"
              value={formData.emergencyName}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
            />
            <input
              type="text"
              name="relationship"
              placeholder="Relationship"
              value={formData.relationship}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
            />
            <input
              type="text"
              name="emergencyPhone"
              placeholder="Emergency Contact Phone"
              value={formData.emergencyPhone}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
            />
          </div>
          <div className="mt-6 flex justify-end space-x-4">
            <button
              className="px-4 py-2 bg-gray-300 rounded-md"
              onClick={handleClear}
            >
              Clear Form
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
              onClick={handleRegister}
            >
              Register Patient
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InfoDeskStaffView;
