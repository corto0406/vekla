import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation from react-router-dom
import './Sidebar.css'; // Import CSS file for styling
import logo from '../images/logo.jpg'; // Ensure the path to your image is correct
import HelpCenter from '../helpCenter/HelpCenter'; // Adjust path based on actual file location
import dashboard from '../icons/dashboard.svg';
import mySkills from '../icons/mySkills.svg';
import myTraining from '../icons/myTraining.svg';
import knowledgeHub from '../icons/knowledgeHub.svg';
import growthPlan from '../icons/growthPlan.svg';

function Sidebar() {
  const location = useLocation(); // Get the current location

  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="category-list">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'selected' : ''}>
            <img src={dashboard} alt="Dashboard Icon" className="dashboard-picture" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/my-skills" className={location.pathname === '/my-skills' ? 'selected' : ''}>
            <img src={mySkills} alt="My Skills Icon" className="mySkills-picture" />
            My Skills
          </Link>
        </li>
        <li>
          <Link to="/my-training" className={location.pathname === '/my-training' ? 'selected' : ''}>
            <img src={myTraining} alt="My Training Icon" className="myTraining-picture" />
            My Training
          </Link>
        </li>
        <li>
          <Link to="/knowledge-hub" className={location.pathname === '/knowledge-hub' ? 'selected' : ''}>
            <img src={knowledgeHub} alt="Knowledge Hub Icon" className="knowledgeHub-picture" />
            Knowledge Hub
          </Link>
        </li>
        <li>
          <Link to="/growth-plan" className={location.pathname === '/growth-plan' ? 'selected' : ''}>
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
