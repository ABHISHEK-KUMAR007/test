import React, { useState } from "react"; // Added useState
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Login from './component/Login';
import Signup from './component/Signup';
import HomePage from "./component/home/home";
import VendorDashboard from "./component/vendorDashboard";
import MiningDashboard from "./component/MiningDashboard";
import VendorRegistrationForm from "./component/VendorRegistrationForm"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<VendorDashboard />} />
        <Route path="/miningDashboard" element={<MiningDashboard />} />
        <Route path="/VendorRegistrationForm" element={<VendorRegistrationForm/>}></Route>
      </Routes>
    </Router>
    // <>
    //   <Layout/>
    // </>
  );
}


export default App;
