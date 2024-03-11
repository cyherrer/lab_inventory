import React from 'react';
import '../styles/Mainpage.css';
import {Navbar}  from './Navbar';
import { Link } from 'react-router-dom';

export const  Mainpage = () => {

  const clickOnButton = () =>{
    alert('Click en un boton')
  }

    return (
      <>
      <Navbar/>
      <div className="mainPage">
        <div className='mainPageContent'>
          <p className='mainPageTitle'>KIT Lab Inventory</p>
          <div className='buttonsContainer'>
            <div className='buttons'>
              <button onClick={clickOnButton}>General</button>
              <button>Boards</button>
              <div className='buttons'>
              <Link to='/si'>
              <button className='buttonLink' >Si</button>
              </Link>
              </div>
              <button>Memory</button>
              </div>
              <div className='buttons'>
              <button>Equipment</button>
              <button>Picoprobes</button>
              <button>Bitacora Picoprobes</button>

            </div>
            
          </div>
        </div>
        
      </div>
      </>
    );
  }
