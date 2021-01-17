import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

const Menu = () => {
    return(
        <>
        <ul className="flex justify-around list">
            <li><Link to="">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
        </>
    )
}

export default Menu;