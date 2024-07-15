import React from 'react';
import './Sidebar.css'; // Import CSS file for styling (if needed)
import logo from '../images/logo.jpg'; // Ensure the path to your image is correct

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="category-list">
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/mySkills">My Skills</a></li>
        <li><a href="/myTraining">My Training</a></li>
        <li><a href="/knowledgeHub">Knowledge Hub</a></li>
        <li><a href="/growthPlan">Growth Plan</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;