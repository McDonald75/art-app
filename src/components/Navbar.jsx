import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Dashboard</Link>
    <Link to="/add">Add New Art</Link>
  </nav>
);

export default Navbar;
