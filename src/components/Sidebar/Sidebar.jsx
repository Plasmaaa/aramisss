import React from 'react';
import './Sidebar.css';
import logo from './../../assets/logo.png'; 
import dashboard from './../../assets/dashboard.svg'
import vente from './../../assets/vente.svg'
import Stock from './../../assets/Stock.svg'
import deals from './../../assets/deals.svg'
import reglage from './../../assets/reglage.svg'
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
      <div className="sidebar">
        <div>
        <div className='logotitre'>
        <img src={logo} alt="Logo" className="sidebar-logo" />
        <p>Aramisauto</p>
        </div>
        <ul>
          <li><NavLink to=""><img src={dashboard} alt="" className="dashimg"/>Dashboard</NavLink></li>
          <li> <img src={deals} alt="" className="dealsimg"/> Deals</li>
          <li> <img src={vente} alt="" className="venteimg"/> Ventes</li>
          <li><NavLink to="/stocks"><img src={Stock} alt="" className="stockimg"/> Stock</NavLink></li>      
        </ul>
        </div>
       
        <p className='reglage'><img src={reglage} alt="" className="reglage-img"/>
        Réglages</p>
        
      
      </div>
      
    );
  }
  

export default Sidebar;
