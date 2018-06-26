import React from 'react';
import { Link } from "react-router-dom";
 import './css/menu.css'
const Menu = () => (
    <div className="MenuContainer"> 
        <div className="Menu">
        <Link to="/">Home</Link>
        <Link to="/select-customer">Select Customer</Link>
        <Link to="/view-customer">View Customer</Link>
         </div>
    </div>
);

export default Menu;