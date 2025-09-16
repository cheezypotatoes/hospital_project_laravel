  import React from "react";
  import ReactDOM from "react-dom/client";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfoDeskStaffView from "../Pages/patient.jsx";
  import LoginPage from "../LoginPage/LoginPage.jsx";
  import Dashboard from "../Pages/Dashboard";  
import Appointment from "../Pages/appointment.jsx";
import DoctorDashboard from "../Pages/DoctorDashboard.jsx";
import MedicineInventory from "../Pages/MedecineInventory.jsx";
import CashierDashboard from "../Pages/Cashier.jsx";


  ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />   {/* ✅ added */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patient" element={<InfoDeskStaffView />} />
        <Route path="/appointment" element = {<Appointment/>}/>
        <Route path="/doctordashboard" element = {<DoctorDashboard/>} />
        <Route path="/medecineinventory" element = {<MedicineInventory/>} />
        <Route path="/cashier" element = {<CashierDashboard/>} />
      <Route path="/" element={<LoginPage />} /> {/* optional redirect */}

      </Routes>
    </BrowserRouter>
  );
