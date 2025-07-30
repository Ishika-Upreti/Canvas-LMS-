import React from "react";
import "./Header.css";

const Header = () => {
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <div className="header-container">
      
      <div className="header-title">Welcome, Student</div>
      <div className="header-date">{today}</div>
    </div>
  );
};

export default Header;
