import React from 'react';
import Header from './components/layouts/Header';
import Sidebar from './components/layouts/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Sidebar />
        {/* Add more components or content here */}
        <div className="content">
          {/* Main content goes here */}
        </div>
      </div>
    </div>
  );
}

export default App;