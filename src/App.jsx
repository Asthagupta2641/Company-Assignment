// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Ensure you import AuthProvider
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
    <AuthProvider>  {/* Wrap the entire Router with AuthProvider */}
      
        <Routes>
          <Route path="/" element={<Login />} />
          
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      
    </AuthProvider>
    </Router>
  );
};

export default App;
