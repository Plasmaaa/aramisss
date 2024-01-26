import React from 'react';
import "./Stock.css"
import peugeot from '../../assets/Peugeot.svg';
import MyResponsiveWaffle from './parking.js'


const Dashboard = () => {
  return (
    <>
      <div className='header'>
        <h1>Parking Peugeot 208</h1>
        <img src={peugeot} alt="peugeot" className="" />
      </div>


      <div className='content'>
        <div className='waffle-container'>
          <div className='Bar'>
            <MyResponsiveWaffle />
          </div>
        </div>
        <div className='liste-deals'>
          <div className='Deals-container1'>
            <h3>Castel Flora</h3>
            <p>Peugeot 208</p>
            <p>Nombre de voiture : 31</p>
          </div>
          <div className='Deals-container2'>
            <h3>Julian Pascal</h3>
            <p>Peugeot 208</p>
            <p>Nombre de voiture : 24</p>
          </div>
          <div className='Deals-container3'>
            <h3>Didier Andréa</h3>
            <p>Peugeot 208</p>
            <p>Nombre de voiture : 18</p>
          </div>
        </div>
      </div>

    </>
  );
};



<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&family=Roboto:wght@700&display=swap');
</style>;
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap');
</style>


export default Dashboard;
