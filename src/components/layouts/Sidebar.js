import React from 'react';
import './Sidebar.css'; // Import CSS file for styling
import logo from '../images/logo.jpg'; // Ensure the path to your image is correct
import HelpCenter from '../helpCenter/HelpCenter'; // Adjust path based on actual file location
import dashboard from '../icons/dashboard.svg';
import mySkills from '../icons/mySkills.svg';
import myTraining from '../icons/myTraining.svg';
import knowledgeHub from '../icons/knowledgeHub.svg';
import growthPlan from '../icons/growthPlan.svg';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="category-list">
        <li>
          <Link to="/">
            <img src={dashboard} alt="Dashboard Icon" className="dashboard-picture" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/my-skills">
            <img src={mySkills} alt="My Skills Icon" className="mySkills-picture" />
            My Skills
          </Link>
        </li>
        <li>
          <Link to="/my-training">
            <img src={myTraining} alt="My Training Icon" className="myTraining-picture" />
            My Training
          </Link>
        </li>
        <li>
          <Link to="/knowledge-hub">
            <img src={knowledgeHub} alt="Knowledge Hub Icon" className="knowledgeHub-picture" />
            Knowledge Hub
          </Link>
        </li>
        <li>
          <Link to="/growth-plan">
            <img src={growthPlan} alt="Growth Plan Icon" className="growthPlan-picture" />
            Growth Plan
          </Link>
        </li>
      </ul>
      <div className="help">
        <HelpCenter />
      </div>
    </aside>
  );
}

export default Sidebar;
