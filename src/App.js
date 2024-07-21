import React from 'react';
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
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main">
          <Sidebar />
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
      </div>
    </Router>
  );
}

export default App;
