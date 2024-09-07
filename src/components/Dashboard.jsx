// src/components/Dashboard.jsx
import React from "react";
import Calculator from "./Calculator";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Welcome to the Dashboard</h1>
      <div className="dashboard-content">
        <h2>Your Tools</h2>
        <div className="dashboard-card">
          <h3>Calculator</h3>
          <p>Use this tool to perform calculations quickly and easily.</p>
          <Calculator />
        </div>
        <div className="dashboard-card">
          <h3>Card Title</h3>
          <p>Additional content or widgets can be added here.</p>
        </div>
      </div>
      <div className="dashboard-footer">
        &copy; {new Date().getFullYear()} Your Company
      </div>
    </div>
  );
};

export default Dashboard;
