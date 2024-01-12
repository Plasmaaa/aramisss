import React from 'react';
import './Sidebar.css';
import logo from './logo.png'; 
import dashboard from './dashboard.svg'
import vente from './vente.svg'
import stock from './stock.svg'
import deals from './deals.svg'
import reglage from './reglage.svg'

function Sidebar() {
    return (
      <div className="sidebar">
        <div>
        <div className='logotitre'>
        <img src={logo} alt="Logo" className="sidebar-logo" />
        <p>Aramisauto</p>
        </div>
        <ul>
          <li><img src={dashboard} alt="" className="dashimg"/>Dashboard</li>
          <li> <img src={deals} alt="" className="dealsimg"/> Deals</li>
          <li> <img src={vente} alt="" className="venteimg"/> Ventes</li>
          <li><img src={stock} alt="" className="stockimg"/> Stock</li>      
        </ul>
        </div>
       
        <p className='reglage'><img src={reglage} alt="" className="reglage-img"/>
        Réglages</p>
        
      
      </div>
      
    );
  }
  

export default Sidebar;
