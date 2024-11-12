import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <h1>Cake Shop</h1>
        <ul className="navi">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/cart">Cart</Link> (<span id="cart-count">0</span>)</li>
        </ul>
       
      </nav>
    </header>
  );
}

export default Navbar;
