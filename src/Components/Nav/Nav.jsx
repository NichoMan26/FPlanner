import React from 'react';
import cls from './Nav.module.css';
import {NavLink} from 'react-router-dom'
import subscribeToCreateTask from '../../assets/utils/socket';

function Nav() {
  return (
    <nav className='container p-1'>
       <ul className="nav m-0">
            <li className="nav-item">
                <NavLink activeClassName={cls.active} className="nav-link p-1" exact to="/">Tasks</NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName={cls.active} className="nav-link p-1" to="/archive">Archive</NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName={cls.active} className="nav-link p-1" to="/faq">About</NavLink>
            </li>
            
            
        </ul>
    </nav>
  );
}

export default Nav;
