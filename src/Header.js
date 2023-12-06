import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <nav>
            <ul>
            <li>
                <Link to="/productfilter">Home</Link>
            </li>
            <li>
                <Link to="/productfilter">Products</Link>
            </li>
            <li>
                <Link to="/form">Contact</Link>
            </li>
{/*             <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/signup">Sign Up</Link>
            </li> */}
            </ul>
        </nav>
    );
};

export default Header;