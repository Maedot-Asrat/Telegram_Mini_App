import React from 'react';
import './TaskPage.css'; // Add custom styles here
import Avatar from './images/avatar.jpg';

const TaskPage: React.FC = () => {
  return (
    <div className="task-page bg-black text-white h-screen">
      <div className="header flex justify-between p-4">
        <button className="back-button">
          <img src="/path/to/back-icon.png" alt="Back" />
        </button>
        <h1 className="text-xl font-bold">Task</h1>
        <button className="settings-button">
          <img src="/path/to/settings-icon.png" alt="Settings" />
        </button>
      </div>
      <div className="profile-section text-center mt-4">
        <div className="avatar">
          <img src={Avatar} alt="User Avatar" />
        </div>
        <h2 className="text-2xl font-bold">Chaltu Haile</h2>
        <div className="level-info mt-2">
          <span className="text-gold">Gold</span> <span className="text-yellow-500">Lv. 7</span>
        </div>
        <div className="stats flex justify-around mt-2">
          <div className="stat">
            <p className="text-lg">38</p>
            <p className="text-sm">Tasks</p>
          </div>
          <div className="stat">
            <p className="text-lg">872.8K</p>
            <p className="text-sm">Points</p>
          </div>
          <div className="stat">
            <p className="text-lg">7w</p>
            <p className="text-sm">Weeks</p>
          </div>
        </div>
      </div>
      <div className="tasks-section mt-6 px-4">
        <div className="task-card">
        <a href="https://play.google.com/store/apps/details?id=et.safaricom.mpesa.lifestyle" target="_blank" rel="noopener noreferrer">
            Download M-pesa
          </a>
          <span>P 100.000</span>
        </div>
        <div className="task-card">
          <p>Deposit 500 Birr</p>
          <span>P 100.000</span>
        </div>
        <div className="task-card">
          <p>Register Safari Simcard</p>
        </div>
        <div className="task-card">
          <p>Follow All Safari Social</p>
          <span>P 50.000</span>
        </div>
      </div>
      <div className="footer mt-auto flex justify-around p-4">
        <button className="footer-button">Achievement</button>
        <button className="footer-button">Team</button>
      </div>
    </div>
  );
};

export default TaskPage;
