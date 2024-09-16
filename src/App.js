import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Sidebar from './components/layouts/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import MyTraining from './pages/MyTraining/MyTraining';
import MySkills from './pages/MySkills/MySkills';
import GrowthPlan from './pages/GrowthPlan/GrowthPlan';
import KnowledgeHub from './pages/KnowledgeHub/KnowledgeHub';
import ContactUs from './pages/ContactUs/ContactUs';
import './index.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <div className="app">
        <Header toggleSidebar={toggleSidebar} />
        <div className="main">
          <Sidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/my-training" element={<MyTraining />} />
              <Route path="/my-skills" element={<MySkills />} />
              <Route path="/growth-plan" element={<GrowthPlan />} />
              <Route path="/knowledge-hub" element={<KnowledgeHub />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
          </div>
        </div>
        {sidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}
      </div>
    </Router>
  );
}

export default App;
