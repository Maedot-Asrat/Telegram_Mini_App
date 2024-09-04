import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import App from './App';
import TaskPageProps from './TaskPage';
import { PointsProvider } from './PointsContext';

const Main: React.FC = () => {


  return (
    <Router>
      <PointsProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/api/user/:token" />} />
          <Route path="/api/user/:token" element={<App />} />
          <Route path="/task" element={<TaskPageProps />} />
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
