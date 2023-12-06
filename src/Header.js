import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


const Header = () => {
    return (
    <nav className="navbar">
        <div className="container">
        {/* Link to logo
        <div>
            <Link to="/">
            <img src={logo} alt="..." />
            </Link>
          </div> */}
        <ul className="list">
            <li>
            <Link to="/productfilter" className="item">
                Home
            </Link>
            </li>
            <li>
            <Link to="/productfilter" className="item">
                Products
            </Link>
            </li>
            <li>
            <Link to="/form" className="item">
                Contact
            </Link>
            </li>
            {/* <li>
            <Link to="/login">Login</Link>
            </li>
            <li>
            <Link to="/signup">Sign Up</Link>
            </li> */}
        </ul>
        </div>
    </nav>
    );
};

export default Header;