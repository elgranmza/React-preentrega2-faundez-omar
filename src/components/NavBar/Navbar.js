import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/" className="navbar-item">
                    Mi Sitio
                </NavLink>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <NavLink exact to="/" className="navbar-item">
                        Inicio
                    </NavLink>
                    <NavLink to="/acerca" className="navbar-item">
                        Acerca de
                    </NavLink>
                    <NavLink to="/servicios" className="navbar-item">
                        Servicios
                    </NavLink>
                    <NavLink to="/contacto" className="navbar-item">
                        Contacto
                    </NavLink>
                </div>
                <div className='Categories'>
                    <NavLink to='/category/audio' activeClassName='ActiveOption' className='Option'>
                        Audio
                    </NavLink>
                    <NavLink to='/category/electrónica' activeClassName='ActiveOption' className='Option'>
                        Electrónica
                    </NavLink>
                    <NavLink to='/category/consola' activeClassName='ActiveOption' className='Option'>
                        Consola
                    </NavLink>
                </div>
                <div className="navbar-end">
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
