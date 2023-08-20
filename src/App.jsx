import React, { useState } from 'react';
import './App.css';
import './styles/styles.css';
import './styles/variables.css';
import './styles/common.css';
import './styles/components.css';
import './styles/commonMediaQ.css';
import SidebarComponent from './components/SidebarComponent';
import AssessmentComponent from './components/AssessmentComponent';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <BrowserRouter>
      <div className="flex u-main-body ">
      <SidebarComponent showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
        <div className="u-section-body w-100 h-fit pR20">
          <Routes>
            {/* Redirect to the initial path */}
            <Route path="/" element={<Navigate to="/assessment" />} />
            {/* Define your routes here */}
            <Route path="/assessment" element={<AssessmentComponent setShowSidebar={setShowSidebar} showSidebar={showSidebar}/>} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
