import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import TaskPage from './TaskPage';
// Import other pages here as needed

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/task" element={<TaskPage />} />
      </Routes>
      </Router>
  </React.StrictMode>,
)
