import React from 'react';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import './App.css';


function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
