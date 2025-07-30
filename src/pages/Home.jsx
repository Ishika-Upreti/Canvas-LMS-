import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional: for extra styling

const Home = () => {
  
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Canvas LMS</h1>
      <h2 className="home-subtitle">Your learning journey begins here.</h2>
      <Link to="/dashboard" className="dashboard-link">Go to Dashboard</Link>
    </div>
  );
};



export default Home;
