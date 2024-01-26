import React from 'react';
import './Layout.css';
import msg from '../assets/msg.svg';
import notif from '../assets/notif.svg';
import profile from '../assets/profile.svg';
import recherche from '../assets/recherche.svg';
import { Outlet } from "react-router-dom";
import Sidebar from '../components/Sidebar/Sidebar';



const Dashboard = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <div className="layout-content">
          <div className='icons'>
            <img src={recherche} alt="recherche" className="recherche" />
            <img src={msg} alt="msg" className="msg-icons" />
            <img src={notif} alt="notif" className="notifs-icons" />
            <div className='profile-layout'>
              <p>
                Castel Flora <br></br> Flora.Castel1@gmail.com
              </p>
              <img src={profile} alt="profile" className="-icons" />
            </div>
          </div>
          <Outlet />

        </div>
      </div>
    </div>
  );
};



<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&family=Roboto:wght@700&display=swap');
</style>;
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap');
</style>


export default Dashboard;
