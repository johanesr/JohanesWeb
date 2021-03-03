import { useState } from 'react';
import { Link } from "react-router-dom";
import './styles.scss';
import Johanes from './assets/johanes.jpg';

function Navbar() {
  const isMobile = window.innerWidth<=990;

  return (
    <nav className={isMobile ? "menu-mobile glassmorphism" : "menu glassmorphism"}>
      {!isMobile && <img src={Johanes} alt="Johanes Ronaldo"/>}
      <div className="menu-name">Johanes Ronaldo</div>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;