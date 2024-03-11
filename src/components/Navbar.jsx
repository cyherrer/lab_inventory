import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../images/logo.png'
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';


 export const Navbar = () =>{
    return (
      <div className="navbar1">
        <Link to='/'>
        <img src={logo} className='imgLogo1'/>
        </Link>
      </div>
    );
  }
  