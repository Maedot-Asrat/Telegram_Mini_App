import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import App from './App';
import TaskPage from './TaskPage';
import { PointsProvider } from './PointsContext';

const Main: React.FC = () => {
  const updatePoints = () => {
    // You can still handle point updates here if needed
  };

  return (
    <Router>
      <PointsProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/api/user/:token" />} />
          <Route path="/api/user/:token" element={<App />} />
          <Route path="/task" element={<TaskPage updatePoints={updatePoints} />} />
        </Routes>
      </PointsProvider>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
