import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import navimg from '../../img/header.png'

const Header = () => {
    return (
        <div className='navbar' >
            <img src={navimg} alt="" />
            <nav className='nav-link' >
                <Link to='/'>Home</Link>
                <Link to='/chart'>Statistics</Link>
                <Link to='/blog'>Blogg</Link>
            </nav>
        </div>
    );
};

export default Header;