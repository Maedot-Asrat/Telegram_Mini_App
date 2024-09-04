import React from 'react';
import './TaskPage.css'; // Add custom styles here
import Avatar from './images/avatar.jpg';
import BottomNavBar from './BottomNavBar';
import BackButton from "./images/back-svgrepo-com.svg";
import Settings from "./images/setting-5-svgrepo-com.svg";
const TaskPage: React.FC = () => {
  return (
    <div className="task-page bg-black text-white flex flex-col justify-between">
      {/* Header */}
      <div className="header flex justify-between items-center p-4">
        <button className="back-button">
          <img src={BackButton} alt="Back" className="icon" />
        </button>
        <h1 className="text-xl font-bold">Task</h1>
        <button className="settings-button">
          <img src={Settings} alt="Settings" className="icon" />
        </button>
      </div>

      {/* Profile Section */}
      <div className="profile-section text-center mt-4">
        <div className="avatar">
          <img src={Avatar} alt="User Avatar" className="avatar-img" />
        </div>
        <h2 className="text-2xl font-bold">Chaltu Haile</h2>
        <div className="level-info mt-2 flex justify-center items-center">
          <span className="text-gold px-2">Gold</span>
          <span className="text-yellow-500 px-2">Lv. 7</span>
        </div>
        <div className="stats flex justify-around mt-4">
          <div className="stat">
            <p className="text-lg font-bold">38</p>
            <p className="text-sm">Tasks</p>
          </div>
          <div className="stat">
            <p className="text-lg font-bold">872.8K</p>
            <p className="text-sm">Points</p>
          </div>
          <div className="stat">
            <p className="text-lg font-bold">7w</p>
            <p className="text-sm">Weeks</p>
          </div>
        </div>
      </div>

      {/* Task Cards */}
      <div className="flex-grow mt-4 bg-[#34b523] rounded-t-[48px] relative top-glow z-0">
      <div className="tasks-section p-4 absolute top-[2px] left-0 right-0 bottom-0 bg-[#1d2025] rounded-t-[46px]" >
        <div className="task-card bg-gray-800 p-4 rounded-lg mb-2 flex justify-between items-center">
          <a href="https://play.google.com/store/apps/details?id=et.safaricom.mpesa.lifestyle" target="_blank" rel="noopener noreferrer" className="task-link">
            Download M-pesa
          </a>
          <span className="text-gold">P 100.000</span>
        </div>
        <div className="task-card bg-gray-800 p-4 rounded-lg mb-2 flex justify-between items-center">
          <p>Deposit 500 Birr</p>
          <span className="text-gold">P 100.000</span>
        </div>
        <div className="task-card bg-gray-800 p-4 rounded-lg mb-2 flex justify-between items-center">
          <p>Register Safari Simcard</p>
        </div>
        <div className="task-card bg-gray-800 p-4 rounded-lg mb-2 flex justify-between items-center">
          <p>Follow All Safari Social</p>
          <span className="text-gold">P 50.000</span>
        </div>
      </div>
      </div>

      {/* Footer */}
      <div className="footer mt-auto flex justify-around p-4">
        <button className="footer-button text-center">Achievement</button>
        <button className="footer-button text-center">Team</button>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar handleTaskClick={() => {}} />
    </div>
  );
};

export default TaskPage;
