import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import navimg from '../../img/header.png'

const Header = () => {
    return (
        <div className='navbar' >
            <img src={navimg} alt="" />
            <nav className='nav-link' >
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/chart'>Statistics</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/blog'>Blog</NavLink>
            </nav>
        </div>
    );
};

export default Header;