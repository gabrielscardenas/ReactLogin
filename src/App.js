import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home.js'; // Ensure the file is correctly named
import About from './components/About.js'; // Ensure the file is correctly named
import Contact from './components/Contact.js'; // Ensure the file is correctly named
import LoginForm from './components/LoginForm.js'; // Ensure the file is correctly named
import Header from './components/Header.js'; // Ensure the file is correctly named
import './App.css'; // Import global CSS for styling

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check local storage for authentication status
  useEffect(() => {
    const storedAuthStatus = localStorage.getItem('isAuthenticated');
    if (storedAuthStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true'); // Store authentication status
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); // Remove authentication status
  };

  return (
    <Router>
      <div>
        <Header onLogout={handleLogout} /> {/* Pass logout handler to Header */}
        <Routes>
          <Route 
            path="/" 
            element={isAuthenticated ? <Navigate to="/home" /> : <LoginForm onLogin={handleLogin} />} 
          />
          <Route 
            path="/home" 
            element={isAuthenticated ? <Home /> : <Navigate to="/" />} 
          />
          <Route 
            path="/about" 
            element={isAuthenticated ? <About /> : <Navigate to="/" />} 
          />
          <Route 
            path="/contact" 
            element={isAuthenticated ? <Contact /> : <Navigate to="/" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





