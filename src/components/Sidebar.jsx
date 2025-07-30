import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);

  };
  

  return (
    <>
      <div className="hamburger" onClick={toggleSidebar}>
        ☰
      </div>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2 className="logo">Canvas LMS</h2>
        <ul className="menu">
          <li>🏠 Dashboard</li>
          <li>📘 Courses</li>
          <li>📅 Calendar</li>
          <li>📥 Inbox</li>
          <li>❓ Help</li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
