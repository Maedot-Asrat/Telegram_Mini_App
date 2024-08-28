import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import TaskPage from './TaskPage';
import { PointsProvider } from './PointsContext'

const Main: React.FC = () => {
  const [points, setPoints] = React.useState(0);

  const updatePoints = (newPoints: number) => {
    setPoints(newPoints);
  };

  return (
    <Router>
      <PointsProvider>
      <Routes>
        <Route path="/" element={<App />} />
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
