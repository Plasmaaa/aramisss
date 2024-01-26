import React from 'react';
import './Dashboard.css';
import alerte from '../../assets/alerte.svg';
import MyResponsiveBar from '../data/responsiveBar';



const Dashboard = () => {
  return (
    <>
      <div className='rectangle'>
        <img src={alerte} alt="alerte" className="alert" />
        <p>Attention nous manquons fortement de Stock sur la Citroën C8 achetez rapidement</p>
      </div>

      <div className='inbound-container'>
        <div className='inbound-stock'>
          <h3>Voitures les plus vendues </h3>

        </div>
        <div className='inbound-stock'>
          <h3>Voitures les plus vendues </h3>
        </div>

      </div>

      <div className='Bar-container'>
        <p>Voitures les plus vendues par rapport au stock</p>
        <div className='Bar'>
          <MyResponsiveBar />
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
