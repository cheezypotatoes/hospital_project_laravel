import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../LoginPage/LoginPage.jsx";
import Dashboard from "../Pages/Dashboard";  

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />   {/* ✅ added */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<LoginPage />} /> {/* optional redirect */}
    </Routes>
  </BrowserRouter>
);
