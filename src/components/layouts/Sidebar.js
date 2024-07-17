import React from 'react';
import './Sidebar.css'; // Import CSS file for styling
import logo from '../images/logo.jpg'; // Ensure the path to your image is correct
import HelpCenter from '../helpCenter/HelpCenter'; // Adjust path based on actual file location
import dashboard from '../icons/dashboard.svg';
import mySkills from '../icons/mySkills.svg';
import myTraining from '../icons/myTraining.svg';
import knowledgeHub from '../icons/knowledgeHub.svg';
import growthPlan from '../icons/growthPlan.svg';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="category-list">
        <li>
          <a href="/dashboard">
            <img src={dashboard} alt="Dashboard Icon" className="dashboard-picture" />
            Dashboard
          </a>
        </li>
        <li>
          <a href="/mySkills">
            <img src={mySkills} alt="My Skills Icon" className="mySkills-picture" />
            My Skills
          </a>
        </li>
        <li>
          <a href="/myTraining">
            <img src={myTraining} alt="My Training Icon" className="myTraining-picture" />
            My Training
          </a>
        </li>
        <li>
          <a href="/knowledgeHub">
            <img src={knowledgeHub} alt="Knowledge Hub Icon" className="knowledgeHub-picture" />
            Knowledge Hub
          </a>
        </li>
        <li>
          <a href="/growthPlan">
            <img src={growthPlan} alt="Growth Plan Icon" className="growthPlan-picture" />
            Growth Plan
          </a>
        </li>
      </ul>
      <div className="help">
        <HelpCenter />
      </div>
    </aside>
  );
}

export default Sidebar;
